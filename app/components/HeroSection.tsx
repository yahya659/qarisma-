import React from "react";
// import ImageItem from '../../../shared/ui/image/ImageItem'
import newspaper from "./newspaper.png";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#f4eef0] font-sans">
      {/* الخلفية */}
      <div className="absolute inset-0 z-0 scale-110">
        <img
          src="/images/newspaper.png"
          className="w-full h-full object-cover brightness-[0.85] contrast-[1.1] animate-slow-pan"
          alt="News background"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f4eef0] via-[#f4eef0]/40 to-transparent z-10"></div>
      </div>

      {/* shape */}
      <div
        className="absolute inset-0 z-10 opacity-30 backdrop-blur-[1px]"
        style={{
          background: "linear-gradient(135deg, #db89ab 0%, #5c56d6 100%)",
          clipPath: "polygon(0 45%, 100% 15%, 100% 70%, 0% 100%)",
        }}
      ></div>

      {/* white shape */}
      <div
        className="absolute inset-0 z-20 bg-white/90 shadow-[0_-20px_100px_rgba(0,0,0,0.05)]"
        style={{
          clipPath: "polygon(0 100%, 100% 30%, 100% 100%, 0% 100%)",
        }}
      ></div>

      {/* content */}
      <div
        className="
      absolute z-30
      top-[180px] md:top-[250px] lg:top-[350px]
      left-4 md:left-[8%] lg:left-[10%]
      w-[92%] md:w-[80%] lg:w-[1296px]
      min-h-[350px] md:min-h-[500px] lg:h-[623px]
      border-[5px] border-[#F178B6]
      rounded-2xl
      p-6 md:p-10 lg:p-14
      "
      >
        <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-extrabold mb-6 leading-[1] tracking-[-1px]">
          <span className="text-[#5D5FEF] block mb-1">
            welcome to <span className="text-[#F178B6]">Quarisma</span>
          </span>
        </h1>

        <div className="max-w-xl mb-12">
          <p className="text-gray-800 text-[16px] md:text-[20px] lg:text-[24px] font-bold leading-relaxed mb-4">
            Don't worry! Just enter your email address below, and we'll send you
            a link to reset your password.
          </p>

          <p className="text-[#100F14] text-[16px] md:text-[20px] lg:text-[24px] font-bold leading-relaxed mb-4">
            Don't worry! Just enter your email address below, and we'll send you
            a link to reset your password.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 items-center">
          <button className="group relative px-8 md:px-10 lg:px-12 py-4 md:py-5 bg-[#5c56d6] text-white font-black rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(92,86,214,0.4)]">
            <div className="absolute inset-0 bg-[#5D5FEF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <span className="relative z-10 flex items-center gap-3 text-sm md:text-base lg:text-lg">
              Learn more
            </span>
          </button>
        </div>
      </div>

      {/* flowers */}
      <div className="absolute bottom-[-5%] right-[-5%] w-[180px] h-[180px] md:w-[350px] md:h-[350px] lg:w-[600px] lg:h-[600px] z-40 pointer-events-none">
        <div className="relative w-full h-full animate-float-main">
          <img
            src="/images/flower.png"
            className="w-full h-full object-contain"
            alt="flower"
            style={{
              filter: "drop-shadow(0 20px 50px rgba(219,137,171,0.5))",
            }}
          />

          <div className="absolute top-10 left-0 w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-float-slow opacity-60">
            <img
              src="/images/flower.png"
              className="w-full h-full object-contain rotate-45"
              alt="flower"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
