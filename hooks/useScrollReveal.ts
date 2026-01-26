'use client';
import { useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  
  const setupObserver = useCallback(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Stop observing once visible to save resources and prevent flickering
          observer.unobserve(entry.target);
        }
      },
      { 
        // Expand capture zone by 150px at the bottom
        // This ensures animation starts BEFORE the element enters the viewport
        rootMargin: '0px 0px 150px 0px', 
        threshold: 0 
      }
    );

    if (ref.current) {
      // If element is already visible (e.g. from SSR or previous state), ensure logic is consistent
      if (ref.current.classList.contains('is-visible')) {
         // Already visible, do nothing
      } else {
         observer.observe(ref.current);
      }
    }
    
    return observer;
  }, [language]);

  useEffect(() => {
    const observer = setupObserver();
    return () => observer?.disconnect();
  }, [setupObserver, language]);

  return ref;
};
