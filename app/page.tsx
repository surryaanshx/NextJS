'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import Spotlight from '../components/Spotlight';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import { ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);
  const inquiryRef = useScrollReveal();
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
    <div className="min-h-screen bg-white selection:bg-[#6D28D9] selection:text-white relative">
      <Navbar />
      
      <main key={language} className="bg-white">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-8 bg-white">
          <div className="border-t border-[#1E1B4B]/10 w-full" />
        </div>

        <Collections />
        <Testimonials />
        <Spotlight />
        
        <section id="inquiry" className="py-24 px-8 bg-[#F5F3FF] text-[#1E1B4B] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-80 h-80 bg-[#6D28D9]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1E40AF]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div ref={inquiryRef} className="reveal max-w-3xl mx-auto text-center space-y-8 relative z-10">
            <h2 className="text-4xl font-bold serif italic text-[#1E1B4B]">{t('inquiry.title')}</h2>
            <p className="text-[#1E1B4B]/70 text-base max-w-lg mx-auto leading-relaxed font-medium">
              {t('inquiry.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder={t('inquiry.placeholder')}
                className="bg-white border-2 border-[#6D28D9]/10 px-6 py-4 rounded-sm outline-none focus:border-[#6D28D9] transition-all sm:w-80 text-center sm:text-left text-[#1E1B4B] placeholder:text-[#1E1B4B]/30 font-bold text-sm shadow-sm"
              />
              <button className="bg-[#6D28D9] text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-[#1E40AF] transition-all duration-300 text-xs shadow-[0_10px_20px_-5px_rgba(109,40,217,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(30,64,175,0.4)] hover:-translate-y-1 transform-gpu">
                {t('inquiry.button')}
              </button>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-[#6D28D9] font-black">
              {t('inquiry.limited')}
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <button 
        onClick={scrollTop}
        className={`fixed bottom-6 right-6 z-50 bg-[#6D28D9] text-white p-2.5 rounded-full shadow-2xl hover:bg-[#1E40AF] transition-all duration-500 transform-gpu border border-white/20 
          ${showScroll ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
}