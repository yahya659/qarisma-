"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Filters() {
    const router = useRouter();
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative z-10">
        <div className="mb-10 text-white">
          <h2 className="text-[64px] font-extrabold mb-2 drop-shadow-sm">
            Health
          </h2>
          <p className="text-[40px] text-[#000000] font-bold mb-6 drop-shadow-sm">
            Top headlines and in-depth across the world
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Tags */}
           <div className="flex flex-wrap gap-3">
  <button
    onClick={() => router.push("/all")}
    className="px-5 py-2 w-[129px] h-[72px] bg-[#F178B6] text-[32px] font-bold rounded-lg shadow-md hover:bg-pink-500 transition-colors"
  >
    All
  </button>

  {[
    { name: "Articles", path: "/health/health_articles" },
    { name: "Medical Research", path: "/health/health_Research" },
    { name: "Deadly Diseases", path: "/health/Deadly_Diseases" },
    { name: "Effective Treatments", path: "/health/Effective_Treatments" },
    { name: "Major Successes", path: "/health/Major_Successes" },
    { name: "The week selection", path: "/health/The_week_selection" },
  ].map((tag) => (
    <button
      key={tag.name}
      onClick={() => router.push(tag.path)}
      className="px-5 py-2 w-[265px] text-[20px] h-[72px] bg-[#5D5FEF85] text-white font-bold rounded-lg shadow-md hover:bg-[#6850E5] transition-colors"
    >
      {tag.name}
    </button>
  ))}
</div>

            {/* Search Bar */}
            <div className="flex bg-[#7C63F5] rounded-lg overflow-hidden shadow-md w-[431px] mb-25  ">
              <input
                type="text"
                placeholder="search"
                className="bg-[#5D5FEF] text-white placeholder:text-[#FFFFFF] px-4 py-2 outline-none w-full font-medium"
              />
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
