'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Quote, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();
  const reviews = t('testimonials.reviews');

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-6 md:px-8 bg-[#1E1B4B] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <Quote className="w-[300px] h-[300px] -translate-y-1/2 translate-x-1/2" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F0E2A]/50 pointer-events-none" />

      <div ref={ref} className={`reveal max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10 ${isVisible ? 'is-visible' : ''}`}>
        
        {/* Left: Heading & Controls */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-[#FA4D3F] font-black text-[10px] uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Trusted by Explorers</span>
          </div>
          <h2 className="text-3xl md:text-4xl serif font-bold leading-tight">
            {t('testimonials.title')}
          </h2>
          
          <div className="flex gap-3 pt-2">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1E1B4B] transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full bg-white text-[#1E1B4B] flex items-center justify-center hover:bg-[#6D28D9] hover:text-white transition-all duration-300 shadow-lg"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Active Testimonial Card */}
        <div className="relative">
            <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[1.5rem] space-y-6 animate-slide-in relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6D28D9] via-[#FA4D3F] to-[#6D28D9]" />
               
               <div className="flex gap-1">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-[#FA4D3F] fill-[#FA4D3F]" />)}
               </div>

               <p className="text-lg md:text-xl font-medium serif leading-relaxed text-white/90">
                 "{reviews[index].text}"
               </p>

               <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6D28D9] to-[#FA4D3F] p-0.5">
                     <div className="w-full h-full rounded-full bg-[#1E1B4B] flex items-center justify-center text-[10px] font-bold">
                       {reviews[index].author.charAt(0)}
                     </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest">{reviews[index].author}</h4>
                    <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold mt-0.5">{reviews[index].role}</p>
                  </div>
               </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
