'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BookingWidget from '../../../components/BookingWidget';
import TripDetails from '../../../components/TripDetails';
import Image from 'next/image';
import { MapPin, Star, Share2, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export default function PattayaPage() {
  const { t, language } = useLanguage();

  // Data Definition
  const stats = t('pattayaPage.stats');
  const about = t('pattayaPage.aboutHtml');
  const highlights = t('pattayaPage.highlights');
  const itinerary = t('pattayaPage.itinerary');

  // Image Loading State Management
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  // Mobile Gallery State
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    { src: "/images/pattaya/gallery/floating-market.jpg", title: t('pattayaPage.gallery.floatingMarket'), tag: t('pattayaPage.gallery.floatingTag'), id: 'img1' },
    { src: "/images/pattaya/gallery/coral-island.jpg", title: t('pattayaPage.gallery.coralIsland'), tag: t('pattayaPage.gallery.coralTag'), id: 'img2' },
    { src: "/images/pattaya/gallery/big-buddha.jpg", title: t('pattayaPage.gallery.bigBuddha'), tag: t('pattayaPage.gallery.bigBuddhaTag'), id: 'img3' },
    { src: "/images/pattaya/gallery/hotel.jpg", title: t('pattayaPage.gallery.hotel'), tag: t('pattayaPage.gallery.hotelTag'), id: 'img4' },
    { src: "/images/pattaya/gallery/markets.jpg", title: t('pattayaPage.gallery.nightMarket'), tag: t('pattayaPage.gallery.nightTag'), id: 'img5' },
  ];

  // Auto-advance slider for mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div key={language} className="bg-[#FAFAFA] min-h-screen relative animate-fade-in">
      <Navbar />
      
      {/* Global Grain Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise-lines.png")` }}></div>

      {/* Aurora Ambient Backgrounds */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#6D28D9]/10 to-[#FA4D3F]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
      <div className="fixed top-[40%] left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#1E40AF]/10 to-[#6D28D9]/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none z-0" />

      {/* Header Section */}
      <div className="pt-32 md:pt-48 pb-20 md:pb-48 px-6 md:px-8 max-w-7xl mx-auto relative z-10">
         <div className="flex flex-col gap-6 mb-12">
           <div className="flex justify-between items-end">
             <div className="space-y-4">
               <div className="flex items-center gap-2 text-[#6D28D9] font-black text-xs uppercase tracking-widest bg-white px-3 py-1.5 rounded-full w-fit shadow-sm border border-[#6D28D9]/10 animate-fade-in opacity-0" style={{ animationDelay: '0ms' }}>
                 <MapPin className="w-3.5 h-3.5" />
                 <span>{t('pattayaPage.tag')}</span>
               </div>
               <h1 className="text-4xl md:text-7xl font-bold font-sans text-[#1E1B4B] leading-tight animate-fade-up opacity-0" style={{ animationDelay: '100ms' }}>
                 {t('pattayaPage.title')} <br/>
                 <span className="serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#1E40AF]">{t('pattayaPage.titleItalic')}</span>
               </h1>
             </div>
             <div className="hidden md:flex gap-3 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
               <button className="p-3 rounded-full bg-white border border-[#1E1B4B]/5 text-[#1E1B4B] hover:bg-[#F5F3FF] hover:text-[#6D28D9] transition-colors shadow-sm">
                 <Share2 className="w-5 h-5" />
               </button>
               <button className="p-3 rounded-full bg-white border border-[#1E1B4B]/5 text-[#1E1B4B] hover:bg-[#F5F3FF] hover:text-[#FA4D3F] transition-colors shadow-sm">
                 <Heart className="w-5 h-5" />
               </button>
             </div>
           </div>

           <div className="flex items-center gap-6 text-sm font-medium text-[#1E1B4B]/60 border-t border-[#1E1B4B]/5 pt-6 animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
             <div className="flex items-center gap-2">
               <div className="flex gap-0.5">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />)}
               </div>
               <span className="text-[#1E1B4B] font-bold">4.9</span>
               <span>{t('pattayaPage.reviews')}</span>
             </div>
             <span className="w-1 h-1 rounded-full bg-[#1E1B4B]/20" />
             <span>{t('pattayaPage.durationLabel')}</span>
           </div>
         </div>

         {/* DESKTOP GALLERY (Visible only on md+) */}
         <div className="hidden md:grid grid-cols-1 md:grid-cols-12 grid-rows-none md:grid-rows-2 gap-4 h-auto md:h-[600px] mb-16 rounded-3xl p-3 bg-white shadow-xl shadow-[#1E1B4B]/5 border border-[#1E1B4B]/5 animate-fade-up opacity-0" style={{ animationDelay: '400ms' }}>
            {/* 1. Large Main (Left) - 6 cols, 2 rows */}
            <div className="col-span-1 md:col-span-6 row-span-2 relative rounded-2xl overflow-hidden group min-h-[250px] md:min-h-[300px] bg-[#F5F3FF]">
              <Image 
                src={galleryImages[0].src}
                fill
                priority
                onLoad={() => handleImageLoad('img1')}
                className={`object-cover transition-all duration-1000 ease-out group-hover:scale-[1.03]
                  ${loadedImages['img1'] ? 'scale-100 blur-0 opacity-100' : 'scale-110 blur-xl opacity-0'}
                `}
                alt={galleryImages[0].title}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">{galleryImages[0].tag}</p>
                 <h3 className="text-xl serif font-bold">{galleryImages[0].title}</h3>
              </div>
            </div>

            {/* 2. Top Middle - 3 cols */}
            <div className="col-span-1 md:col-span-3 row-span-1 relative rounded-2xl overflow-hidden group min-h-[200px] bg-[#F5F3FF]">
               <Image 
                src={galleryImages[1].src}
                fill
                onLoad={() => handleImageLoad('img2')}
                className={`object-cover transition-all duration-1000 ease-out group-hover:scale-[1.03]
                   ${loadedImages['img2'] ? 'scale-100 blur-0 opacity-100' : 'scale-110 blur-xl opacity-0'}
                `}
                alt={galleryImages[1].title}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">{galleryImages[1].tag}</p>
                 <h3 className="text-xl serif font-bold">{galleryImages[1].title}</h3>
              </div>
            </div>

            {/* 3. Top Right - 3 cols (Big Buddha) */}
            <div className="col-span-1 md:col-span-3 row-span-1 relative rounded-2xl overflow-hidden group min-h-[200px] bg-[#F5F3FF]">
               <Image 
                src={galleryImages[2].src}
                fill
                onLoad={() => handleImageLoad('img3')}
                className={`object-cover transition-all duration-1000 ease-out group-hover:scale-[1.03]
                   ${loadedImages['img3'] ? 'scale-100 blur-0 opacity-100' : 'scale-110 blur-xl opacity-0'}
                `}
                alt={galleryImages[2].title}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 pointer-events-none" />
               <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">{galleryImages[2].tag}</p>
                 <h3 className="text-xl serif font-bold">{galleryImages[2].title}</h3>
              </div>
            </div>

            {/* 4. Bottom Middle - 3 cols */}
            <div className="col-span-1 md:col-span-3 row-span-1 relative rounded-2xl overflow-hidden group min-h-[200px] bg-[#F5F3FF]">
               <Image 
                src={galleryImages[3].src}
                fill
                onLoad={() => handleImageLoad('img4')}
                className={`object-cover transition-all duration-1000 ease-out group-hover:scale-[1.03]
                   ${loadedImages['img4'] ? 'scale-100 blur-0 opacity-100' : 'scale-110 blur-xl opacity-0'}
                `}
                alt={galleryImages[3].title}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">{galleryImages[3].tag}</p>
                 <h3 className="text-xl serif font-bold">{galleryImages[3].title}</h3>
              </div>
            </div>

            {/* 5. Bottom Right - 3 cols */}
            <div className="col-span-1 md:col-span-3 row-span-1 relative rounded-2xl overflow-hidden group min-h-[200px] bg-[#F5F3FF]">
               <Image 
                src={galleryImages[4].src}
                fill
                onLoad={() => handleImageLoad('img5')}
                className={`object-cover transition-all duration-1000 ease-out group-hover:scale-[1.03]
                   ${loadedImages['img5'] ? 'scale-100 blur-0 opacity-100' : 'scale-110 blur-xl opacity-0'}
                `}
                alt={galleryImages[4].title}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 pointer-events-none" />
               <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">{galleryImages[4].tag}</p>
                 <h3 className="text-xl serif font-bold">{galleryImages[4].title}</h3>
              </div>
            </div>
         </div>

         {/* MOBILE GALLERY (Slider - Visible only on mobile) */}
         <div className="md:hidden mb-12 animate-fade-up opacity-0" style={{ animationDelay: '400ms' }}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-xl shadow-[#1E1B4B]/10 group">
              {galleryImages.map((img, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    index === currentSlide ? 'translate-x-0 opacity-100 z-20' : 
                    index < currentSlide ? '-translate-x-full opacity-0 z-10' : 'translate-x-full opacity-0 z-10'
                  }`}
                >
                  <Image 
                    src={img.src} 
                    fill 
                    className="object-cover" 
                    alt={img.title} 
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                     <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-80 bg-white/20 backdrop-blur-md px-2 py-1 rounded w-fit">{img.tag}</p>
                     <h3 className="text-3xl serif font-bold leading-none">{img.title}</h3>
                  </div>
                </div>
              ))}
              
              {/* Manual Navigation Controls */}
              <button 
                onClick={(e) => { e.preventDefault(); prevSlide(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white active:scale-95 transition-all"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); nextSlide(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white active:scale-95 transition-all"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Progress Indicators */}
              <div className="absolute top-6 right-6 z-30 flex gap-1.5">
                {galleryImages.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`} 
                  />
                ))}
              </div>
            </div>
         </div>

         {/* Content Grid */}
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
           {/* Left Column - Details */}
           <div className="lg:col-span-8 order-2 lg:order-1">
             <TripDetails 
                stats={stats}
                about={about}
                highlights={highlights}
                itinerary={itinerary}
             />
           </div>

           {/* Right Column - Booking Widget */}
           <div className="lg:col-span-4 relative h-full order-1 lg:order-2">
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
