import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function The_Language_Light_and_Shadow() {
  return (
    <>
      {" "}
       <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-20">
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-[#F178B6B0]/70" />

        {/* Decorative glows */}
        {/* <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/20 blur-[150px] rounded-full" /> */}
        {/* <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-pink-500/10 blur-[150px] rounded-full" /> */}

        <div className="max-w-7xl mx-auto px-6 h-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
            <div className="space-y-8">
              <h2 className="text-[48px] font-black text-[#FFFFFF] leading-tight">
              The Language of Light and Shadow
              </h2>
              <div className="space-y-6 max-w-lg">
                <p className="text-[32px] text-[#000000] font-bold leading-relaxed">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, in
                  a single sentence, whether from right to left or left  
                </p>
                
              </div>
              <button className=" hover:bg-pink-300 text-white px-12 py-5 rounded-2xl font-black text-[32px]  underline shadow-[0_10px_30px_rgba(236,72,153,0.3)] transition-all transform hover:scale-105">
                   Read more
              </button>
            </div>

            <div className="relative h-full flex items-center justify-center">
              {/* The Window Image with Butterflies */}
              <div className="relative w-[656px] aspect-[4/5]  h-[636px] bg-[#000000]/50  overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/images/events_biennale1.png"
                  alt="Window"
                  className="w-full h-full object-cover opacity-50 "
                />
                <div className="absolute inset-0 bg-black/10 " />

                {/* Butterflies spawning area */}
              </div>
              
            </div>
          </div>
        </div>
      </section>
     
      </main>
    </>
  );
}
