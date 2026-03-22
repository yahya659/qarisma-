import React from "react";
// import ImageItem from '../../../shared/ui/image/ImageItem'
import newspaper from "./newspaper.png";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[650px] md:h-[800px] lg:h-[900px] overflow-hidden bg-[#f4eef0] font-sans">
      {/* 1. الخلفية الأساسية - تأثير حركة بانورامية بطيئة */}
      <div className="absolute inset-0 z-0 scale-110">
        <img
          src="images/newspaper.png"
          className="w-full h-full object-cover brightness-[0.85] contrast-[1.1] animate-slow-pan"
          alt="News background"
        />
        {/* Overlay متدرج لضمان وضوح النص */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4eef0] via-[#f4eef0]/40 to-transparent z-10"></div>
      </div>

      {/* 2. الأشكال المائلة - تصميم حاد وأنيق */}
      <div
        className="absolute inset-0 z-10 opacity-30 backdrop-blur-[1px]"
        style={{
          background: "linear-gradient(135deg, #db89ab 0%, #5c56d6 100%)",
          clipPath: "polygon(0 45%, 100% 15%, 100% 70%, 0% 100%)",
        }}
      ></div>

      {/* 3. حاوية المحتوى الرئيسية - شكل أبيض مائل */}
      <div
        className="absolute inset-0 z-20 bg-white/90 shadow-[0_-20px_100px_rgba(0,0,0,0.05)]"
        style={{
          clipPath: "polygon(0 100%, 100% 30%, 100% 100%, 0% 100%)",
        }}
      ></div>

      {/* 4. المحتوى النصي - تركيز على البراندينج */}
      <div
        className="absolute 
top-[350px] 
left-[10%] 
w-[1296px] 
h-[623px] 
border-5 border-[#F178B6]
rounded-2xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-[1] tracking-[-1px]">
          <span className="text-[#5c56d6] block mb-1">welcome to <span className="bg-gradient-to-r 
  from-[#db89ab] via-[#5c56d6] to-[#db89ab] 
  bg-[length:100%_auto] 
  bg-clip-text text-transparent">Quarisma</span></span>

    
        </h1>

        <div className="max-w-xl mb-12 animate-fade-in-up animation-delay-300">
          <p className="text-gray-800 text-lg md:text-xl font-bold leading-relaxed mb-4">
            Where Elegance Meets Strength.
          </p>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed italic">
            "Discover a curated world of luxury and sophistication, tailored for
            those who dare to stand out."
          </p>
        </div>

        {/* مجموعة الأزرار الاحترافية */}
        <div className="flex flex-wrap gap-6 items-center animate-fade-in-up animation-delay-500">
          <button className="group relative px-12 py-5 bg-[#5c56d6] text-white font-black rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(92,86,214,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#db89ab] to-[#5c56d6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-3 text-lg">
              Learn more{" "}
              <span className="group-hover:translate-x-2 transition-transform"></span>
            </span>
          </button>
        </div>
      </div>

      {/* 5. عنصر الزهور المتناثرة - عمق بصري كبير */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] z-40 pointer-events-none">
        <div className="relative w-full h-full animate-float-main">
          {/* الزهرة الكبيرة */}
          <img
            src="images/flower.png"
            className="w-full h-full object-contain"
            style={{ filter: "drop-shadow(0 20px 50px rgba(219,137,171,0.5))" }}
          />
          {/* زهور صغيرة عائمة حولها */}
          <div className="absolute top-10 left-0 w-24 h-24 animate-float-slow opacity-60">
            <img
              src="images/flower.png"
              className="w-full h-full object-contain rotate-45"
            />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
    </div>
  );
};

export default HeroSection;
