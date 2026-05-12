import React from "react";

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-[100vh] overflow-hidden flex items-center">
        {/* Background Image */}
        <img
          src="/images/events_gallery1.jpg"
          className="absolute inset-0 w-full h-full object-cover  "
          alt="Hero"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#5D5FEF]/20" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-white w-full">
          <div className="inline-block mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black italic leading-tight">
             When Colors Speak: Secrets 
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black italic leading-tight">
              Hidden in Famous Paintings
            </h1>
          </div>

          <p className="text-lg sm:text-2xl text-[#000000] md:text-3xl lg:text-[40px] font-bold leading-snug max-w-3xl">
            It has one principle and one motto that can be read individually,
            meaning each
          </p>
           <button className="bg-[#5D5FEF]  hover:bg-pink-500 w-[260.252685546875] text-[#FFFFFF] text-[20px] font-bold py-4 px-12   shadow-lg transform transition active:scale-95">
        Learn More
          </button>
        </div>
      </section>
    </>
  );
}
