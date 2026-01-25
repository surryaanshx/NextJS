'use client';
import React from 'react';

const BrandMarquee = () => {
  const words = [
    "MINIMALIST LUXURY", "CURATED EXPEDITIONS", "THE ART OF SLOW TRAVEL", "LOCAL INTELLIGENCE",
    "MINIMALIST LUXURY", "CURATED EXPEDITIONS", "THE ART OF SLOW TRAVEL", "LOCAL INTELLIGENCE"
  ];

  return (
    <div className="relative w-full py-8 md:py-12 overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      {/* Thin Lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-[#1E1B4B]/5 -translate-y-6" />
      <div className="absolute top-1/2 left-0 right-0 h-px bg-[#1E1B4B]/5 translate-y-6" />

      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex gap-16 md:gap-32 items-center">
          {words.map((word, i) => (
            <div key={i} className="flex items-center gap-16 md:gap-32">
              <span className="text-[#1E1B4B]/20 font-black text-[10px] md:text-xs uppercase tracking-[0.3em]">
                {word}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]/20" />
            </div>
          ))}
        </div>
        <div className="animate-marquee flex gap-16 md:gap-32 items-center ml-16 md:ml-32" aria-hidden="true">
          {words.map((word, i) => (
            <div key={i} className="flex items-center gap-16 md:gap-32">
              <span className="text-[#1E1B4B]/20 font-black text-[10px] md:text-xs uppercase tracking-[0.3em]">
                {word}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;