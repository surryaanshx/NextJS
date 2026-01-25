import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BookingWidget from '../../../components/BookingWidget';
import TripDetails from '../../../components/TripDetails';
import { MapPin, Star, Share2, Heart } from 'lucide-react';

export default function PattayaPage() {
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

         {/* Gallery */}
         <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[50vh] min-h-[400px] mb-16 rounded-3xl p-2 bg-white shadow-xl shadow-[#1E1B4B]/5 border border-[#1E1B4B]/5">
            <div className="col-span-1 md:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
              <img 
                src="/images/pattaya/gallery/floating-market.png" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Pattaya Floating Market"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="col-span-1 md:col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
               <img 
                src="/images/pattaya/gallery/coral-island.png" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Coral Island Speedboat"
              />
            </div>
            <div className="col-span-1 md:col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
               <img 
                src="/images/pattaya/gallery/hotel-pool.png" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Hiso Hotel Pool"
              />
            </div>
            <div className="col-span-1 md:col-span-2 row-span-1 relative rounded-2xl overflow-hidden group">
               <img 
                src="/images/pattaya/gallery/big-buddha.png" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Big Buddha Pattaya"
              />
              <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-lg">
                Show all photos
              </button>
            </div>
         </div>

         {/* Content Grid */}
         <div className="grid lg:grid-cols-12 gap-12 relative">
           {/* Left Column - Details */}
           <div className="lg:col-span-8">
             <TripDetails />
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