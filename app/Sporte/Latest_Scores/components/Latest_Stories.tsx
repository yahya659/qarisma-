"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

export default function Latest_Stories() {
  const [activeStoryTab, setActiveStoryTab] = useState("All");

  const storyCategories = [
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
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8 space-y-24">
        <section className="space-y-8 pt-6">
          <div className="space-y-2">
            <h1 className="text-[64px] font-black text-[#5D5FEF]">
              Latest Stories
            </h1>
          </div>

          {/* Story Filter & Search Bar */}
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {storyCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveStoryTab(cat)}
                  className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeStoryTab === cat
                      ? "bg-[#F178B6] text-[24px] text-white shadow-lg"
                      : "bg-[#5D5FEF85] text-[24px] text-white hover:bg-purple-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative min-w-[280px]">
              <input
                type="text"
                placeholder="search"
                className="w-full bg-white border-2 border-purple-200 px-6 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm text-purple-900"
              />
              <Search
                className="absolute right-4 top-2.5 text-purple-400"
                size={18}
              />
            </div>
          </div>

          {/* Top Story Feature Card */}
          <div className="relative group overflow-hidden   shadow-2xl   backdrop-blur-sm">
            <div className="grid grid-cols-1 bg-[#5D5FEF4D]  md:grid-cols-2">
              <div className="h-[564px] overflow-hidden">
                <img
                  src="/images/Sporte/Sporte5.jpg"
                  alt="Top Story"
                  className="w-full h-full object-contain   "
                />
              </div>
              <div className="p-10 flex flex-col justify-center space-y-6 bg-[#5D5FEF4D]/30">
                <h2 className="text-[64px] font-black text-white drop-shadow-md">
                  top story
                </h2>
                <p className="text-[#0C0C0D] text-[24px] font-bold leading-relaxed">
                  It has one principle and one motto that can be read in its
                  entirety the essence of Sport and on the sport as a whole, in
                  a single sentence. (Elegance, Personality, Strength)
                </p>
                <button className="w-fit px-8 py-3 bg-[#5D5FEF] text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
