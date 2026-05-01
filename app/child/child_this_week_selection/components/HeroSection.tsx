import { Cloud } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <>
    
<section className="relative   overflow-hidden shadow-2xl h-[60vh] md:h-[100vh] flex items-center px-4 sm:px-6 lg:px-0">

  <img
    src="/images/child/child10.png"
    className="absolute inset-0 w-full h-full object-cover brightness-50"
    alt="Hero"
  />

  <div className="relative z-10 mx-auto p-6 sm:p-8 md:p-12 lg:p-16 w-full max-w-[1239px] bg-[#F178B65E] space-y-4 sm:space-y-6">

    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#000000] font-bold leading-tight">
      Top Story of the Week
    </h1>

    <p className="text-base sm:text-lg md:text-2xl lg:text-[36px] opacity-90 leading-relaxed font-medium">
      Stories... that inspire. Content... that builds. Knowledge... that grows with them. From education and entertainment to health and innovation, Charisma Newspaper brings together everything that enriches children's minds and sparks their curiosity.
    </p>

    <button className="bg-[#5D5FEF] text-base sm:text-lg md:text-xl lg:text-[24px] hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95">
      Read more
    </button>

  </div>

</section>
    </>
  );
}
