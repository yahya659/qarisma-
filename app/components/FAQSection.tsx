"use client";

import React from 'react';

export default function FAQSection() {
  const questions = [
    "How would you rate your experience with us?",
    "What positives caught your attention in Al Karizma newspaper?",
    "What negatives bothered you in the online newspaper?",
    "What things do you think need to change?",
    "What would you like to see on Al Karizma newspaper's website?"
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      
      {/* 1. الخلفية - صورة الـ Sketch */}
      <div className="absolute inset-0 -z-10 bg-[#EBC4D2]/40">
        <img 
          src="/images/news2.png" // تأكد من وضع صورة الخلفية في مجلد public
          alt="Background Sketch" 
          className="w-full h-full object-cover opacity-20 mix-blend-multiply"
        />
      </div>

      <div className="max-w-5xl w-full flex flex-col items-center">
        
        {/* 2. العنوان الرئيسي */}
        <h2 className="text-4xl md:text-[55px] font-extrabold text-[#6366F1] mb-16 text-center">
          Frequently Asked Question
        </h2>

        {/* 3. قائمة الأسئلة (Accordion Style) */}
        <div className="w-full space-y-2 mb-20">
          {questions.map((question, index) => (
            <div key={index} className="border-b-2 border-black/80">
              <button className="w-full py-6 flex justify-between items-center group">
                <span className="text-xl md:text-2xl font-bold text-black text-left group-hover:text-[#6366F1] transition-colors">
                  {question}
                </span>
                {/* أيقونة السهم البسيطة */}
                <span className="text-2xl font-bold transform group-hover:translate-y-1 transition-transform">
                  ⌄
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* 4. الشريط السفلي (Contact Bar) */}
        <div className="w-full bg-[#B89DA9]/90 backdrop-blur-sm rounded-[20px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <p className="text-white text-lg md:text-xl font-bold tracking-wide text-center md:text-left">
            stay informed, learn more & contact us
          </p>
          
          <button className="bg-[#6366F1] text-white px-10 py-3 rounded-xl font-bold text-lg hover:bg-[#5356e2] transition-all active:scale-95 shadow-lg">
            send message
          </button>
        </div>

      </div>
    </section>
  );
}