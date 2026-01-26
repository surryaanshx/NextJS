'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import BrandMarquee from './BrandMarquee';
import Collections from './Collections';
import Spotlight from './Spotlight';
import Footer from './Footer';
import Testimonials from './Testimonials';
import { ChevronUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomeClient() {
  const [showScroll, setShowScroll] = useState(false);
  const { ref: inquiryRef, isVisible: isInquiryVisible } = useScrollReveal();
  const { language, t } = useLanguage();

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.pageYOffset > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#6D28D9] selection:text-white relative overflow-x-hidden">
      {/* Global Grain Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise-lines.png")` }}></div>

      {/* Aurora Ambient Backgrounds - More Vibrant */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#6D28D9]/10 to-[#FA4D3F]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
      <div className="fixed top-[40%] left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#1E40AF]/10 to-[#6D28D9]/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none z-0" />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Removed space-y-4 to allow manual control of spacing between specific sections */}
        <main key={language} className="bg-transparent flex flex-col animate-fade-in">
          
          {/* Hero Section */}
          <div className="mb-2 md:mb-10">
            <Hero />
          </div>
          
          {/* Brand Marquee - Close to Hero, but distant from Collections */}
          <div className="mb-16 md:mb-32">
            <BrandMarquee />
          </div>

          <Collections />
          
          {/* Grouped Dark Sections */}
          <div className="flex flex-col mt-20 md:mt-32">
            <Testimonials />
            
            <Spotlight />
            
            <section id="inquiry" className="relative py-16 px-6 overflow-hidden">
              {/* Extended background dimensions and increased scale to prevent skew glitch */}
              <div className="absolute -inset-10 w-[120%] h-[150%] bg-gradient-to-br from-[#1E1B4B] via-[#4C1D95] to-[#1E1B4B] transform -skew-y-2 origin-center scale-110" />
              
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#FA4D3F]/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#60A5FA]/20 rounded-full blur-[100px] pointer-events-none" />

              <div ref={inquiryRef} className={`reveal max-w-3xl mx-auto text-center space-y-8 relative z-10 ${isInquiryVisible ? 'is-visible' : ''}`}>
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-5xl font-bold serif text-white leading-tight">
                    {t('inquiry.title')}
                  </h2>
                  <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light">
                    {t('inquiry.desc')}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <div className="relative group w-full sm:w-auto">
                    <input 
                      type="email" 
                      placeholder={t('inquiry.placeholder')}
                      className="w-full sm:w-80 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-xl outline-none focus:border-white/50 transition-all text-white placeholder:text-white/40 font-medium text-sm shadow-xl"
                    />
                    <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <button className="w-full sm:w-auto bg-white text-[#1E1B4B] px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#F5F3FF] transition-all duration-300 text-[10px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    {t('inquiry.button')} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                
                <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold">
                  {t('inquiry.limited')}
                </p>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>

      <button 
        onClick={scrollTop}
        className={`fixed bottom-6 right-6 z-50 bg-[#1E1B4B] text-white p-3 rounded-full shadow-2xl hover:bg-[#6D28D9] transition-all duration-500 transform-gpu border border-white/10 
          ${showScroll ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
}
