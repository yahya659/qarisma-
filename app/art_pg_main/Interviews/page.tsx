import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";

const CommunitySection = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />

      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans">
        {/* 1. الخلفية (صورة المعرض) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/newspaper1.jpg"
            className="w-full h-full object-cover"
            alt="Art Gallery"
          />
          {/* طبقة تظليل بنفسجية خفيفة فوق الصورة */}
          <div className="absolute inset-0  " />
        </div>

        {/* 2. تأثير الستائر الجانبية باستخدام التدرجات (بدون صور إضافية) */}
        {/* <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-purple-900/80 via-purple-800/40 to-transparent backdrop-blur-[2px] z-10" /> */}
        {/* <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-purple-900/80 via-purple-800/40 to-transparent backdrop-blur-[2px] z-10" /> */}

        {/* 3. البطاقة الزجاجية (Glassmorphism) في المنتصف */}
        <div className="relative z-20 w-full max-w-4xl mx-4">
          <div className="bg-white/10  rounded-[50px] p-10 md:p-16 text-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
            {/* النصوص */}
            <div className="mb-8">
              <h3 className="text-white text-[96px] md:text-4xl font-bold mb-2 opacity-90 tracking-tight">
                Explore your
              </h3>
              <h2 className="text-[#000000] text-[96px] md:text-8xl font-bold uppercase tracking-tighter drop-shadow-2xl">
                community
              </h2>
            </div>

            <p className="text-white text-[36px]   font-bold leading-relaxed mb-12 max-w-2xl mx-auto opacity-95 italic">
              "It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth."
            </p>

            {/* الزر */}
            <div className="flex justify-center">
              <button className="bg-[#6366F1] hover:bg-indigo-700 text-white px-14 py-5 rounded-2xl font-black text-xl shadow-[0_10px_20px_rgba(99,102,241,0.4)] transition-all transform hover:scale-105 active:scale-95">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* 4. أيقونات تزيينية جانبية (SVG مدمج لضمان عدم حدوث Error) */}
        <div className="absolute left-10 bottom-1/2 translate-y-1/2 z-20 opacity-40 hidden md:block">
          <svg width="40" height="200" viewBox="0 0 40 200" fill="none">
            <rect
              width="4"
              height="200"
              rx="2"
              fill="white"
              fillOpacity="0.3"
            />
          </svg>
        </div>
        <div className="absolute right-10 bottom-1/2 translate-y-1/2 z-20 opacity-40 hidden md:block">
          <svg width="40" height="200" viewBox="0 0 40 200" fill="none">
            <rect
              x="36"
              width="4"
              height="200"
              rx="2"
              fill="white"
              fillOpacity="0.3"
            />
          </svg>
        </div>
      </div>
      <div
        className="relative max-w-full mx-auto rounded-3xl overflow-hidden"
        style={{
          backgroundImage: "url('/images/flower2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        {/* Content */}
        <div className="relative z-10 bg-[#F178B62E] rounded-3xl p-6 md:p-8">

           <div className="absolute bottom-[-5%] right-[-5%] w-[180px] h-[180px] md:w-[350px] md:h-[350px] lg:w-[600px] lg:h-[600px] z-40 pointer-events-none">
        <div className="relative w-full h-full animate-float-main">
          <img
            src="/images/flower2.png"
            className="w-full h-full object-contain opacity-50"
            alt="flower"
            style={{
              filter: "drop-shadow(0 20px 50px rgba(250, 8, 129, 0.5))",
            }}
          />

          <div className="absolute top-10 left-0 w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-float-slow opacity-60">
            <img
              src="/images/flower.png"
              className="w-full h-full object-contain rotate-45"
              alt="flower"
            />
          </div>
        </div>
      </div>
          <header className="mb-10">
            <h1 className="text-5xl font-extrabold text-[#4F46E5] mb-2 tracking-tight">
              Latest stories
            </h1>

            <p className="text-xl text-black font-bold mb-8">
              Top headlines and In-depthg across the world
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex flex-wrap gap-3">
                <button className="bg-[#EC4899] px-8 py-2.5 rounded-lg font-bold shadow-lg">
                  Top
                </button>

                <button className="bg-[#6366F1] px-8 py-2.5 rounded-lg font-bold shadow-lg">
                  Artists
                </button>

                <button className="bg-[#6366F1] px-8 py-2.5 rounded-lg font-bold shadow-lg">
                  Galleries
                </button>

                <button className="bg-[#6366F1] px-8 py-2.5 rounded-lg font-bold shadow-lg">
                  Feativals
                </button>
              </div>

              <div className="w-full md:w-64">
                <button className="w-full bg-[#6366F1] py-2.5 px-6 rounded-lg font-bold shadow-lg text-right opacity-90">
                  search
                </button>
              </div>
            </div>
          </header>

          <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Featured Video */}
            <div className="lg:col-span-2 relative aspect-video rounded-xl overflow-hidden border-[6px] border-yellow-600/60 shadow-2xl bg-black">
              <img
                src="/images/NEWSS.jpg"
                alt="Hero"
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 p-5 rounded-full backdrop-blur-md cursor-pointer hover:scale-110 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

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
            <div className="space-y-6 bg-[#BD9FA9]">
              <section>
                <h3 className="font-black mb-4 text-[#000000] text-[24px]">
                  MORNING WATCHING
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

              <section>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CommunitySection;
