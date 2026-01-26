'use client';
import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return;

    // Check if element is already in view on mount (e.g. reload at bottom of page)
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { 
        // Increased bottom margin from 50px to 100px.
        // Triggers the animation slightly before the element enters the viewport.
        // This ensures the element is already fading in when the user scrolls to it, preventing the "abrupt" appearance.
        rootMargin: '0px 0px 100px 0px', 
        threshold: 0 
      }
    );

    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};
