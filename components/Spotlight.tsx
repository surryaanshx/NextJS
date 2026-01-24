'use client';
import React from 'react';
import { Compass, ShieldCheck, Headset } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';

const Spotlight: React.FC = () => {
  const revealRef = useScrollReveal();
  const { t } = useLanguage();
  
  // Swapped order: Compass, Headset (Support), ShieldCheck (Pricing)
  const icons = [Compass, Headset, ShieldCheck];
  const items = t('spotlight.items').map((item: any, i: number) => ({
    ...item,
    icon: icons[i]
  }));

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 relative overflow-hidden group/spotlight bg-white">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/thailand.png" 
          className="w-full h-full object-cover opacity-[0.6] scale-110 group-hover/spotlight:scale-105 transition-transform duration-[20000ms] ease-out grayscale-[0.2]"
          alt="Thailand Landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/30 to-white/90" />
      </div>

      <div ref={revealRef} className="reveal max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-4 md:gap-x-8 lg:gap-20">
          {items.map((item: any, i: number) => (
            <div 
              key={i} 
              className={`space-y-5 md:space-y-8 text-center flex flex-col items-center px-2 group cursor-default ${
                i === 2 ? 'col-span-2 lg:col-span-1 max-w-[280px] mx-auto' : ''
              }`}
            >
              <div className="relative">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center mb-1 md:mb-3 shrink-0 transition-all duration-700 group-hover:rotate-[360deg] group-hover:bg-[#6D28D9] group-hover:text-white border border-[#6D28D9]/10 shadow-xl relative z-10">
                  <item.icon className="w-5 h-5 md:w-7 md:h-7 text-[#78350F] group-hover:text-white transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-lg md:text-2xl font-bold serif text-[#1E1B4B] tracking-tight leading-tight transition-colors group-hover:text-[#6D28D9]">
                  {item.title}
                </h3>
                <div className="w-6 h-0.5 bg-[#6D28D9] mx-auto transition-all duration-500 group-hover:w-10" />
                <p className="text-[#1E1B4B] font-bold leading-relaxed text-[11px] md:text-base max-w-[220px] md:max-w-[260px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spotlight;