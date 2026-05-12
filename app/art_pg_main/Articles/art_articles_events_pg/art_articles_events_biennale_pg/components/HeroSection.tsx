import React from "react";

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* Background Image */}
        <img
          src="/images/events_biennale.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          alt="Hero"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#5D5FEF]/0 to-[#F178B6]/70" />
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-white w-full">
          <div className="inline-block mb-6">
            <h1 className="text-[36px] text-[#FFFFFF]    font-black italic leading-tight">
             Explore more about
            </h1>

          
          </div>

          <p className="text-[32px]  text-[#FFFFFF] md:text-3xl lg:text-[40px] font-bold leading-snug max-w-3xl">
            It has one principle and one motto that can be read individually,
            meaning each
          </p>
          <button className="bg-[#5D5FEF85]/50 mt-20  text-[30px] text-[#F178B6] px-10 py-3 rounded-2xl font-bold shadow-lg    ">
           Read Fullstory 
          </button>
        </div>
      </section>
    </>
  );
}
