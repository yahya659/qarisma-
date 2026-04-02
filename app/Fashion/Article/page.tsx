"use client";
import React from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Play,
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const BeautyPortal = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <div className="min-h-screen font-sans text-white overflow-hidden">
        <div className="fixed inset-0 -z-10">
          <img
            src="/images/reports.png"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/70 via-purple-500/70 to-indigo-500/70"></div>
        </div>
        {/* --- SECTION 1: LATEST STORIES HEADER --- */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
          <h1 className="text-5xl font-black text-[#5d58f0] mb-3 tracking-tight">
            Latest Stories
          </h1>
          <p className="text-2xl font-bold text-gray-900 mb-8">
            Top headlines and In-depthg across the world
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button className="bg-[#f06292] hover:bg-[#e91e63] px-8 py-2.5 rounded-xl font-bold shadow-lg transition-all">
              All
            </button>
            {["Article", "Brands", "Pricing"].map((tab) => (
              <button
                key={tab}
                className="bg-[#9491f9] hover:bg-[#8380e6] px-8 py-2.5 rounded-xl font-semibold shadow-md transition-all"
              >
                {tab}
              </button>
            ))}
            <div className="relative flex-grow max-w-sm ml-auto">
              <input
                type="text"
                placeholder="search"
                className="w-full bg-[#6c63ff] placeholder-white/70 px-5 py-2.5 rounded-xl outline-none border border-white/20 shadow-inner"
              />
              <Search
                className="absolute right-4 top-3 text-white/70"
                size={20}
              />
            </div>
          </div>

          {/* Secondary Filter Bar */}
          <div className="flex flex-wrap gap-3">
            {[
              "Team of the week",
              "Reports & Outlooks",
              "Latest Trends Newsletter",
            ].map((tag) => (
              <button
                key={tag}
                className="bg-[#9491f9] px-6 py-2 rounded-xl font-medium shadow-sm hover:brightness-110"
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* --- SECTION 2: TOP STORY (HERO CARD) --- */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="relative group">
            {/* Decorative Side Bars (Pink Frames) */}
            <div className="absolute -left-4 inset-y-10 w-3 bg-pink-400/40 rounded-full blur-[2px]" />
            <div className="absolute -right-4 inset-y-10 w-3 bg-pink-400/40 rounded-full blur-[2px]" />

            <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
              {/* Image Side */}
              <div className="md:w-1/2 h-[450px] relative bg-black/10 flex items-center justify-center">
                <img
                  src="/images/artfision.png"
                  alt="Top Model"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              {/* Content Side */}
              <div className="md:w-1/2 p-12 flex flex-col justify-center bg-gradient-to-br from-[#9491f9]/60 to-[#b5b3f7]/40">
                <h2 className="text-5xl font-black mb-6 text-white drop-shadow-md italic">
                  top story
                </h2>
                <p className="text-gray-900 text-lg leading-relaxed font-medium mb-8">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, in
                  a single sentence, whether from right to left or left to
                  right: <br />
                  <span className="font-bold ">
                    (Elegance, Personality, Strength)
                  </span>
                </p>
                <button className="bg-[#5d58f0] hover:bg-[#4c47d9] text-white w-fit px-10 py-4 rounded-2xl font-bold shadow-xl transform hover:-translate-y-1 transition-all active:scale-95">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: EXPLORE MORE GRID --- */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <h2 className="text-5xl font-black text-center mb-16 drop-shadow-lg tracking-tight text-white">
            Explore More About Beauty
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* CARD 1 */}
            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-white/20 transform hover:-translate-y-2 transition-all duration-300 bg-[#d187b5]/80">
              <div className="h-64 relative">
                <img
                  src="/images/Beauty3.png"
                  alt="Beauty context"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Beyond the Headlines
                </h3>
                <button className="bg-[#5d58f0] text-white px-8 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:brightness-110">
                  Read more
                </button>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-white/20 transform hover:-translate-y-2 transition-all duration-300 bg-[#9491f9]/80">
              <div className="h-64 relative">
                <img
                  src="/images/Beauty2.png"
                  alt="Beauty context"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Beyond the Headlines
                </h3>
                <button className="bg-[#5d58f0] text-white px-8 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:brightness-110">
                  Read more
                </button>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-white/20 transform hover:-translate-y-2 transition-all duration-300 bg-[#d187b5]/80">
              <div className="h-64 relative">
                <img
                  src="/images/Beauty1.png"
                  alt="Beauty context"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Beyond the Headlines
                </h3>
                <button className="bg-[#5d58f0] text-white px-8 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:brightness-110">
                  Read more
                </button>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-white/20 transform hover:-translate-y-2 transition-all duration-300 bg-[#9491f9]/80">
              <div className="h-64 relative">
                <img
                  src="/images/Beauty2.png"
                  alt="Beauty context"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Beyond the Headlines
                </h3>
                <button className="bg-[#5d58f0] text-white px-8 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:brightness-110">
                  Read more
                </button>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-white/20 transform hover:-translate-y-2 transition-all duration-300 bg-[#d187b5]/80">
              <div className="h-64 relative">
                <img
                  src="/images/Beauty3.png"
                  alt="Beauty context"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Beyond the Headlines
                </h3>
                <button className="bg-[#5d58f0] text-white px-8 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:brightness-110">
                  Read more
                </button>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-white/20 transform hover:-translate-y-2 transition-all duration-300 bg-[#9491f9]/80">
              <div className="h-64 relative">
                <img
                  src="/images/Beauty1.png"
                  alt="Beauty context"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Beyond the Headlines
                </h3>
                <button className="bg-[#5d58f0] text-white px-8 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:brightness-110">
                  Read more
                </button>
              </div>
            </div>
          </div>

          {/* --- PAGINATION & CONTROLS --- */}
          <div className="mt-20 flex flex-col items-center space-y-10">
            {/* Arrow Navigation */}
            <div className="flex items-center gap-6">
              <button className="w-12 h-12 flex items-center justify-center bg-[#5d58f0] rounded-full shadow-lg hover:scale-110 transition-transform">
                <ChevronLeft size={28} />
              </button>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <div
                    key={dot}
                    className={`w-3.5 h-3.5 rounded-full transition-all ${dot === 1 ? "bg-white scale-125" : "bg-white/40"}`}
                  />
                ))}
              </div>
              <button className="w-12 h-12 flex items-center justify-center bg-[#5d58f0] rounded-full shadow-lg hover:scale-110 transition-transform">
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Number Pagination */}
            <div className="flex items-center gap-4">
              <ChevronsLeft
                className="text-white/60 hover:text-white cursor-pointer"
                size={30}
              />
              <span className="w-12 h-12 flex items-center justify-center bg-[#5d58f0] text-white rounded-2xl font-black text-xl shadow-xl">
                1
              </span>
              <span className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white rounded-2xl font-bold text-xl cursor-pointer transition-colors">
                2
              </span>
              <span className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white rounded-2xl font-bold text-xl cursor-pointer transition-colors">
                3
              </span>
              <ChevronsRight
                className="text-white/60 hover:text-white cursor-pointer"
                size={30}
              />
            </div>
          </div>
        </section>

        {/* CSS Custom Animations (Optional) */}
        <style jsx global>{`
          body {
            background-color: #b5b3f7;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default BeautyPortal;
