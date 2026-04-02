import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const BeautyPage = () => {
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
          src="/images/newspaper.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/70 via-purple-500/70 to-indigo-500/70"></div>
      </div>
      {/* <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 text-9xl">🦋</div>
        <div className="absolute bottom-20 right-10 text-9xl">🦋</div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* العناوين العلوية */}
        <header className="mb-8">
          <h1 className="text-5xl font-black text-[#ffffff] mb-3 tracking-tight">
            Latest Stories
          </h1>
          <p className="text-[#000000] text-[40px] font-bold opacity-90">
            Top headlines and In-depthg across the world
          </p>
        </header>
        <br />
        <br />

        {/* الكرت الرئيسي الكبير (Glassmorphism with Glow) */}
        <div className="relative flex items-center justify-center mb-16">
          {/* سهم يسار */}
          <button className="absolute -left-4 md:-left-12 p-3 bg-white/30 backdrop-blur-md rounded-full">
            <ChevronLeft className="w-6 h-6 text-purple-900" />
          </button>

          {/* الحاوية الزجاجية المتوهجة */}
          <div className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-[0_0_50px_rgba(255,255,255,0.2)] max-w-lg w-full text-center relative">
            <div className="overflow-hidden mb-6 border-white/20">
              <img
                src="/images/Fashion7.png"
                alt="Main"
                className="w-full h-[300px] object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold  text-[64px] text-[#5D5FEF] mb-3">
              Explore more
            </h2>
            <p className="text-[32px] text-[#0C0C0D] leading-relaxed  font-bold">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, in a single sentence,
              whether from right to left or left to right: (Elegance,
              Personality, Strength)
            </p>
          </div>

          {/* سهم يمين */}
          <button className="absolute -right-4 md:-right-12 p-3 bg-white/30 backdrop-blur-md rounded-full">
            <ChevronRight className="w-6 h-6 text-purple-900" />
          </button>
        </div>

        {/* قسم البحث */}
        <div className="text-center text-[64px] text-[#FFFFFF] mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Discover & Find your own Brand
          </h2>
          <p className="text-[40px] font-bold text-[#000000]">
            Top headlines and In-depthg across the world
          </p>

          <div className="relative mx-auto" style={{ width: "1114px" }}>
            <input
              type="text"
              placeholder="search"
              className="w-full h-[60px] text-[24px]  text-[#5D5FEF] px-6 bg-white text-center outline-none shadow-lg rounded-[12px]"
            />
          </div>
        </div>

        {/* شبكة البطاقات السفلية */}
        <div className="flex flex-wrap justify-center items-end gap-6 mb-12">
          {/* بطاقة 1 */}
          <div className="w-[252px] h-[321px] rounded-[13px] overflow-hidden scale-95 opacity-90">
            <div className="bg-[#F29FD075] backdrop-blur-md border border-white/30 p-3 rounded-2xl w-48 shadow-lg">
              <img
                src="/images/Fashion4.jpg"
                alt="item"
                className="w-[179.9px] h-[112.21px] object-cover mb-2 rounded-[51px]"
              />
              <h3 className="text-[24px] font-bold">Beyond the Headlines</h3>
              <p className="text-[12px] font-bold text-[#000000]">
                It has one principle and one motto that can be read
                individually...
              </p>
            </div>
          </div>

          {/* بطاقة 2 ( - ) */}
          <div className="w-[280px] h-[360px] rounded-[13px] overflow-hidden scale-110 z-10">
            <div className="bg-[#5D5FEF] backdrop-blur-md border border-white/30 p-3 rounded-2xl w-52 shadow-2xl">
              <img
                src="/images/Beauty2.png"
                alt="item"
                className="w-[200px] h-[130px] object-cover mb-2 rounded-[51px]"
              />
              <h3 className="text-[26px] font-bold">Beyond the Headlines</h3>
              <p className="text-[13px] font-bold text-[#000000]">
                It has one principle and one motto that can be read
                individually...
              </p>
            </div>
          </div>

          {/* بطاقة 3 */}
          <div className="w-[252px] h-[321px] rounded-[13px] overflow-hidden scale-95 opacity-90">
            <div className="bg-[#D49CDE] backdrop-blur-md border border-white/30 p-3 rounded-2xl w-48 shadow-lg">
              <img
                src="/images/Beauty1.png"
                alt="item"
                className="w-[179.9px] h-[112.21px] object-cover mb-2 rounded-[51px]"
              />
              <h3 className="text-[24px] font-bold">Beyond the Headlines</h3>
              <p className="text-[12px] font-bold text-[#000000]">
                It has one principle and one motto that can be read
                individually...
              </p>
            </div>
          </div>
        </div>

        {/* الترقيم (Pagination) */}
        <div className="flex justify-center items-center gap-3">
          <button className="p-2 opacity-70 hover:opacity-100">
            <ChevronsLeft />
          </button>
          <button className="w-10 h-10 bg-[#6366f1] rounded-xl flex items-center justify-center font-bold shadow-lg">
            1
          </button>
          <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/30">
            2
          </button>
          <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/30">
            3
          </button>
          <button className="p-2 opacity-70 hover:opacity-100">
            <ChevronsRight />
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BeautyPage;
