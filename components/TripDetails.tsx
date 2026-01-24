'use client';
import React, { useState } from 'react';
import { Ship, Landmark, Palmtree, Waves, Moon, ShoppingBag, BedDouble, Users, ChevronDown, Utensils } from 'lucide-react';

const ItineraryItem = ({ day, title, activities, image, isOpen, toggle }: any) => (
  <div className="border-b border-[#1E1B4B]/10 last:border-0">
    <button 
      onClick={toggle}
      className="w-full py-6 flex items-center justify-between group text-left hover:bg-gray-50 transition-colors px-4 rounded-lg -mx-4"
    >
      <div className="flex items-center gap-6">
        <span className="text-xs font-black uppercase tracking-widest text-[#6D28D9]">Day {day}</span>
        <h4 className={`text-xl serif font-bold transition-colors ${isOpen ? 'text-[#6D28D9]' : 'text-[#1E1B4B]'}`}>
          {title}
        </h4>
      </div>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#6D28D9] text-white rotate-180' : 'bg-[#F5F3FF] text-[#1E1B4B]'}`}>
        <ChevronDown className="w-4 h-4" />
      </div>
    </button>
    
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
      <div className="grid md:grid-cols-2 gap-8 pt-2">
        <div className="relative aspect-video md:aspect-[4/3] rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-4 flex flex-col justify-center">
          <ul className="space-y-4">
            {activities.map((act: string, i: number) => (
              <li key={i} className="flex gap-3 items-start text-[#1E1B4B]/70 text-sm font-medium leading-relaxed">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6D28D9] mt-2 shrink-0" />
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

  const itinerary = [
    {
      day: '01',
      title: 'Arrival & The Electric Night',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800',
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
      image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&q=80&w=800',
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
      image: 'https://images.unsplash.com/photo-1599696016147-79754f9a74a3?auto=format&fit=crop&q=80&w=800',
      activities: [
        'Visit to the Tiger Park (Transfers included).',
        'Adrenaline experience at the Gun Shooting range.',
        'Traditional Rowing Boat tour at the Pattaya Floating Market.'
      ]
    },
    {
      day: '04',
      title: 'Leisure & Personal Discovery',
      image: 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=800',
      activities: [
        'Breakfast at Hiso Hotel.',
        'Full day free at leisure to explore the city at your own pace.',
        'Recommended: Visit Walking Street or Central Festival Mall.'
      ]
    },
    {
      day: '05',
      title: 'Cultural Icons',
      image: 'https://images.unsplash.com/photo-1624694406734-d922904b76e0?auto=format&fit=crop&q=80&w=800',
      activities: [
        'Spiritual visit to the Big Buddha Temple on the hill.',
        'Panoramic city views from Pattaya View Point.',
        'Exclusive visit to the world-renowned Gems Gallery.'
      ]
    },
    {
      day: '06',
      title: 'Local Life & Markets',
      image: 'https://images.unsplash.com/photo-1533659828870-95aa30584311?auto=format&fit=crop&q=80&w=800',
      activities: [
        'Relaxing morning with breakfast at the hotel.',
        'Day free for optional activities or beach time.',
        'Evening guided tour of local Thai markets for souvenirs and street food.'
      ]
    },
    {
      day: '07',
      title: 'Departure',
      image: 'https://images.unsplash.com/photo-1559539324-4f404d0c242c?auto=format&fit=crop&q=80&w=800',
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b border-[#1E1B4B]/10">
        <div>
          <span className="text-[10px] uppercase tracking-widest font-black text-[#1E1B4B]/40 block mb-2">Duration</span>
          <div className="font-bold text-[#1E1B4B] text-lg">6N / 7D</div>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-widest font-black text-[#1E1B4B]/40 block mb-2">Group Size</span>
          <div className="flex items-center gap-2 font-bold text-[#1E1B4B] text-lg">
            <Users className="w-4 h-4 text-[#6D28D9]" /> 12 Pax
          </div>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-widest font-black text-[#1E1B4B]/40 block mb-2">Accommodation</span>
          <div className="flex items-center gap-2 font-bold text-[#1E1B4B] text-lg">
             <BedDouble className="w-4 h-4 text-[#6D28D9]" /> Hiso Hotel
          </div>
        </div>
         <div>
          <span className="text-[10px] uppercase tracking-widest font-black text-[#1E1B4B]/40 block mb-2">Meals</span>
          <div className="flex items-center gap-2 font-bold text-[#1E1B4B] text-lg">
             <Utensils className="w-4 h-4 text-[#6D28D9]" /> Daily Breakfast
          </div>
        </div>
      </div>

      {/* About */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold serif text-[#1E1B4B]">About this trip</h3>
        <p className="text-[#1E1B4B]/70 leading-loose text-lg font-medium">
          Experience the vibrant duality of Pattaya in this comprehensive 7-day expedition. From the neon pulse of the city's famous nightlife and shows to the serene turquoise waters of Coral Island, this tour is curated for the traveler who wants it all. You will explore cultural landmarks like the Big Buddha, navigate the traditional Floating Market, and enjoy ample leisure time. 
          <br /><br />
          Stay comfortably at the Hiso Hotel with daily breakfast included, and let our local team handle every transfer and ticket.
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold serif text-[#1E1B4B]">Trip Highlights</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4 items-start p-4 bg-[#F5F3FF]/50 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
              <Ship className="w-5 h-5 text-[#6D28D9]" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E1B4B] text-sm mb-1">Coral Island Speedboat</h4>
              <p className="text-[#1E1B4B]/60 text-xs leading-relaxed">
                Adrenaline-fueled transfer to pristine Koh Larn with Indian lunch included.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start p-4 bg-[#F5F3FF]/50 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
              <Waves className="w-5 h-5 text-[#6D28D9]" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E1B4B] text-sm mb-1">Floating Market</h4>
              <p className="text-[#1E1B4B]/60 text-xs leading-relaxed">
                Traditional rowing boat experience through the cultural waterways.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start p-4 bg-[#F5F3FF]/50 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
              <Moon className="w-5 h-5 text-[#6D28D9]" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E1B4B] text-sm mb-1">Nightlife & Shows</h4>
              <p className="text-[#1E1B4B]/60 text-xs leading-relaxed">
                Includes tickets to the 89 Russian Show and Honey Massage experience.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start p-4 bg-[#F5F3FF]/50 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
              <Landmark className="w-5 h-5 text-[#6D28D9]" />
            </div>
            <div>
              <h4 className="font-bold text-[#1E1B4B] text-sm mb-1">Cultural Landmarks</h4>
              <p className="text-[#1E1B4B]/60 text-xs leading-relaxed">
                Guided visits to Big Buddha, View Point, and Gems Gallery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Itinerary Accordion */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold serif text-[#1E1B4B]">What you'll do</h3>
        <div className="border-t border-[#1E1B4B]/10">
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