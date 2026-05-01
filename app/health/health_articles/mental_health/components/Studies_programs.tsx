import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Studies_programs() {
  return (
    <>
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-[64px]  font-bold text-center mb-8">
          studies & programs
        </h2>

        <div className="relative h-[300px] sm:h-[450px] md:h-[600px] lg:h-[676px] w-full max-w-[881px] mx-auto bg-purple-400/20 rounded-[2rem] md:rounded-[3rem] p-3 md:p-4 border border-white/10">
          <div className="bg-purple-400/40     p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <div className="w-full max-w-[845px] h-[200px] sm:h-[280px] md:h-[350px] lg:h-[404px] overflow-hidden shadow-xl border-2 border-white/20">
              <img
                src="/images/health/mental_health2.png"
                className="w-full h-full object-cover"
                alt="top"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full max-w-[845px] mx-auto mt-4 bg-[#F178B6A3]/60 space-y-2 md:space-y-3">
            <p className="text-sm sm:text-base md:text-lg lg:text-[24px] opacity-80">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth.
            </p>
          </div>

          {/* Arrows */}
          <div className="absolute top-1/2 left-0 md:-left-4 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer">
            <ChevronLeft size={16} />
          </div>

          <div className="absolute top-1/2 right-0 md:-right-4 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center cursor-pointer">
            <ChevronRight size={16} />
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12 items-center flex-wrap">
          <ChevronLeft className="opacity-40" />

          <div className="flex gap-2">
            <span className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-md font-bold text-sm">
              1
            </span>

            <span className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-md text-sm cursor-pointer">
              2
            </span>

            <span className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-md text-sm cursor-pointer">
              3
            </span>
          </div>

          <ChevronRight />
        </div>
      </section>
    </>
  );
}
