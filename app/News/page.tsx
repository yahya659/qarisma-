"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// بيانات وهمية للأخبار لتبسيط الكود
const newsData = [
  { id: 1, title: "Top", color: "bg-[#6366F1]" },
  { id: 2, title: "World", color: "bg-[#E67EAF]" },
  { id: 3, title: "Breaking Nowws", color: "bg-[#E67EAF]" },
];

export default function NewsSection() {
  return (
   <>
  <Header />

  <br />
  <br />
  <br />

  <section className="w-full py-10 md:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#EBC4D2]/30 overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col gap-10 relative">

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <img
          src="/images/D.png"
          alt="decor"
          className="w-full h-full object-contain transform rotate-12 scale-110"
        />
      </div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">

        <div className="flex flex-col gap-2 max-w-2xl">
          <h2 className="text-[#6366F1] text-3xl sm:text-4xl md:text-[60px] font-bold">
            <span className="text-[#312E81]">Vision Of</span> Latest news
          </h2>

          <p className="text-black text-base sm:text-lg md:text-2xl font-semibold leading-relaxed">
            Top headlines and in-depth reportind across the world
          </p>
        </div>

        <button className="flex items-center gap-2 md:gap-3 px-5 md:px-10 py-3 md:py-4 bg-[#312E81] rounded-[20px] text-white text-sm sm:text-lg md:text-2xl font-bold shadow-xl hover:bg-[#6366F1] transition-all">
          <svg
            className="w-5 h-5 md:w-8 md:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          search news
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-start gap-3 md:gap-4 flex-wrap relative z-10">
        {newsData.map((item) => (
          <button
            key={item.id}
            className={`px-4 sm:px-6 md:px-10 py-2 md:py-3 ${item.color} text-white text-sm sm:text-base md:text-xl font-bold rounded-[15px] shadow-lg hover:scale-105 active:scale-95 transition-all`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-6 mt-10 w-full items-stretch">

        {/* Main Card */}
        <div className="w-full lg:w-[40%] flex flex-col gap-6 p-4 md:p-6 bg-[#5D5FEF]/20">

          <img
            src="/images/CreateAccount.png"
            alt="News Image"
            className="w-full h-52 sm:h-64 md:h-72 object-cover shadow-lg mb-2"
          />

          <h3 className="text-[#5D5FEF] text-2xl sm:text-3xl md:text-[40px] font-bold text-center">
            Beyond the Headlines
          </h3>

          <p className="text-black text-sm sm:text-lg md:text-[24px] font-bold text-center leading-relaxed px-2">
            It has one principle and one motto that can be read
            individually, meaning each word on its own, or as a whole,
            we believe that reality and maturity are core for truth
          </p>
        </div>

        {/* Morning Briefing */}
        <div className="flex-1 flex flex-col gap-4 p-4 md:p-6 bg-[#F178B696]/59 shadow-lg">

          <h4 className="text-[#5D5FEF] text-xl sm:text-2xl md:text-[32px] font-bold text-center lowercase mb-2">
            Morning Briefing
          </h4>

          <div className="flex flex-col gap-4">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-[#5D5FEF6E]/43 p-4 text-white text-sm md:text-md font-bold text-center shadow-inner lowercase border border-white/10"
              >
                Beyond the Headlines

                <p className="text-black mt-2">
                  It has one principle and one motto that can be read
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  </section>

  {/* News Grid */}
  <section className="py-10 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 bg-[#E2B1C7]/40">

      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="shadow-xl border-4 border-[#B8A4AB] overflow-hidden"
        >

          <div className="relative h-52 sm:h-64 md:h-72">

            <img
              src="/images/NEWSS.jpg"
              className="w-full h-full object-cover"
              alt="News"
            />

            <span className="absolute bottom-4 left-4 md:left-6 bg-[#5D5FEF6E]/43 text-sm sm:text-xl md:text-[32px] text-white px-4 md:px-6 py-1 rounded-lg font-bold">
              Business
            </span>
          </div>

          <div className="p-4 md:p-8 bg-[#E2B1C7]">

            <h4 className="text-[#6157E6] text-lg sm:text-xl md:text-[24px] font-bold mb-3">
              Beyond the truth
            </h4>

            <p className="font-bold mb-4 italic text-sm md:text-[14px]">
              It has one principle and one motto that can be read
              individually, meaning each word on its own, or as a whole,
              we believe that reality and maturity are core for truth
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-300 rounded-full" />
              <span className="font-bold opacity-70 text-sm md:text-base">
                john william
              </span>
            </div>

          </div>
        </div>
      ))}

    </div>

  </section>

  <Footer />
</>
  );
}
