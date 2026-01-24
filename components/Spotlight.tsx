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
    <section className="py-12 md:py-16 px-6 md:px-8 relative overflow-hidden group/spotlight bg-transparent">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Using a local texture image now */}
        <img 
          src="/images/home/texture-bg.png" 
          className="w-full h-full object-cover opacity-[0.6] scale-110 group-hover/spotlight:scale-105 transition-transform duration-[20000ms] ease-out grayscale-[0.2]"
          alt="Thailand Landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/50 to-white/95" />
      </div>

      <div ref={revealRef} className="reveal max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-4 md:gap-x-8 lg:gap-20">
          {items.map((item: any, i: number) => (
            <div 
              key={i} 
              className={`space-y-4 md:space-y-6 text-center flex flex-col items-center px-2 group cursor-default ${
                i === 2 ? 'col-span-2 lg:col-span-1 max-w-[280px] mx-auto' : ''
              }`}
            >
              <div className="relative">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur-xl flex items-center justify-center mb-1 shrink-0 transition-all duration-700 group-hover:rotate-[360deg] group-hover:bg-[#6D28D9] group-hover:text-white border border-[#6D28D9]/20 shadow-xl relative z-10">
                  <item.icon className="w-4 h-4 md:w-6 md:h-6 text-[#78350F] group-hover:text-white transition-colors" />
                </div>
              </div>
              
              <div className="space-y-1.5 md:space-y-2">
                <h3 className="text-base md:text-xl font-bold serif text-[#1E1B4B] tracking-tight leading-tight transition-colors group-hover:text-[#6D28D9]">
                  {item.title}
                </h3>
                <div className="w-4 h-0.5 bg-[#6D28D9] mx-auto transition-all duration-500 group-hover:w-8" />
                <p className="text-[#1E1B4B] font-bold leading-relaxed text-[10px] md:text-sm max-w-[200px] md:max-w-[240px]">
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