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
        <div className="max-w-5xl mx-auto bg-[#F178B6] rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 mb-16 shadow-lg shadow-blue-500/20">
          <p className="font-bold text-sm md:text-lg">
            stay informed, learn more & contact us
          </p>
          <button className="bg-[#5D5FEF] px-8 py-2 rounded-xl text-white font-bold transition-colors whitespace-nowrap">
            send message
          </button>
        </div>

        {/* Pagination */}
     
      </section>
    </>
  );
}
