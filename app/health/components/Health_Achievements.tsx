import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import React from "react";

export default function Health_Achievements() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative z-10">
        <div className="mb-16">
          <h2 className="text-[64px] font-extrabold text-white text-center mb-8 drop-shadow-md">
            Health& Achievements
          </h2>

          <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item, idx) => (
              <div
                key={item}
                className="relative h-[623.999267578125] overflow-hidden shadow-2xl group cursor-pointer border border-purple-400/50"
              >
                <img
                  src={
                    idx % 2 === 0
                      ? "/images/health/health3.jpg"
                      : "/images/health/health3.jpg"
                  }
                  className="w-full h-[250px] md:h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Achievement Video"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#402A7A]/90 via-[#402A7A]/40 to-transparent" /> */}

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#6953F5]/80 backdrop-blur-sm border-2 border-[#F57FA0] flex items-center justify-center group-hover:bg-[#F57FA0]/90 group-hover:border-white transition-all shadow-xl">
                    <Play
                      className="text-white ml-1"
                      size={28}
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bg-[#5D5FEF6E] top-80 left-0 w-full p-6 text-white">
                  <p className="text-[24px] text-[#F178B6] font-bold   mb-3">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole,
                    we believe that reality and maturity are core for truth.
                  </p>
                  <button className="text-white font-extrabold text-[20px]   tracking-wider hover:text-[#F57FA0] transition-colors border-b-2 border-transparent hover:border-[#F57FA0]">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
          {/* Pagination */}
        <div className="flex justify-center items-center gap-3 py-8">
          <button className="text-white hover:text-[#F57FA0]"><ChevronLeft size={24} strokeWidth={3} /></button>
          <button className="w-10 h-10 rounded-full bg-[#6953F5] text-white font-bold flex items-center justify-center shadow-lg">1</button>
          <button className="w-10 h-10 rounded-full bg-[#A284D7] text-white font-bold flex items-center justify-center hover:bg-[#9271CC] transition-colors shadow-md">2</button>
          <button className="w-10 h-10 rounded-full bg-[#A284D7] text-white font-bold flex items-center justify-center hover:bg-[#9271CC] transition-colors shadow-md">3</button>
          <button className="text-white hover:text-[#F57FA0]"><ChevronRight size={24} strokeWidth={3} /></button>
        </div>
      </main>
    </>
  );
}
