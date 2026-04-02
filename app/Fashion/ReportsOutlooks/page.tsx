import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import React from "react";

const BrandSection = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="min-h-screen font-sans text-white overflow-hidden">
        {/* الخلفية العامة */}
        <div className="fixed inset-0 -z-10">
          <img
            src="/images/reports.png"
            className="w-full h-full object-cover"
            alt="background"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/70 via-purple-500/70 to-indigo-500/70"></div>
        </div>

        {/* الحاوية الرئيسية للصورة */}
        <div className="relative w-full max-w-5xl h-[500px]  overflow-hidden shadow-2xl border-4 border-white/20 mx-auto mt-20">
          {/* الصورة */}
          <img
            src="/images/Fashion9.png"
            className="w-full h-full object-cover"
            alt="Brand Background"
          />

          {/* الزخارف الجانبية */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-purple-900/50 to-transparent backdrop-blur-sm"></div>
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-purple-900/50 to-transparent backdrop-blur-sm"></div>

          {/* الكرت الزجاجي (في المنتصف) */}
          <div className="absolute top-85 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[80%] bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]">
            <div className="max-w-2xl mx-auto text-left space-y-6">
              <h2 className="text-white font-bold text-[32px]">
                Discover & Find your own Brand
              </h2>

              <p className="text-[#F178B6] font-bold text-[18px] leading-relaxed">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, in a
                single sentence, whether from right to left or left to right:
              </p>

              <p className="text-[#F178B6] font-bold text-[18px]">
                (Elegance, Personality, Strength)
              </p>

              <button className="bg-[#8b91f1] hover:bg-[#7a81e0] text-white px-10 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95">
                Learn More
              </button>
            </div>

            {/* أيقونة الزخرفة */}
            <div className="absolute top-0 right-10 -translate-y-1/2 opacity-30 pointer-events-none">
              <span className="text-6xl">🦋</span>
            </div>
          </div>
        </div>

        {/* زخارف خارجية */}
        <div className="absolute top-20 right-20 text-6xl opacity-30 animate-pulse">
          🦋
        </div>
        <div className="absolute bottom-10 left-20 text-5xl opacity-20 rotate-12">
          🦋
        </div>

        <br />
        <br />
        <br />
        {/* 1. العناوين العلوية */}
        <div className="text-center mb-12 ">
          <h2 className="text-[#FFFFFF] text-[64px] font-bold mb-4 drop-shadow-md">
            Discover & Find your own Brand
          </h2>
          <p className="text-[#000000] text-[40px] font-bold text-xl">
            Top headlines and In-depthg across the world
          </p>
        </div>

        {/* 2. منطقة الكاروسيل (Carousel Area) */}
        <div className="flex flex-col items-center justify-center w-full">
          {/* البطاقات */}
          <div className="relative flex items-center justify-center w-full max-w-6xl gap-4 mx-auto ">
            {/* العمود الوردي الأيسر */}
            <div className="hidden md:block w-12 h-[400px] bg-[#f8a5c2] rounded-full border-4 border-white/30 shadow-xl opacity-80 shrink-0"></div>

            {/* البطاقة الأولى */}
            <div className="bg-[#5D5FEF] backdrop-blur-md border border-white/30 p-6 w-80 h-[450px] shadow-2xl transform scale-95 opacity-90">
              <div className="rounded-[30px] overflow-hidden h-48 mb-6 border-2 border-white/20">
                <img
                  src="/images/Beauty2.png"
                  className="w-full h-full object-cover"
                  alt="Fashion"
                />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">
                Beyond the Headlines
              </h3>
              <p className="text-[#000000] font-bold text-sm leading-tight">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth
              </p>
            </div>

            {/* البطاقة الثانية */}
            <div className="bg-[#D49CDE] backdrop-blur-xl border border-white/40 p-6 w-96 h-[500px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-10 transform scale-105">
              <div className="rounded-[30px] overflow-hidden h-52 mb-6 border-2 border-white/20">
                <img
                  src="/images/Beauty1.png"
                  className="w-full h-full object-cover"
                  alt="Fashion"
                />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">
                Beyond the Headlines
              </h3>
              <p className="text-[#000000] font-bold text-sm leading-tight">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth
              </p>
            </div>

            {/* البطاقة الثالثة */}
            <div className="bg-[#D49CDE] backdrop-blur-sm border border-white/20 p-5  w-72 h-[400px] shadow-xl transform scale-90 opacity-70">
              <div className="rounded-[30px] overflow-hidden h-40 mb-4 border-2 border-white/20">
                <img
                  src="/images/women.jpg"
                  className="w-full h-full object-cover"
                  alt="Fashion"
                />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                Beyond the Headlines
              </h3>
              <p className="text-[#000000] font-bold text-sm leading-tight ">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth
              </p>
            </div>

            {/* العمود الوردي الأيمن */}
            <div className="hidden md:block w-12 h-[400px] bg-[#f8a5c2] rounded-full border-4 border-white/30 shadow-xl opacity-80 shrink-0"></div>
          </div>

          {/* أدوات التحكم (في الوسط) */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <ChevronsLeft
              className="text-white/60 hover:text-white cursor-pointer"
              size={30}
            />

            <span className="w-12 h-12 flex items-center justify-center bg-[#5d58f0] text-white rounded-2xl font-black text-xl shadow-xl">
              1
            </span>

            <span className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white rounded-2xl font-bold text-xl cursor-pointer transition-colors">
              2
            </span>

            <span className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white rounded-2xl font-bold text-xl cursor-pointer transition-colors">
              3
            </span>

            <ChevronsRight
              className="text-white/60 hover:text-white cursor-pointer"
              size={30}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        {/* ------------------------------------------------------------- */}

        {/* الحاوية الرئيسية للبطاقة */}
        <div className="w-full flex flex-col items-center justify-center">
          {/* الحاوية الرئيسية للبطاقة */}
          <div className="relative flex items-center justify-center w-full max-w-4xl gap-4 mb-12">
            {/* العمود الزخرفي الأيسر */}
            {/* <div className="w-4 h-64 bg-[#f8a5c2] rounded-full border-2 border-white/30 shadow-lg opacity-80 shrink-0"></div> */}

            {/* جسم البطاقة الرئيسي (Glassmorphism) */}
            <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md border border-white/20  p-8 shadow-2xl w-full">
              {/* قسم الصورة */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border-2 border-white/20">
                <img
                  src="/images/artfision.png"
                  alt="Model"
                  className="w-full h-72 object-cover"
                />
              </div>

              {/* قسم النصوص */}
              <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0 text-white text-center md:text-left">
                <h2 className="text-[64px] font-bold mb-4">
                  Beyond the Headlines
                </h2>
                <p className="text-[20px] text-[#000000] font-bold leading-relaxed opacity-90">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, we
                  believe that reality and maturity are core for truth.
                </p>
              </div>
            </div>

            {/* العمود الزخرفي الأيمن */}
            {/* <div className="w-4 h-64 bg-[#f8a5c2] rounded-full border-2 border-white/30 shadow-lg opacity-80 shrink-0"></div> */}
          </div>

          {/* أزرار التنقل والترقيم السفلية */}
          <div className="flex items-center gap-6 justify-center">
            {/* سهم السابق */}
            <button className="text-white opacity-70 hover:opacity-100 transition-all">
              <ChevronsLeft size={32} />
            </button>

            {/* أرقام الصفحات */}
            <div className="flex gap-3">
              <button className="w-12 h-12 bg-[#6366f1] text-white rounded-2xl font-bold text-xl shadow-lg">
                1
              </button>
              <button className="w-12 h-12 bg-white/20 text-white rounded-2xl font-bold text-xl hover:bg-white/30 transition-all">
                2
              </button>
              <button className="w-12 h-12 bg-white/20 text-white rounded-2xl font-bold text-xl hover:bg-white/30 transition-all">
                3
              </button>
            </div>

            {/* سهم التالي */}
            <button className="text-white opacity-70 hover:opacity-100 transition-all">
              <ChevronsRight size={32} />
            </button>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <Footer/>
    </>
  );
};

export default BrandSection;
