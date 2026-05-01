"use client";

import React, { useState } from "react";

export default function Explore_More_About() {
  const [activeTab, setActiveTab] = useState("All");
  const cards = [
    {
      id: 1,
      img: "/images/child/child4.jpg",
      color: "bg-[#4c4eb9]",
    },
    {
      id: 2,
      img: "/images/child/child4.jpg",
      color: "bg-[#ec4899]",
      highlighted: true,
    },
    {
      id: 3,
      img: "/images/child/child4.jpg",
      color: "bg-[#4c4eb9]",
    },
  ];
  const tabs = [
    { id: "All", label: "All" },
    { id: "Articles", label: "Articles" },
    { id: "programs", label: "programs" },
    { id: "child health", label: "child health" },
    { id: "News", label: "News" },
    { id: "The week selection", label: "The week selection" },
  ];

  return (
    <section className="relative py-12 md:py-20">
  <div className="max-w-7xl mx-auto px-4 md:px-6">

    {/* Header */}
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12 relative">

      {/* Text */}
      <div className="z-10 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
          Explore More About{" "}
          <span className="text-black">Childhood</span>
        </h2>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 max-w-2xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-6 py-2 rounded-xl font-medium transition-all text-sm md:text-xl ${
                activeTab === tab.id
                  ? "bg-[#F178B6] text-white shadow-lg"
                  : "bg-[#5D5FEF85] text-gray-300 hover:bg-[#343163]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="animate-float">
        <div className="w-40 h-40 md:w-64 md:h-64 overflow-hidden rounded-2xl shadow-2xl">
          <img
            src="/images/child/child3.png"
            alt="decor"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>

    {/* Article Box */}
    <div className="bg-[#F178B64F]/30 p-6 md:p-12 lg:p-16 relative overflow-hidden border border-black shadow-2xl rounded-2xl">

      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 md:space-y-8">

        <h3 className="text-[#5D5FEF] text-3xl md:text-5xl lg:text-6xl font-bold italic">
          Article
        </h3>

        <h4 className="text-xl md:text-2xl lg:text-3xl text-black font-bold">
          A glimpse of the child... always the hero of the story
        </h4>

        <p className="text-sm md:text-lg lg:text-2xl text-black/80 leading-relaxed">
          The child is the first nucleus of every dream, and the spark that
          illuminates an entire future. His world is small in size… yet vast
          in wonder, full of questions, and honest in every feeling.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 md:pt-10">

          {cards.map((card) => (
            <div
              key={card.id}
              className={`group cursor-pointer overflow-hidden transition-all hover:-translate-y-1 md:hover:-translate-y-2 p-4 rounded-xl ${
                card.color
              } ${
                card.highlighted
                  ? "shadow-2xl"
                  : "opacity-90"
              }`}
            >
              <div className="overflow-hidden mb-4 h-40 md:h-48 rounded-lg">
                <img
                  src={card.img}
                  alt="Article"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <p className="text-xs md:text-sm text-white/90 text-left">
                It has one principle and one motto that can be read individually...
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>

  </div>
</section>
  );
}
