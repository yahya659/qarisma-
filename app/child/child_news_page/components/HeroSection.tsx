import { Cloud } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <>
     <section className="relative max-w-7xl mx-auto bg-[#F178B6A3] p-4 sm:p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center shadow-xl overflow-hidden rounded-2xl">

  {/* Cloud Image */}
  <div className="absolute -top-4 -right-4">
    <div className="relative">

      <img
        src="/images/child/child3.png"
        alt="cloud"
        className="w-20 sm:w-28 md:w-[213px] drop-shadow-lg"
      />

      {/* optional face */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 flex gap-2">
        <div className="w-1.5 h-1.5 bg-purple-900 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-purple-900 rounded-full"></div>
      </div>

      <div className="absolute top-10 left-8 md:top-14 md:left-12 w-4 h-2 border-b-2 border-purple-900 rounded-full"></div>

    </div>
  </div>

  {/* Image */}
  <div className="w-full md:w-1/2">
    <div className="overflow-hidden relative group rounded-xl">

      <img
        src="/images/child/child_news_page.png"
        alt="hero"
        className="w-full h-56 sm:h-72 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />

      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold border border-white/20">
        CHILD NEWS
        <span className="block text-[10px] font-normal opacity-70">
          DAILY KIDS UPDATES
        </span>
      </div>

    </div>
  </div>

  {/* Content */}
  <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">

    <div className="bg-[#5D5FEF8F]/56 w-fit mx-auto md:mx-0 px-3 md:px-4 py-1 text-lg md:text-2xl lg:text-[48px] text-[#F178B6] font-bold tracking-widest">
      Feature Story
    </div>

    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-black font-extrabold leading-tight">
      Beyond the Headlines
    </h1>

    <p className="text-base sm:text-lg md:text-xl lg:text-[30px] opacity-90 font-bold leading-relaxed max-w-md mx-auto md:mx-0">
      It has one principle and one motto that can be read individually,
      meaning each word on its own, or as a whole, we believe that reality
      and maturity are core for truth.
    </p>

    <button className="bg-[#5D5FEF85]/51 text-white px-5 md:px-6 py-2 rounded-xl text-base sm:text-lg md:text-xl lg:text-[24px] font-bold shadow-lg transition active:scale-95">
      Read Full Article
    </button>

  </div>

</section>
    </>
  );
}
