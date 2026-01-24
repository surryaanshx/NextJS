'use client';
import { useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  
  const setupObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { 
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.05 
      }
    );

    if (ref.current) observer.observe(ref.current);
    return observer;
  }, [language]);

  useEffect(() => {
    const observer = setupObserver();
    return () => observer.disconnect();
  }, [setupObserver, language]);

  return ref;
};