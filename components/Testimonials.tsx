'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const revealRef = useScrollReveal();
  const { t } = useLanguage();
  const reviews = t('testimonials.reviews');

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 px-8 bg-[#F5F3FF] text-[#1E1B4B] overflow-hidden relative border-y border-[#1E1B4B]/5">
      <div ref={revealRef} className="reveal max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <div className="space-y-2">
          <Quote className="w-8 h-8 text-[#6D28D9] mx-auto opacity-30" />
          <h2 className="text-2xl md:text-3xl serif italic text-[#1E1B4B]">{t('testimonials.title')}</h2>
        </div>

        <div className="relative min-h-[120px] flex items-center justify-center overflow-hidden">
          <div key={index} className="animate-slide-in space-y-4 max-w-2xl px-4">
            <p className="text-base md:text-lg font-medium italic leading-relaxed text-[#1E1B4B]/80">
              "{reviews[index].text}"
            </p>
            <div className="space-y-0.5">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#6D28D9]">{reviews[index].author}</h4>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#1E1B4B]/40 font-bold">{reviews[index].role}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 pt-2">
          <button 
            onClick={prev}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#1E1B4B] hover:text-[#6D28D9] transition-all"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> {t('testimonials.prev')}
          </button>
          <div className="flex gap-1.5">
            {reviews.map((_: any, i: number) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-700 ${i === index ? 'w-6 bg-[#6D28D9]' : 'w-1 bg-[#1E1B4B]/10'}`} 
              />
            ))}
          </div>
          <button 
            onClick={next}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#1E1B4B] hover:text-[#6D28D9] transition-all"
          >
            {t('testimonials.next')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;