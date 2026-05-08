"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";

export default function TruthSection() {
  return (
    <>
      <Header /> {/* هذه هي الحاوية المطلوبة لحل المشكلة */}
      <section className="relative w-full min-h-[100vh] flex items-center px-6 md:px-20 overflow-hidden">
        {/* 1. الخلفية المدمجة (تدرج لوني + صورة جريدة) كما في التصميم */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0  z-10" />
          <img
            src="/images/Rectangle 146.png"
            alt="News Background"
            className="w-full h-full object-cover    "
          />

          {/* 2. الفراشات المتداخلة في جهة اليمين */}
          <div className="absolute right-[-50px] md:right-10 top-1/2 -translate-y-1/2 z-20 opacity-80 pointer-events-none">
            <img
              src="/images/flower.png"
              alt="Butterflies"
              className="w-[400px] md:w-[600px] h-auto  opacity-60 object-contain"
            />
          </div>
        </div>

        {/* 3. المحتوى النصي بتنسيق الفيجما */}
        <div className="relative z-30 max-w-4xl flex flex-col text-left">
          <h1 className="text-[48px]   font-extrabold text-white leading-[1.1] tracking-tight mb-2">
            Seeking Truth & Transparency
          </h1>

          <div className="flex flex-col">
            <div className="text-[48px]   font-bold text-white leading-tight">
              Made by{" "}
              <span className="text-[#E67EAF] drop-shadow-md">QUARISMA</span>
            </div>

            <p className="text-[36px] md:text-[28px] text-white/90 font-medium italic mt-2 leading-relaxed">
              “News is the first draft of history.”
            </p>
          </div>
        </div>
      </section>
      <Contactform />
      <Footer />
    </>
  );
}
