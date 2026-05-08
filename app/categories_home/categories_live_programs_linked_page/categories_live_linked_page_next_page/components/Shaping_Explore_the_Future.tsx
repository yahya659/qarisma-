import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import React from "react";

export default function Shaping_Explore_the_Future() {
  return (
    <>
      <section className="px-4 sm:px-6 py-12 sm:py-16   bg-[#5D5FEF85]/50 w-full mx-auto">
        <div className="text-center mb-10 sm:mb-12 px-2">
          <h2 className="text-[40px]  font-bold mb-2 leading-tight">
            Shaping & Explore more about
          </h2>
          <span className="text-[#F178B6] font-bold text-[48px]">
            our programs
          </span>
        </div>

        <div className="relative flex items-center justify-center gap-4 overflow-hidden py-8 sm:py-10">
          {/* Left Button */}
          <button className="absolute left-2 sm:left-0 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10 hidden md:block">
            <ChevronLeft size={24} />
          </button>

          {/* Cards */}
          <div className="flex gap-4 sm:gap-6 items-center px-2 sm:px-10">
            {/* Left small card */}
            <div className="w-32 sm:w-40 md:w-48 h-48 sm:h-56 md:h-64 bg-[#F178B6] rounded-3xl overflow-hidden hidden lg:block scale-90 border border-white/10">
              <img
                src="/images/nature/weather1.jpg"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>

            {/* Main card */}
            <div className="w-full max-w-xl bg-[#5D5FEF] overflow-hidden border border-white/20 shadow-2xl transition-transform hover:scale-[1.02] rounded-2xl">
              <div className="h-48 sm:h-56 md:h-64 relative">
                <img
                  src="/images/nature/weather1.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />

                <div className="absolute bottom-2 left-2 bg-[#7E65DB]/50 px-2 sm:px-3 md:px-4 py-1 text-[#F178B6] text-[14px] sm:text-[18px] md:text-[24px] font-bold tracking-wider">
                  Nature & sustainability
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8">
                <p className="text-[14px] sm:text-[16px] md:text-[20px] text-white/80 leading-relaxed mb-4 sm:mb-6">
                  Experience the perfect blend of luxury and eco-conscious
                  living. Our top headlines bring you in-depth stories from
                  around the globe.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button className="text-pink-400 font-bold text-[14px] sm:text-[16px] md:text-[20px] hover:text-pink-300">
                    Read more
                  </button>

                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 border border-white/20"></div>
                    <span className="text-[12px] sm:text-[13px] text-white/60">
                      Written by john william
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right small card */}
            <div className="w-32 sm:w-40 md:w-48 h-48 sm:h-56 md:h-64 bg-white/10 rounded-3xl overflow-hidden hidden lg:block scale-90 border border-white/10">
              <img
                src="/images/nature/weather1.jpg"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
          </div>

          {/* Right Button */}
          <button className="absolute right-2 sm:right-0 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10 hidden md:block">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-2.5 rounded-full transition-all ${
                i === 1 ? "bg-pink-500 w-6" : "bg-white/30 w-2.5"
              }`}
            ></div>
          ))}
        </div>
      </section>
   
    </>
  );
}
