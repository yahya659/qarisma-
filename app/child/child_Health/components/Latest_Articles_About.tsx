import { ChevronRight } from "lucide-react";
import React from "react";

export default function Latest_Articles_About() {
  return (
    <section className="bg-[#F178B6]/20 from-white via-pink-100 to-purple-100 py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-purple-600 font-bold mb-2 uppercase tracking-widest">
          Latest Articles About
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-16">
          Health and Diseases
        </h2>

        <div className="relative ">
          <div className="bg-[#5D5FEF] to-purple-800 rounded-[50px] p-8 md:p-16 text-white text-left relative z-10 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center italic text-xl">
                “
              </div>
              <h3 className="text-xl font-bold">
                "Reading to children for 10 minutes daily enhances their
                vocabulary"
              </h3>
            </div>
            <p className="text-white/90 leading-relaxed text-lg mb-8 max-w-2xl">
              A recent study indicates that reading to children for 10 minutes
              each day clearly contributes to an increase in their vocabulary
              over a short period. Researchers confirmed that this simple act
              will help the child acquire new words and improve comprehension
              and expression skills.
            </p>
            <button className="text-pink-400 font-bold flex items-center gap-2 hover:translate-x-2 transition">
              Read more <ChevronRight size={18} />
            </button>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-24 h-24 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-24 h-24 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
