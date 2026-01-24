import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BookingWidget from '../../../components/BookingWidget';
import TripDetails from '../../../components/TripDetails';
import { MapPin, Star } from 'lucide-react';

export default function PattayaPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <div className="pt-52 pb-48 px-6 md:px-8 max-w-7xl mx-auto">
         <div className="flex flex-col gap-4 mb-8">
           <div className="flex items-center gap-2 text-[#6D28D9] font-bold text-xs uppercase tracking-widest">
             <MapPin className="w-4 h-4" />
             <span>Thailand</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-bold serif text-[#1E1B4B]">The Pattaya Elite Escape</h1>
           <div className="flex items-center gap-4 text-sm font-medium text-[#1E1B4B]/60">
             <div className="flex gap-1">
               {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />)}
             </div>
             <span>4.9 (128 Reviews)</span>
           </div>
         </div>

         {/* Gallery */}
         <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[50vh] min-h-[400px] mb-12">
            <div className="col-span-1 md:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1599696016147-79754f9a74a3?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Pattaya Floating Market"
              />
            </div>
            <div className="col-span-1 md:col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
               <img 
                src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Coral Island Speedboat"
              />
            </div>
            <div className="col-span-1 md:col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
               <img 
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Hiso Hotel Pool"
              />
            </div>
            <div className="col-span-1 md:col-span-2 row-span-1 relative rounded-2xl overflow-hidden group">
               <img 
                src="https://images.unsplash.com/photo-1580213898020-5629f6355447?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Big Buddha Pattaya"
              />
              <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                Show all photos
              </button>
            </div>
         </div>

         {/* Content Grid */}
         <div className="grid lg:grid-cols-12 gap-12">
           <div className="lg:col-span-8">
             <TripDetails />
           </div>
           <div className="lg:col-span-4">
             <BookingWidget />
           </div>
         </div>
      </div>
      
      <Footer />
    </div>
  );
}