"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function ExploreSection() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#F178B6] to-[#5D5FEF6E] text-white px-4 sm:px-6 md:px-6 py-10 overflow-x-hidden">
        <Header />
        

        {/* 🔷 Section 1 */}
        <div className="relative w-full md:w-[1805px] md:-ml-[175px] min-h-[500px] md:h-[971px] overflow-hidden">
          {/* 🔷 الصورة الخلفية */}
          <img
            src="/images/reports2.png"
            className="absolute inset-0 w-full h-full object-cover"
            alt="bg"
          />

          {/* 🔷 طبقة اللون + blend */}
          <div
            className="absolute inset-0 opacity-[0.61] bg-[#F178B6]"
            style={{ mixBlendMode: "plus-darker" }}
          ></div>

          {/* 🔷 المحتوى */}
          <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-full px-4 md:px-6 py-10 md:py-0">
            {/* Text */}
            <div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[64px] font-bold leading-[50px] md:leading-[84px] tracking-[0px] text-white mb-4">
                Explore more about Nature
              </h2>

              <p className="text-black font-semibold text-[18px] sm:text-[24px] md:text-[32px] leading-[30px] md:leading-[50px] tracking-[0.1px] mb-6">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth
              </p>

              <button className="w-[200px] sm:w-[220px] md:w-[257px] h-[54px] md:h-[64px] bg-[#5D5FEF] rounded-[17px] text-white font-semibold">
                Learn More
              </button>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/images/nature/weather3.jpg"
                className="w-[90%] md:w-[733px] h-auto md:h-[699px] shadow-2xl"
                alt="nature"
              />
            </div>
          </div>
        </div>
        {/* 🔷 Section 2 (Banner) */}
        <section className="relative min-h-[500px] w-full flex flex-col md:flex-row mt-[40px] items-center justify-center overflow-hidden bg-[#0a191e] px-6 py-12">
          <div
            className="absolute inset-0 z-0 opacity-60"
            style={{
              backgroundImage: 'url("/images/nature/weather3.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a191e]/80"></div>
          </div>

          <div className="relative z-10 max-w-4xl w-full text-left">
            <h2 className="text-[32px] md:text-5xl font-bold text-[#FFFFFF] mb-6 tracking-wide leading-tight">
              Explore more about Nature
            </h2>

            <p className="text-[#F178B6] text-[18px] md:text-xl font-medium max-w-2xl leading-relaxed mb-8">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are care for truth
            </p>

            <button className="w-[200px] md:w-[257px] h-[54px] md:h-[64px] bg-[#5D5FEF] rounded-[17px] text-white font-semibold">
              Learn More
            </button>
          </div>

          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-yellow-400 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full blur-sm animate-ping"></div>
        </section>

        {/* 🔷 Discover */}
        <div className="text-center mb-10 px-4">
          <h2 className="text-[32px] md:text-[64px] text-[#FFFFFF] font-bold">
            Discover your world
          </h2>
          <p className="text-[#000000] text-[18px] md:text-[40px] font-bold">
            Top programs and in-depth across the world
          </p>
        </div>

        {/* 🔷 Cards */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center relative px-4">
          {/* Left Arrow */}
          <button className="hidden md:flex absolute left-0 bg-white/30 p-4 rounded-full backdrop-blur-sm hover:bg-white/50 transition-colors">
            <span className="text-2xl">←</span>
          </button>

          {/* Card 1 */}
          <div className="w-full max-w-sm bg-white/20 backdrop-blur-xl border border-white/30 p-4 shadow-2xl relative overflow-hidden">
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

            <div className="mt-4 text-center">
              <h3 className="font-bold text-[#000000] text-[20px]">
                Eco-friendly projects
              </h3>
              <p className="text-[15px] text-[#000000] px-4 font-medium opacity-80">
                It has one principle and one motto that can be read
                individually.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-sm bg-white/20 backdrop-blur-xl border border-white/30 p-4 shadow-2xl relative overflow-hidden">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <img
                src="/images/nature/plant2.jpg"
                className="opacity-100 object-cover w-full h-full"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="font-bold text-[#000000] text-[20px]">
                Eco-friendly projects
              </h3>
              <p className="text-[15px] text-[#5D5FEF] px-4 font-medium opacity-80">
                It has one principle and one motto that can be read
                individually.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-sm bg-white/20 backdrop-blur-xl border border-white/30 p-4 shadow-2xl relative overflow-hidden">
            <div className="relative rounded-2xl overflow-hidden h-44">
              <img
                src="/images/nature/plant2.jpg"
                className="opacity-100 object-cover w-full h-full"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="font-bold text-[#000000] text-[20px]">
                Eco-friendly projects
              </h3>
              <p className="text-[15px] text-[#5D5FEF] px-4 font-medium opacity-80">
                It has one principle and one motto that can be read
                individually.
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button className="hidden md:flex absolute right-0 bg-white/30 p-4 rounded-full backdrop-blur-sm hover:bg-white/50 transition-colors">
            <span className="text-2xl">→</span>
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-[60px] md:mt-[100px] items-center gap-3">
          <button>«</button>

          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`w-8 h-8 rounded-md ${
                n === 2 ? "bg-[#5D5FEF]" : "bg-white/30"
              }`}
            >
              {n}
            </button>
          ))}

          <button>»</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
