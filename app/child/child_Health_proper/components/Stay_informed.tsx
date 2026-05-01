"use client";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function Stay_informed() {

const [activePage, setActivePage] = useState(1);

  return (
    <>
     <section className="px-4 sm:px-6 pt-12 pb-8">
  <div className="max-w-5xl mx-auto bg-[#5D5FEF] rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 mb-16 shadow-lg shadow-blue-500/20">
    <p className="font-bold text-[18px] sm:text-[24px] md:text-lg text-center md:text-left">
      stay informed, learn more & contact us
    </p>

    <button className="bg-[#F178B6] hover:bg-pink-500 px-6 sm:px-8 py-2 rounded-xl text-white font-bold transition-colors whitespace-nowrap w-full sm:w-auto">
      send message
    </button>
  </div>

  {/* Pagination */}
  <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12 flex-wrap">
    <ChevronLeft className="cursor-pointer opacity-50 hover:opacity-100" />

    <div className="flex items-center gap-2 sm:gap-4">
      {[1, 2, 3].map((num) => (
        <button
          key={num}
          onClick={() => setActivePage(num)}
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-sm sm:text-lg font-bold transition-all ${
            activePage === num
              ? "bg-blue-600 shadow-lg shadow-blue-500/40"
              : "bg-white/5 hover:bg-white/10"
          }`}
        >
          {num}
        </button>
      ))}
    </div>

    <ChevronRight className="cursor-pointer opacity-50 hover:opacity-100" />
  </div>
</section>
    </>
  );
}
