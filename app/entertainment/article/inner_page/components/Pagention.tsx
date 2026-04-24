"use client";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useState } from "react";

export default function Pagention() {
  const [currentBottomPage, setCurrentBottomPage] = useState(1);
  return (
    <>
      {/* CTA Strip */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-10 relative z-10">
        <div className="max-w-5xl mx-auto bg-[#5D5FEF85]  py-5 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between shadow-2xl border border-white/20">
          <h3 className="text-white text-lg md:text-xl font-bold mb-4 md:mb-0">
            stay informed, learn more & contact us
          </h3>
          <button className="px-8 py-2.5 bg-[#F178B6] hover:bg-pink-600 text-white font-bold rounded-lg transition-colors shadow-lg uppercase text-sm tracking-wider">
            send message
          </button>
        </div>
      </div>{" "}
      <div className="pb-16 flex items-center justify-center gap-3 relative z-10">
        <button
          onClick={() => setCurrentBottomPage((prev) => Math.max(1, prev - 1))}
          className="text-white hover:text-pink-300 transition-colors"
        >
          <ChevronsLeft size={28} strokeWidth={3} />
        </button>

        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentBottomPage(num)}
            className={`w-10 h-10 rounded-full font-black text-xl flex items-center justify-center transition-all
                ${
                  currentBottomPage === num
                    ? "bg-[#5b67f6] text-white shadow-lg"
                    : "text-white hover:bg-white/20"
                }`}
          >
            {num}
          </button>
        ))}

        <button
          onClick={() => setCurrentBottomPage((prev) => Math.min(3, prev + 1))}
          className="text-white hover:text-pink-300 transition-colors"
        >
          <ChevronsRight size={28} strokeWidth={3} />
        </button>
      </div>
    </>
  );
}
