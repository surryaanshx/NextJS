'use client';
import React, { useState } from 'react';
import { Ship, Landmark, Palmtree, Waves, Moon, ShoppingBag, BedDouble, Users, ChevronDown, Utensils, ChevronUp, Calendar } from 'lucide-react';

const ItineraryItem = ({ day, title, activities, image, isOpen, toggle }: any) => (
  <div className={`transition-all duration-300 border-b border-[#1E1B4B]/5 last:border-0 ${isOpen ? 'bg-white rounded-2xl shadow-sm border-transparent my-4 p-6' : 'py-6 px-6'}`}>
    <button 
      onClick={toggle}
      className={`w-full flex items-center justify-between group text-left transition-all duration-300`}
    >
      <div className="flex items-center gap-6">
        <div className={`flex flex-col items-center justify-center w-12 h-14 rounded-xl border transition-all duration-300 ${isOpen ? 'bg-[#6D28D9] border-[#6D28D9] text-white' : 'bg-white border-[#1E1B4B]/10 text-[#10B981]'}`}>
          <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Day</span>
          <span className="text-xl font-bold font-serif leading-none">{day}</span>
        </div>
        <h4 className={`text-xl serif font-bold transition-colors ${isOpen ? 'text-[#6D28D9]' : 'text-[#1E1B4B] group-hover:text-[#6D28D9]'}`}>
          {title}
        </h4>
      </div>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#F5F3FF] text-[#6D28D9] rotate-180' : 'bg-transparent text-[#1E1B4B]/30 group-hover:bg-[#F5F3FF] group-hover:text-[#6D28D9]'}`}>
        <ChevronDown className="w-5 h-5" />
      </div>
    </button>
    
    <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
      <div className="overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <img src={image} alt={title} className="w-full h-full object-cover" />
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
);

const TripDetails = () => {
  const [openDay, setOpenDay] = useState<number | null>(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const itinerary = [
    {
      day: '01',
      title: 'Arrival & The Electric Night',
      image: '/images/pattaya/itinerary/day1-arrival.png',
      activities: [
        'Private transfer from Bangkok Airport to Pattaya.',
        'Check-in at The Hiso Hotel (3 Star) and refreshment.',
        'Evening excursion to the famous 89 Russian Adult Show.',
        'Relaxing Honey Massage experience (transfers included).'
      ]
    },
    {
      day: '02',
      title: 'Coral Island Expedition',
      image: '/images/pattaya/itinerary/day2-coral-island.png',
      activities: [
        'Morning speedboat voyage to Koh Larn (Coral Island).',
        'Time for swimming, sunbathing, and beach sports.',
        'Authentic Indian Buffet Lunch included.',
        'Return transfer to hotel for leisure evening.'
      ]
    },
    {
      day: '03',
      title: 'Wildlife & Waterways',
      image: '/images/pattaya/itinerary/day3-wildlife.png',
      activities: [
        'Visit to the Tiger Park (Transfers included).',
        'Adrenaline experience at the Gun Shooting range.',
        'Traditional Rowing Boat tour at the Pattaya Floating Market.'
      ]
    },
    {
      day: '04',
      title: 'Leisure & Personal Discovery',
      image: '/images/pattaya/itinerary/day4-leisure.png',
      activities: [
        'Breakfast at The Hiso Hotel.',
        'Full day free at leisure to explore the city at your own pace.',
        'Recommended: Visit Walking Street or Central Festival Mall.'
      ]
    },
    {
      day: '05',
      title: 'Cultural Icons',
      image: '/images/pattaya/itinerary/day5-culture.png',
      activities: [
        'Spiritual visit to the Big Buddha Temple on the hill.',
        'Panoramic city views from Pattaya View Point.',
        'Exclusive visit to the world-renowned Gems Gallery.'
      ]
    },
    {
      day: '06',
      title: 'Local Life & Markets',
      image: '/images/pattaya/itinerary/day6-markets.png',
      activities: [
        'Relaxing morning with breakfast at the hotel.',
        'Day free for optional activities or beach time.',
        'Evening guided tour of local Thai markets for souvenirs and street food.'
      ]
    },
    {
      day: '07',
      title: 'Departure',
      image: '/images/pattaya/itinerary/day7-departure.png',
      activities: [
        'Final breakfast and hotel checkout.',
        'Private transfer to Bangkok Airport.',
        'Bon voyage.'
      ]
    }
  ];

  return (
    <div className="space-y-16">
      {/* Summary Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white rounded-2xl shadow-sm border border-[#1E1B4B]/5">
        <div className="flex flex-col justify-between h-full">
          <span className="text-[10px] uppercase tracking-widest font-black text-[#1E1B4B]/40 block mb-3">Duration</span>
          <div className="flex items-center gap-2 font-bold text-[#1E1B4B] text-base">
            <Calendar className="w-4 h-4 text-[#6D28D9] shrink-0" /> 
            <span className="whitespace-nowrap">6N / 7D</span>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <span className="text-[10px] uppercase tracking-widest font-black text-[#1E1B4B]/40 block mb-3">Group Size</span>
          <div className="flex items-center gap-2 font-bold text-[#1E1B4B] text-base">
            <Users className="w-4 h-4 text-[#6D28D9] shrink-0" /> 
            <span className="whitespace-nowrap">12 Pax</span>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <span className="text-[10px] uppercase tracking-widest font-black text-[#1E1B4B]/40 block mb-3">Accommodation</span>
          <div className="flex items-center gap-2 font-bold text-[#1E1B4B] text-base">
             <BedDouble className="w-4 h-4 text-[#6D28D9] shrink-0" /> 
             <span className="truncate">The Hiso Hotel</span>
          </div>
        </div>
         <div className="flex flex-col justify-between h-full">
          <span className="text-[10px] uppercase tracking-widest font-black text-[#1E1B4B]/40 block mb-3">Meals</span>
          <div className="flex items-center gap-2 font-bold text-[#1E1B4B] text-base">
             <Utensils className="w-4 h-4 text-[#6D28D9] shrink-0" /> 
             <span className="whitespace-nowrap">Breakfast</span>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold serif text-[#1E1B4B]">About this trip</h3>
        
        <div className="relative">
          <div 
            className={`text-[#1E1B4B]/70 leading-relaxed text-sm md:text-base font-medium transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px]' : 'max-h-[80px]'}`}
            style={{ 
              maskImage: isExpanded ? 'none' : 'linear-gradient(to bottom, black 0%, transparent 100%)',
              WebkitMaskImage: isExpanded ? 'none' : 'linear-gradient(to bottom, black 0%, transparent 100%)'
            }}
          >
            <p>
              Experience the vibrant duality of Pattaya in this comprehensive 7-day expedition. From the neon pulse of the city's famous nightlife and shows to the serene turquoise waters of Coral Island, this tour is curated for the traveler who wants it all. You will explore cultural landmarks like the Big Buddha, navigate the traditional Floating Market, and enjoy ample leisure time. 
              <br /><br />
              Stay comfortably at The Hiso Hotel with daily breakfast included, and let our local team handle every transfer and ticket.
            </p>
          </div>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-[#6D28D9] font-black uppercase tracking-widest text-xs hover:text-[#1E40AF] transition-colors group"
        >
          {isExpanded ? (
            <>Read Less <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /></>
          ) : (
            <>Read More <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" /></>
          )}
        </button>
      </div>

      {/* Highlights Grid */}
      <div className="space-y-8">
        <h3 className="text-3xl font-bold serif text-[#1E1B4B]">Trip Highlights</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-3 items-start p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-[#1E1B4B]/5 group">
            <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] group-hover:bg-[#6D28D9] transition-colors flex items-center justify-center shrink-0">
              <Ship className="w-5 h-5 text-[#6D28D9] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E1B4B] text-base mb-1">Coral Island Speedboat</h4>
              <p className="text-[#1E1B4B]/60 text-xs leading-relaxed">
                Adrenaline-fueled transfer to pristine Koh Larn with Indian lunch included.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-[#1E1B4B]/5 group">
            <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] group-hover:bg-[#6D28D9] transition-colors flex items-center justify-center shrink-0">
              <Waves className="w-5 h-5 text-[#6D28D9] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E1B4B] text-base mb-1">Floating Market</h4>
              <p className="text-[#1E1B4B]/60 text-xs leading-relaxed">
                Traditional rowing boat experience through the cultural waterways.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-[#1E1B4B]/5 group">
            <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] group-hover:bg-[#6D28D9] transition-colors flex items-center justify-center shrink-0">
              <Moon className="w-5 h-5 text-[#6D28D9] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E1B4B] text-base mb-1">Nightlife & Shows</h4>
              <p className="text-[#1E1B4B]/60 text-xs leading-relaxed">
                Includes tickets to the 89 Russian Show and Honey Massage experience.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-[#1E1B4B]/5 group">
            <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] group-hover:bg-[#6D28D9] transition-colors flex items-center justify-center shrink-0">
              <Landmark className="w-5 h-5 text-[#6D28D9] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E1B4B] text-base mb-1">Cultural Landmarks</h4>
              <p className="text-[#1E1B4B]/60 text-xs leading-relaxed">
                Guided visits to Big Buddha, View Point, and Gems Gallery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Itinerary Accordion */}
      <div className="space-y-8">
        <h3 className="text-3xl font-bold serif text-[#1E1B4B]">What you'll do</h3>
        <div className="">
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