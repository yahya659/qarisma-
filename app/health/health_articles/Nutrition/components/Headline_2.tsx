"use client";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import React, { useState } from "react";

export default function Headline_2() {
  const [currentBottomPage, setCurrentBottomPage] = useState(1);
  return (
    <>
      {" "}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 mb-16">
        <div className="flex flex-col md:flex-row-reverse bg-[#F178B6A3]/40  items-center gap-8 md:gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="p-3 md:p-4 shadow-2xl rounded-xl overflow-hidden">
              <img
                src="/images/health/health1.jpg"
                alt="Sustainability Dish"
                className="w-full h-64 sm:h-80 md:h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full pl-20  text-center md:text-left">
            <h2 className="text-[64px] sm:text-4xl md:text-5xl lg:text-[48px] font-black text-black mb-4 md:mb-6 leading-tight">
              Headline
            </h2>

            <p className="text-[36px] text-[#000000] font-bold leading-relaxed mb-6">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>

            <button className="px-6 md:px-10 py-3   text-white text-base sm:text-lg md:text-xl lg:text-[24px] font-bold rounded-xl shadow-lg shadow-indigo-500/30 uppercase tracking-wide hover:bg-pink-500 transition">
             View  more

            </button>
          </div>
        </div>
      </div>
    </>
  );
}
