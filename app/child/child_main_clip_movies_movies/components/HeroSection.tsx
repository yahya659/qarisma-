import { Cloud } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <>
        <div className="relative w-full min-h-screen bg-white overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="/images/child/child7.jpg"
              alt="Food Spread"
              className="w-full h-full object-cover object-center blur-[2px] scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#F178B65E]" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-30 px-4 sm:px-8 md:px-16">
            {/* Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-black text-[#5D5FEF] mb-4 md:mb-6 drop-shadow-lg leading-tight">
              JOY & Happiness
            </h1>

            {/* Description */}
            <p className="text-base sm:text-xl md:text-2xl lg:text-[36px] text-white/90 max-w-2xl font-bold leading-relaxed mb-6 md:mb-8">
              Stories… that inspire. Content… that builds. Knowledge… that grows
              with them. From education and entertainment to health and
              innovation, Charisma Newspaper brings together everything that
              enriches children's minds and sparks their curiosity.
            </p>

            {/* CTA Button */}
            <button className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-[#5D5FEF] py-3 px-6 text-white font-bold text-base sm:text-lg md:text-xl lg:text-[24px] shadow-xl hover:bg-[#4d4fd9] transition rounded-lg">
             Read more
            </button>
          </div>
        </div>
      </>
    </>
  );
}
