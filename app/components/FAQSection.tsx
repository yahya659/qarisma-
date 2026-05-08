"use client";

import React from 'react';

export default function FAQSection() {
  const questions = [
    "why I didn’t receive the verification email ?",
    "How do I create an account?",
    "How do I reset my password?",
    "How to Update My Email Address",
    "Can I delete my account?",
    "this work is offline,what should i do?",
    "Is my data secure?",
    "The app isn't loading. What should I do?",
  ];

  return (
    <section className="relative min-h-screen  bg-[#BD9FA973]/40 w-full flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      
      {/* 1. الخلفية - صورة الـ Sketch */}
      <div className="absolute inset-0 -z-10 bg-[#BD9FA973]/40">
        <img 
          src="/images/FAQSection.jpg" // تأكد من وضع صورة الخلفية في مجلد public
          alt="Background Sketch" 
          className="w-full h-full object-cover opacity-20 mix-blend-multiply"
        />
      </div>

      <div className="max-w-5xl w-full flex flex-col items-center">
        
        {/* 2. العنوان الرئيسي */}
        <h2 className="text-[64px]   font-extrabold text-[#6366F1] mb-16 text-center">
          Frequently Asked Question
        </h2>

        {/* 3. قائمة الأسئلة (Accordion Style) */}
        <div className="w-full space-y-2 mb-20">
          {questions.map((question, index) => (
            <div key={index} className="border-b-2 border-black/80">
              <button className="w-full py-6 flex justify-between items-center group">
                <span className="text-[40px] md:text-2xl font-bold text-black text-left group-hover:text-[#6366F1] transition-colors">
                  {question}
                </span>
              
              </button>
            </div>
          ))}
        </div>

      

      </div>
    </section>
  );
}