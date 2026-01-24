'use client';
import React, { useState } from 'react';
import { Ship, Landmark, Palmtree, Waves, Moon, ShoppingBag, BedDouble, Users, ChevronDown, Utensils, ChevronUp, Calendar } from 'lucide-react';

const ItineraryItem = ({ day, title, activities, image, isOpen, toggle }: any) => (
  <div className={`border-b border-[#1E1B4B]/5 last:border-0 transition-colors duration-300 ${isOpen ? 'bg-white rounded-2xl shadow-sm border-transparent my-4' : ''}`}>
    <button 
      onClick={toggle}
      className={`w-full py-6 flex items-center justify-between group text-left px-4 rounded-xl -mx-4 transition-all duration-300 ${isOpen ? 'bg-white' : 'hover:bg-white/50'}`}
    >
      <div className="flex items-center gap-6">
        <div className={`flex flex-col items-center justify-center w-12 h-14 rounded-xl border transition-all duration-300 ${isOpen ? 'bg-[#6D28D9] border-[#6D28D9] text-white' : 'bg-white border-[#1E1B4B]/10 text-[#10B981]'}`}>
          <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Day</span>
          <span className="text-xl font-bold font-serif leading-none">{day}</span>
        </div>
        <h4 className={`text-xl serif font-bold transition-colors ${isOpen ? 'text-[#6D28D9]' : 'text-[#1E1B4B]'}`}>
          {title}
        </h4>
      </div>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#F5F3FF] text-[#6D28D9] rotate-180' : 'bg-transparent text-[#1E1B4B]/30'}`}>
        <ChevronDown className="w-5 h-5" />
      </div>
    </button>
    
    <div className={`overflow-hidden transition-all duration-500 ease-in-out px-4 ${isOpen ? 'max-h-[800px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
      <div className="grid md:grid-cols-2 gap-8 pt-2">
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
        'Check-in at Hiso Hotel (3 Star) and refreshment.',
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
        'Breakfast at Hiso Hotel.',
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl shadow-sm border border-[#1E1B4B]/5">
        <div>
          <span className="text-[10px] uppercase tracking-widest font-black text-[#1E1B4B]/40 block mb-2">Duration</span>
          <div className="flex items-center gap-2 font-bold text-[#1E1B4B] text-base">
            <Calendar className="w-4 h-4 text-[#6D28D9]" /> 6N / 7D
          </div>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-widest font-black text-[#1E1B4B]/40 block mb-2">Group Size</span>
          <div className="flex items-center gap-2 font-bold text-[#1E1B4B] text-base">
            <Users className="w-4 h-4 text-[#6D28D9]" /> 12 Pax
          </div>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-widest font-black text-[#1E1B4B]/40 block mb-2">Accommodation</span>
          <div className="flex items-center gap-2 font-bold text-[#1E1B4B] text-base">
             <BedDouble className="w-4 h-4 text-[#6D28D9]" /> Hiso Hotel
          </div>
        </div>
         <div>
          <span className="text-[10px] uppercase tracking-widest font-black text-[#1E1B4B]/40 block mb-2">Meals</span>
          <div className="flex items-center gap-2 font-bold text-[#1E1B4B] text-base">
             <Utensils className="w-4 h-4 text-[#6D28D9]" /> Breakfast
          </div>
        </div>
      </div>

      {/* About */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold serif text-[#1E1B4B]">About this trip</h3>
        
        <div className="relative">
          <div className={`text-[#1E1B4B]/70 leading-relaxed text-sm md:text-base font-medium transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px]' : 'max-h-[120px]'}`}>
            <p>
              Experience the vibrant duality of Pattaya in this comprehensive 7-day expedition. From the neon pulse of the city's famous nightlife and shows to the serene turquoise waters of Coral Island, this tour is curated for the traveler who wants it all. You will explore cultural landmarks like the Big Buddha, navigate the traditional Floating Market, and enjoy ample leisure time. 
              <br /><br />
              Stay comfortably at the Hiso Hotel with daily breakfast included, and let our local team handle every transfer and ticket.
            </p>
          </div>
          
          {/* Gradient Fade Overlay */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent pointer-events-none" />
          )}
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
          <div className="flex gap-5 items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-[#1E1B4B]/5 group">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] group-hover:bg-[#6D28D9] transition-colors flex items-center justify-center shrink-0">
              <Ship className="w-6 h-6 text-[#6D28D9] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E1B4B] text-lg mb-2">Coral Island Speedboat</h4>
              <p className="text-[#1E1B4B]/60 text-sm leading-relaxed">
                Adrenaline-fueled transfer to pristine Koh Larn with Indian lunch included.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-[#1E1B4B]/5 group">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] group-hover:bg-[#6D28D9] transition-colors flex items-center justify-center shrink-0">
              <Waves className="w-6 h-6 text-[#6D28D9] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E1B4B] text-lg mb-2">Floating Market</h4>
              <p className="text-[#1E1B4B]/60 text-sm leading-relaxed">
                Traditional rowing boat experience through the cultural waterways.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-[#1E1B4B]/5 group">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] group-hover:bg-[#6D28D9] transition-colors flex items-center justify-center shrink-0">
              <Moon className="w-6 h-6 text-[#6D28D9] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E1B4B] text-lg mb-2">Nightlife & Shows</h4>
              <p className="text-[#1E1B4B]/60 text-sm leading-relaxed">
                Includes tickets to the 89 Russian Show and Honey Massage experience.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-[#1E1B4B]/5 group">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] group-hover:bg-[#6D28D9] transition-colors flex items-center justify-center shrink-0">
              <Landmark className="w-6 h-6 text-[#6D28D9] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E1B4B] text-lg mb-2">Cultural Landmarks</h4>
              <p className="text-[#1E1B4B]/60 text-sm leading-relaxed">
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