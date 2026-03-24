"use client";

import React from 'react';

export default function MarriagePlatform() {
  return (
    <section className="w-full min-h-[600px] bg-[#FDF2F8]/50 flex items-center justify-center py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* 1. جانب الصورة - مع إضافة ظل خفيف وزوايا حادة قليلاً كما في الصورة */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full aspect-square max-w-[500px] overflow-hidden shadow-2xl">
            <img 
              src="images/marriagebeach.png" // استبدل بمسار صورتك
              alt="Couple on beach" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 2. جانب النصوص والمحتوى */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          
          {/* العنوان الرئيسي بلون بنفسجي مميز */}
          <h2 className="text-4xl md:text-[52px] font-bold text-[#6366F1] leading-tight mb-8">
            Explore More About Our Marriage Platform
          </h2>

          {/* النص المقتبس (Quote) */}
          <div className="max-w-[550px] mb-10">
            <p className="text-xl md:text-2xl text-black leading-relaxed font-medium italic">
              <span className="underline decoration-1 underline-offset-4 font-bold italic">“I love you</span> without knowing how, or when, or from 
              where. I love you simply, without problems or pride: I 
              love you in this way because I do not know any other 
              way of loving but this, in which there is no I or you, so 
              intimate that your hand upon my chest is my hand, so 
              intimate then when I fall asleep your eyes close.”
            </p>
          </div>

          {/* زر Explore الوردي */}
          <button className="px-16 py-4 rounded-2xl bg-[#EBC4D2] text-[#6366F1] text-2xl font-bold shadow-md hover:bg-[#d8b0be] transition-all active:scale-95">
            Explore
          </button>
          
        </div>

      </div>
    </section>
  );
}