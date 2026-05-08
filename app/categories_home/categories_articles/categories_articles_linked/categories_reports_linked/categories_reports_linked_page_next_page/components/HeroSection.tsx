import React from "react";

export default function HeroSection() {
  return (
    <>
      {" "}
      <section className="relative bg-[#5D5FEF9C]  h-[100vh] flex flex-col items-center justify-center text-center p-12 mb-12 overflow-hidden shadow-2xl">
        {/* Decorative Curtains (Simulated with SVGs/CSS) */}
        <div className="absolute left-0 top-0 h-full w-24 bg-purple-900/40 rounded-r-full blur-xl"></div>
        <div className="absolute right-0 top-0 h-full w-24 bg-purple-900/40 rounded-l-full blur-xl"></div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vision Of <span className="text-[#F178B6]">Luxury, Personality</span>{" "}
            & <span className="text-pink-300">Power</span> Create Us
          </h1>
          <p className="text-white/90 text-[32px]  leading-relaxed">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, in a single sentence,
            whether from right to left or left to right: (Elegance, Personality,
            Strength).
          </p>
        </div>
      </section>
    </>
  );
}
