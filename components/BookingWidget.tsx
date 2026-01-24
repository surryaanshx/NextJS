'use client';
import React, { useState, useEffect } from 'react';
import { Minus, Plus, Check } from 'lucide-react';

interface DateOption {
  date: string;
  seatsLeft: number;
}

const dates: DateOption[] = [
  { date: '8 - 14 Feb \'26', seatsLeft: 3 },
  { date: '22 - 28 Feb \'26', seatsLeft: 7 },
];

const BookingWidget = () => {
  const [selectedDate, setSelectedDate] = useState<number>(0);
  const [guests, setGuests] = useState(1);

  const maxSeats = dates[selectedDate].seatsLeft;

  // Ensure guests don't exceed max seats when date changes
  useEffect(() => {
    if (guests > maxSeats) {
      setGuests(maxSeats);
    }
  }, [selectedDate, maxSeats, guests]);

  return (
    <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-[#1E1B4B]/5 p-6 md:p-8 sticky top-28 z-30 transition-all duration-500 h-fit">
      <div className="flex items-baseline gap-2 mb-8">
        <span className="text-sm text-[#1E1B4B]/60 font-medium">From</span>
        <span className="text-3xl font-bold text-[#1E1B4B] font-sans">₹17,999</span>
        <span className="text-sm text-[#1E1B4B]/60 font-medium">/person</span>
      </div>

      <div className="space-y-4 mb-8">
        {dates.map((option, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedDate(idx)}
            className={`w-full flex justify-between items-center p-4 rounded-xl border transition-all duration-300 ${
              selectedDate === idx 
                ? 'border-[#6D28D9] bg-[#6D28D9]/5 ring-1 ring-[#6D28D9]' 
                : 'border-[#1E1B4B]/10 hover:border-[#6D28D9]/50 hover:bg-white'
            }`}
          >
            <div className="text-left">
              <div className={`font-bold ${selectedDate === idx ? 'text-[#6D28D9]' : 'text-[#1E1B4B]'}`}>
                {option.date}
              </div>
              <div className="text-xs text-[#1E1B4B]/50 mt-1 font-medium">
                {`${option.seatsLeft} seats left`}
              </div>
            </div>
            {selectedDate === idx && (
              <div className="w-5 h-5 bg-[#6D28D9] rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
            )}
            {selectedDate !== idx && (
              <div className="w-5 h-5 rounded-full border-2 border-[#1E1B4B]/20" />
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center py-6 border-t border-[#1E1B4B]/5 mb-6">
        <span className="font-bold text-[#1E1B4B]">Guests</span>
        <div className="flex items-center gap-4 bg-[#F5F3FF] rounded-full p-1.5">
          <button 
            onClick={() => setGuests(Math.max(1, guests - 1))}
            disabled={guests <= 1}
            className="w-8 h-8 rounded-full bg-white text-[#1E1B4B] flex items-center justify-center shadow-sm hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-4 text-center font-bold text-sm">{guests}</span>
          <button 
            onClick={() => setGuests(Math.min(maxSeats, guests + 1))}
            disabled={guests >= maxSeats}
            className="w-8 h-8 rounded-full bg-white text-[#1E1B4B] flex items-center justify-center shadow-sm hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <button className="w-full bg-[#FA4D3F] hover:bg-[#D93426] text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-[#FA4D3F]/20 text-sm uppercase tracking-widest">
        Book Now
      </button>

      <div className="flex gap-3 mt-6">
        <button className="flex-1 py-3 bg-[#F5F3FF] text-[#1E1B4B] rounded-lg text-xs font-bold hover:bg-[#6D28D9]/10 transition-colors">
          Send Enquiry
        </button>
        <button className="flex-1 py-3 bg-[#F5F3FF] text-[#1E1B4B] rounded-lg text-xs font-bold hover:bg-[#6D28D9]/10 transition-colors">
          WhatsApp Us
        </button>
      </div>
    </div>
  );
};

export default BookingWidget;