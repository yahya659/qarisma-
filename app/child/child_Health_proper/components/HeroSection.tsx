import { Cloud } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <>
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-12">
  {/* Background */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <img
      src="/images/child/child_news_page1.jpg"
      className="w-full h-full object-cover"
      alt="Hero bg"
    />

    <div className="absolute inset-0 bg-black/30"></div>

    {/* Decorative */}
    <div className="absolute left-0 top-0 h-full w-16 sm:w-24 bg-purple-600/30 blur-2xl"></div>
    <div className="absolute right-0 top-0 h-full w-16 sm:w-24 bg-purple-600/30 blur-2xl"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-2xl w-full">

    <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-bold mb-2 text-white">
      Explore With us
    </h2>

    <h1 className="text-[22px] sm:text-[32px] md:text-[48px] text-[#F178B6] font-bold leading-tight text-center">
      Every thing about Nutrition
    </h1>

    {/* Search */}
    <div className="relative w-full max-w-md mx-auto mt-6">
      <input
        type="text"
        placeholder="search"
        className="w-full py-3 sm:py-4 text-white px-5 sm:px-6 rounded-full bg-[#F178B6] placeholder-white/70 outline-none text-sm sm:text-base"
      />
    </div>

  </div>
</section>
    </>
  );
}
