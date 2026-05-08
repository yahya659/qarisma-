import { ChevronsLeft, ChevronsRight } from "lucide-react";
import React from "react";

export default function Joinour_community() {
  return (
    <>
  <main className="max-w-6xl mx-auto px-4 py-8">

  <section className="text-center mb-16 relative py-8 sm:py-10 md:py-12">

    {/* Decorative Butterflies (Visual simulation) */}
    <div className="absolute bottom-[-10%] right-[-20%] sm:right-[-25%] md:right-[-31%] w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] md:w-[350px] md:h-[350px] lg:w-[600px] lg:h-[600px] z-40 pointer-events-none">

      <div className="relative w-full h-full animate-float-main">

        <img
          src="/images/flower.png"
          className="w-full h-full object-contain"
          alt="flower"
          style={{
            filter: "drop-shadow(0 20px 50px rgba(204, 172, 185, 0.5))",
          }}
        />

        <div className="absolute top-6 sm:top-10 left-0 w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-float-slow opacity-60"></div>

      </div>
    </div>

    <h2 className="text-white text-2xl sm:text-4xl md:text-[40px] font-bold mb-4 px-2">
      Join our community & share your feedback with us
    </h2>

    <p className="max-w-2xl mx-auto text-slate-800 text-lg sm:text-2xl md:text-[36px] mb-8 font-bold leading-relaxed px-2">
      It has one principle and one motto that can be read individually,
      meaning each word on its own, or as a whole, we believe that reality
      and maturity are core for truth.
    </p>

    <button className="bg-[#F178B6A3]/64 hover:bg-pink-400 text-lg sm:text-2xl md:text-[32px] text-[#5D5FEF] px-8 sm:px-10 md:px-12 py-3 rounded-md font-extrabold transition-all shadow-md uppercase tracking-wider">
      join & share
    </button>

  </section>

  {/* Pagination Section */}
  <section className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-20">

    <button className="p-3 bg-white/80 rounded-xl text-blue-500 shadow-md hover:bg-white transition-colors">
      <ChevronsLeft size={22} />
    </button>

    <div className="flex gap-3 sm:gap-4">

      <button className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 text-white rounded-xl font-bold text-lg sm:text-xl shadow-lg">
        1
      </button>

      <button className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-200 text-blue-600 rounded-xl font-bold text-lg sm:text-xl hover:bg-blue-300 transition-colors">
        2
      </button>

      <button className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-200 text-blue-600 rounded-xl font-bold text-lg sm:text-xl hover:bg-blue-300 transition-colors">
        3
      </button>

    </div>

    <button className="p-3 bg-white/80 rounded-xl text-blue-500 shadow-md hover:bg-white transition-colors">
      <ChevronsRight size={22} />
    </button>

  </section>

</main>
    </>
  );
}
