"use client";

import React from 'react';
import { FaSearch } from 'react-icons/fa'; // تأكد من تثبيت مكتبة react-icons
import Header from '../components/Header';
import Footer from '../components/Footer';
import SupportCategories from '../components/SupportCategories';
import FAQSection from '../components/FAQSection';

export default function SupportHeroSection() {
  return (
    <>
    <Header/>
    <section className="relative w-full min-h-[100vh] flex items-center px-10 md:px-24 overflow-hidden">
      
      {/* 1. الخلفية المدمجة (Background & Decoration) */}
      <div className="absolute inset-0 -z-10 bg-[#F178B6]/20">
        {/* تراكب بنفسجي خفيف جداً لإعطاء الروح اللونية للصورة */}
        <div className="absolute inset-0 bg-[#F178B6]/10 z-10" />
        
        {/* صورة الجرائد القديمة في الخلفية */}
        <img 
          src="/images/Sporte_back.png" 
          alt="News Background" 
          className="w-full h-full object-cover opacity-70 grayscale"
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
      <div className="relative z-30 max-w-4xl flex flex-col gap-3 text-left">
        
        {/* العنوان الرئيسي - أبيض عريض */}
        <h1 className="text-[48px]  font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
          Seeking Truth & Transparency
        </h1>

        {/* العنوان الثاني - أسود مع كلمة QUARISMA */}
        <h2 className="text-[48px] font-bold text-black leading-tight">
          Made by <span className="text-3xl md:text-[54px] font-bold text-black leading-tight">al Quarisma</span>
        </h2>

        {/* السطر الفرعي - أحرف كبيرة وتباعد واسع */}
        <p className="text-[24px] text-white font-bold tracking-[0.3em] uppercase mt-6 mb-10 opacity-90">
          What can we help you with ?
        </p>
        
        {/* 4. شريط البحث البنفسجي (The Search Bar) */}
        <div className="relative w-full max-w-2xl shadow-2xl transition-all hover:scale-[1.01]">
          <input 
            type="text" 
            placeholder="search" 
            className="w-[566px] h-[75px] bg-[#6366F1] text-[#FFFFFF] text-[24px] font-medium px-12 rounded-2xl placeholder:text-white/70 focus:outline-none border-none"
          />
          {/* أيقونة البحث في أقصى اليمين */}
          
        </div>

      </div>

    </section>
    <SupportCategories/>
    <FAQSection/>
    <Footer/>
    </>
  );
}