import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Stay_informed() {
  return (
    <>
      {" "}
    <section className="px-4 sm:px-6 py-10 sm:py-12 max-w-5xl mx-auto">

  {/* Banner */}
  <div className="bg-[#5D5FEF7D] backdrop-blur-md p-3 sm:p-2 flex flex-col sm:flex-row items-center gap-4 sm:gap-4 pl-4 sm:pl-8 border border-white/10 rounded-xl">

    <span className="text-[18px] sm:text-[24px] md:text-[32px] text-white text-center sm:text-left hidden md:block">
      stay informed, learn more
    </span>

    <div className="flex-1"></div>

    <button className="bg-[#F178B6] hover:bg-pink-500 px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-bold uppercase transition-all w-full sm:w-auto">
      send message
    </button>

  </div>

  {/* Pagination Controls */}
  <div className="flex justify-center items-center gap-3 sm:gap-4 mt-10 sm:mt-16">

    <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
      <ChevronLeft size={18} />
    </button>

    <div className="flex gap-2">

      {[1, 2, 3].map((n) => (
        <button
          key={n}
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-bold transition-all text-sm sm:text-base ${
            n === 1
              ? "bg-blue-600 shadow-lg shadow-blue-500/40"
              : "bg-white/10 hover:bg-white/20"
          }`}
        >
          {n}
        </button>
      ))}

    </div>

    <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
      <ChevronRight size={18} />
    </button>

  </div>

</section>
    </>
  );
}
