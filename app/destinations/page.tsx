'use client';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { ArrowRight, Lock, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function DestinationsPage() {
  const [isPattayaLoaded, setIsPattayaLoaded] = useState(false);
  const { t, language } = useLanguage();

  return (
    <div key={language} className="bg-white min-h-screen relative overflow-hidden animate-fade-in">
      <Navbar />
      
      {/* Global Grain Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise-lines.png")` }}></div>

      {/* Aurora Ambient Backgrounds */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#6D28D9]/10 to-[#FA4D3F]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
      <div className="fixed top-[40%] left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#1E40AF]/10 to-[#6D28D9]/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none z-0" />

      <div className="pt-32 md:pt-44 pb-32 md:pb-48 px-6 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header with Animations */}
          <div className="flex flex-col max-w-2xl">
            <div className="flex items-center gap-2 text-[#6D28D9] font-bold text-xs uppercase tracking-widest animate-fade-in mb-3 opacity-0" style={{ animationDelay: '0ms' }}>
              <Globe className="w-4 h-4" />
              <span>{t('destinationsPage.worldAwaits')}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-[#1E1B4B] font-sans animate-fade-up mb-6 opacity-0" style={{ animationDelay: '100ms' }}>
              {t('destinationsPage.title')} <span className="serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#1E40AF] pr-2">{t('destinationsPage.titleItalic')}</span>
            </h1>
            <p className="text-[#1E1B4B]/60 text-base md:text-lg leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
              {t('destinationsPage.desc')}
            </p>
          </div>

          {/* Grid: Desktop 4 columns (Horizontal), Mobile 1 column (Vertical) */}
          {/* Layout: Active, Locked, Faded Outline, Empty */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 animate-fade-up opacity-0" style={{ animationDelay: '400ms' }}>
            
            {/* 1. Pattaya - Active */}
            <a href="/destinations/pattaya" className="group block relative aspect-[4/5] overflow-hidden rounded-[2rem] cursor-pointer shadow-2xl shadow-[#1E1B4B]/10 hover:shadow-[#6D28D9]/20 hover:-translate-y-2 transition-all duration-500 ring-1 ring-black/5 bg-[#F5F3FF]">
              <Image 
                src="/images/destinations/pattaya-card.jpg" 
                alt="Pattaya City"
                fill
                quality={90}
                onLoad={() => setIsPattayaLoaded(true)}
                className={`object-cover transition-all duration-700 ease-out group-hover:scale-110
                   ${isPattayaLoaded ? 'scale-100 blur-0 opacity-100' : 'scale-110 blur-xl opacity-0'}
                `}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B] via-[#1E1B4B]/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              
              {/* Badge */}
              <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                {t('destinationsPage.trending')}
              </div>

              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/20 pb-3 mb-3">
                    <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em]">{t('destinationsPage.location')}</span>
                    <span className="text-white text-xs font-serif italic">{t('destinationsPage.duration')}</span>
                  </div>
                  <h2 className="text-3xl serif font-bold text-white leading-none">{t('destinationsPage.pattayaTitle')}</h2>
                  <div className="flex items-center gap-2 text-white/80 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span>{t('destinationsPage.explore')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </a>
            
            {/* 2. Locked Card (Fully Visible) */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-white to-[#F5F3FF] border border-[#1E1B4B]/5 flex flex-col items-center justify-center text-center p-6 hover:shadow-xl transition-all duration-500">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
                 
                 <div className="relative z-10 w-16 h-16 rounded-2xl bg-white shadow-[0_10px_30px_-10px_rgba(109,40,217,0.2)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Lock className="w-6 h-6 text-[#1E1B4B]/20 group-hover:text-[#6D28D9] transition-colors" />
                 </div>
                 
                 <h3 className="relative z-10 text-[#1E1B4B] font-bold font-serif text-xl mb-2">{t('destinationsPage.secret')}</h3>
                 <span className="relative z-10 text-[#6D28D9] font-black uppercase tracking-widest text-[10px] bg-[#6D28D9]/5 px-3 py-1 rounded-full">
                   {t('destinationsPage.comingSoon')}
                 </span>
            </div>

            {/* 3. Locked Card (Half Faded Outline) */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-2 border-dashed border-[#1E1B4B]/10 flex flex-col items-center justify-center text-center p-6 opacity-60"
                 style={{ maskImage: 'linear-gradient(to right, black 20%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent 100%)' }}>
                 
                 <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#F5F3FF]/50 border border-[#1E1B4B]/5 flex items-center justify-center mb-6">
                    <Lock className="w-6 h-6 text-[#1E1B4B]/20" />
                 </div>
                 
                 <h3 className="relative z-10 text-[#1E1B4B]/40 font-bold font-serif text-xl mb-2">{t('destinationsPage.secret')}</h3>
            </div>
            
            {/* 4. Empty Space */}
            <div className="hidden md:block">
              {/* Intentionally left empty to simulate 'more coming' space */}
            </div>
            
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
