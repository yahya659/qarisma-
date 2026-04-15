"use client";
import { ChevronLeft, ChevronRight, Play, Search } from "lucide-react";

import Filters_and_Search from "../../components/Filters_and_Search";
import HeroSection from "../../../social_concerns_pg/components/HeroSection";

export default function Explore_Latest_Stories_Section() {
  return (
    <>
      {/* social_concerns_pg */}
      <Filters_and_Search />

      <div className="relative group">
        <div className="bg-purple-500/30 backdrop-blur-xl rounded-[40px] border border-white/10 overflow-hidden flex flex-col md:flex-row items-center gap-8 p-8">
          <div className="flex-1 order-2 md:order-1">
            <h3 className="text-3xl font-bold mb-4">Beyond the Headlines</h3>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
            <button className="px-8 py-2 bg-blue-500 hover:bg-blue-400 rounded-lg text-sm font-bold transition-all">
              Read More
            </button>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="/images/social/sustainability13.jpg"
                alt="Latest Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Arrows */}
        <button className="absolute -left-4 top-1/2 -translate-y-1/2 p-2 bg-blue-600 rounded-full shadow-xl hover:scale-110 transition-transform">
          <ChevronLeft size={24} />
        </button>
        <button className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 bg-blue-600 rounded-full shadow-xl hover:scale-110 transition-transform">
          <ChevronRight size={24} />
        </button>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
 {/* social_concerns_pg */}
      <HeroSection/>

    </>
  );
}
