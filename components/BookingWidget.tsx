'use client';
import React, { useState, useEffect } from 'react';
import { Minus, Plus, Check, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DateOption {
  date: string;
  seatsLeft: number;
}

const BookingWidget = () => {
  const [selectedDate, setSelectedDate] = useState<number>(0);
  const [guests, setGuests] = useState(1);
  const { t } = useLanguage();

  const dates: DateOption[] = t('booking.dates');
  const maxSeats = dates[selectedDate].seatsLeft;

  useEffect(() => {
    if (guests > maxSeats) {
      setGuests(maxSeats);
    }
  }, [selectedDate, maxSeats, guests]);

  return (
    <div className="bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(109,40,217,0.15)] p-5 md:p-6 w-full relative overflow-hidden group">
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 border-[3px] border-transparent rounded-3xl [background:linear-gradient(white,white)_padding-box,linear-gradient(135deg,#6D28D9_0%,#F5F3FF_50%,#1E40AF_100%)_border-box] pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex flex-col gap-0.5 mb-5">
          <div className="flex items-center gap-2 text-[#6D28D9] font-black text-[9px] uppercase tracking-widest">
            <Sparkles className="w-3 h-3" /> {t('booking.bestPrice')}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#1E1B4B] font-sans tracking-tight">₹17,999</span>
            <span className="text-xs text-[#1E1B4B]/60 font-medium line-through">₹22,000</span>
          </div>
        </div>

        <div className="space-y-2 mb-5">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#1E1B4B]">{t('booking.selectDates')}</label>
          {dates.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDate(idx)}
              className={`w-full flex justify-between items-center p-3 rounded-xl border transition-all duration-300 ${
                selectedDate === idx 
                  ? 'border-[#6D28D9] bg-[#F5F3FF]' 
                  : 'border-[#1E1B4B]/5 hover:border-[#6D28D9]/30 hover:bg-gray-50'
              }`}
            >
              <div className="text-left">
                <div className={`font-bold text-xs ${selectedDate === idx ? 'text-[#6D28D9]' : 'text-[#1E1B4B]'}`}>
                  {option.date}
                </div>
                <div className="text-[9px] text-[#1E1B4B]/50 mt-0.5 font-bold uppercase tracking-wide">
                  {`${option.seatsLeft} ${t('booking.seatsLeft')}`}
                </div>
              </div>
              {selectedDate === idx ? (
                <div className="w-5 h-5 bg-[#6D28D9] rounded-full flex items-center justify-center shadow-lg shadow-[#6D28D9]/30">
                  <Check className="w-3 h-3 text-white" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border border-[#1E1B4B]/10" />
              )}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center py-4 border-t border-[#1E1B4B]/5 mb-4">
          <span className="font-bold text-[#1E1B4B] text-sm">{t('booking.guests')}</span>
          <div className="flex items-center gap-3 bg-[#F5F3FF] rounded-full p-1 border border-[#1E1B4B]/5">
            <button 
              onClick={() => setGuests(Math.max(1, guests - 1))}
              disabled={guests <= 1}
              className="w-7 h-7 rounded-full bg-white text-[#1E1B4B] flex items-center justify-center shadow-sm hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-3 text-center font-bold text-xs">{guests}</span>
            <button 
              onClick={() => setGuests(Math.min(maxSeats, guests + 1))}
              disabled={guests >= maxSeats}
              className="w-7 h-7 rounded-full bg-white text-[#1E1B4B] flex items-center justify-center shadow-sm hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs font-medium text-[#1E1B4B]/80 px-1">
            <span>{t('booking.totalPrice')} ({guests} pax)</span>
            <span className="font-bold text-base">₹{(17999 * guests).toLocaleString()}</span>
          </div>

          <button className="w-full bg-gradient-to-r from-[#FA4D3F] to-[#D93426] hover:to-[#B91C1C] text-white font-bold py-3.5 rounded-xl transition-all shadow-xl shadow-[#FA4D3F]/30 hover:shadow-[#FA4D3F]/40 hover:-translate-y-0.5 text-xs uppercase tracking-widest relative overflow-hidden">
             <span className="relative z-10">{t('booking.instantBook')}</span>
             <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        <div className="flex gap-2 mt-4">
          <button className="flex-1 py-2.5 bg-white border border-[#1E1B4B]/10 text-[#1E1B4B] rounded-lg text-[9px] font-bold uppercase tracking-wider hover:bg-[#F5F3FF] hover:border-[#6D28D9]/30 transition-colors">
            {t('booking.enquire')}
          </button>
          <button className="flex-1 py-2.5 bg-white border border-[#1E1B4B]/10 text-[#1E1B4B] rounded-lg text-[9px] font-bold uppercase tracking-wider hover:bg-[#F5F3FF] hover:border-[#6D28D9]/30 transition-colors">
            {t('booking.whatsapp')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
