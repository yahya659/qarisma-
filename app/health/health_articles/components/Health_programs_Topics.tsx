import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import React from "react";

export default function Health_programs_Topics() {
  return (
    <>
      <div className="mb-16">
        <h2 className="text-[64px] font-extrabold text-white text-center mb-8 drop-shadow-md">
          Health programs & Topics
        </h2>

        <div className="flex items-center gap-4">
          <button className="text-white hover:text-pink-300 transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20">
            <ChevronLeft size={32} strokeWidth={3} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
            {/* Card 1 */}
            <div className="bg-[#5D5FEF6E]  overflow-hidden shadow-lg border border-purple-400/40 transform transition-transform hover:-translate-y-1">
              <div className="h-32 relative">
                <img
                  src="/images/health/health3.jpg"
                  className="w-full h-full object-cover"
                  alt="news"
                />
                <span className="absolute bottom-2 left-2 text-[20px] font-bold text-white bg-[#5D5FEF6E] px-2 py-0.5 rounded">
                  Major Success
                </span>
              </div>
              <div className="p-4 bg-[#5D5FEF6E]/40 text-white">
                <p className="text-[13px] font-medium mb-3">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, we
                  believe that reality and maturity are core for truth
                </p>
                <button className="bg-[#F178B6] text-[14px] font-bold px-4 py-1.5 rounded-md hover:bg-[#5741E0] float-right">
                  Read More
                </button>
                <div className="clear-both"></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#5D5FEF6E]   overflow-hidden shadow-lg border border-purple-400/40 transform transition-transform hover:-translate-y-1">
              <div className="h-40 relative">
                <img
                  src="/images/health/health3.jpg"
                  className="w-full h-full object-cover"
                  alt="news"
                />
                <span className="absolute bottom-2 left-2 text-[20px] font-bold text-white bg-[#5D5FEF6E] px-2 py-0.5 rounded">
                  Effective Treatments
                </span>
              </div>
              <div className="p-4 bg-[#5D5FEF6E]/43 text-white">
                <p className="text-[15px] font-medium mb-3">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, we
                  believe that reality and maturity are core for truth
                </p>
                <button className="bg-[#F178B6] text-[16px] font-bold px-4 py-1.5 rounded-md hover:bg-[#5741E0] float-right">
                  Read More
                </button>
                <div className="clear-both"></div>
              </div>
            </div>

            {/* Card 3 (Featured) */}
            <div className="bg-[#5D5FEF6E]  overflow-hidden shadow-lg      transform transition-transform hover:-translate-y-1 scale-105 z-10">
              <div className="h-48 relative">
                <img
                  src="/images/health/health3.jpg"
                  className="w-full h-full object-cover"
                  alt="news"
                />
                <span className="absolute bottom-2 left-2 text-[24px] font-bold text-[#6953F5] bg-[#F178B657] py-1 rounded shadow">
                  Medical Research
                </span>
              </div>
              <div className="p-5 bg-[#5D5FEF6E]/60 text-white">
                <p className="text-[20px] font-semibold mb-4">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, we
                  believe that reality and maturity are core for truth
                </p>
                <button className="bg-[#F178B6] text-[16px] font-bold px-4 py-1.5 rounded-md hover:bg-[#5741E0] float-right">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <button className="text-white hover:text-pink-300 transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20">
            <ChevronRight size={32} strokeWidth={3} />
          </button>
        </div>
      </div>
      {/* stay>>>>>>>>>>>> */}
      <section className="bg-[#F178B6A3] mb-20 w-full max-w-[1417px] mx-auto px-4 md:px-8 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <h3 className="text-lg md:text-xl font-bold">
          Stay informed, learn more & contact us
        </h3>

        <button className="flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-[#5D5FEF] hover:bg-blue-700 transition rounded-xl">
          send message
        </button>
      </section>
    </>
  );
}
