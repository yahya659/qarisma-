"use client";

import React from 'react';

export default function ExploreAboutUs() {
  return (
    <section className="relative min-h-screen w-full font-sans flex items-center justify-center overflow-hidden py-20">
      
      {/* الخلفية الضبابية */}
      <div className="absolute inset-0 bg-[#F2F2F2]/50 backdrop-blur-[120px] -z-10" />
      
      <div className="w-full flex flex-col items-center">
        
        {/* العنوان الرئيسي */}
        <h1 className="text-4xl md:text-[70px] font-bold text-[#6366F1] tracking-tight mb-16 text-center px-4">
          Explore more about us!
        </h1>

     
        <div className="w-full flex items-center justify-center gap-2 md:gap-6 lg:gap-10 px-10">
          
          {/* الدائرة 1: users */}
          <div className="flex-none w-40 h-40 md:w-56 md:h-56 rounded-full bg-[#D6A1B9] flex flex-col items-center justify-center shadow-xl transform hover:scale-105 transition-all duration-300">
            <span className="text-2xl md:text-4xl font-extrabold text-[#6366F1]">50,000</span>
            <span className="text-lg md:text-2xl font-bold text-[#6366F1]">users</span>
          </div>

          {/* الدائرة 2: Articles (الأكبر) */}
          <div className="flex-none w-56 h-56 md:w-[320px] md:h-[320px] rounded-full bg-[#6366F1] flex flex-col items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-300 z-10">
            <span className="text-3xl md:text-5xl font-extrabold text-white">50,000</span>
            <span className="text-xl md:text-3xl font-bold text-white">Articles</span>
          </div>

          {/* الدائرة 3: News */}
          <div className="flex-none w-36 h-36 md:w-48 md:h-48 rounded-full bg-[#EBC4D2] flex flex-col items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300">
            <span className="text-2xl md:text-3xl font-extrabold text-[#6366F1]">50,000</span>
            <span className="text-lg md:text-2xl font-bold text-[#6366F1]">News</span>
          </div>

          {/* الدائرة 4: Journalists (كبيرة أيضاً) */}
          <div className="flex-none w-56 h-56 md:w-[340px] md:h-[340px] rounded-full bg-[#6366F1] flex flex-col items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-300">
            <span className="text-3xl md:text-5xl font-extrabold text-white">50,000</span>
            <span className="text-xl md:text-3xl font-bold text-white">Journalists</span>
          </div>

        </div>
      </div>
    </section>
  );
}