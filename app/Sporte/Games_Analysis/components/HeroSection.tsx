"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

export default function HeroSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const subFilters = ["Recent", "Most Viewed"];
  const filters = ["All", "Football", "Game Analysis", "Tennis", "Racing"];

  return (
    <>
      <header className="relative h-[100vh] overflow-hidden flex flex-col justify-center px-12">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Sporte/Sporte25.png"
            className="w-full h-full object-cover opacity-50"
            alt="Analysis Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-transparent to-[#c4b5fd]"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-[64px] text-[#5D5FEF] font-bold  mb-4 italic tracking-tight  ">
            Game Analysis{" "}
            {/* <span className="text-white/50 not-italic font-light ml-2 uppercase text-3xl">
              Sportify
            </span> */}
          </h1>
          <p className="text-[36px] text-[#000000] mb-8 max-w-2xl font-bold leading-relaxed">
            Explore detailed match statistics, player performance, and expert
            insights from recent games across various sports.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-1.5   font-bold transition-all ${
                  activeFilter === filter
                    ? "bg-[#F178B6] text-[32px] text-white shadow-lg"
                    : "bg-[#5D5FEF85] backdrop-blur-md text-[32px] text-white/80"
                }`}
              >
                {filter}
              </button>
            ))}
              <div className="flex gap-2">
            {subFilters.map((sf) => (
              <button
                key={sf}
                className="px-4 py-1   bg-[#5D5FEF85] text-[32px] font-bold  "
              >
                {sf}
              </button>
            ))}
          </div>
            <div className="relative ml-auto">
              <input
                type="text"
                placeholder="search"
                className="bg-white/90 rounded-xl px-4 py-1.5 text-purple-900 focus:outline-none w-[398px] shadow-inner text-sm"
              />
              <Search
                className="absolute right-3 top-2 text-purple-400"
                size={16}
              />
            </div>
          </div>
        
        </div>
      </header>
    </>
  );
}
