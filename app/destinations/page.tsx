import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowRight, Lock } from 'lucide-react';

export default function DestinationsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <div className="pt-52 pb-48 px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#1E1B4B] font-sans">Destinations</h1>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Pattaya - Active */}
            <a href="/destinations/pattaya" className="group block relative aspect-[4/5] overflow-hidden rounded-3xl cursor-pointer shadow-2xl shadow-[#1E1B4B]/10 hover:-translate-y-2 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1595232707248-35d6bb3a0c28?auto=format&fit=crop&q=80&w=2000" 
                alt="Pattaya City"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em]">Thailand</span>
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#6D28D9] transition-colors">
                        <ArrowRight className="w-4 h-4 text-white group-hover:text-[#6D28D9]" />
                    </div>
                  </div>
                  <h2 className="text-2xl serif font-bold text-white">Pattaya City</h2>
                </div>
              </div>
            </a>
            
            {/* Coming Soon 1 */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#F5F3FF] border border-[#1E1B4B]/5 flex flex-col items-center justify-center text-center p-6 hover:bg-[#F5F3FF]/80 transition-colors">
                 <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                    <Lock className="w-5 h-5 text-[#1E1B4B]/30" />
                 </div>
                 <span className="text-[#1E1B4B]/40 font-bold uppercase tracking-widest text-[10px]">Coming Soon</span>
            </div>

            {/* Coming Soon 2 */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#F5F3FF] border border-[#1E1B4B]/5 flex flex-col items-center justify-center text-center p-6 hover:bg-[#F5F3FF]/80 transition-colors">
                 <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                    <Lock className="w-5 h-5 text-[#1E1B4B]/30" />
                 </div>
                 <span className="text-[#1E1B4B]/40 font-bold uppercase tracking-widest text-[10px]">Coming Soon</span>
            </div>

            {/* Coming Soon 3 */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#F5F3FF] border border-[#1E1B4B]/5 flex flex-col items-center justify-center text-center p-6 hover:bg-[#F5F3FF]/80 transition-colors">
                 <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                    <Lock className="w-5 h-5 text-[#1E1B4B]/30" />
                 </div>
                 <span className="text-[#1E1B4B]/40 font-bold uppercase tracking-widest text-[10px]">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}