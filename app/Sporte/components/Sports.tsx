"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Sports() {
  const router = useRouter();
  return (
    <>
      {" "}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative z-10">
        <div className="mb-10 text-white">
          <h2 className="text-[64px] text-[#5D5FEF] font-extrabold mb-2 drop-shadow-sm">
            Sports
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
                { name: "matches", path: "/Sporte/matches" },
                { name: "Teams", path: "/Sporte/Teams" },
                { name: "Athletes", path: "/Sporte/Athletes" },
                {
                  name: "Leagues News",
                  path: "/Sporte/Leagues_News",
                },
                { name: "Games Analysis", path: "/Sporte/Games_Analysis" },
                {
                  name: "Latest Scores",
                  path: "/Sporte/Latest_Scores",
                },
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
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-12 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Featured Article */}
          <div className="lg:col-span-2 relative flex flex-col bg-[#5D5FEF6E]/30  shadow-2xl overflow-hidden border-y-2 border-[#5D5FEF6E]/30 border-x-[14px] border-x-[#A082D3]">
            {/* Image */}
            <div className="relative h-[250px] md:h-[350px] w-full">
              <img
                src="/images/Sporte/Sporte.jpg"
                alt="Research Hand"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
            </div>
            {/* Content */}
            <div className="p-8 flex flex-col flex-1 bg-[#5D5FEF85]">
              <p className="text-black font-extrabold text-lg md:text-xl leading-relaxed mb-6">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth
              </p>
           
            </div>
          </div>

          {/* Right: Sidebars */}
          <div className="flex flex-col gap-6">
            {/* EDITORS PICKS */}
            <div className="bg-[#5D5FEF6E]/43 rounded-2xl p-5 shadow-xl border border-purple-400/40">
              <h4 className="text-white font-extrabold text-lg mb-4 tracking-wide uppercase drop-shadow-sm">
                EDITORS PICKS
              </h4>
              <div className="space-y-3">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="bg-[#F178B6] p-4 rounded-xl shadow-sm hover:bg-[#EAE0F2] transition-colors cursor-pointer border border-white/40"
                  >
                    <h5 className="text-black font-extrabold text-sm mb-1">
                      Beyond the Headlines:
                    </h5>
                    <p className="text-gray-800 text-[11px] font-semibold leading-tight">
                      It has one principle and one motto that can be read
                      individually, meaning each word on its own, or as a whole,
                      we believe that reality and maturity are core for truth.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Newspaper */}
            <div className="bg-[#5D5FEF]   p-5 shadow-xl border border-purple-400/40">
              <h4 className="text-white font-extrabold text-lg mb-4 tracking-wide uppercase drop-shadow-sm">
             Top leagues
              </h4>
              <div className="space-y-3">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="bg-[#F178B6] p-4 rounded-xl shadow-sm hover:bg-[#EAE0F2] transition-colors cursor-pointer border border-white/40"
                  >
                    <h5 className="text-black font-extrabold text-[20px] mb-1">
                    Champions League Finals
                    </h5>
                    <p className="text-gray-800 text-[11px] font-semibold leading-tight">
                      It has one principle and one motto that can be read
                      individually, meaning each word on its own, or as a whole,
                      we believe that reality and maturity are core for truth.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
