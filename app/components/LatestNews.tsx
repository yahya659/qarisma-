"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function LatestNews() {
  return (
    <section className="min-h-screen w-full bg-[#F3E8EE] py-16 px-6 md:px-20 font-sans">
      
      {/* العنوان العلوي ورابط المشاهدة */}
      <div className="max-w-7xl mx-auto flex justify-between items-end mb-12">
        <h2 className="text-6xl md:text-8xl font-bold text-[#7E5BEF] tracking-tight">
          Latest News
        </h2>
        <Link href="/all-news" className="text-[#7E5BEF] text-xl font-bold flex items-center hover:underline pb-4">
          See all <span className="ml-2 text-2xl">→</span>
        </Link>
      </div>

      {/* حاوية البطاقات الثلاث - تم وضع النصوص كاملة هنا */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6">
        
        {/* البطاقة الأولى (بيضاء) */}
        <div className="relative w-full lg:w-[400px] h-[580px] bg-white rounded-[50px] overflow-hidden flex flex-col shadow-2xl transition-transform hover:scale-105 duration-300">
          <div className="relative w-full h-[50%] p-4">
            <div className="relative w-full h-full rounded-[40px] overflow-hidden">
              <img src="images/news1.png" alt="War On Gaza"  className="object-cover" />
              <div className="absolute bottom-4 left-6 bg-white/20 backdrop-blur-md px-4 py-1 rounded-xl">
                <span className="text-2xl font-bold text-white">War On Gaza</span>
              </div>
            </div>
          </div>
          <div className="p-8">
            <p className="text-lg font-bold text-gray-800 leading-relaxed">
              It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, in a single sentence, whether from right to left or left to right: (Elegance, Personality, Strength)
            </p>
          </div>
        </div>

        {/* البطاقة الثانية (الوسطى - وردي داكن مميز) */}
        <div className="relative w-full lg:w-[460px] h-[650px] bg-[#C1A7B1] rounded-[50px] overflow-hidden flex flex-col shadow-2xl z-10 scale-105">
          <div className="relative w-full h-[50%] p-4">
            <div className="relative w-full h-full rounded-[40px] overflow-hidden border-2 border-white/20">
              <img src="images/news2.png" alt="War On Gaza"  className="object-cover" />
              <div className="absolute bottom-4 left-6 bg-white/20 backdrop-blur-md px-4 py-1 rounded-xl">
                <span className="text-3xl font-bold text-white tracking-wide">War On Gaza</span>
              </div>
            </div>
          </div>
          <div className="p-10">
            <p className="text-xl font-bold text-gray-900 leading-relaxed">
              It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, in a single sentence, whether from right to left or left to right: (Elegance, Personality, Strength)
            </p>
          </div>
        </div>

        {/* البطاقة الثالثة (بيضاء) */}
        <div className="relative w-full lg:w-[400px] h-[580px] bg-white rounded-[50px] overflow-hidden flex flex-col shadow-2xl transition-transform hover:scale-105 duration-300">
          <div className="relative w-full h-[50%] p-4">
            <div className="relative w-full h-full rounded-[40px] overflow-hidden">
              <img src="images/news1.png" alt="War On Gaza"  className="object-cover" />
              <div className="absolute bottom-4 left-6 bg-white/20 backdrop-blur-md px-4 py-1 rounded-xl">
                <span className="text-2xl font-bold text-white">War On Gaza</span>
              </div>
            </div>
          </div>
          <div className="p-8">
            <p className="text-lg font-bold text-gray-800 leading-relaxed">
              It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, in a single sentence, whether from right to left or left to right: (Elegance, Personality, Strength)
            </p>
          </div>
        </div>

      </div>

      {/* نقاط التنقل (Pagination Dots) في الأسفل */}
      <div className="flex justify-center gap-4 mt-16">
        <div className="w-10 h-10 rounded-full bg-[#D9B4C1]/40 transition-all cursor-pointer"></div>
        <div className="w-10 h-10 rounded-full bg-[#D9B4C1] transition-all cursor-pointer"></div>
        <div className="w-10 h-10 rounded-full bg-[#D9B4C1]/40 transition-all cursor-pointer"></div>
        <div className="w-10 h-10 rounded-full bg-[#D9B4C1]/40 transition-all cursor-pointer"></div>
      </div>

    </section>
  );
}