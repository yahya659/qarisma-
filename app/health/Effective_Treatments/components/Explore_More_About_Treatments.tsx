import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

export default function Explore_More_About_Treatments() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20 w-full text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-md text-white">
        Explore More About <span className="text-blue-600">Treatments</span>
      </h2>
      <p className="text-white text-base md:text-lg font-bold mb-12 max-w-4xl mx-auto drop-shadow-sm">
        It has one principle and one motto that can be read individually,
        meaning each word on its own, or as a whole, we believe that reality and
        maturity are core for truth
      </p>

      {/* Treatment Grid (2 Rows of 3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-[#5D5FEF6E]/40  overflow-hidden shadow-lg   flex flex-col transform transition-transform hover:-translate-y-1"
          >
            <div className="relative h-32">
              <img
                src="/images/Effective_Treatments/Effective_Treatments1.jpg"
                alt="Treatment thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
              <span className="absolute bottom-1.5 left-1.5 bg-[#5D5FEF6E]   text-[20px] text-[#F178B6] font-bold px-2 py-0.5 rounded shadow">
                Major Success
              </span>
            </div>
            <div className="p-4 bg-[#D3AEDB] flex-1 flex flex-col justify-between">
              <p className="text-[15px] text-gray-900 font-bold leading-tight mb-4 text-left">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth.
              </p>
              <button className="bg-[#FF88B9] text-white text-[16px] font-bold px-4 py-1.5 rounded-md hover:bg-pink-500 self-end shadow-sm">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation for Section */}
      <div className="flex justify-center items-center gap-4 my-8">
        <button className="w-8 h-8 rounded-full bg-[#6953F5] text-white flex justify-center items-center shadow-lg hover:bg-[#5741E0]">
          <ArrowLeft size={16} strokeWidth={3} />
        </button>
        <div className="flex gap-2.5">
          {[1, 2, 3, 4, 5].map((dot) => (
            <div
              key={dot}
              className={`w-3 h-3 rounded-full shadow-sm cursor-pointer border border-white/50 ${dot === 1 ? "bg-white" : "hover:bg-white/40"}`}
            />
          ))}
        </div>
        <button className="w-8 h-8 rounded-full bg-[#6953F5] text-white flex justify-center items-center shadow-lg hover:bg-[#5741E0]">
          <ArrowRight size={16} strokeWidth={3} />
        </button>
      </div>
    </section>
  );
}
