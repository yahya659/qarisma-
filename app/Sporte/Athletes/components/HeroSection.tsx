"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

export default function HeroSection() {
  const filters = [
    "All",
    "Champions",
    "Rising Stars",
    "Trending",
    "Racing",
    "By Sport",
  ];
  const [activeFilter, setActiveFilter] = useState("All");
  const weeklyAthletes = [
    {
      name: "Olivia Bennett",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      name: "Noah Thompson",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Ava Harper",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Liam Foster",
      img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop",
    },
  ];
  return (
    <>
      {" "}
      <header className="relative h-[100vh] overflow-hidden flex flex-col justify-center px-12">
        {/* Background with Stadium Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Sporte/Sporte20.jpg"
            className="w-full h-full object-cover  "
            alt="Stadium"
          />
          <div className="absolute inset-0 bg-[#D800B980]/40 transparent to-[#d8b4fe]"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-[64px] font-black mb-8 italic tracking-tighter drop-shadow-lg text-[#5D5FEF] ">
            ATHLETES
          </h1>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-lg font-bold transition-all ${
                  activeFilter === filter
                    ? "bg-[#F178B6] text-white text-[32px] shadow-lg"
                    : "bg-[#5D5FEF85]/52 backdrop-blur-md text-white text-[32px] hover:bg-purple-800/80"
                }`}
              >
                {filter}
              </button>
            ))}
            <div className="relative ml-auto">
              <input
                type="text"
                placeholder="search"
                className="bg-white rounded-lg px-4 py-2 text-purple-900 focus:outline-none w-64 shadow-inner"
              />
              <Search
                className="absolute right-3 top-2.5 text-purple-400"
                size={18}
              />
            </div>
          </div>

          {/* Athletes of the Week Panel */}
          <div className="bg-[#AA78C280]/50   rounded-3xl p-6 w-[1390px] mx-auto md:mx-0 shadow-2xl">
            <h2 className="text-[#5D5FEF] font-bold text-[40px] mb-6 flex items-center gap-2 italic">
              Athletes of the Week
            </h2>
            <div className="flex justify-between items-center gap-8">
              {weeklyAthletes.map((ath, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full   p-0.5 overflow-hidden group-hover:scale-110 transition-transform">
                    <img
                      src={ath.img}
                      className="w-full h-full object-cover rounded-full"
                      alt={ath.name}
                    />
                  </div>
                  <span className="text-[16px] text-white/90 text-center font-medium max-w-[60px]">
                    {ath.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
