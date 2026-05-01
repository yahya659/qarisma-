import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Epidemic_Pandemicprone_Disease() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mt-24 w-full text-center">
      <h2 className="text-white text-[64px] md:text-4xl font-extrabold mb-10 drop-shadow-md">
        Epidemic & Pandemic-prone Disease
      </h2>
      <div className="relative group max-w-5xl mx-auto">
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden md:block text-white/50 hover:text-white cursor-pointer">
          <ChevronLeft size={60} strokeWidth={3} />
        </div>
        <div className="bg-[#F178B6A3]/60 overflow-hidden shadow-2xl   ">
          <img
            src="/images/Deadly_Diseases/Deadly_Diseases2.jpg"
            className="w-full h-[400px] object-cover opacity-90"
          />
          <div className=" bg-[#F178B6A3]/10  p-8">
            <p className="text-[#FFFFFF] font-bold text-[36px] md:text-xl leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
          </div>
        </div>
        <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:block text-white/50 hover:text-white cursor-pointer">
          <ChevronRight size={60} strokeWidth={3} />
        </div>
      </div>
    </section>
  );
}
