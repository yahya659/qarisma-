"use client";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import React, { useState } from "react";

export default function Educational_Games() {
  const [currentBottomPage, setCurrentBottomPage] = useState(1);
  return (
    <>
      {" "}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 mb-16">

  <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">

    {/* Image */}
    <div className="w-full md:w-1/2">

      <div className="p-3 md:p-4 shadow-2xl rounded-xl overflow-hidden">

        <img
          src="/images/child/child5.png"
          alt="Sustainability Dish"
          className="w-full h-64 sm:h-80 md:h-full object-cover hover:scale-105 transition-transform duration-700"
        />

      </div>

    </div>

    {/* Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black text-black mb-4 md:mb-6 leading-tight">
        Educational Games
      </h2>

      <p className="text-base sm:text-lg md:text-xl lg:text-[20px] text-white font-bold leading-relaxed mb-6">
        It has one principle and one motto that can be read individually,
        meaning each word on its own, or as a whole, we believe that reality
        and maturity are core for truth
      </p>

      <button className="px-6 md:px-10 py-3 bg-[#F178B6] text-white text-base sm:text-lg md:text-xl lg:text-[24px] font-bold rounded-xl shadow-lg shadow-indigo-500/30 uppercase tracking-wide hover:bg-pink-500 transition">
        Read More
      </button>

    </div>

  </div>

</div>

{/* Pagination */}
<div className="pb-8 flex items-center justify-center gap-3 mt-8">

  <button
    onClick={() => setCurrentBottomPage((prev) => Math.max(1, prev - 1))}
    className="text-white hover:text-pink-300 transition-colors"
  >
    <ChevronsLeft size={26} strokeWidth={3} />
  </button>

  {[1, 2, 3].map((num) => (
    <button
      key={num}
      onClick={() => setCurrentBottomPage(num)}
      className={`w-9 h-9 md:w-10 md:h-10 rounded-full font-bold flex items-center justify-center transition-all shadow-md
        ${
          currentBottomPage === num
            ? "bg-[#5b67f6] text-white border border-blue-400"
            : "text-white hover:bg-white/20"
        }`}
    >
      {num}
    </button>
  ))}

  <button
    onClick={() => setCurrentBottomPage((prev) => Math.min(3, prev + 1))}
    className="text-white hover:text-pink-300 transition-colors"
  >
    <ChevronsRight size={26} strokeWidth={3} />
  </button>

</div>
    </>
  );
}
