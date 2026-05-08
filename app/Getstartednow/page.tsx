"use client";

import React, { useState } from "react";

/**
 * تم استبدال مكونات Next.js بمكونات React القياسية
 * لضمان عمل المعاينة بسلاسة في البيئة الحالية.
 */

export default function App() {
  // محاكاة للتنقل بدلاً من useRouter
  const handleSignUp = () => {
    console.log("Redirecting to signup...");
  };

  return (
    <div className="min-h-screen bg-[#1a1625] bg-cover bg-center flex flex-col items-center p-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <img
          src="/images/Getstartednow/Getstartednow.png"
          alt="background"
          className="w-full h-full object-cover blur-sm scale-110"
        />
      </div>

      {/* --- الفراشات الجانبية */}
      <div className="absolute top-0 right-0 z-20 pointer-events-none w-48 h-64 md:w-80 md:h-96">
        <img
          src="/images/launch_page/launch_page2.png"
          alt="Decorative Butterflies"
          className="w-full h-full object-contain opacity-50  "
        />
        {/* عنصر بصري احتياطي في حال لم يتم تحميل الصورة */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-pink-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
        {/* الشعار */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-pink-200 mb-6 shadow-lg bg-gray-800">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* العناوين */}
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
          <span className="text-pink-400">welcome to</span> Quarisma
        </h1>
        <p className="text-gray-300 text-center mb-12 max-w-md">
          Explore more about world and be updated with the latest news
        </p>

        {/* الحاوية الرئيسية للبطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* البطاقة الأولى: NEWS */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col items-center transition-transform hover:scale-105">
            <div className="w-full aspect-video relative rounded-2xl overflow-hidden mb-6 bg-gray-700">
              <img
                src="/images/news.jpg"
                alt="News"
                className="w-full h-full object-cover"
              />
            </div>
            <a href="/News">
              {" "}
              <h2 className="text-2xl font-bold tracking-widest border-b-2 border-white/30 pb-1 px-4 cursor-pointer">
                NEWS
              </h2>
            </a>
          </div>

          {/* البطاقة الثانية: Home */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col items-center ring-1 ring-white/30 transition-transform hover:scale-105 scale-105 z-10">
            <div className="w-full aspect-video relative rounded-2xl overflow-hidden mb-6 bg-gray-700">
              <img
                src="/images/home.jpg"
                alt="Home"
                className="w-full h-full object-cover"
              />
            </div>
            <a href="/Home">
              <h2 className="text-2xl font-bold tracking-widest border-b-2 border-white/30 pb-1 px-4 cursor-pointer">
                Home
              </h2>
            </a>
          </div>

          {/* البطاقة الثالثة: Categories */}
          <div className="bg-white/10  backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col items-center transition-transform hover:scale-105">
            <div className="w-full aspect-video relative rounded-2xl overflow-hidden mb-6 bg-gray-700">
              <img
                src="/images/categories.jpg"
                alt="Categories"
                className="w-full h-full object-cover"
              />
            </div>
            <a href="/categories_home">
              <h2 className="text-2xl font-bold tracking-widest border-b-2 border-white/30 pb-1 px-4 cursor-pointer">
                Categories
              </h2>
            </a>
          </div>
        </div>

        {/* Sign */}
        <div className="mt-16 text-center">
          <a href="CreateAccount"><p className="text-gray-400 mb-2">Don't have an account?</p></a>
          
          <a href="/sign_in"><button
            className="text-pink-400 font-bold text-lg hover:text-pink-300 transition-all active:scale-95"
            onClick={handleSignUp}
          >
            Sign Up Now
          </button></a>
          
        </div>
      </div>
    </div>
  );
}
