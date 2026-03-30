import ExplorePage from "@/app/components/ExplorePage";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";
import React from "react";

const ArtHeader = () => {
  return (
    <>
      <Header />
      <div className="relative p-6 sm:p-8 md:p-10 text-white min-h-[300px]">
        <div
          className="absolute inset-0 z-[-2] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/NEWSS.jpg')",
          }}
        />

        {/* طبقة التراكب البنفسجية المتدرجة كما في الصورة */}
        <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-[#93C5FD]/90 via-[#C4B5FD]/95 to-[#E9D5FF]/90" />

        {/* --------------------------------------------------------- */}
        {/* 2. محتوى النص */}
        {/* --------------------------------------------------------- */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <header className="relative z-10 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#4F46E5] mb-2 tracking-tighter">
            ART
          </h1>
          <p className="text-2xl md:text-3xl text-black font-semibold mb-8">
            Top headlines and In-depth across the world
          </p>

          {/* --------------------------------------------------------- */}
          {/* 3. شريط التنقل (الأزرار والبحث) */}
          {/* --------------------------------------------------------- */}
          <div className="flex flex-wrap items-center gap-3">
            {/* مجموعة الأزرار */}
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/art_pg_main">
                <button className="bg-[#F178B6] px-6 py-2 rounded-md shadow-md">
                  Top
                </button>
              </Link>

              <button className="bg-[#6366F1] px-6 py-2 rounded-md shadow-md">
                Artists
              </button>
              <button className="bg-[#6366F1] px-6 py-2 rounded-md shadow-md">
                Galleries
              </button>
              <button className="bg-[#6366F1] px-6 py-2 rounded-md shadow-md">
                Feativalsls
              </button>
            </div>

            {/* حقل البحث */}
            <div className="w-full max-w-sm ml-auto">
              <button className="bg-[#6366F1] w-70 py-2 rounded-md shadow-md text-center">
                search
              </button>
            </div>
          </div>
          <main
            className="min-h-
538px w-
1,220px relative flex items-center justify-center p-10 overflow-hidden "
          >
            {/* 3. حاوية المحتوى الرئيسي (البطاقة البيضاء الكبيرة) */}
            <div className="relative z-10 w-full max-w-[1280px] h-[640px]  rounded-3xl p-12 flex flex-col items-center justify-center ">
              {/* 4. حاوية العرض الجانبي (flex box) */}
              <div className="flex w-full h-full items-center gap-12">
                {/* 5. القسم الأيسر (الصورة المنحنية) */}
                {/* نستخدم حاوية إضافية للتحكم بالحواف المنحنية والظل */}
                <div className="flex-none w-[480px] h-[520px] rounded-[50px] overflow-hidden shadow-[0_0_30px_rgba(100,0,100,0.3)]">
                  <div className="relative w-full h-full bg-black">
                    <img
                      src="/images/news2.png"
                      alt="Classical Scene"
                      className="w-full h-full object-contain grayscale-[20%] brightness-75"
                    />
                  </div>
                </div>

                {/* 6. القسم الأيمن (النص والعنوان) */}
                <div className="flex-1 space-y-8 pl-8">
                  {/* العنوان البنفسجي */}
                  <h1 className="text-7xl font-bold text-[#5D5FEF] tracking-tight">
                    Beyond the Headlines{" "}
                  </h1>

                  {/* النص الوصفي (Don't worry!) */}
                  <div className="space-y-4 max-w-[550px]">
                    <p className="text-2xl text-gray-900 font-medium leading-relaxed">
                      Don't worry! Just enter your email address below, and
                      we'll send you a link to reset your password.
                    </p>
                    <p className="text-2xl text-gray-900 font-medium leading-relaxed">
                      Don't worry! Just enter your email address below, and
                      we'll send you a link to reset your password.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="w-full py-12 px-6 bg-[#D8CCFA] min-h-screen font-sans">
            {/* العناوين الرئيسية */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4">
                Explore More About Art
              </h2>
              <p className="text-xl md:text-2xl text-black font-bold">
                Top show and In-depthg across the world
              </p>
            </div>

            {/* حاوي البطاقات - Grid متجاوب */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
              {/* البطاقة الأولى - Gallery */}
              <div className="bg-white rounded-[40px] shadow-xl overflow-hidden flex flex-col">
                <div className="relative h-64 bg-gray-200">
                  {/* مكان الصورة */}
                  <img
                    src="/images/artival1.png"
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                  {/* الملصق الزجاجي */}
                  <div className="absolute bottom-6 left-0 bg-[#BD9FA9]/60 backdrop-blur-md px-10 py-3 rounded-tr-2xl">
                    <span className="text-3xl font-bold text-white uppercase">
                      Gallery
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-sm text-black leading-relaxed font-semibold">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole,
                    in a single sentence, whether from right to left or left to
                    right: (Elegance, Personality, Strength)
                  </p>
                </div>
              </div>

              {/* البطاقة الثانية - Artists */}
              <div className="bg-[#5D5FEF45] rounded-[40px] shadow-xl overflow-hidden p-3 flex flex-col">
                <div className="relative h-60 rounded-[30px] overflow-hidden">
                  <img
                    src="/images/artival2.jpg"
                    alt="Artists"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-0 bg-[#5D5FEFF0]/60 backdrop-blur-sm px-6 py-1">
                    <span className="text-2xl font-bold text-white uppercase">
                      Artists
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-black leading-relaxed font-bold">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole,
                    in a single sentence, whether from right to left or left to
                    right: (Elegance, Personality, Strength)
                  </p>
                </div>
              </div>

              {/* البطاقة الثالثة - Artists (مكررة) */}
              <div className="bg-[#5D5FEF45] rounded-[40px] shadow-xl overflow-hidden p-3 flex flex-col">
                <div className="relative h-60 rounded-[30px] overflow-hidden">
                  <img
                    src="/images/artival2.jpg"
                    alt="Artists"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-0 bg-[#5D5FEFF0]/60 backdrop-blur-sm px-6 py-1">
                    <span className="text-2xl font-bold text-white  uppercase">
                      Artists
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-black leading-relaxed font-bold">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole,
                    in a single sentence, whether from right to left or left to
                    right: (Elegance, Personality, Strength)
                  </p>
                </div>
              </div>
            </div>

            {/* شريط التحكم السفلي - الـ Pagination */}
            <div className="flex justify-center items-center gap-8">
              {/* سهم لليسار */}
              <button className="w-14 h-14 bg-[#6366F1] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* دوائر المؤشر */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40 shadow-inner"></div>
                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40 shadow-inner"></div>
                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40 shadow-inner"></div>
                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40 shadow-inner"></div>
              </div>

              {/* سهم لليمين */}
              <button className="w-14 h-14 bg-[#6366F1] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
          <main
            className="min-h-
538px w-
1,220px relative flex items-center justify-center p-10 overflow-hidden "
          >
            {/* 3. حاوية المحتوى الرئيسي (البطاقة البيضاء الكبيرة) */}
            <div className="relative z-10 w-full max-w-[1280px] h-[640px]  rounded-3xl p-12 flex flex-col items-center justify-center ">
              {/* 4. حاوية العرض الجانبي (flex box) */}
              <div className="flex w-full h-full items-center gap-12">
                {/* 5. القسم الأيسر (الصورة المنحنية) */}
                {/* نستخدم حاوية إضافية للتحكم بالحواف المنحنية والظل */}
                <div className="flex-none w-[480px] h-[520px] rounded-[50px] overflow-hidden shadow-[0_0_30px_rgba(100,0,100,0.3)]">
                  <div className="relative w-full h-full">
                    <img
                      src="/images/neewss3.png" // نستخدم نفس صورة الخلفية كمثال، أو يمكنك وضع أي صورة تريدها هنا
                      alt="Classical Scene"
                      className="w-full h-full object-cover grayscale-[20%] brightness-75 "
                    />
                  </div>
                </div>

                {/* 6. القسم الأيمن (النص والعنوان) */}
                <div className="flex-1 space-y-8 pl-8">
                  {/* العنوان البنفسجي */}
                  <h1 className="text-7xl font-bold text-[#7E5BEF] tracking-tight">
                    Explore more
                  </h1>

                  {/* النص الوصفي (Don't worry!) */}
                  <div className="space-y-4 max-w-[550px]">
                    <p className="text-2xl text-gray-900 font-medium leading-relaxed">
                      It has one principle and one motto that can be read
                      individually, meaning each word on its own, or as a whole,
                      in a single sentence, whether from right to left or left
                      to right:  (Elegance, Personality, Strength){" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </header>
      </div>
      <Footer />
    </>
  );
};

export default ArtHeader;
