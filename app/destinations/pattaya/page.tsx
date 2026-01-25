import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BookingWidget from '../../../components/BookingWidget';
import TripDetails from '../../../components/TripDetails';
import Image from 'next/image';
import { MapPin, Star, Share2, Heart } from 'lucide-react';
import { TripStats, TripHighlight, ItineraryDay } from '../../../types';

export default function PattayaPage() {
  
  // Data Definition
  const stats: TripStats = {
    duration: "6N / 7D",
    groupSize: "12 Pax",
    accommodation: "The Hiso Hotel",
    meals: "Breakfast"
  };

  const about = `
    <p>
      Experience the vibrant duality of Pattaya in this comprehensive 7-day expedition. From the neon pulse of the city's famous nightlife and shows to the serene turquoise waters of Coral Island, this tour is curated for the traveler who wants it all. You will explore cultural landmarks like the Big Buddha, navigate the traditional Floating Market, and enjoy ample leisure time. 
      <br /><br />
      Stay comfortably at The Hiso Hotel with daily breakfast included, and let our local team handle every transfer and ticket.
    </p>
  `;

  const highlights: TripHighlight[] = [
    {
      iconName: 'Ship',
      title: 'Coral Island Speedboat',
      description: 'Adrenaline-fueled transfer to pristine Koh Larn with Indian lunch included.'
    },
    {
      iconName: 'Waves',
      title: 'Floating Market',
      description: 'Traditional rowing boat experience through the cultural waterways.'
    },
    {
      iconName: 'Moon',
      title: 'Nightlife & Shows',
      description: 'Includes tickets to the 89 Russian Show and Honey Massage experience.'
    },
    {
      iconName: 'Landmark',
      title: 'Cultural Landmarks',
      description: 'Guided visits to Big Buddha, View Point, and Gems Gallery.'
    }
  ];

  const itinerary: ItineraryDay[] = [
    {
      day: '01',
      title: 'Arrival & The Electric Night',
      image: '/images/pattaya/itinerary/day1.jpg',
      activities: [
        'Pickup from Bangkok Airport to Pattaya.',
        'Check-in at The Hiso Hotel and refreshment.',
        'Evening excursion to the famous 89 Russian Adult Show.',
        'Relaxing Honey Massage experience (only transfer included).'
      ]
    },
    {
      day: '02',
      title: 'Coral Island Expedition',
      image: '/images/pattaya/itinerary/day2.jpg',
      activities: [
        'Speedboat tour to Koh Larn (Coral Island).',
        'Time for swimming, sunbathing, and beach sports.',
        'Authentic Indian Buffet Lunch *included*.',
        'Return transfer to hotel for leisure evening.'
      ]
    },
    {
      day: '03',
      title: 'Wildlife & Waterways',
      image: '/images/pattaya/itinerary/day3.jpg',
      activities: [
        'City tour with private transfers',
        'Visit to the Tiger Park (Transfer only).',
        'Experience at the Gun Shooting range (Transfer only).',
        'Rowing Boat tour (tickets included) at the Pattaya Floating Market.'
      ]
    },
    {
      day: '04',
      title: 'Leisure & Personal Discovery',
      image: '/images/pattaya/itinerary/day4.jpg',
      activities: [
        'Breakfast at The Hiso Hotel.',
        'Full day free at leisure to explore the city at your own pace.',
        'Recommended: Visit Walking Street or Central Pattaya Mall.'
      ]
    },
    {
      day: '05',
      title: 'Cultural Icons',
      image: '/images/pattaya/itinerary/day5.jpg',
      activities: [
        'Spiritual visit to the Big Buddha Temple on the hill.',
        'Panoramic city views from Pattaya View Point.',
        'Exclusive visit to the world-renowned Gems Gallery.'
      ]
    },
    {
      day: '06',
      title: 'Local Life & Markets',
      image: '/images/pattaya/itinerary/day6.jpg',
      activities: [
        'Relaxing morning with breakfast at the hotel.',
        'Day free for optional activities or beach time.',
        'Evening guided tour of local Thai markets for souvenirs and street food.'
      ]
    },
    {
      day: '07',
      title: 'Departure',
      image: '/images/pattaya/itinerary/day7.jpg',
      activities: [
        'Final breakfast and hotel checkout.',
        'Private transfer to Bangkok Airport.',
        'Bon voyage.'
      ]
    }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen relative">
      <Navbar />
      
      {/* Global Grain Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise-lines.png")` }}></div>

      {/* Aurora Ambient Backgrounds - More Vibrant */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#6D28D9]/10 to-[#FA4D3F]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
      <div className="fixed top-[40%] left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#1E40AF]/10 to-[#6D28D9]/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none z-0" />

      {/* Header Section */}
      <div className="pt-48 pb-48 px-6 md:px-8 max-w-7xl mx-auto relative z-10">
         <div className="flex flex-col gap-6 mb-12">
           <div className="flex justify-between items-end">
             <div className="space-y-4">
               <div className="flex items-center gap-2 text-[#6D28D9] font-black text-xs uppercase tracking-widest bg-white px-3 py-1.5 rounded-full w-fit shadow-sm border border-[#6D28D9]/10">
                 <MapPin className="w-3.5 h-3.5" />
                 <span>Thailand</span>
               </div>
               <h1 className="text-4xl md:text-7xl font-bold font-sans text-[#1E1B4B] leading-tight">
                 The Pattaya <br/>
                 <span className="serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#1E40AF]">Elite Escape</span>
               </h1>
             </div>
             <div className="hidden md:flex gap-3">
               <button className="p-3 rounded-full bg-white border border-[#1E1B4B]/5 text-[#1E1B4B] hover:bg-[#F5F3FF] hover:text-[#6D28D9] transition-colors shadow-sm">
                 <Share2 className="w-5 h-5" />
               </button>
               <button className="p-3 rounded-full bg-white border border-[#1E1B4B]/5 text-[#1E1B4B] hover:bg-[#F5F3FF] hover:text-[#FA4D3F] transition-colors shadow-sm">
                 <Heart className="w-5 h-5" />
               </button>
             </div>
           </div>

           <div className="flex items-center gap-6 text-sm font-medium text-[#1E1B4B]/60 border-t border-[#1E1B4B]/5 pt-6">
             <div className="flex items-center gap-2">
               <div className="flex gap-0.5">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />)}
               </div>
               <span className="text-[#1E1B4B] font-bold">4.9</span>
               <span>(128 Verified Reviews)</span>
             </div>
             <span className="w-1 h-1 rounded-full bg-[#1E1B4B]/20" />
             <span>6 Nights / 7 Days</span>
           </div>
         </div>

         {/* Gallery - Advanced Magazine Layout - 5 Images */}
         <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-4 h-auto md:h-[600px] mb-16 rounded-3xl p-3 bg-white shadow-xl shadow-[#1E1B4B]/5 border border-[#1E1B4B]/5">
            {/* 1. Large Main (Left) - 6 cols, 2 rows */}
            <div className="col-span-1 md:col-span-6 row-span-2 relative rounded-2xl overflow-hidden group min-h-[300px]">
              <Image 
                src="/images/pattaya/gallery/floating-market.jpg" 
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                alt="Pattaya Floating Market"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">Cultural</p>
                 <h3 className="text-xl serif font-bold">Floating Markets</h3>
              </div>
            </div>

            {/* 2. Top Middle - 3 cols */}
            <div className="col-span-1 md:col-span-3 row-span-1 relative rounded-2xl overflow-hidden group min-h-[200px]">
               <Image 
                src="/images/pattaya/gallery/coral-island.jpg" 
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                alt="Coral Island Speedboat"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">Adventure</p>
                 <h3 className="text-xl serif font-bold">Coral Island</h3>
              </div>
            </div>

            {/* 3. Top Right - 3 cols (Big Buddha) */}
            <div className="col-span-1 md:col-span-3 row-span-1 relative rounded-2xl overflow-hidden group min-h-[200px]">
               <Image 
                src="/images/pattaya/gallery/big-buddha.jpg" 
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                alt="Big Buddha Pattaya"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 pointer-events-none" />
               <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">Spiritual</p>
                 <h3 className="text-xl serif font-bold">Big Buddha</h3>
              </div>
            </div>

            {/* 4. Bottom Middle - 3 cols */}
            <div className="col-span-1 md:col-span-3 row-span-1 relative rounded-2xl overflow-hidden group min-h-[200px]">
               <Image 
                src="/images/pattaya/gallery/hotel.jpg" 
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                alt="Hiso Hotel Pool"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">Relaxation</p>
                 <h3 className="text-xl serif font-bold">The Hiso Hotel</h3>
              </div>
            </div>

            {/* 5. Bottom Right - 3 cols */}
            <div className="col-span-1 md:col-span-3 row-span-1 relative rounded-2xl overflow-hidden group min-h-[200px]">
               <Image 
                src="/images/pattaya/gallery/markets.jpg" 
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                alt="Local Markets"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 pointer-events-none" />
               <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">Vibrant</p>
                 <h3 className="text-xl serif font-bold">Night Market</h3>
              </div>
            </div>
         </div>

         {/* Content Grid */}
         <div className="grid lg:grid-cols-12 gap-12 relative">
           {/* Left Column - Details */}
           <div className="lg:col-span-8">
             <TripDetails 
                stats={stats}
                about={about}
                highlights={highlights}
                itinerary={itinerary}
             />
           </div>

           {/* Right Column - Booking Widget */}
           <div className="lg:col-span-4 relative h-full">
             <div className="sticky top-32 max-h-[calc(100vh-140px)] overflow-y-auto no-scrollbar rounded-2xl pb-4">
               <BookingWidget />
             </div>
           </div>
         </div>
      </div>
      
      <Footer />
    </div>
  );
}