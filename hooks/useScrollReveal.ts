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
        // Buffer set to 600px (roughly 1 viewport height) for optimal mobile loading
        if (rect.top < window.innerHeight + 600) {
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
        // 600px margin is safer for mobile rendering engines than 1200px
        rootMargin: '100px 0px 600px 0px', 
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