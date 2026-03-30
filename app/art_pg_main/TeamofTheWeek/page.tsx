import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";

const ArtVibeFullPage = () => {
  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
      {" "}
      <div className="min-h-screen bg-[#D8CCFA] font-sans text-slate-900 selection:bg-indigo-200">
        {/* --- 1. الهيدر والقائمة العلويّة --- */}
        <header className="max-w-7xl mx-auto p-6 md:p-10">
          <h1 className="text-6xl font-black text-[#4F46E5] mb-2 tracking-tighter">
            Latest stories
          </h1>
          <p className="text-xl font-bold text-black mb-8 opacity-80">
            Top headlines and In-depthg across the world
          </p>

          
        </header>

        {/* --- 2. قسم الفيديو الرئيسي والسايد بار (Latest Stories) --- */}
        <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Video (الإطار الذهبي) */}
          <div className="lg:col-span-2 relative aspect-video rounded-xl overflow-hidden border-[6px] border-yellow-600/60 shadow-2xl bg-black">
            {/* الصورة الداخلية */}
            <img
              src="/images/NEWSS.jpg"
              alt="Hero"
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            />
            {/* زر التشغيل */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 p-5 rounded-full backdrop-blur-md cursor-pointer hover:scale-110 transition-transform">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* النص فوق الفيديو */}
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/60 to-transparent">
              <h2 className="text-3xl font-extrabold text-[#6366F1] mb-2">
                Beyond the Headlines
              </h2>
              <p className="text-sm text-gray-200 leading-relaxed max-w-lg font-medium">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 ">
            <section className="bg-[#5D5FEF4A]">
              <h3 className=" font-black mb-4 text-[#FFFFFF] uppercase text-lg">
                EIDIORS PICKS
              </h3>
              <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl border-l-4 border-blue-600 mb-3 hover:bg-white/40 transition">
                <h4 className="font-bold text-blue-950">
                  Beyond the Headlines
                </h4>
                <p className="text-[10px] text-gray-800 leading-tight mt-1">
                  It has one principle and one motto that can be read
                  individually...
                </p>
              </div>
              <div className="bg-pink-400/40 backdrop-blur-md p-4 rounded-xl border-l-4 border-pink-500 hover:bg-pink-400/50 transition">
                <h4 className="font-bold text-pink-950">
                  Beyond the Headlines
                </h4>
                <p className="text-[10px] text-gray-800 leading-tight mt-1">
                  It has one principle and one motto that can be read
                  individually...
                </p>
              </div>
            </section>

            <section className="bg-[5D5FEF4A]">
              <h3 className=" font-black mb-4 uppercase  text-[#FFFFFF] text-lg">
                Newspaper
              </h3>
              <div className="bg-[#F178B6] backdrop-blur-md p-4 rounded-xl mb-3">
                <h4 className="font-bold text-white">Beyond the Headlines</h4>
                <p className="text-[10px] text-white/80 leading-tight mt-1">
                  It has one principle and one motto that can be read
                  individually...
                </p>
              </div>
              <div className="bg-[#F178B6] backdrop-blur-md p-4 rounded-xl">
                <h4 className="font-bold text-white">Beyond the Headlines</h4>
                <p className="text-[10px] text-white/80 leading-tight mt-1">
                  It has one principle and one motto that can be read
                  individually...
                </p>
              </div>
            </section>
          </div>
        </main>

        {/* --- 4. قسم نجوم الأسبوع (Weekly Stars) --- */}
        <section className="max-w-7xl mx-auto px-6 mb-20 text-center bg-[#A26E8570]">
          <h2 className="text-5xl font-black text-white mb-2 uppercase tracking-tight">
            Meet our weekly stars
          </h2>
          <p className="text-xl font-bold text-black opacity-80 mb-12">
            Top headlines and In-depth across the world
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ">
            {[
              { color: "bg-[#5D5FEF61]", img: "/images/person2.png" },
              { color: "bg-[#F178B670]", img: "/images/person2.png" },
              { color: "bg-[#F178B670]", img: "/images/person2.png" },
            ].map((star, idx) => (
              <div
                key={idx}
                className={`${star.color} rounded-[40px] aspect-square flex items-center justify-center p-8 shadow-xl relative group`}
              >
                <div className="w-32 h-32 rounded-full  border-white overflow-hidden shadow-2xl">
                  <img
                    src={star.img}
                    alt="star"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* التحكم بالسلايدر (Arrows) */}
          <div className="flex justify-center items-center gap-4">
            <button className="bg-[#6366F1] p-4 rounded-full text-white shadow-lg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white opacity-40"></div>
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <div className="w-3 h-3 rounded-full bg-white opacity-40"></div>
            </div>
            <button className="bg-[#6366F1] p-4 rounded-full text-white shadow-lg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </section>

        {/* --- 5. الفوتر (Pagination) --- */}
        <footer className="flex justify-center items-center gap-3 pb-20">
          <button className="bg-[#6366F1]/40 p-3 rounded-xl text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
            </svg>
          </button>
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-white text-[#6366F1] flex items-center justify-center font-black rounded-xl shadow-md">
              1
            </div>
            <div className="w-10 h-10 bg-[#6366F1]/30 text-white flex items-center justify-center font-black rounded-xl">
              2
            </div>
            <div className="w-10 h-10 bg-[#6366F1]/30 text-white flex items-center justify-center font-black rounded-xl">
              3
            </div>
          </div>
          <button className="bg-[#6366F1]/40 p-3 rounded-xl text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
            </svg>
          </button>
        </footer>
      </div>
      <Footer/>
    </>
  );
};

export default ArtVibeFullPage;
