'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Ship, Landmark, Palmtree, Waves, Moon, ShoppingBag, 
  BedDouble, Users, ChevronDown, Utensils, ChevronUp, Calendar, Star 
} from 'lucide-react';
import { TripStats, TripHighlight, ItineraryDay } from '../types';
import { useLanguage } from '../context/LanguageContext';

// Map string names to actual Icon components
const IconMap: Record<string, any> = {
  Ship, Landmark, Palmtree, Waves, Moon, ShoppingBag, 
  BedDouble, Users, Calendar, Utensils
};

interface TripDetailsProps {
  stats: TripStats;
  about: string;
  highlights: TripHighlight[];
  itinerary: ItineraryDay[];
}

const ItineraryItem = ({ day, title, activities, image, isOpen, toggle }: any) => (
  <div className={`transition-all duration-300 bg-white rounded-2xl border border-[#1E1B4B]/5 overflow-hidden ${isOpen ? 'shadow-md' : 'shadow-sm'}`}>
    <button 
      onClick={toggle}
      className="w-full flex items-center justify-between group text-left p-5 md:p-6"
    >
      <div className="flex items-center gap-4 md:gap-6">
        <div className={`flex flex-col items-center justify-center w-12 h-14 rounded-xl border transition-all duration-300 ${isOpen ? 'bg-[#6D28D9] border-[#6D28D9] text-white' : 'bg-white border-[#1E1B4B]/10 text-[#10B981]'}`}>
          <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Day</span>
          <span className="text-xl font-bold font-serif leading-none">{day}</span>
        </div>
        <h4 className={`text-lg md:text-xl serif font-bold transition-colors ${isOpen ? 'text-[#6D28D9]' : 'text-[#1E1B4B] group-hover:text-[#6D28D9]'}`}>
          {title}
        </h4>
      </div>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${isOpen ? 'bg-[#F5F3FF] text-[#6D28D9] rotate-180' : 'bg-transparent text-[#1E1B4B]/30 group-hover:bg-[#F5F3FF] group-hover:text-[#6D28D9]'}`}>
        <ChevronDown className="w-5 h-5" />
      </div>
    </button>
    
    <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
      <div className="overflow-hidden">
        <div className="p-5 md:p-6 pt-0">
           <div className="grid md:grid-cols-2 gap-6 md:gap-8 pt-2 border-t border-[#1E1B4B]/5 mt-2">
            <div className="relative aspect-video md:aspect-[4/3] rounded-xl overflow-hidden shadow-md mt-4 md:mt-0">
              <Image 
                src={image} 
                alt={title} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4 flex flex-col justify-center">
              <ul className="space-y-4 relative">
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[#1E1B4B]/10" />
                {activities.map((act: string, i: number) => (
                  <li key={i} className="flex gap-4 items-start text-[#1E1B4B]/70 text-sm font-medium leading-relaxed relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-white border-2 border-[#6D28D9] mt-1.5 shrink-0 relative z-10" />
                    {act}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TripDetails: React.FC<TripDetailsProps> = ({ stats, about, highlights, itinerary }) => {
  const [openDay, setOpenDay] = useState<number | null>(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="space-y-16">
      {/* Summary Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white rounded-2xl shadow-sm border border-[#1E1B4B]/5">
        <div className="flex flex-col justify-between h-full">
          <span className="text-[10px] uppercase tracking-widest font-black text-[#1E1B4B]/40 block mb-3">{t('tripDetails.duration')}</span>
          <div className="flex items-center gap-2 font-bold text-[#1E1B4B] text-base">
            <Calendar className="w-4 h-4 text-[#6D28D9] shrink-0" /> 
            <span className="whitespace-nowrap">{stats.duration}</span>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <span className="text-[10px] uppercase tracking-widest font-black text-[#1E1B4B]/40 block mb-3">{t('tripDetails.groupSize')}</span>
          <div className="flex items-center gap-2 font-bold text-[#1E1B4B] text-base">
            <Users className="w-4 h-4 text-[#6D28D9] shrink-0" /> 
            <span className="whitespace-nowrap">{stats.groupSize}</span>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <span className="text-[10px] uppercase tracking-widest font-black text-[#1E1B4B]/40 block mb-3">{t('tripDetails.accommodation')}</span>
          <div className="flex items-center gap-2 font-bold text-[#1E1B4B] text-base">
             <BedDouble className="w-4 h-4 text-[#6D28D9] shrink-0" /> 
             <span className="truncate">{stats.accommodation}</span>
          </div>
        </div>
         <div className="flex flex-col justify-between h-full">
          <span className="text-[10px] uppercase tracking-widest font-black text-[#1E1B4B]/40 block mb-3">{t('tripDetails.meals')}</span>
          <div className="flex items-center gap-2 font-bold text-[#1E1B4B] text-base">
             <Utensils className="w-4 h-4 text-[#6D28D9] shrink-0" /> 
             <span className="whitespace-nowrap">{stats.meals}</span>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold serif text-[#1E1B4B]">{t('pattayaPage.headers.about')}</h3>
        
        <div className="relative">
          <div 
            className={`text-[#1E1B4B]/70 leading-relaxed text-sm md:text-base font-medium transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px]' : 'max-h-[80px]'}`}
            style={{ 
              maskImage: isExpanded ? 'none' : 'linear-gradient(to bottom, black 0%, transparent 100%)',
              WebkitMaskImage: isExpanded ? 'none' : 'linear-gradient(to bottom, black 0%, transparent 100%)'
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: about }} />
          </div>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-[#6D28D9] font-black uppercase tracking-widest text-xs hover:text-[#1E40AF] transition-colors group"
        >
          {isExpanded ? (
            <>{t('pattayaPage.headers.readLess')} <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /></>
          ) : (
            <>{t('pattayaPage.headers.readMore')} <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" /></>
          )}
        </button>
      </div>

      {/* Highlights Grid */}
      <div className="space-y-8">
        <h3 className="text-3xl font-bold serif text-[#1E1B4B]">{t('pattayaPage.headers.highlights')}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = IconMap[highlight.iconName] || Star;
            return (
              <div key={index} className="flex gap-3 items-start p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-[#1E1B4B]/5 group">
                <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] group-hover:bg-[#6D28D9] transition-colors flex items-center justify-center shrink-0">
                  <IconComponent className="w-5 h-5 text-[#6D28D9] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1E1B4B] text-base mb-1">{highlight.title}</h4>
                  <p className="text-[#1E1B4B]/60 text-xs leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Itinerary Accordion - Now using space-y-4 for consistent card layout */}
      <div className="space-y-8">
        <h3 className="text-3xl font-bold serif text-[#1E1B4B]">{t('pattayaPage.headers.itinerary')}</h3>
        <div className="space-y-4">
          {itinerary.map((day, i) => (
            <ItineraryItem 
              key={i} 
              {...day} 
              isOpen={openDay === i} 
              toggle={() => setOpenDay(openDay === i ? null : i)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
