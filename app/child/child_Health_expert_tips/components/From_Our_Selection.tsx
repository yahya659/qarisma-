"use client";

import { ChevronLeft, ChevronRight, Play, Quote } from "lucide-react";
import React, { useState } from "react";

export default function From_Our_Selection() {
  const [activePage, setActivePage] = useState(1);
  return (
    <>
      {" "}
   <section className="px-4 sm:px-6 py-16 bg-[#25153a]/50">
  <div className="max-w-[1367.001953125px] mx-auto">

    <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-center mb-8 sm:mb-12 leading-tight px-2">
   From Our Selection
    </h2>

    <div className="flex flex-col lg:flex-row items-center justify-center gap-6">

      {/* Left Card */}
      <div className="hidden lg:block w-[614.00390625] h-[492.9990234375] w-full max-w-[614px] aspect-[4/3] bg-[#F178B6] border border-white/10 opacity-50 scale-90 relative overflow-hidden">
        <img
          src="/images/child/child5.png"
          className="w-full h-full object-cover"
          alt="side"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Play fill="white" size={40} className="opacity-70" />
        </div>
      </div>

      {/* Main Card */}
      <div className="w-[708.9960327148438] h-[591px] w-full max-w-[708px] aspect-[4/3] bg-[#F178B6] relative overflow-hidden shadow-2xl">
        <img
          src="/images/child/child5.png"
          className="w-full h-full object-cover"
          alt="main video"
        />

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#5D5FEF6E]/43 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <Play fill="white" size={40} />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 bg-[#F178B6]">
          <p className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-medium">
            Learn why balanced meals improve cognitive function and
            physical growth in active students.
          </p>
        </div>
      </div>

      {/* Right Card */}
      <div className="hidden lg:block w-[614.00390625] h-[492.9990234375] w-full max-w-[614px] aspect-[4/3] bg-[#F178B6] border border-white/10 opacity-50 scale-90 relative overflow-hidden">
        <img
          src="/images/child/child5.png"
          className="w-full h-full object-cover"
          alt="side"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Play fill="white" size={40} className="opacity-70" />
        </div>
      </div>

    </div>

    {/* Pagination */}
    <div className="flex justify-center gap-3 sm:gap-4 mt-8 flex-wrap">

      <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10">
        <ChevronLeft size={18} />
      </button>

      <div className="flex gap-2 items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${
              i === 3 ? "bg-pink-400 scale-125" : "bg-white/20"
            }`}
          ></div>
        ))}
      </div>

      <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10">
        <ChevronRight size={18} />
      </button>

    </div>

  </div>
</section>

<section className="px-4 sm:px-6 pt-12 pb-8">

  <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-12 flex-wrap">

    <ChevronLeft className="cursor-pointer opacity-50 hover:opacity-100" />

    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
      {[1, 2, 3].map((num) => (
        <button
          key={num}
          onClick={() => setActivePage(num)}
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-sm sm:text-base md:text-lg font-bold transition-all ${
            activePage === num
              ? "bg-blue-600 shadow-lg shadow-blue-500/40"
              : "bg-white/5 hover:bg-white/10"
          }`}
        >
          {num}
        </button>
      ))}
    </div>

    <ChevronRight className="cursor-pointer opacity-50 hover:opacity-100" />

  </div>

  <hr className="border-white/10 mb-12" />

</section>
    </>
  );
}
