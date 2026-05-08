import React from "react";
import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function On_boarding_host_car() {
  return (
    <>
      {" "}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-700">
        {/* 🔮 Page Background */}
        <Image
          src="/images/On_boarding_host_car/On_boarding_host_car.jpg"
          alt="background"
          fill
          priority
          className="object-cover opacity-40"
        />{" "}
        {/* تأثيرات الإضاءة الخلفية (Spotlights) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 left-1/4 w-[150px] h-[600px] bg-white/10 blur-[80px] rotate-[-25deg]"></div>
          <div className="absolute -top-20 right-1/4 w-[150px] h-[600px] bg-white/10 blur-[80px] rotate-[25deg]"></div>
          <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        {/* المحتوى الرئيسي */}
       <HeroSection/>
        
       
      </div>
    </>
  );
}
