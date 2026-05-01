import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import React from "react";

export default function Why_Nutrition_Matters() {
  return (
    <>
      {" "}
      <section className="px-4 sm:px-6 py-16 bg-[#25153a]/50">
  <div className="max-w-[1367.001953125px] mx-auto">

    <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-center mb-8 sm:mb-12 leading-tight">
      Why Nutrition Matters for <br />
      School-Age Children
    </h2>

    <div className="flex flex-col lg:flex-row items-center justify-center gap-6">

      {/* Left Card */}
      <div className="hidden lg:block w-[614.00390625] h-[492.9990234375] w-full max-w-[614px] aspect-[4/3] bg-[#F178B6] border border-white/10 opacity-50 scale-90 relative overflow-hidden">
        <img
          src="/images/child/child5.png"
          className="w-full h-full object-cover"
          alt="side"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Play fill="white" size={40} className="opacity-70" />
        </div>
      </div>

      {/* Main Card */}
      <div className="w-[708.9960327148438] h-[591px] w-full max-w-[708px] aspect-[4/3] bg-[#F178B6] relative overflow-hidden shadow-2xl">
        <img
          src="/images/child/child5.png"
          className="w-full h-full object-cover"
          alt="main video"
        />

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#5D5FEF6E]/43 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <Play fill="white" size={40} />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-[#F178B6]">
          <p className="text-[14px] sm:text-[18px] md:text-[24px] font-medium">
            Learn why balanced meals improve cognitive function and
            physical growth in active students.
          </p>
        </div>
      </div>

      {/* Right Card */}
      <div className="hidden lg:block w-[614.00390625] h-[492.9990234375] w-full max-w-[614px] aspect-[4/3] bg-[#F178B6] border border-white/10 opacity-50 scale-90 relative overflow-hidden">
        <img
          src="/images/child/child5.png"
          className="w-full h-full object-cover"
          alt="side"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Play fill="white" size={40} className="opacity-70" />
        </div>
      </div>

    </div>

    {/* Pagination */}
    <div className="flex justify-center gap-4 mt-8 flex-wrap">

      <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10">
        <ChevronLeft size={18} />
      </button>

      <div className="flex gap-2 items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === 3 ? "bg-pink-400 scale-125" : "bg-white/20"
            }`}
          ></div>
        ))}
      </div>

      <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10">
        <ChevronRight size={18} />
      </button>

    </div>

  </div>
</section>
    </>
  );
}
