import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import React from "react";

const BrandMosaicSection = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />

      <div className="min-h-screen font-sans text-white overflow-hidden relative">
        {/* الخلفية */}
        <div className="fixed inset-0 -z-10">
          <img
            src="/images/reports.png"
            className="w-full h-full object-cover"
            alt="bg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/70 via-purple-500/70 to-indigo-500/70"></div>
        </div>

        {/* ===== HERO SECTION ===== */}
        <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-4 gap-8 pt-10">
          {/* العمود الأيسر */}
          <div className="hidden lg:block w-12 h-[550px] bg-[#f8a5c2] rounded-full border-[6px] border-white/20 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
          </div>

          {/* المحتوى الرئيسي */}
          <div className="relative flex-1 h-[600px]">
            {/* الصورة الرئيسية */}
            <div className="absolute left-0 top-12 w-[65%] h-[420px] overflow-hidden shadow-2xl z-10">
              <img
                src="/images/women2.png"
                className="w-full h-full object-cover"
                alt="main"
              />
            </div>

            {/* صورة يمين أعلى */}
            <div className="absolute right-0 top-0 w-[48%] h-[280px] overflow-hidden shadow-xl opacity-90">
              <img
                src="/images/Beauty1.png"
                className="w-full h-full object-cover"
                alt="bg"
              />
            </div>

            {/* صورة يمين أسفل */}
            <div className="absolute right-8 bottom-6 w-[38%] h-[220px] overflow-hidden shadow-2xl z-20">
              <img
                src="/images/Fashion20.png"
                className="w-full h-full object-cover"
                alt="front"
              />
            </div>

            {/* الكرت */}
            <div className="absolute inset-x-0 bottom-5 z-30 border border-white/20 rounded-[45px] p-10 shadow-2xl mx-2 overflow-hidden">
              <img
                src="/images/Fashion5.png"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                alt="bg-card"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-[#5D5FEF] text-[48px] font-bold mb-6">
                  Discover & Find your own Brand
                </h2>

                <p className="text-white text-[20px] font-bold leading-relaxed">
                  It has one principle and one motto that can be read
                  individually or as a whole.
                  <br />
                  <span className="font-extrabold">
                    (Elegance, Personality, Strength)
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* العمود الأيمن */}
          <div className="hidden lg:block w-12 h-[550px] bg-[#f8a5c2] rounded-full border-[6px] border-white/20 shadow-2xl" />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          {/* الحاوية الرئيسية للبطاقة */}
          <br />
          <br />
          <br />
          <div className="relative flex items-center justify-center w-full max-w-4xl gap-4 mb-12">
            <div className="flex flex-col md:flex-row items-center bg-[#5D5FEF6E] backdrop-blur-md border border-white/20  p-8 shadow-2xl w-full">
              {/* قسم الصورة */}
              <div className="w-full md:w-1/2  overflow-hidden border-2 border-white/20">
                <img
                  src="/images/women3.jpg"
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
          <div className="flex items-center gap-6 justify-center"></div>
        </div>
        {/* ===== TITLE SECTION ===== */}
        <div className="text-center mt-20 mb-12 px-4">
          <h2 className="text-white text-[64px] font-bold mb-4">
            Meet Our Team
          </h2>
        </div>

        {/* ===== CAROUSEL SECTION ===== */}
        <div className="flex flex-col items-center w-full pb-20">
          <div className="flex items-center justify-center w-full max-w-6xl gap-6">
            {/* العمود الأيسر */}
            <div className="hidden md:block w-12 h-[400px] bg-[#f8a5c2] rounded-full border-4 border-white/30 shadow-xl" />

            {/* بطاقة 1 */}
            <div className="bg-[#5D5FEF6E] p-6 w-80 h-[450px] shadow-2xl rounded-2xl">
              <img
                src="/images/person3.png"
                className="w-full h-48 object-cover object-center rounded-2xl mb-4"
                alt="person"
              />

              <h3 className="text-white text-2xl font-bold mb-3">
                Beyond the Headlines
              </h3>
            </div>

            {/* بطاقة 2 */}
            <div className="bg-[#D49CDE] p-6 w-96 h-[500px] shadow-2xl z-10">
              <img
                src="/images/women.jpg"
                className="h-52 w-full object-cover rounded-2xl mb-4"
              />
              <h3 className="text-white text-2xl font-bold mb-3">
                Beyond the Headlines
              </h3>
            </div>

            {/* بطاقة 3 */}
            <div className="bg-[#D49CDE] p-5 w-72 h-[400px] shadow-xl opacity-80">
              <img
                src="/images/person9.jpg"
                className="h-40 w-full object-cover rounded-2xl mb-4"
              />
              <h3 className="text-white text-xl font-bold mb-2">
                Beyond the Headlines
              </h3>
            </div>

            {/* العمود الأيمن */}
            <div className="hidden md:block w-12 h-[400px] bg-[#f8a5c2] rounded-full border-4 border-white/30 shadow-xl" />
          </div>

          <br />
          <br />
          {/* التحكم */}
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
      <Footer />
    </>
  );
};

export default BrandMosaicSection;
