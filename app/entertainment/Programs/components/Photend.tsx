"use client";
import React, { useState } from 'react';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

// مكون الفراشة (SVG) لاستخدامه كعلامة مائية وزخرفة
const Butterfly = ({ className, style }) => (
  <svg 
    viewBox="0 0 512 512" 
    className={className} 
    style={style} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M465.1 127c-38.3-25.1-84.4-12.7-111.4 14.3-15.6 15.6-26.6 34.6-32.9 55.2-1.3 4.2-7.1 4.2-8.4 0-6.3-20.6-17.3-39.6-32.9-55.2-27-27-73.1-39.4-111.4-14.3-35.3 23.2-46.3 71.9-25.7 108.6 14.5 25.8 40.5 45.6 69.9 53.6 4.9 1.3 4.9 8.2 0 9.5-29.4 8-55.4 27.8-69.9 53.6-20.6 36.7-9.6 85.4 25.7 108.6 38.3 25.1 84.4 12.7 111.4-14.3 15.6-15.6 26.6-34.6 32.9-55.2 1.3-4.2 7.1-4.2 8.4 0 6.3 20.6 17.3 39.6 32.9 55.2 27 27 73.1 39.4 111.4 14.3 35.3-23.2 46.3-71.9 25.7-108.6-14.5-25.8-40.5-45.6-69.9-53.6-4.9-1.3-4.9-8.2 0-9.5 29.4-8 55.4-27.8 69.9-53.6 20.6-36.8 9.6-85.5-25.7-108.7z" />
  </svg>
);

export default function Photend() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center py-12 px-4 md:px-8 overflow-hidden font-sans">
      
      {/* Background Decorative Butterflies */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <Butterfly className="absolute top-10 left-10 w-48 h-48 text-white opacity-10 -rotate-12" style={undefined} />
        <Butterfly className="absolute top-1/4 right-20 w-64 h-64 text-pink-500 opacity-[0.08] rotate-45" style={undefined} />
        <Butterfly className="absolute bottom-10 right-1/4 w-56 h-56 text-[#a379d4] opacity-20 -rotate-45" style={undefined} />
        <Butterfly className="absolute bottom-32 left-1/4 w-32 h-32 text-white opacity-10 rotate-12" style={undefined} />
      </div>

      {/* Main Content Card */}
      <div className="relative w-full max-w-[1100px] h-[550px] md:h-[650px] bg-[#0c3c56] shadow-2xl z-10 flex overflow-hidden">
        
        {/* Background Image inside the Card */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-3xl opacity-90 mix-blend-lighten md:mix-blend-normal">
          <img 
            src="/images/entertainment/entertainment1.jpg" 
            alt="Cinematic Lantern Street" 
            className="w-full h-full object-cover"
          />
          {/* Gradient edges to blend the image perfectly into the dark teal background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c3c56] via-transparent to-[#0c3c56] opacity-80 md:opacity-100 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c3c56]/50 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Floating Butterflies Over Image & Card Right Side */}
        <div className="absolute inset-0 pointer-events-none z-10">
           <Butterfly className="absolute bottom-[20%] right-[10%] w-32 h-32 text-[#dcaeed] opacity-30 -rotate-12 blur-[1px]" style={undefined} />
           <Butterfly className="absolute bottom-[40%] right-[20%] w-24 h-24 text-white opacity-20 rotate-45" style={undefined} />
           <Butterfly className="absolute bottom-[10%] right-[25%] w-16 h-16 text-[#e8b5d7] opacity-40 rotate-12" style={undefined} />
           <Butterfly className="absolute top-[30%] right-[5%] w-40 h-40 text-[#cba5f3] opacity-20 -rotate-45 blur-[2px]" style={undefined} />
        </div>

        {/* Text Content Overlay */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="max-w-5xl mx-auto w-full px-8 md:px-24">
            <div className="max-w-2xl relative">
              <h1 className="text-3xl md:text-[42px] font-black text-[#ff68a5] mb-6 tracking-wide drop-shadow-md leading-tight">
                JOY & Happiness
              </h1>
              <p className="text-white text-[19px] md:text-[22px] font-bold leading-[1.6] mb-10 drop-shadow-lg">
                It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
              </p>
              <button className="bg-gradient-to-r from-[#6b62ff] to-[#5b67f6] hover:brightness-110 text-white px-10 py-3.5 rounded-xl font-bold text-lg shadow-[0_4px_15px_rgba(107,98,255,0.4)] transition-all transform hover:scale-[1.02]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Container */}
      <div className="flex items-center justify-center gap-3 md:gap-4 mt-12 z-10 relative">
        {/* Previous Button */}
        <button 
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          className="w-14 h-14 rounded-2xl bg-[#b99bdf]/40 hover:bg-[#b99bdf]/60 backdrop-blur-md text-white flex items-center justify-center transition-colors shadow-sm"
        >
          <ChevronsLeft size={32} strokeWidth={2.5} />
        </button>

        {/* Page Numbers */}
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-14 h-14 rounded-2xl font-black text-3xl flex items-center justify-center transition-all shadow-md
              ${currentPage === page 
                ? 'bg-[#6b62ff] text-white' 
                : 'bg-[#a792de] text-white hover:bg-[#9680cf]'
              }
            `}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button 
          onClick={() => setCurrentPage(prev => Math.min(3, prev + 1))}
          className="w-14 h-14 rounded-2xl bg-[#b99bdf]/40 hover:bg-[#b99bdf]/60 backdrop-blur-md text-white flex items-center justify-center transition-colors shadow-sm"
        >
          <ChevronsRight size={32} strokeWidth={2.5} />
        </button>
      </div>
      
    </div>
  );
}