"use client";

import { ChevronsLeft, ChevronsRight, Send } from "lucide-react";
import { useState } from "react";

export default function Stay_informed(){
         const [currentBottomPage, setCurrentBottomPage] = useState(1);
    
    return(
        <>
        <br/>
        <br/>
        <br/>
          <div className="w-full px-4 sm:px-6 lg:px-8 pb-10 relative z-10">
        <div className="max-w-5xl mx-auto bg-[#5D5FEF85] rounded-xl py-5 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between shadow-2xl border border-white/20">
          <h3 className="text-white text-lg md:text-xl font-bold mb-4 md:mb-0">
           share& reveal your game with us
          </h3>
          <button className="px-8 py-2.5 bg-[#5D5FEF] hover:bg-pink-600 text-white font-bold rounded-lg transition-colors shadow-lg uppercase text-sm tracking-wider">
send  your Request          </button>
        </div>
      </div>
     
      <div className="pb-8 flex items-center justify-center gap-3 relative z-10 mt-6">
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
            className={`w-10 h-10 rounded-full font-black text-xl flex items-center justify-center transition-all shadow-md
                ${
                  currentBottomPage === num
                    ? "bg-[#5b67f6] text-white border border-blue-400"
                    : "text-white hover:bg-white/20 border border-transparent"
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