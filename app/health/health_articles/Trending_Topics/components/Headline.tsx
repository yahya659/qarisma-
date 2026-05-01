import React from "react";

export default function Headline() {
  return (
    <>
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-10 w-full">
          <div className="bg-[#FF88B9]/60 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl relative border border-pink-300/50">
            {/* Decorative Side Lines */}
            <div className="absolute top-4 bottom-4 left-2 w-1.5 rounded-full bg-pink-300/60 hidden md:block" />
            <div className="absolute top-8 bottom-8 left-4 w-1.5 rounded-full bg-pink-300/40 hidden md:block" />

            {/* Image */}
            <div className="w-full md:w-1/2 relative z-10 md:pl-6">
              <img 
                src="/images/health/health4.jpg" 
                alt="Medical Professionals" 
                className="w-[586px] h-[586px] object-cover shadow-lg  "
              />
            </div>
            
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-black z-10 pr-4">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Headline</h1>
              <p className="text-base md:text-lg font-bold mb-6 leading-relaxed text-gray-900">
                It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
              </p>
              <a href="#" className="text-white font-extrabold text-lg hover:text-pink-100 transition-colors inline-block underline underline-offset-4 decoration-2">
                View more
              </a>
            </div>
          </div>
        </section>
    </>
  );
}
