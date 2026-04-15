"use client";
import { Play } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full h-[100vh] bg-[#5D5FEF30] py-16 px-6 md:px-32 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 bg-[#5D5FEF30] aspect-square md:aspect-video rounded-lg overflow-hidden shadow-2xl relative">
          <img
            src="/images/social/social6.jpg"
            className="w-[620px] h-[565.2662963867188] object-cover"
            alt="Crowd"
          />
          <div className="absolute inset-0 bg-[#5D5FEF30]"></div>
        </div>
        <div className="w-full md:w-1/2 text-white">
          <h1 className="text-4xl md:text-[96px] font-black text-[#000000] mb-6 leading-none">
            Beyond the <br /> Headlines
          </h1>
          <p className="max-w-xl text-[32px] text-[#FFFFFF] font-bold leading-relaxed mb-10 opacity-90">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth
          </p>
          <button className="bg-[#5D5FEF] text-white px-10 py-3 rounded-xl font-bold shadow-xl flex items-center gap-2">
            Watch More
          </button>
        </div>
        {/* Floating Butterflies Decoration */}

        <img
          src="/images/social/butterflies1.png"
          className="absolute right-10 top-10 w-12 h-12 opacity-100"
          alt="butterfly"
        />

        <img
          src="/images/social/butterflies1.png"
          className="absolute right-20 bottom-20 w-10 h-10 opacity-100"
          alt="butterfly"
        />
      </section>
    </>
  );
}
