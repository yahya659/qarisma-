"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();
  const [showMusic, setShowMusic] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMusic(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-[#1a1625] bg-cover bg-center flex flex-col items-center p-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <img
          src="/images/Getstartednow/Getstartednow.png"
          alt="background"
          className="w-full h-full object-cover blur-sm scale-110"
        />
      </div>

      {/* --- الفراشات الجانبية متحركة */}
      {/* --- الفراشات ثم تتحول إلى آلات موسيقية */}
      <div
        className="absolute top-0 right-0 z-20 pointer-events-none w-48 h-64 md:w-80 md:h-96"
        style={{ animation: "floatButterfly 4s ease-in-out infinite" }}
      >
        {!showMusic ? (
          <img
            src="/images/launch_page/launch_page2.png"
            alt="Butterflies"
            className="w-full h-full object-contain opacity-60 transition-all duration-1000"
          />
        ) : (
          <img
            src="/images/music.png"
            alt="Music Instruments"
            className="w-full h-full object-contain opacity-80 animate-pulse transition-all duration-1000"
          />
        )}

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
          <div className="bg-gradient-to-b from-[#4a3427] to-[#241812]   rounded-3xl p-6 shadow-2xl flex flex-col items-center transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,215,0,0.7)]">
            <div className="w-full aspect-video relative rounded-2xl overflow-hidden mb-6 bg-gray-700">
              <img
                src="/images/news.jpg"
                alt="News"
                className="w-full h-full object-cover"
              />
            </div>
            <a href="/News">
              <h2 className="text-2xl font-bold tracking-widest border-b-2 border-white/30 pb-1 px-4 cursor-pointer">
                NEWS
              </h2>
            </a>
          </div>

          {/* البطاقة الثانية: Home */}
          <div className="bg-gradient-to-b from-[#4a3427] to-[#241812]   rounded-3xl p-6 shadow-2xl flex flex-col items-center transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,215,0,0.7)]">
<div className="w-full aspect-video relative rounded-2xl overflow-hidden mb-6 bg-gray-700">              <img
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
          <div className="bg-gradient-to-b from-[#4a3427] to-[#241812]   rounded-3xl p-6 shadow-2xl flex flex-col items-center transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,215,0,0.7)]">
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
          <a href="CreateAccount">
            <p className="text-gray-400 mb-2">Don't have an account?</p>
          </a>
          <a href="/sign_in">
            <button className="text-pink-400 font-bold text-lg hover:text-pink-300 transition-all active:scale-95">
              Sign Up Now
            </button>
          </a>
        </div>
      </div>

      {/* CSS الأنيميشن */}
      <style jsx>{`
        @keyframes floatButterfly {
          0% {
            transform: translateY(0px) rotate(-3deg);
          }
          25% {
            transform: translateY(-18px) rotate(3deg);
          }
          50% {
            transform: translateY(-8px) rotate(-2deg);
          }
          75% {
            transform: translateY(-22px) rotate(4deg);
          }
          100% {
            transform: translateY(0px) rotate(-3deg);
          }
        }
      `}</style>
    </div>
  );
}
