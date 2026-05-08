import { Search } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <>
   <header className="relative pt-16 sm:pt-20 pb-20 sm:pb-32 px-4 sm:px-6 h-[100vh] overflow-hidden">

  {/* الخلفيات */}
  <div className="absolute top-0 left-0 w-1/2 h-full bg-[#5D5FEFFC]"></div>
  <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F178B6A3]/50"></div>

  {/* المحتوى فوق الخلفيات */}
  <div className="relative z-10 max-w-4xl mt-20 sm:mt-30 mx-auto text-center">
    
    <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-extrabold mb-6 sm:mb-8 leading-tight px-2">
      Vision Of{" "}
      <span className="text-[#F178B6] bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
        Luxury, Personality
      </span>{" "}
      <br />& <span className="text-pink-400">Power</span> Create Us
    </h1>

    <div className="relative max-w-2xl mx-auto group bg-[#5D5FEF] px-2 sm:px-0">
      <input
        type="text"
        placeholder="search"
        className="w-full bg-white/10 backdrop-blur-md text-[16px] sm:text-[20px] md:text-[24px] py-3 sm:py-4 px-4 sm:px-6 outline-none focus:ring-2 ring-pink-500/50 transition-all placeholder:text-white/50"
      />
    </div>

  </div>

</header>
    </>
  );
}
