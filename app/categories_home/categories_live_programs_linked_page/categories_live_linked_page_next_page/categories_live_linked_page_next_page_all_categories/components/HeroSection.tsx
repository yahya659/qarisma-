import { Share2 } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {" "}
      <section
        className="relative  min-h-[100vh] flex flex-col md:flex-row items-center mb-12 overflow-hidden shadow-2xl  "
        style={{
          background:
            "linear-gradient(270deg, rgba(93, 95, 239, 0.52) 15.28%, #D800B9 100%)",
        }}
      >
        {" "}
        {/* Curtain and Image */}
        <div className="w-full md:w-1/2 h-full relative min-h-[300px] bottom-60 ">
          {/* Left Curtain SVG simulation */}
          <div className="absolute left-0 mb-10 h-full w-32 bg-purple-950/60 z-20   blur-md"></div>
          <img
            src="/images/nature/weather4.png"
            className="absolute inset-0 w-[724.138671875]  h-[724.133056640625] object-cover z-10"
            alt="Feature Stream"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-transparent z-15"></div>
        </div>
        <div className="w-full md:w-1/2 p-10 md:p-14 text-white z-20 relative">
          <span className="text-[#F178B6] font-bold     text-[40px] mb-4 block ">
            Feature Streams
          </span>
          <h1 className="text-[64px]  font-bold text-[#000000] mb-6 leading-tight">
            Artistic trends
          </h1>
          <p className="text-[#FFFFFF] text-[36px] leading-relaxed mb-8 font-bold">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth
          </p>
          <div className="flex gap-4">
            <button className="bg-[#F178B6] text-[24px] hover:bg-pink-500 text-white px-8 py-3   font-bold transition-all shadow-lg flex items-center gap-2">
              Watch Stream
            </button>
            <button className="bg-[#F178B6] text-[36px] hover:bg-pink-300/60 text-white px-8 py-3   font-bold transition-all backdrop-blur-sm border border-white/20 flex items-center gap-2">
                Share
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
