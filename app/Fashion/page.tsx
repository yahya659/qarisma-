"use client";
import React from "react";
import { Play, Search } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
const FashionPage = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <div className="min-h-screen font-sans text-white overflow-hidden">
        {/* BACKGROUND */}
        <div className="fixed inset-0 -z-10">
          <img
            src="/images/Fashion5.png"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/70 via-purple-500/70 to-indigo-500/70"></div>
        </div>

        {/* HEADER */}
         <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
          <h1 className="text-5xl font-black text-[#5d58f0] mb-3 tracking-tight">
         Fashion
          </h1>
          <p className="text-2xl font-bold text-gray-900 mb-8">
            Top headlines and In-depthg across the world
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button className="bg-[#f06292] hover:bg-[#e91e63] px-8 py-2.5 rounded-xl font-bold shadow-lg transition-all">
              All
            </button>
            {["Article", "Brands", "Pricing"].map((tab) => (
              <button
                key={tab}
                className="bg-[#9491f9] hover:bg-[#8380e6] px-8 py-2.5 rounded-xl font-semibold shadow-md transition-all"
              >
                {tab}
              </button>
            ))}
            <div className="relative flex-grow max-w-sm ml-auto">
              <input
                type="text"
                placeholder="search"
                className="w-full bg-[#6c63ff] placeholder-white/70 px-5 py-2.5 rounded-xl outline-none border border-white/20 shadow-inner"
              />
              <Search
                className="absolute right-4 top-3 text-white/70"
                size={20}
              />
            </div>
          </div>

          {/* Secondary Filter Bar */}
          <div className="flex flex-wrap gap-3">
            {[
              "Team of the week",
              "Reports & Outlooks",
              "Latest Trends Newsletter",
            ].map((tag) => (
              <button
                key={tag}
                className="bg-[#9491f9] px-6 py-2 rounded-xl font-medium shadow-sm hover:brightness-110"
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="px-16 mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT CARD */}
          <div className="md:col-span-2 relative">
            {/* Glow */}
            <div className="absolute -inset-3 bg-pink-500 blur-2xl opacity-40 rounded-3xl"></div>

            <div className="relative bg-gradient-to-b from-purple-500/80 to-indigo-500/80 rounded-3xl p-6 shadow-2xl">
              <img
                src="/images/Fashion4.jpg"
                className="rounded-2xl mb-4 w-full h-[300px] object-cover"
              />

              <p className="text-sm leading-relaxed text-white/90">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth
              </p>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            {/* EDITORS PICKS */}
            <div className="bg-white/20 backdrop-blur rounded-2xl p-4">
              <h3 className="font-bold mb-3">EDITORS PICKS</h3>

              <div className="space-y-3">
                <div className="bg-white/20 p-3 rounded-xl">
                  <p className="text-sm font-semibold">Beyond the Headlines</p>
                  <p className="text-xs text-white/70">
                    It has one principle and one motto...
                  </p>
                </div>

                <div className="bg-white/20 p-3 rounded-xl">
                  <p className="text-sm font-semibold">Beyond the Headlines</p>
                  <p className="text-xs text-white/70">
                    It has one principle and one motto...
                  </p>
                </div>
              </div>
            </div>

            {/* NEWSPAPER */}
            <div className="bg-indigo-500/70 rounded-2xl p-4">
              <h3 className="font-bold mb-3">Newspaper</h3>

              <div className="space-y-3">
                <div className="bg-white/20 p-3 rounded-xl">
                  <p className="text-sm font-semibold">Beyond the Headlines</p>
                  <p className="text-xs text-white/70">
                    It has one principle and one motto...
                  </p>
                </div>

                <div className="bg-white/20 p-3 rounded-xl">
                  <p className="text-sm font-semibold">Beyond the Headlines</p>
                  <p className="text-xs text-white/70">
                    It has one principle and one motto...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPLORE SECTION */}
        <section className="px-16 mt-24 pb-20 text-center">
          <h2 className="text-[64px]  font-extrabold mb-2">
            Explore More About Beauty
          </h2>

          <p className="text-[40px] text-black font-semibold mb-10">
            Top show and In-depth across the world
          </p>

          {/* CARDS */}
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="bg-white text-black rounded-2xl w-64 shadow-xl overflow-hidden">
              <img
                src="/images/Fashion1.jpg"
                className="h-40 w-full object-cover"
              />

              <div className="p-4 text-left">
                <h4 className="font-bold bg-[#BD9FA9]/50 w-20">Arts</h4>
                <p className="text-xs mt-2">
                  It has one principle and one motto that can be read
                  individually...
                </p>
              </div>
            </div>
            <div className="bg-white text-black rounded-2xl w-64 shadow-xl overflow-hidden">
              <img
                src="/images/Fashion3.jpg"
                className="h-40 w-full object-cover"
              />

              <div className="p-4 text-left">
                <h4 className="font-bold bg-[#BD9FA9]/50 w-20">Arts</h4>
                <p className="text-xs mt-2">
                  It has one principle and one motto that can be read
                  individually...
                </p>
              </div>
            </div>
            <div className="bg-white text-black rounded-2xl w-64 shadow-xl overflow-hidden">
              <img
                src="/images/Fashion2.png"
                className="h-40 w-full object-cover"
              />

              <div className="p-4 text-left ">
                <h4 className="font-bold bg-[#BD9FA9]/50 w-20 ">Arts</h4>
                <p className="text-xs mt-2">
                  It has one principle and one motto that can be read
                  individually...
                </p>
              </div>
            </div>
            =
          </div>

          {/* SLIDER DOTS */}
          <div className="flex justify-center items-center gap-3 mt-8">
            <button className="w-10 h-10 bg-indigo-500 rounded-full">←</button>

            <div className="flex gap-2">
              <div className="w-3 h-3 bg-white/50 rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-white/50 rounded-full"></div>
            </div>

            <button className="w-10 h-10 bg-indigo-500 rounded-full">→</button>
          </div>
          <br />
          <br />
          <br />
          <div className="relative min-h-[600px] w-full overflow-hidden bg-[#] flex items-center justify-center p-8">
            {/* الخلفية مع تأثير التدرج */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/40 via-purple-500/30 to-blue-500/20 z-0" />

            {/* الحاوية الرئيسية للمحتوى */}
            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* القسم الأيسر: النصوص والفراشات */}
              <div className="relative space-y-6">
                {/* محاكاة الفراشات كعناصر مطلقة */}
                <div className="absolute -top-10 -left-10 text-pink-600 opacity-60 blur-[1px] animate-pulse">
                  🦋
                </div>
                <div className="absolute top-20 -right-5 text-pink-500 opacity-80 rotate-12">
                  🦋
                </div>
                <div className="absolute -bottom-10 left-20 text-purple-600 opacity-70 -rotate-12">
                  🦋
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-[#5D5FEF] leading-tight tracking-tight">
                  Beyond <br /> Headlines
                </h1>

                <p className=" text-[#0C0C0D] text-xl font-medium max-w-md leading-relaxed">
                  It has one principle and one motto that can be read
                  individually, meaning each
                </p>
              </div>

              {/* القسم الأيمن: الفيديو والإطار الوردي */}
              <div className="relative flex justify-center items-center">
                {/* الإطار الوردي الخلفي */}
                <div className="absolute w-[80%] h-[110%] border-[12px] border-pink-300/50 rounded-sm skew-x-1" />

                {/* حاوية الفيديو */}
                <div className="relative z-10 w-full max-w-sm aspect-[4/5] overflow-hidden shadow-2xl rounded-sm">
                  <img
                    src="/images/Fashion7.png"
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  {/* طبقة التعتيم وزر التشغيل */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition-transform">
                      <Play className="text-white fill-white ml-1" size={32} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default FashionPage;
