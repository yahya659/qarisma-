"use client";

import React from 'react';

export default function CategoriesPage() {
  // قائمة التصنيفات كما تظهر في التصميم
  const categories = [
    { name: 'Art', color: 'bg-[#E67EAF]' },
    { name: 'fashion', color: 'bg-[#6366F1]' },
    { name: 'Sports', color: 'bg-[#6366F1]' },
    { name: 'Nature', color: 'bg-[#6366F1]' },
    { name: 'Child', color: 'bg-[#6366F1]' },
    { name: 'Social', color: 'bg-[#6366F1]' },
    { name: 'Entertainment', color: 'bg-[#6366F1]' },
    { name: 'Healh', color: 'bg-[#6366F1]' },
  ];

  return (
    <main className="min-h-screen w-full bg-white flex flex-col items-center justify-start pt-24 px-4 relative overflow-hidden">
      
      {/* 1. الفراشة الخطية في الخلفية (SVG لضمان الدقة) */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-20 pointer-events-none translate-x-20 -translate-y-10">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#D8B4C1]">
          <path d="M100 150C100 150 150 120 180 80C210 40 160 20 140 50C120 80 100 150 100 150ZM100 150C100 150 50 120 20 80C-10 40 40 20 60 50C80 80 100 150 100 150Z" 
                stroke="currentColor" strokeWidth="1" />
          <path d="M95 140C95 140 70 130 50 100M105 140C105 140 130 130 150 100" 
                stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        </svg>
      </div>

      {/* 2. قسم العنوان (welcome to Quarisma) */}
      <div className="text-center z-10 mb-16">
        <h1 className="text-6xl md:text-[100px] font-bold tracking-tight mb-8">
          <span className="text-[#6366F1]">welcome to</span>
          {' '}
          <span className="text-[#E67EAF]">Quarisma</span>
        </h1>
        
        <p className="text-2xl md:text-[32px] font-bold text-black max-w-5xl mx-auto leading-tight">
          Don't worry! Just enter your email address below, and we'll send you a link to reset your password.
        </p>
      </div>

      {/* 3. شبكة الأزرار المرنة */}
      <div className="w-full max-w-6xl z-10">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`
                py-4 rounded-[20px] text-white text-[28px] font-medium shadow-md
                transition-all transform hover:scale-105 active:scale-95
                ${cat.color} 
                ${cat.name === 'Art' ? 'px-28' : 'px-20'}
                ${cat.name === 'Entertainment' ? 'px-24' : ''}
              `}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

    </main>
  );
}