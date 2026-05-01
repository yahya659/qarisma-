import { Play } from "lucide-react";
import React from "react";

export default function Watch_Explore() {
  return (
    <>
      {" "}
      <section className="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-black mb-2">
          Watch & Explore
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-[30px] opacity-80 max-w-xl text-[#000000] font-bold mx-auto mb-10">
          It has one principle and one motto that can be read individually,
          meaning each word on its own, or as a whole, we believe that reality
          and maturity are core for truth
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
          {/* الكبير */}
          <div className="relative w-full max-w-[671px] h-[300px] sm:h-[400px] md:h-[600px] lg:h-[854px] overflow-hidden group border-4 md:border-8 border-white/10 shadow-2xl">
            <img
              src="/images/child/child10.png"
              className="w-full h-full object-cover"
              alt="vid"
            />

            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#5D5FEF6E]/43 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <Play fill="white" size={24} className="md:ml-1" />
              </div>
            </div>

            <div className="absolute top-4 md:top-6 left-4 md:left-6 text-sm md:text-xl font-black italic tracking-tighter drop-shadow-lg">
              RERANTHCNALYS!
            </div>
          </div>

          {/* الصغار */}
          <div className="grid grid-rows-2 gap-4 w-full max-w-[428px]">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="relative w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[345px] overflow-hidden border-4 border-white/10 group"
              >
                <img
                  src="/images/child/child10.png"
                  className="w-full h-full object-cover"
                  alt="vid2"
                />

                <div className="absolute inset-0 bg-[#5D5FEF6E]/43 flex items-center justify-center group-hover:bg-black/30 transition-all cursor-pointer">
                  <Play fill="white" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-8 bg-white w-full sm:w-auto sm:max-w-[306px] text-lg sm:text-xl md:text-2xl lg:text-[36px] h-auto sm:h-[60px] md:h-[77px] text-[#5D5FEF] px-6 sm:px-10 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all">
          More
        </button>
      </section>
    </>
  );
}
