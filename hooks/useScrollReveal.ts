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
        // Buffer increased to 1200px for aggressive pre-loading on mobile
        if (rect.top < window.innerHeight + 1200) {
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
        // Huge margin (1200px bottom) triggers reveal roughly 1.5-2 screens ahead.
        // Top margin (200px) ensures reverse scrolling is also buffered.
        rootMargin: '200px 0px 1200px 0px', 
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