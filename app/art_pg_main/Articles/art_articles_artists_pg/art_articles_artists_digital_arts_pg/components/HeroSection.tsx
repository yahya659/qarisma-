import React from 'react'

export default function HeroSection() {
  return (
  <>
  <section className="relative min-h-screen overflow-hidden flex items-center">
    
    {/* Background Image */}
    <img
      src="/images/digiital.jpg"
      className="absolute inset-0 w-full h-full object-cover opacity-70"
      alt="Hero"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-[#5D5FEF]/50" />

    {/* Content */}
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-white w-full">
      
      <div className="inline-block mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black italic leading-tight">
          Explore more about
        </h1>

        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#F178B6] font-bold italic leading-tight">
          Digital Arts
        </h1>
      </div>

      <p className="text-lg sm:text-2xl md:text-3xl lg:text-[40px] font-bold leading-snug max-w-3xl">
        It has one principle and one motto that can be read individually, meaning each
      </p>
    </div>

  </section>
</>
  );
}
