import React from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const BeautyLandingPage = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <div className="min-h-screen font-sans text-white overflow-hidden">
        <div className="fixed inset-0 -z-10">
          {" "}
          <img
            src="/images/reports.png"
            className="w-full h-full object-cover"
          />{" "}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/70 via-purple-500/70 to-indigo-500/70"></div>
        </div>
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
          <h1 className="text-5xl font-black text-[#5d58f0] mb-3 tracking-tight">
            Latest Stories
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

        {/* Main Glass Card Section */}
        <div className="max-w-6xl mx-auto bg-[#5D5FEF6E]/70 backdrop-blur-xl border border-white/20 rounded-[40px] p-8 mb-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Main Content */}
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden border-2 border-white/20">
                <img
                  src="/images/Beauty4.png"
                  alt="Main"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div>
                <h2 className="text-[48px] font-bold mb-4">Beyond Headlines</h2>
                <p className="text-[#000000] text-[32px] leading-relaxed">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, we
                  believe that reality and maturity are core for truth.
                </p>
              </div>
            </div>

            {/* Side Small Cards */}
            <div className="flex flex-col gap-10 items-end pr-4">
              {/* الكرت الأول */}
              <div className="relative group w-full max-w-[280px]">
                {/* العناصر الزخرفية الخلفية (الأبواب الوردية) */}
                <div className="absolute -inset-y-2 -left-4 -right-4 flex justify-between px-1 -z-10">
                  <div className="w-8 h-full bg-[#f8a5c2] rounded-l-lg border-2 border-white/30 shadow-inner opacity-80"></div>
                  <div className="w-8 h-full bg-[#f8a5c2] rounded-r-lg border-2 border-white/30 shadow-inner opacity-80"></div>
                </div>

                {/* المحتوى الزجاجي الرئيسي */}
                <div className="bg-[#FFCFFB] backdrop-blur-md p-3 rounded-xl border border-white/30 shadow-xl overflow-hidden">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-3">
                    <img
                      src="/images/Fashion7.png"
                      className="w-full h-full object-cover"
                      alt="Fashion"
                    />
                    {/* الطبقة البنفسجية الشفافة أسفل الصورة كما في التصميم */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-purple-900/40 "></div>
                  </div>
                  <p className="text-[#5D5FEF] font-bold text-center text-[32px] leading-tight">
                    Beyond <br /> Headlines
                  </p>
                </div>
              </div>

              {/* الكرت الثاني */}
              <div className="relative group w-full max-w-[280px]">
                {/* العناصر الزخرفية الخلفية */}
                <div className="absolute -inset-y-2 -left-4 -right-4 flex justify-between px-1 -z-10">
                  <div className="w-8 h-full bg-[#f8a5c2] rounded-l-lg border-2 border-white/30 shadow-inner opacity-80"></div>
                  <div className="w-8 h-full bg-[#f8a5c2] rounded-r-lg border-2 border-white/30 shadow-inner opacity-80"></div>
                </div>

                {/* المحتوى الزجاجي الرئيسي */}
                <div className="bg-[#FFCFFB] backdrop-blur-md p-3 rounded-xl border border-white/30 shadow-xl overflow-hidden">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-3">
                    <img
                      src="/images/Fashion7.png"
                      className="w-full h-full object-cover"
                      alt="Fashion"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-purple-900/40 "></div>
                  </div>
                  <p className="text-[#5D5FEF] font-bold text-center text-[32px] leading-tight">
                    Beyond <br /> Headlines
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button className="p-2 bg-[#6366f1] rounded-full">
              <ChevronLeft />
            </button>
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-white/40 rounded-full"></span>
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span className="w-3 h-3 bg-white/40 rounded-full"></span>
            </div>
            <button className="p-2 bg-[#6366f1] rounded-full">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Bottom Section: Explore More */}
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">Explore More About Beauty</h2>
          <p className="opacity-80">Top show and In-depth across the world</p>
        </div>

        {/* Responsive Grid of Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-[30px] hover:scale-105 transition-transform">
            <img
              src="/images/Beauty1.png"
              className="rounded-2xl h-40 w-full object-cover mb-4"
              alt="beauty"
            />
            <h3 className="text-[#FFFFFF] text-[32px] font-bold mb-2">
              Beyond the Headlines
            </h3>
           <p className="text-[#000000] text-[23px] font-bold  leading-relaxed">
  It has one principle and one motto that can be read individually...
</p>
          </div>
          {/* Card 2 - Highlighted */}
          <div className="bg-[#5D5FEF6E] border border-white/30 p-4 rounded-[30px] shadow-xl scale-110">
            <img
              src="/images/Beauty3.png"
              className="rounded-2xl h-40 w-full object-cover mb-4"
              alt="beauty"
            />
            <h3 className="text-[#FFFFFF] text-[32px] font-bold mb-2">
              Beyond the Headlines
            </h3>
            <p className="text-[#000000] text-[23px] font-bold  leading-relaxed">
  It has one principle and one motto that can be read individually...
</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-[30px]">
            <img
              src="/images/Beauty1.png"
              className="rounded-2xl h-40 w-full object-cover mb-4"
              alt="beauty"
            />
            <h3 className="text-[#FFFFFF] text-[32px] font-bold mb-2">
              Beyond the Headlines
            </h3>
         <p className="text-[#000000] text-[23px]  font-bold  leading-relaxed">
  It has one principle and one motto that can be read individually...
</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-[30px]">
            <img
              src="/images/Beauty1.png"
              className="rounded-2xl h-40 w-full object-cover mb-4"
              alt="beauty"
            />
            <h3 className="text-[#FFFFFF] text-[32px] font-bold mb-2">
              Beyond the Headlines
            </h3>
            <p className="text-[#000000] text-[23px] font-bold  leading-relaxed">
  It has one principle and one motto that can be read individually...
</p>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-8 pb-10">
          <button className="p-2 opacity-70 hover:opacity-100">
            <ChevronsLeft />
          </button>
          <button className="w-10 h-10 bg-[#6366f1] rounded-lg flex items-center justify-center font-bold">
            1
          </button>
          <button className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30">
            2
          </button>
          <button className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30">
            3
          </button>
          <button className="p-2 opacity-70 hover:opacity-100">
            <ChevronsRight />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BeautyLandingPage;
