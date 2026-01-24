'use client';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';

const staticCollections = [
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800'
];

const Collections: React.FC = () => {
  const [index, setIndex] = useState(0);
  const revealRef = useScrollReveal();
  const { t } = useLanguage();

  const items = t('collections.items').map((item: any, i: number) => ({
    ...item,
    img: staticCollections[i]
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
    <section id="collections" className="py-16 md:py-24 px-6 md:px-8 bg-gradient-to-b from-[#F5F3FF] via-white to-white overflow-hidden">
      <div ref={revealRef} className="reveal max-w-7xl mx-auto space-y-12 md:space-y-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
          <div className="space-y-3 md:space-y-4">
            <p className="text-[#6D28D9] text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em]">{t('collections.curated')}</p>
            <h2 className="text-4xl md:text-6xl font-bold serif text-[#1E1B4B] md:whitespace-nowrap">{t('collections.seasonal')}</h2>
          </div>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-black text-[#1E1B4B]/30 border-b-2 border-[#1E40AF] pb-2 md:pb-4 self-start md:self-auto whitespace-nowrap">{t('collections.season')}</p>
        </div>
        
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-10 md:gap-12">
          {items.map((item: any, i: number) => (
            <div key={i} className="space-y-6 md:space-y-8 group cursor-pointer">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden shadow-xl md:shadow-2xl transition-all duration-700 group-hover:shadow-[#6D28D9]/20 group-hover:-translate-y-2 scale-[0.97]">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={item.title} />
                </div>
                <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 border-l-2 md:border-l-4 border-b-2 md:border-b-4 border-[#78350F]/20" />
              </div>
              <div className="flex justify-between items-center px-1">
                <h3 className="text-xl md:text-2xl serif font-bold text-[#1E1B4B] group-hover:text-[#6D28D9] transition-colors">{item.title}</h3>
                <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-black text-[#1E40AF] bg-[#1E40AF]/5 px-2 md:px-3 py-1 rounded-full">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-2">
          <div className="relative min-h-[250px]">
            <div key={index} className="animate-slide-in space-y-4">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden shadow-2xl rounded-sm scale-[0.97]">
                  <img 
                    src={items[index].img} 
                    className="w-full h-full object-cover" 
                    alt={items[index].title} 
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 w-10 h-10 border-l-2 border-b-2 border-[#78350F]/20" />
              </div>
              <div className="flex justify-between items-center px-1">
                <h3 className="text-2xl serif font-bold text-[#1E1B4B]">{items[index].title}</h3>
                <span className="text-[10px] uppercase tracking-widest font-black text-[#1E40AF] bg-[#1E40AF]/5 px-3 py-1 rounded-full">
                  {items[index].tag}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center px-2 pt-2">
            <button onClick={prev} className="p-3 bg-white shadow-lg rounded-full border border-[#1E1B4B]/5 text-[#1E1B4B] active:scale-90 transition-transform">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_: any, i: number) => (
                <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-[#6D28D9]' : 'w-2 bg-[#1E1B4B]/10'}`} />
              ))}
            </div>
            <button onClick={next} className="p-3 bg-[#6D28D9] shadow-lg rounded-full text-white active:scale-90 transition-transform">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;