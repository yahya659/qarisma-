import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import React from "react";

export default function Watch_Explore() {
  return (
    <>
    <section className="max-w-7xl mx-auto px-4 md:px-8 mt-24 w-full text-center">
      <h2 className="text-white text-[64px] font-extrabold mb-4 drop-shadow-md">
        Watch & Explore
      </h2>
      <p className="text-[#000000] font-bold text-[40px] mb-12 max-w-2xl mx-auto">
        It has one principle and one motto that can be read individually...
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="relative   overflow-hidden shadow-2xl border-4 border-white/20 h-[400px]">
          <img
            src="/images/Deadly_Diseases/Deadly_Diseases3.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-[#5D5FEF6E] backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform cursor-pointer border border-white/40">
              <Play fill="white" size={24} />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          {[1, 2].map((v) => (
            <div
              key={v}
              className="relative  overflow-hidden shadow-xl border-2 border-white/20 h-[188px]"
            >
              <img
                src="/images/Deadly_Diseases/Deadly_Diseases3.jpg"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-[#5D5FEF6E] backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform cursor-pointer border border-white/40">
                  <Play fill="white" size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-[#5D5FEF] text-white text-[36px] font-bold px-12 py-2.5 rounded-xl shadow-lg hover:bg-[#5741E0]">
          More
        </button>
      </div>
    </section>
     {/* Updated Pagination Component */}
        <div className="flex justify-center items-center gap-3 py-12 mt-8">
          <button className="text-white hover:text-pink-400">
            <ChevronLeft size={24} strokeWidth={3} />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#6953F5] text-white font-bold flex items-center justify-center shadow-lg">1</button>
          <button className="w-10 h-10 rounded-full bg-[#A284D7] text-white font-bold flex items-center justify-center hover:bg-[#9271CC] transition-colors shadow-md">2</button>
          <button className="w-10 h-10 rounded-full bg-[#A284D7] text-white font-bold flex items-center justify-center hover:bg-[#9271CC] transition-colors shadow-md">3</button>
          <button className="text-white hover:text-pink-400">
            <ChevronRight size={24} strokeWidth={3} />
          </button>
        </div>
    </>
  );
}
