'use client';
import { Search, ArrowRight, MapPin } from 'lucide-react';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[90vh] md:min-h-[75vh] pt-24 md:pt-44 px-6 md:px-8 pb-16 flex items-center overflow-hidden relative bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 md:gap-16 items-center relative z-10 w-full">
        
        {/* Visual Content */}
        <div className="lg:col-span-5 relative mt-0 md:mt-12 lg:mt-0 group order-1 lg:order-2">
          <div className="opacity-0 animate-slide-right delay-600 aspect-[16/9] sm:aspect-[4/3] md:aspect-[4/5] bg-[#F5F3FF] overflow-hidden shadow-[0_20px_50px_-10px_rgba(30,64,175,0.15)] md:shadow-[0_40px_80px_-20px_rgba(30,64,175,0.15)] relative">
            <img 
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
              alt="Luxury alpine lake scenery"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E40AF]/20 to-transparent opacity-60" />
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:col-span-7 space-y-6 md:space-y-10 flex flex-col items-start order-2 lg:order-1">
          <div className="space-y-4 md:space-y-6 w-full flex flex-col items-start">
            <h1 className="opacity-0 animate-fade-up delay-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] md:leading-[1.1] font-bold text-[#1E1B4B] text-left -ml-[2px] md:-ml-[3px]">
              {t('hero.title')} <br />
              <span className="italic serif text-[#1E40AF]">{t('hero.italic')}</span>
            </h1>
          </div>
          
          <p className="opacity-0 animate-fade-in delay-600 text-sm md:text-xl max-w-xl leading-relaxed text-[#1E1B4B]/60 font-semibold text-left">
            {t('hero.desc')}
          </p>

          <div className="pt-2 md:pt-8 opacity-0 animate-fade-up delay-800 w-full flex flex-col items-start">
            <div className="max-w-xl w-full group flex items-center gap-0 shadow-xl rounded-full overflow-hidden bg-white border border-[#1E1B4B]/10 ring-1 ring-white/10 focus-within:ring-[#6D28D9]/20 transition-all duration-500 p-1 md:p-1.5">
              <div className="flex-1 flex items-center px-4 md:px-6 py-2 md:py-3">
                <MapPin className="w-4 h-4 text-[#6D28D9] mr-2 md:mr-3 shrink-0" />
                <div className="flex flex-col flex-1">
                  <input 
                    type="text" 
                    placeholder={t('hero.placeholder')} 
                    className="w-full bg-transparent outline-none text-xs md:text-sm placeholder:text-[#1E1B4B]/30 font-bold text-[#1E1B4B]"
                  />
                </div>
              </div>
              <button className="bg-[#6D28D9] text-white px-5 md:px-8 py-3 md:py-4 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1E40AF] transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 shrink-0 group/btn">
                <span className="hidden sm:inline">{t('hero.explore')}</span>
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full bg-[#F5F3FF] -z-0 skew-x-6 md:skew-x-12 translate-x-1/2" />
    </section>
  );
};

export default Hero;