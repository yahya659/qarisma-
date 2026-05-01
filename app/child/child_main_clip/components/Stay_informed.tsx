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
      <section className="px-6 pt-12 pb-8">
        <div className="max-w-5xl mx-auto bg-[#F178B6A3]/64 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 mb-16 shadow-lg shadow-blue-500/20">
          <p className="font-bold text-sm md:text-lg">
            stay informed, learn more & contact us
          </p>
          <button className="bg-[#5D5FEF] px-8 py-2 rounded-xl text-white font-bold transition-colors whitespace-nowrap">
            send message
          </button>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <ChevronLeft className="cursor-pointer opacity-50 hover:opacity-100" />
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => setActivePage(num)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold transition-all ${activePage === num ? "bg-blue-600 shadow-lg shadow-blue-500/40" : "bg-white/5 hover:bg-white/10"}`}
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
