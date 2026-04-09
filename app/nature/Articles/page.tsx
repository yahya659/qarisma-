"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import { useRouter } from "next/navigation";
const NaturePage = () => {
   const router = useRouter();
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="min-h-screen bg-[#c4b5fd] font-sans text-white pb-12">
        {/* Hero Section */}
        <section className="relative h-[500px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/nature/Rectangle1.jpg')` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-12 max-w-4xl mx-auto text-center">
            <h1 className="text-[#FFFFFF] text-[60px] font-bold mb-4">
              Beyond the Headlines
            </h1>

            <p className="text-[#000000] text-[32px] font-bold mb-6 opacity-90 ">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are .
            </p>

            <button className="self-start w-[327px] h-[64px] rounded-[17px] bg-[#5D5FEF] shadow-[1px_4px_4px_0px_rgba(0,0,0,1)] opacity-100 font-medium transition hover:bg-[#4f46e5]">
              Learn More
            </button>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
          {/* Header & Filters */}
          <div className="mb-10">
            <h2 className="text-[64px] font-bold text-[#5D5FEF] mb-2">
              Nature
            </h2>
            <p className="text-[#FFFFFF] text-[40px] font-medium mb-6">
              Top headlines and in-depth across the world
            </p>

            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex gap-3">
                <button className="bg-[#F178B6] text-[#FFFFFF] px-6 py-2 rounded-lg font-semibold shadow-md">
                  All
                </button>
                <button onClick={() => router.push("/nature/Articles/climate")} className="bg-[#5D5FEF85] px-6 py-2 rounded-lg font-semibold shadow-md">
                  Climate
                </button>
                
                <button onClick={() => router.push("/nature/Articles/WILDLIFE")} className="bg-[#5D5FEF85] px-6 py-2 rounded-lg font-semibold shadow-md">
                  Wild Life
                </button>
                <button onClick={() => router.push("/nature/Articles/sustainablity")} className="bg-[#5D5FEF85]  px-6 py-2 rounded-lg font-semibold shadow-md">
                  Sustainability
                </button>
              </div>
              <div className="bg-[#5D5FEF] px-70 py-2 rounded-lg font-semibold cursor-pointer shadow-md">
                search
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />

          {/* Grid of Cards */}

          {/* ---------------------------------------------------------------------- */}
          <div className="flex gap-6 justify-center flex-wrap">
            {/* الكارد 1 (نفس كودك 100%) */}
            <div className="relative w-[339.55px] h-[486.80px] bg-[#5D5FEF24] rounded-[13px] overflow-hidden">
              {/* الصورة */}
              <h1 className="text-[#FFFFFF] text-[16px] font-bold leading-relaxed text-center max-w-[280px] mt-85 ">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth.
              </h1>

              <img
                src="/images/nature/Rectangle2.png"
                alt="image"
                className="w-full h-full object-cover"
              />

              {/* طبقة سوداء */}
              <div className="absolute inset-0 bg-black opacity-80"></div>

              <div className="absolute top-0 left-0 w-full h-[314.95px] rounded-[13px] overflow-hidden">
                <img
                  src="/images/nature/Rectangle3.png"
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* البادج */}
              <div className="absolute top-[260px] left-[20px] w-[201.38px] h-[67.65px] bg-[#F178B6A3] flex items-center justify-center rounded-md z-20">
                <span className="text-black font-bold text-[48px]">Earth</span>
              </div>
            </div>
            {/* الكارد 1 (نفس كودك 100%) */}
            <div className="relative w-[339.55px] h-[486.80px] bg-[#5D5FEF24] rounded-[13px] overflow-hidden">
              {/* الصورة */}
              <h1 className="text-[#FFFFFF] text-[16px] font-bold leading-relaxed text-center max-w-[280px] mt-85 ">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth.
              </h1>

              <img
                src="/images/nature/Rectangle2.png"
                alt="image"
                className="w-full h-full object-cover"
              />

              {/* طبقة سوداء */}
              <div className="absolute inset-0 bg-black opacity-80"></div>

              <div className="absolute top-0 left-0 w-full h-[314.95px] rounded-[13px] overflow-hidden">
                <img
                  src="/images/nature/freepik3.jpg"
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* البادج */}
              <div className="absolute top-[260px] left-[20px] w-[201.38px] h-[67.65px] bg-[#F178B6A3] flex items-center justify-center rounded-md z-20">
                <span className="text-black font-bold text-[48px]">Earth</span>
              </div>
            </div>
            {/* الكارد 2 (نفس كودك 100%) */}

            {/* الكارد 3 (نفس كودك 100%) */}
            <div className="relative w-[339.55px] h-[486.80px] bg-[#5D5FEF24] rounded-[13px] overflow-hidden">
              {/* الصورة */}
              <h1 className="text-[#FFFFFF] text-[16px] font-bold leading-relaxed text-center max-w-[280px] mt-85 ">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth.
              </h1>

              <img
                src="/images/nature/Rectangle2.png"
                alt="image"
                className="w-full h-full object-cover"
              />

              {/* طبقة سوداء */}
              <div className="absolute inset-0 bg-black opacity-80"></div>

              <div className="absolute top-0 left-0 w-full h-[314.95px] rounded-[13px] overflow-hidden">
                <img
                  src="/images/nature/freepik2.jpg"
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* البادج */}
              <div className="absolute top-[260px] left-[20px] w-[201.38px] h-[67.65px] bg-[#F178B6A3] flex items-center justify-center rounded-md z-20">
                <span className="text-black font-bold text-[48px]">Earth</span>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="flex gap-6 justify-center flex-wrap">
            {/* الكارد 1 (نفس كودك 100%) */}
            <div className="relative w-[339.55px] h-[486.80px] bg-[#5D5FEF24] rounded-[13px] overflow-hidden">
              {/* الصورة */}
              <h1 className="text-[#FFFFFF] text-[16px] font-bold leading-relaxed text-center max-w-[280px] mt-85 ">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth.
              </h1>

              <img
                src="/images/nature/Rectangle2.png"
                alt="image"
                className="w-full h-full object-cover"
              />

              {/* طبقة سوداء */}
              <div className="absolute inset-0 bg-black opacity-80"></div>

              <div className="absolute top-0 left-0 w-full h-[314.95px] rounded-[13px] overflow-hidden">
                <img
                  src="/images/nature/Rectangle3.png"
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* البادج */}
              <div className="absolute top-[260px] left-[20px] w-[201.38px] h-[67.65px] bg-[#F178B6A3] flex items-center justify-center rounded-md z-20">
                <span className="text-black font-bold text-[48px]">Earth</span>
              </div>
            </div>
            {/* الكارد 1 (نفس كودك 100%) */}
            <div className="relative w-[339.55px] h-[486.80px] bg-[#5D5FEF24] rounded-[13px] overflow-hidden">
              {/* الصورة */}
              <h1 className="text-[#FFFFFF] text-[16px] font-bold leading-relaxed text-center max-w-[280px] mt-85 ">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth.
              </h1>

              <img
                src="/images/nature/Rectangle2.png"
                alt="image"
                className="w-full h-full object-cover"
              />

              {/* طبقة سوداء */}
              <div className="absolute inset-0 bg-black opacity-80"></div>

              <div className="absolute top-0 left-0 w-full h-[314.95px] rounded-[13px] overflow-hidden">
                <img
                  src="/images/nature/freepik3.jpg"
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* البادج */}
              <div className="absolute top-[260px] left-[20px] w-[201.38px] h-[67.65px] bg-[#F178B6A3] flex items-center justify-center rounded-md z-20">
                <span className="text-black font-bold text-[48px]">Earth</span>
              </div>
            </div>
            {/* الكارد 2 (نفس كودك 100%) */}

            {/* الكارد 3 (نفس كودك 100%) */}
            <div className="relative w-[339.55px] h-[486.80px] bg-[#5D5FEF24] rounded-[13px] overflow-hidden">
              {/* الصورة */}
              <h1 className="text-[#FFFFFF] text-[16px] font-bold leading-relaxed text-center max-w-[280px] mt-85 ">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth.
              </h1>

              <img
                src="/images/nature/Rectangle2.png"
                alt="image"
                className="w-full h-full object-cover"
              />

              {/* طبقة سوداء */}
              <div className="absolute inset-0 bg-black opacity-80"></div>

              <div className="absolute top-0 left-0 w-full h-[314.95px] rounded-[13px] overflow-hidden">
                <img
                  src="/images/nature/freepik2.jpg"
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* البادج */}
              <div className="absolute top-[260px] left-[20px] w-[201.38px] h-[67.65px] bg-[#F178B6A3] flex items-center justify-center rounded-md z-20">
                <span className="text-black font-bold text-[48px]">Earth</span>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------------- */}

          <br />
          <br />
          <br />
          <br />
          <br />
          {/* Video Sections / Bottom Slider */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center relative">
            {/* Left Arrow */}
            <button className="absolute left-0 bg-white/30 p-4 rounded-full backdrop-blur-sm hover:bg-white/50 transition-colors">
              <span className="text-2xl">←</span>
            </button>

            {/* Video Card 1 */}
            <div className="w-full max-w-sm bg-white/20 backdrop-blur-xl border border-white/30  p-4 shadow-2xl relative overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden h-44 bg-black">
                <img
                  src="/images/nature/plant1.jpg"
                  className="opacity-100 object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#818cf8] rounded-full flex items-center justify-center pl-1">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center text-[#2e1065]">
                <h3 className="font-bold text-[#000000] text-[20px]">
                  Eco-friendly projects
                </h3>
                <p className="text-[15px] text-[#000000] px-4 font-medium opacity-80">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own.
                </p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="w-full max-w-sm bg-white/20 backdrop-blur-xl border border-white/30  p-4 shadow-2xl relative overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden h-44 bg-gradient-to-b from-blue-400 to-blue-900">
                <img
                  src="/images/nature/plant2.jpg"
                  className="opacity-100 object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center pl-1 backdrop-blur-md">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center text-[#2e1065]">
                <h3 className="font-bold text-[#000000] text-[20px]">
                  Eco-friendly projects
                </h3>
                <p className="text-[15px] text-[#5D5FEF] px-4 font-medium opacity-80">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own.
                </p>
              </div>
            </div>

            {/* Right Arrow */}
            <button className="absolute right-0 bg-white/30 p-4 rounded-full backdrop-blur-sm hover:bg-white/50 transition-colors">
              <span className="text-2xl">→</span>
            </button>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <span className="text-2xl cursor-pointer">«</span>
            <div className="flex gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-[#6366f1] rounded-md font-bold">
                1
              </span>
              <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-md font-bold">
                2
              </span>
              <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-md font-bold">
                3
              </span>
            </div>
            <span className="text-2xl cursor-pointer">»</span>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default NaturePage;
