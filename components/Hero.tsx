'use client';
import { Search, ArrowRight, MapPin, Play } from 'lucide-react';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[85vh] pt-40 px-6 md:px-8 flex items-center relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10 w-full">
        
        {/* Visual Content (Right Side on Desktop) */}
        <div className="lg:col-span-6 relative mt-12 lg:mt-0 order-first lg:order-last group flex justify-center lg:justify-end">
          {/* Reduced max-w by 1% (500px * 0.99 = 495px) */}
          <div className="opacity-0 animate-slide-right delay-600 relative z-10 w-full max-w-[495px]">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(109,40,217,0.2)] ring-1 ring-white/50 relative">
               <img 
                src="/images/home/hero-main.png" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s]"
                alt="Luxury Thailand scenery"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/40 to-transparent mix-blend-multiply" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl animate-fade-up delay-800 transition-all duration-500 hover:bg-white/20 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)] cursor-pointer group/badge">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-white/60 text-[9px] uppercase tracking-widest font-bold mb-1 group-hover/badge:text-white/80 transition-colors">Featured Expedition</span>
                    <span className="text-white text-lg serif font-bold">Pattaya City</span>
                  </div>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1E1B4B] group-hover/badge:scale-110 group-hover/badge:bg-[#F5F3FF] transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative Elements behind image */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FA4D3F]/20 rounded-full blur-[60px] -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#6D28D9]/20 rounded-full blur-[80px] -z-10" />
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:col-span-6 space-y-8 flex flex-col items-start text-left -translate-y-[1%]">
          <div className="space-y-6 w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F3FF] border border-[#6D28D9]/10 opacity-0 animate-fade-in delay-200">
               <div className="w-2 h-2 rounded-full bg-[#6D28D9] animate-pulse" />
               <span className="text-[#6D28D9] text-[10px] font-black uppercase tracking-widest">Now Booking Summer 2026</span>
            </div>
            
            <h1 className="opacity-0 animate-fade-up delay-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold text-[#1E1B4B] tracking-tight">
              {t('hero.title')} <br />
              <span className="italic serif text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#FA4D3F] animate-gradient-x bg-[length:200%_auto]">{t('hero.italic')}</span>
            </h1>
          </div>
          
          <p className="opacity-0 animate-fade-in delay-600 text-base md:text-lg leading-relaxed text-[#1E1B4B]/60 font-medium max-w-xl">
            {t('hero.desc')}
          </p>

          <div className="pt-4 opacity-0 animate-fade-up delay-800 w-full max-w-lg">
            <div className="group flex items-center gap-2 shadow-[0_20px_50px_-10px_rgba(109,40,217,0.15)] rounded-full overflow-hidden bg-white p-1.5 border border-[#1E1B4B]/5 hover:border-[#6D28D9]/30 transition-all">
              <div className="flex-1 flex items-center px-5">
                <Search className="w-4 h-4 text-[#6D28D9]/60 mr-4" />
                <input 
                  type="text" 
                  placeholder={t('hero.placeholder')} 
                  className="w-full bg-transparent outline-none text-xs md:text-sm placeholder:text-[#1E1B4B]/30 font-bold text-[#1E1B4B]"
                />
              </div>
              <button className="bg-[#1E1B4B] text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#6D28D9] transition-all duration-300 flex items-center gap-2 shadow-lg">
                {t('hero.explore')}
              </button>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in delay-1000 flex items-center gap-6 pt-2">
             <div className="flex -space-x-3">
               {[1,2,3].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                 </div>
               ))}
             </div>
             <div className="flex flex-col">
               <div className="flex gap-1">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-[#FA4D3F]" />)}
               </div>
               <span className="text-[10px] font-bold text-[#1E1B4B] mt-1">1000+ Happy Travelers</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;