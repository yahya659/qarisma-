import React from 'react'

export default function HeroSection() {
  return (
  <> <section className="relative h-[100vh] overflow-hidden">
        <img 
          src="/images/atisit.jpg" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-[#5D5FEF]/50" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-50 text-white">
          <div className=" bg-[#F178B6]/70   inline-block px-6 py-2   mb-6  ">
            <h1 className="text-[48px]  font-black italic">Artistic trends</h1>
          </div>
          <p className="text-[48px]   font-bold   leading-tight">
            It has one principle and one motto that can be read individually, meaning each
          </p>
        </div>
      </section></>
  );
}
