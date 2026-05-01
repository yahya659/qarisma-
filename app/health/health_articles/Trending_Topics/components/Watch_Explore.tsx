import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Watch_Explore() {
  return (
    <>
      {" "}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-16 mb-4 text-center">
        <h2 className="text-white text-[64px]   font-extrabold mb-10 drop-shadow-md">
          Watch & Explore
        </h2>

        <div className="flex items-center justify-center gap-2 md:gap-8 max-w-4xl mx-auto">
          {/* Left Arrow */}
          <button className="text-white hover:text-pink-300 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/20">
            <ChevronLeft size={40} strokeWidth={3} />
          </button>

          {/* Image Slider Mockup */}
          <div className="flex items-center justify-center gap-3 md:gap-6 w-full">
            {/* Left Image */}
            <div className="w-24 md:w-56 h-28 md:h-40 rounded-xl overflow-hidden relative shadow-lg border-b-[6px] border-[#F57FA0] opacity-80">
              <img
                src="/images/health/health6.jpg"
                alt="Hallway left"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#F57FA0]/20 mix-blend-overlay"></div>
            </div>

            {/* Center Image (Active) */}
            <div className="w-32 md:w-72 h-36 md:h-48 rounded-xl overflow-hidden relative shadow-2xl border-b-[6px] border-[#F57FA0] z-10 transform scale-105">
              <img
                src="/images/health/health6.jpg"
                alt="Hallway center"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Image */}
            <div className="w-24 md:w-56 h-28 md:h-40 rounded-xl overflow-hidden relative shadow-lg border-b-[6px] border-[#F57FA0] opacity-80">
              <img
                src="/images/health/health6.jpg"
                alt="Hallway right"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#F57FA0]/20 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Right Arrow */}
          <button className="text-white hover:text-pink-300 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/20">
            <ChevronRight size={40} strokeWidth={3} />
          </button>
        </div>
      </section>
           {/* Pagination */}
        <div className="flex justify-center items-center gap-3 py-8">
          <button className="text-white hover:text-[#F57FA0]"><ChevronLeft size={24} strokeWidth={3} /></button>
          <button className="w-10 h-10 rounded-full bg-[#6953F5] text-white font-bold flex items-center justify-center shadow-lg">1</button>
          <button className="w-10 h-10 rounded-full bg-[#A284D7] text-white font-bold flex items-center justify-center hover:bg-[#9271CC] transition-colors shadow-md">2</button>
          <button className="w-10 h-10 rounded-full bg-[#A284D7] text-white font-bold flex items-center justify-center hover:bg-[#9271CC] transition-colors shadow-md">3</button>
          <button className="text-white hover:text-[#F57FA0]"><ChevronRight size={24} strokeWidth={3} /></button>
        </div>

    </>
  );
}
