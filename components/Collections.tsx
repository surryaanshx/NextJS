'use client';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Lock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';

const Collections: React.FC = () => {
  const [index, setIndex] = useState(0);
  const revealRef = useScrollReveal();
  const { t } = useLanguage();

  const items = t('collections.items').map((item: any, i: number) => ({
    ...item
  }));

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="collections" className="pb-12 pt-2 px-6 md:px-8 relative overflow-hidden scroll-mt-32">
      <div ref={revealRef} className="reveal max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-[#6D28D9] font-black text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>{t('collections.curated')}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold serif text-[#1E1B4B]">
              {t('collections.titlePrefix')} <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#1E40AF]">{t('collections.titleSuffix')}</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="hidden md:block h-px w-24 bg-[#1E1B4B]/10" />
             <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#1E1B4B]/40">{t('collections.season')}</p>
          </div>
        </div>
        
        {/* Desktop View - Locked Cards - Reduced container width to max-w-5xl for smaller boxes */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {items.map((item: any, i: number) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-gradient-to-br from-white to-[#F5F3FF] border border-[#1E1B4B]/5 flex flex-col items-center justify-center text-center p-6 hover:shadow-xl transition-all duration-500 shadow-lg shadow-[#1E1B4B]/5 hover:-translate-y-2">
                 
                 {/* Texture */}
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
                 
                 {/* Lock Icon */}
                 <div className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-[0_10px_30px_-10px_rgba(109,40,217,0.1)] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Lock className="w-5 h-5 text-[#1E1B4B]/20 group-hover:text-[#6D28D9] transition-colors" />
                 </div>
                 
                 {/* Content */}
                 <span className="relative z-10 inline-block px-2.5 py-0.5 bg-[#1E1B4B]/5 text-[#1E1B4B]/60 text-[9px] font-bold uppercase tracking-widest rounded-full mb-3 border border-[#1E1B4B]/5">
                   {item.tag}
                 </span>
                 <h3 className="relative z-10 text-[#1E1B4B] font-bold font-serif text-xl mb-2">{item.title}</h3>
                 <span className="relative z-10 text-[#6D28D9] font-black uppercase tracking-widest text-[9px] bg-[#6D28D9]/5 px-3 py-1 rounded-full mt-2">
                   Coming Soon
                 </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Locked Card */}
        <div className="md:hidden">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-gradient-to-br from-white to-[#F5F3FF] border border-[#1E1B4B]/5 flex flex-col items-center justify-center text-center p-6 shadow-xl mb-8">
            <div key={index} className="animate-slide-in h-full w-full flex flex-col items-center justify-center relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_10px_30px_-10px_rgba(109,40,217,0.1)] flex items-center justify-center mb-5">
                    <Lock className="w-5 h-5 text-[#1E1B4B]/20" />
                 </div>
                <span className="text-[#1E1B4B]/60 text-[9px] uppercase tracking-widest font-bold block mb-2">{items[index].tag}</span>
                <h3 className="text-2xl serif font-bold text-[#1E1B4B] mb-2">{items[index].title}</h3>
                <span className="text-[#6D28D9] font-black uppercase tracking-widest text-[10px] bg-[#6D28D9]/5 px-3 py-1 rounded-full">
                   Coming Soon
                </span>
            </div>
            {/* Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
          </div>

          <div className="flex justify-between items-center px-2">
            <button onClick={prev} className="p-3 bg-white shadow-lg rounded-full text-[#1E1B4B] active:scale-95 transition-transform border border-[#1E1B4B]/5">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {items.map((_: any, i: number) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-6 bg-[#6D28D9]' : 'w-1.5 bg-[#1E1B4B]/10'}`} />
              ))}
            </div>
            <button onClick={next} className="p-3 bg-[#1E1B4B] shadow-lg rounded-full text-white active:scale-95 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
