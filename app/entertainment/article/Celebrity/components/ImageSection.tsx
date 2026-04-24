"use client";

import { useState } from "react";

export default function ImageSection() {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="min-h-screen  via-purple-500 to-indigo-400 flex flex-col items-center justify-center p-8">
      
      {/* Card */}
      <div className="bg-pink-400/40 backdrop-blur-sm  p-7 flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full">
        
        {/* Image */}
        <div className="relative w-72 h-64 flex-shrink-0  overflow-hidden">
          <img
            src="/images/entertainment/entertainment1.jpg"
            alt="Top Story"
           
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[64px] font-bold text-indigo-950">Headline</h2>
          <p className="text-[24px] text-[#FFFFFF] leading-relaxed">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that
            reality and maturity are core for truth
          </p>
          <button className="bg-[#F178B6] hover:bg-pink-500 text-white font-medium py-3 px-12 transition-colors w-[327px]">
            Learn More
          </button>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-3 mt-7">
        <button className="w-12 h-12 rounded-xl bg-purple-400/50 hover:bg-purple-400/70 text-white font-bold text-lg transition-colors">
          «
        </button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`w-12 h-12 rounded-xl font-semibold text-white text-lg transition-colors ${
              activePage === page
                ? "bg-indigo-400"
                : "bg-purple-400/50 hover:bg-purple-400/70"
            }`}
          >
            {page}
          </button>
        ))}
        <button className="w-12 h-12 rounded-xl bg-purple-400/50 hover:bg-purple-400/70 text-white font-bold text-lg transition-colors">
          »
        </button>
      </div>
    </div>
  );
}