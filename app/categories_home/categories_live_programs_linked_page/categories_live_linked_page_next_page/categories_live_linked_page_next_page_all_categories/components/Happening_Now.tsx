"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

export default function Happening_Now() {
  const [activeCategory, setActiveCategory] = useState("Artists");

  const categories = ["All", "Gallery", "Artists"];
  const liveCards = Array(9).fill({
    title: "Parenting Multiple Kids With Mental Health Challenges",
    viewerCount: "1.2k Viewers",
    category: "child",
    author: "john william",
    image: "/images/child/tols3.png",
  });
  return (
    <>
      {" "}
      {/* Categories Tabs */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-8 py-2 rounded-md text-xs font-bold transition-all ${activeCategory === c ? "bg-[#5D5FEFED] text-[24px] text-white shadow-lg" : "bg-[#F178B6A3] text-[24px] text-[#FFFFFF]"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search Articles"
              className="w-full bg-blue-600/50 border border-white/20 rounded-md py-2 px-4 text-white placeholder-white/60 text-[24px] font-bold focus:outline-none focus:ring-2 ring-pink-300"
            />
            
          </div>
        </div>
        {/* Happening Now Section */}
        <section className="mb-16">
          <h2 className="text-[40px] font-extrabold text-slate-900 mb-8">
            Happening Now
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#F178B6B8]/70  p-4 shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative mb-4">
                  <img
                    src={card.image}
                    className="w-full h-40 object-cover  blur-[2.2px] "
                    alt="live"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    <span className="bg-[#F178B6A3]/60 text-white text-[24px] px-2 py-0.5 rounded-full font-bold">
                      Live
                    </span>
                    <span className="bg-[#F178B6A3]/60 text-white text-[20px] px-2 py-0.5  rounded-full backdrop-blur-sm">
                      {card.viewerCount}
                    </span>
                  </div>
                </div>
                <span className="bg-[#F178B6A3]/60 text-white text-[24px] px-3 py-1 rounded-md uppercase font-bold mb-2 inline-block">
                  {card.category}
                </span>
                <h3 className="text-slate-900 font-bold text-[24px] leading-tight mb-4">
                  {card.title}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                  <span className="text-[16px] font-bold text-[#FFFFFF]  ">
                    {card.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="bg-[#5D5FEF] hover:bg-blue-700 text-white px-12 py-2 rounded-xl font-bold shadow-lg transition-transform hover:scale-105">
              Learn More
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
