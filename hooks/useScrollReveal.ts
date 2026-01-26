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
        // Reduced bottom margin from 200px to 50px.
        // This ensures the animation triggers just as the element is about to enter or barely enters the screen,
        // making the animation actually visible to the user while scrolling down.
        rootMargin: '0px 0px 50px 0px', 
        threshold: 0 
      }
    );

    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};
