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
              src="/images/child/child_news_page3.png"
              alt="Food Spread"
              className="w-full h-full object-cover object-center blur-[2px] scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#F178B65E]" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-30 px-4 sm:px-8 md:px-16">
            {/* Title */}
            <h1 className="text-[#F178B6]   text-[48px] font-black   mb-4 md:mb-6 drop-shadow-lg leading-tight">
              JOY & Happiness
            </h1>

            {/* Description */}
            <p className="   text-[24px]   text-white/90 max-w-2xl font-bold leading-relaxed mb-6 md:mb-8">
              Parenting is hard work! No matter what your profession is, being a
              parent is your most important & rewarding job. These fact-filled
              expert articles offer parenting tips, life-changing insight and
              easy ways to become a better parent. No matter the age of your
              child, there is no better time than now to learn about the most
              effective parenting styles and apply them to your own life. Being
              a parent 
            </p>

            {/* CTA Button */}
            <button className="w-full max-w-xs sm:max-w-sm md:max-w-md   py-3 px-6 text-white font-bold text-base sm:text-lg md:text-xl  text-[32px] transition rounded-lg">
             View more
            </button>
          </div>
        </div>
      </>
    </>
  );
}
