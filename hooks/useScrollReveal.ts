'use client';
import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return;

    const checkVisibility = () => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        // Check if element is in view or close to it (matching the rootMargin buffer)
        // Adding 300px buffer to ensure it triggers even if slightly below fold or user scrolls fast
        if (rect.top < window.innerHeight + 300) {
          setIsVisible(true);
        }
    };

    // Run immediately
    checkVisibility();

    // Run again after a short delay to handle layout shifts (e.g. after language switch)
    const timeoutId = setTimeout(checkVisibility, 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { 
        // Increased margin to 300px. This triggers the animation well before the element 
        // enters the viewport on mobile, preventing the "blank space then snap" issue.
        rootMargin: '0px 0px 300px 0px', 
        threshold: 0 
      }
    );

    observer.observe(ref.current);
    
    return () => {
        observer.disconnect();
        clearTimeout(timeoutId);
    };
  }, []);

  return { ref, isVisible };
};