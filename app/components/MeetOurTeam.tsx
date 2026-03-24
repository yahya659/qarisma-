"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function MeetOurTeam() {
  return (
    <section className="w-full min-h-screen bg-[#FDF2F8] py-20 px-6 md:px-12 font-sans relative overflow-hidden">
      
      {/* الفراشات الجانبية (خلفية) */}


      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* العنوان الرئيسي */}
        <h1 className="text-5xl md:text-[65px] font-bold text-center mb-20 leading-tight">
          <span className="text-[#6366F1]">Meet our </span>
          <span className="text-[#E67EAF]">Team</span>
        </h1>

        {/* شبكة البطاقات - مكتوبة يدوياً عنصر بعنصر */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-14 md:gap-y-20 mb-20">
          
          {/* البطاقة 1: Manager (المميزة) */}
          
          <div className="relative h-[480px] bg-[#B89DA9] rounded-[30px] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 group">
  
  {/* 1. الصورة كخلفية كاملة للبطاقة */}
  <img 
    src="images/person2.png" 
    alt="Manager" 
    className="absolute inset-0 w-full h-full object-cover" 
  />

  {/* 2. تدرج لوني أسود من الأسفل لجعل النص واضحاً (Gradient Overlay) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

  {/* 3. التظليل العلوي (كما في الفيجما) */}
  <div className="absolute top-0 left-0 w-full h-20 bg-white/10 backdrop-blur-sm"></div>
  
  {/* 4. محتوى النصوص (يتموضّع فوق الصورة والتدرج) */}
  <div className="relative h-full p-8 flex flex-col justify-end z-10">
    <h2 className="text-4xl font-extrabold text-white mb-2">Manager</h2>
    <p className="text-xl text-white/90 mb-8">Mohamed boujbel</p>
    
    <Link href="#" className="text-[#6366F1] font-bold text-xl flex items-center gap-2 hover:text-white transition-colors">
      Learn more <span className="group-hover:translate-x-2 transition-transform">→</span>
    </Link>
  </div>

</div>

          {/* البطاقة 2: عادية */}
          <div className="h-[480px] bg-white rounded-[30px] shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-1/2 w-full relative">
              <img src="images/person1.png" alt="Team"  className="object-cover" />
              <div className="absolute top-0 w-full h-10 bg-white/20"></div>
              <div className="absolute bottom-0 w-full h-10 bg-white/20"></div>
            </div>
            <div className="h-1/2 flex items-center justify-center">
              {/* مساحة فارغة كما في التصميم */}
            </div>
          </div>

          {/* البطاقة 3: عادية */}
          <div className="h-[480px] bg-white rounded-[30px] shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-1/2 w-full relative">
              <img src="images/person2.png" alt="Team"  className="object-cover" />
              <div className="absolute top-0 w-full h-10 bg-white/20"></div>
              <div className="absolute bottom-0 w-full h-10 bg-white/20"></div>
            </div>
            <div className="h-1/2 flex items-center justify-center"></div>
          </div>

          {/* البطاقة 4: عادية */}
          <div className="h-[480px] bg-white rounded-[30px] shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-1/2 w-full relative">
              <img src="images/person3.png" alt="Team"  className="object-cover" />
              <div className="absolute top-0 w-full h-10 bg-white/20"></div>
              <div className="absolute bottom-0 w-full h-10 bg-white/20"></div>
            </div>
            <div className="h-1/2 flex items-center justify-center"></div>
          </div>

          {/* البطاقة 5: عادية */}
          <div className="h-[480px] bg-white rounded-[30px] shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-1/2 w-full relative">
              <img src="images/person1.png" alt="Team"  className="object-cover" />
              <div className="absolute top-0 w-full h-10 bg-white/20"></div>
              <div className="absolute bottom-0 w-full h-10 bg-white/20"></div>
            </div>
            <div className="h-1/2 flex items-center justify-center"></div>
          </div>

          {/* البطاقة 6: عادية */}
          <div className="h-[480px] bg-white rounded-[30px] shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-1/2 w-full relative">
              <img src="images/person3.png" alt="Team"  className="object-cover" />
              <div className="absolute top-0 w-full h-10 bg-white/20"></div>
              <div className="absolute bottom-0 w-full h-10 bg-white/20"></div>
            </div>
            <div className="h-1/2 flex items-center justify-center"></div>
          </div>

        </div>

        {/* منطقة التحكم (أزرار More والأسهم) */}
       {/* القسم السفلي بالكامل (الزر + أزرار التحكم) */}
<div className="w-full flex flex-col items-center gap-10 mt-12">
  
  {/* 1. زر More - سطر مستقل في الأعلى */}
  <button className="px-20 py-4 rounded-full bg-[#6366F1] text-white text-2xl font-bold shadow-lg hover:bg-[#5356e2] transition-all active:scale-95 min-w-[200px]">
    More
  </button>

  {/* 2. حاوية التحكم (الأسهم والنقاط) - سطر مستقل في الأسفل */}
  <div className="w-full flex flex-row items-center justify-between max-w-4xl px-4 md:px-10">
    
    {/* سهم يسار */}
    <button className="w-16 h-16 rounded-full bg-[#D1D5DB]/60 flex items-center justify-center text-[#6366F1] hover:bg-[#C7D2FE] transition-all shadow-md">
      <FaArrowLeft size={24} />
    </button>

    {/* نقاط التصفح (Pagination) في المنتصف */}
    <div className="flex items-center gap-4">
      {/* النقطة النشطة */}
      <div className="w-6 h-6 rounded-full bg-[#6366F1] shadow-[0_0_12px_rgba(99,102,241,0.5)]"></div>
      {/* النقاط غير النشطة */}
      <div className="w-6 h-6 rounded-full bg-[#C7D2FE]"></div>
      <div className="w-6 h-6 rounded-full bg-[#C7D2FE]"></div>
      <div className="w-6 h-6 rounded-full bg-[#C7D2FE]"></div>
      <div className="w-6 h-6 rounded-full bg-[#C7D2FE]"></div>
    </div>

    {/* سهم يمين */}
    <button className="w-16 h-16 rounded-full bg-[#D1D5DB]/60 flex items-center justify-center text-[#6366F1] hover:bg-[#C7D2FE] transition-all shadow-md">
      <FaArrowRight size={24} />
    </button>

  </div>
</div>

      </div>
    </section>
  );
}