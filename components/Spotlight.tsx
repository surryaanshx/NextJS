'use client';
import React from 'react';
import { Compass, ShieldCheck, Headset, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';

const Spotlight: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();
  
  const icons = [Compass, Headset, ShieldCheck];
  const items = t('spotlight.items').map((item: any, i: number) => ({
    ...item,
    icon: icons[i]
  }));

  return (
    // Removed 'reveal' class from section to ensure background renders immediately
    <section className="py-20 px-6 md:px-8 relative overflow-hidden bg-white/50 border-t border-[#1E1B4B]/5">
      {/* Background Decor - Renders immediately */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#6D28D9]/5 via-[#FA4D3F]/5 to-[#6D28D9]/5 blur-[100px] rounded-full opacity-60" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Section Header - Fades in */}
        <div className={`text-center space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 text-[#6D28D9] font-black text-[10px] uppercase tracking-[0.3em]">
             <Star className="w-3 h-3 fill-current" />
             <span>The Gold Standard</span>
             <Star className="w-3 h-3 fill-current" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold serif text-[#1E1B4B]">
            {t('spotlight.titlePrefix')} <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#FA4D3F] pr-2">{t('spotlight.titleSuffix')}</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item: any, i: number) => (
            <div 
              key={i} 
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`group/card relative p-6 md:p-8 rounded-[2rem] bg-white border border-[#1E1B4B]/5 hover:border-[#6D28D9]/20 transition-all duration-700 ease-out overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 will-change-transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {/* Card Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3FF] to-white opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left h-full">
                {/* Icon Container */}
                <div className="mb-6 relative">
                   <div className="w-14 h-14 rounded-2xl bg-[#F5F3FF] border border-[#6D28D9]/10 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-500 shadow-sm group-hover/card:bg-[#6D28D9] group-hover/card:text-white">
                      <item.icon className="w-6 h-6 text-[#6D28D9] group-hover/card:text-white transition-colors" />
                   </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-[#1E1B4B] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#1E1B4B]/60 text-xs md:text-sm leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-auto pt-6 w-full flex justify-center md:justify-start">
                   <div className="h-0.5 w-12 bg-[#6D28D9]/20 group-hover/card:w-full group-hover/card:bg-[#6D28D9] transition-all duration-700 ease-out" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spotlight;