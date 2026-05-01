import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Watch_Explore() {
  return (
    <>
      {" "}
      <section className="max-w-6xl mx-auto px-4 md:px-8 mt-16 w-full text-center">
        <h2 className="text-white text-[64px]   font-extrabold mb-10 drop-shadow-md">
          Watch & Explore
        </h2>

        {/* Large Featured Image */}
        <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 relative">
          <img
            src="/images/health_Research/Research1.jpg"
            alt="Research Data"
            className="w-full h-[300px] md:h-[400px] object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent mix-blend-overlay" />
        </div>

        {/* Smaller Thumbnail Row */}
        <section className="w-full    mt-20 py-16 relative border-y border-purple-400/50 shadow-2xl overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mb-10 text-left">
              {[
                {
                  title: "Major Success",
                  img: "/images/health/health4.jpg",
                },
                {
                  title: "Effective Pharmacy",
                  img: "/images/health/health4.jpg",
                },
                {
                  title: "Major Research",
                  img: "/images/health/health4.jpg",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#F178B64D]/30   overflow-hidden shadow-lg border border-purple-400/50 transform transition-transform hover:-translate-y-1"
                >
                  <div className="h-40 relative">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
                    <span className="absolute bottom-2 left-2 bg-[#F178B64D]/30 text-white text-[11px] font-bold px-3 py-1 rounded shadow">
                      {card.title}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col bg-[#F178B64D] justify-between h-[120px]">
                    <p className="text-[13px] font-medium text-white leading-tight">
                      It has one principle and one motto that can be read
                      individually, meaning each word on its own, or as a
                      whole...
                    </p>
                    <button className="bg-[#F57FA0] text-white text-[14px] font-bold px-5 py-1.5 rounded-md hover:bg-pink-500 self-end shadow-sm">
                      Read more
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 py-8">
          <button className="text-white hover:text-[#F57FA0]">
            <ChevronLeft size={24} strokeWidth={3} />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#6953F5] text-white font-bold flex items-center justify-center shadow-lg">
            1
          </button>
          <button className="w-10 h-10 rounded-full bg-[#A284D7] text-white font-bold flex items-center justify-center hover:bg-[#9271CC] transition-colors shadow-md">
            2
          </button>
          <button className="w-10 h-10 rounded-full bg-[#A284D7] text-white font-bold flex items-center justify-center hover:bg-[#9271CC] transition-colors shadow-md">
            3
          </button>
          <button className="text-white hover:text-[#F57FA0]">
            <ChevronRight size={24} strokeWidth={3} />
          </button>
        </div>
      </section>
    </>
  );
}
