"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";

export default function TruthSection() {
  return (
    <>

      <Header /> {/* هذه هي الحاوية المطلوبة لحل المشكلة */}
      <section className="relative w-full min-h-[500px] flex items-center px-6 md:px-20 overflow-hidden">
        {/* 1. الخلفية المدمجة (تدرج لوني + صورة جريدة) كما في التصميم */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/95 via-[#6366F1]/80 to-[#EBC4D2]/40 z-10" />
          <img
            src="/images/news2.png"
            alt="News Background"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
        </div>

       

        {/* 3. المحتوى النصي بتنسيق الفيجما */}
        <div className="relative z-30 max-w-4xl flex flex-col text-left">
          <h1 className="text-4xl md:text-[64px] font-extrabold text-white leading-[1.1] tracking-tight mb-2">
            Seeking Truth & Transparency
          </h1>

          <div className="flex flex-col">
            <div className="text-3xl md:text-[50px] font-bold text-white leading-tight">
              Made by{" "}
              <span className="text-[#E67EAF] drop-shadow-md">QUARISMA</span>
            </div>

            <p className="text-lg md:text-[28px] text-white/90 font-medium italic mt-2 leading-relaxed">
              “News is the first draft of history.”
            </p>
          </div>
        </div>
      </section>
      <Contactform/>
      <Footer />
    </>

  );
}
