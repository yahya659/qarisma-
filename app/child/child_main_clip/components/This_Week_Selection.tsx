"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import React, { useState } from "react";

export default function From_Our_Selection() {
  const [activePage, setActivePage] = useState(1);
  return (
    <>
      {" "}
      <section className="px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">
       This Week Selection
        </h2>

        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4">
          {/* Side Quote (Blurred) */}
          <div className="hidden lg:block w-72 h-96 opacity-20 scale-90 blur-sm">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 h-full flex flex-col justify-center">
              <div className="w-12 h-12 rounded-full bg-white/20 mb-4"></div>
              <div className="h-4 bg-white/20 rounded w-full mb-2"></div>
              <div className="h-4 bg-white/20 rounded w-2/3"></div>
            </div>
          </div>

          {/* Main Focused Quote */}
          <div className="w-full max-w-3xl bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-pink-500/80 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/20 shadow-2xl">
            <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
              <div className="w-24 h-24 rounded-full border-4 border-white/30 overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=200&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                  alt="expert"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold leading-tight italic">
                  "Reading to children for 10 minutes daily enhances their
                  vocabulary"
                </h3>
                <p className="text-sm md:text-base text-gray-100 leading-relaxed">
                  A recent study indicates that reading to children for 10
                  minutes each day clearly contributes to an increase in their
                  vocabulary over a short period. Researchers confirmed that
                  this simple routine helps the child acquire new words and
                  improve comprehension and expression skills. Specialists also
                  recommended choosing books with attractive pictures and
                  appropriate language to maximize the child's benefit from
                  these few minutes.
                </p>
                <button className="text-pink-200 font-bold underline hover:text-white transition-colors">
                  Read more
                </button>
              </div>
            </div>
            {/* Quote Icon background */}
            {/* <Quote className="absolute right-4 bottom-4 text-white/5 w-48 h-48 -z-0" /> */}
          </div>

          {/* Side Quote (Blurred) */}
          <div className="hidden lg:block w-72 h-96 opacity-20 scale-90 blur-sm">
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 h-full flex flex-col justify-center">
              <div className="w-12 h-12 rounded-full bg-white/20 mb-4"></div>
              <div className="h-4 bg-white/20 rounded w-full mb-2"></div>
              <div className="h-4 bg-white/20 rounded w-2/3"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-12 items-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${i === 3 ? "bg-blue-400 scale-150 border-2 border-white/50" : "bg-white/20"}`}
            ></div>
          ))}
        </div>
      </section>
      <section className="px-6 pt-12 pb-8 ">
      

        {/* Pagination Controls */}
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

        <hr className="border-white/10 mb-12" />

      
      </section>
    </>
  );
}
