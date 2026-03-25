"use client";

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// بيانات وهمية للأخبار لتبسيط الكود
const newsData = [
  { id: 1, title: 'Top', color: 'bg-[#6366F1]' },
  { id: 2, title: 'World', color: 'bg-[#E67EAF]' },
  { id: 3, title: 'Breaking Nowws', color: 'bg-[#E67EAF]' },
];

export default function NewsSection() {
  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <section className="w-full py-16 px-6 md:px-24 bg-[#EBC4D2]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 relative">
        
        {/* الزخارف العائمة في الخلفية لتعطي نفس إحساس الفيجما */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <img src="/images/D.png" alt="decor" className="w-full h-full object-contain transform rotate-12 scale-110" />
        </div>

        {/* 1. ترويسة القسم (Header Section) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex flex-col gap-2 max-w-2xl">
            <h2 className="text-[#6366F1] text-5xl md:text-[60px] font-bold">
              <span className="text-[#312E81]">Vision Of</span> Latest news
            </h2>
            <p className="text-black text-xl md:text-2xl font-semibold leading-relaxed">
              Top headlines and in-depth reportind across the world
            </p>
          </div>
          
          {/* شريط البحث البنفسجي */}
          <button className="flex items-center gap-3 px-10 py-4 bg-[#312E81] rounded-[20px] text-white text-2xl font-bold shadow-xl hover:bg-[#6366F1] transition-all">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            search news
          </button>
        </div>

        {/* 2. شريط التصفية (Filters Bar) */}
        <div className="flex items-center justify-start gap-4 flex-wrap relative z-10">
          {newsData.map(item => (
            <button key={item.id} className={`px-10 py-3 ${item.color} text-white text-xl font-bold rounded-[15px] shadow-lg hover:scale-105 active:scale-95 transition-all`}>
              {item.title}
            </button>
          ))}
        </div>

        {/* 3. كروت الأخبار الكبيرة (أعلى اليسار) */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-6 mt-10 w-full items-stretch">
  
  {/* 1. الكارد الرئيسي (يسار) */}
  <div className="w-full lg:w-[40%] flex flex-col gap-6 p-6 bg-white/20 backdrop-blur- rounded-[40px] ">
    <img src="/images/CreateAccount.png" alt="News Image" className="w-full h-64 object-cover rounded-[30px] shadow-lg mb-2" />
    <h3 className="text-black text-2xl font-bold drop-shadow-md lowercase text-center">Beyond the Headlines</h3>
    <p className="text-black text-base font-bold text-center leading-relaxed px-2">
      It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
    </p>
    <div className="flex justify-center mt-auto pb-2">
      <button className="px-10 py-3 bg-[#6366F1] text-white text-xl font-bold rounded-2xl shadow-lg hover:bg-[#4F46E5] transition-colors">
        Latest News
      </button>
    </div>
  </div>

  {/* 2. قسم Morning Briefing (منتصف) */}
  <div className="flex-1 flex flex-col gap-4 p-6 bg-[#B89DA9] rounded-[40px] shadow-lg">
    <h4 className="text-white text-2xl font-bold text-center lowercase mb-2">Morning Briefing</h4>
    <div className="flex flex-col gap-4">
      <div className="bg-[#B89DA9]/80 rounded-[25px] p-4 text-black text-md font-bold text-center shadow-inner lowercase border border-white/10">Beyond the Headlines</div>
      <div className="bg-[#B89DA9]/80 rounded-[25px] p-4 text-black text-md font-bold text-center shadow-inner lowercase border border-white/10">Beyond the Headlines</div>
      <div className="bg-[#B89DA9]/80 rounded-[25px] p-4 text-black text-md font-bold text-center shadow-inner lowercase border border-white/10">Beyond the Headlines</div>
      <div className="bg-[#B89DA9]/80 rounded-[25px] p-4 text-black text-md font-bold text-center shadow-inner lowercase border border-white/10">Beyond the Headlines</div>
    </div>
  </div>

  {/* 3. قسم EIDIORS PICKS (يمين) */}
  <div className="flex-1 flex flex-col gap-4 p-6 bg-[#D6CCD1] rounded-[40px] shadow-lg border border-[#B89DA9]/30">
    <h4 className="text-white text-2xl font-bold text-center lowercase mb-2">EIDIORS PICKS</h4>
    <div className="flex flex-col gap-4">
      <div className="bg-[#D6CCD1]/80 rounded-[25px] p-4 text-black text-md font-bold text-center shadow-inner lowercase border border-white/10">Beyond the Headlines</div>
      <div className="bg-[#D6CCD1]/80 rounded-[25px] p-4 text-black text-md font-bold text-center shadow-inner lowercase border border-white/10">Beyond the Headlines</div>
      <div className="bg-[#D6CCD1]/80 rounded-[25px] p-4 text-black text-md font-bold text-center shadow-inner lowercase border border-white/10">Beyond the Headlines</div>
      <div className="bg-[#D6CCD1]/80 rounded-[25px] p-4 text-black text-md font-bold text-center shadow-inner lowercase border border-white/10">Beyond the Headlines</div>
    </div>
  </div>

</div>

        
      </div>
    </section>
    <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="rounded-[40px] shadow-xl bg-[#D6CCD1]/40 border-4 border-[#B8A4AB] overflow-hidden">
              <div className="relative h-72">
                <img src="/images/NEWSS.jpg" className="w-full h-full object-cover" alt="News" />
                <span className="absolute bottom-4 left-6 bg-[#6157E6]/80 text-white px-6 py-1 rounded-lg font-bold">Business</span>
              </div>
              <div className="p-8">
                <h4 className="text-[#6157E6] text-2xl font-bold mb-3">Beyond the truth</h4>
                <p className="font-bold mb-4 italic text-sm">It has one principle and one motto...</p>
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-slate-300 rounded-full" /> <span className="font-bold opacity-70">john william</span></div>
              </div>
            </div>
          ))}
        </div>
        
      </section>
    <Footer/>
    </>
  );
  
}