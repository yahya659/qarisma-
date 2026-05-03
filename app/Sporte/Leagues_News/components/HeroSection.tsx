"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

export default function HeroSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = [
    "All",
    "Football",
    "Basketball",
    "Tennis",
    "F1",
    "Rugby",
    "Trending",
  ];
  return (
    <>
      <header className="relative h-[100vh] overflow-hidden flex flex-col justify-center px-12">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Sporte/Sporte26.jpg"
            className="w-full h-full object-cover  opacity-70"
            alt="Stadium Background"
          />
          {/* Butterfly overlay effects from image */}
          <div className="absolute inset-0 opacity-30 pointer-events-none flex items-center justify-center">
            <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/butterfly.png')]"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-transparent to-[#c4b5fd]"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-[64px] text-[#5D5FEF] font-bold mb-2 italic tracking-tighter  ">
            Leagues News
          </h1>
          <p className="text-[#000000] font-bold mb-8 text-[36px]  ">
            Latest updates from the top leagues worldwide
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeFilter === filter
                      ? "bg-[#F178B6] text-white text-[24px] shadow-lg"
                      : "bg-[#5D5FEF85]/50 backdrop-blur-md text-white/80 text-[24px] hover:bg-purple-700/60"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="relative ml-auto">
              <input
                type="text"
                placeholder="search"
                className="bg-white rounded-xl px-4 py-2 text-purple-900 focus:outline-none w-64 shadow-inner text-sm"
              />
              <Search
                className="absolute right-3 top-2.5 text-purple-400"
                size={16}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
