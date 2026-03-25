"use client";

import React from 'react';

export default function SupportCategories() {
  const categories = [
    {
      title: "Getting Started",
      color: "bg-[#E67EAF]", // الوردي الغامق
      icon: "🚀", // يمكنك استبدالها بـ <img src="/rocket.png" />
    },
    {
      title: "Account &password",
      color: "bg-[#6366F1]", // البنفسجي المميز
      icon: "👤", 
      active: true, // لإضافة ظل أقوى للبطاقة الوسطى
    },
    {
      title: "Technical issues",
      color: "bg-[#E67EAF]",
      icon: "⚙️",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#FDF2F8] flex justify-center items-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        
        {categories.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center gap-8 p-12 rounded-[40px] transition-all duration-300 hover:-translate-y-2 ${item.color} ${
              item.active 
              ? "shadow-[0_25px_50px_-12px_rgba(99,102,241,0.5)] scale-105 z-10" 
              : "shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
            }`}
          >
            {/* الدائرة البيضاء الشفافة خلف الأيقونة */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-6xl md:text-7xl grayscale brightness-200">
                {item.icon}
              </span>
            </div>

            {/* النص - عريض وأبيض مع توسيط كامل */}
            <h3 className="text-white text-3xl md:text-[40px] font-bold text-center leading-tight drop-shadow-sm">
              {item.title}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}