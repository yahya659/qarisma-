"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function WhoWeAre() {
  return (
    <>
      <Header />
      
      {/* 1. قسم البداية - Hero Section (Who We Are) */}
      <section className="relative w-full min-h-[600px] flex items-center px-10 md:px-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#2D1B4E]/80 z-10 mix-blend-multiply" />
          <img
            src="/images/explore.png"
            alt="Background"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute right-0 top-0 h-full w-1/2 z-20 pointer-events-none opacity-40">
            <img
              src="/images/butterflies-overlay.png"
              alt="Butterflies"
              className="w-full h-full object-contain object-right"
            />
          </div>
        </div>

        <div className="relative z-30 max-w-5xl flex flex-col gap-8">
          <h2 className="text-[#E67EAF] text-4xl md:text-[55px] font-bold tracking-tight lowercase">
            who we are
          </h2>
          <div className="flex flex-col gap-6">
            <p className="text-white text-2xl md:text-[34px] font-bold leading-[1.4] max-w-[950px]">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, in a single sentence,
              whether from right to left or left to right:
            </p>
            <p className="text-white text-2xl md:text-[34px] font-bold tracking-wide">
              (Elegance, Personality, Strength)
            </p>
          </div>
        </div>
      </section>

      {/* 2. قسم القصة - Our Story Section */}
      <section className="w-full py-16 px-4 md:px-10 bg-white">
        <div className="relative max-w-7xl mx-auto min-h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/f.png"
              alt="Newspaper Background"
              className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#312E81] via-[#312E81]/80 to-transparent" />
          </div>

          <div className="relative z-10 p-8 md:p-16 flex flex-col gap-6 max-w-4xl h-full justify-center">
            <div className="inline-block self-start px-8 py-2 bg-[#6366F1] text-white text-xl md:text-2xl font-bold rounded-2xl shadow-lg">
              Our story
            </div>
            <h1 className="text-4xl md:text-[52px] font-black text-black leading-tight drop-shadow-sm max-w-[800px]">
              Beyond the Headlines
            </h1>
            <p className="text-white text-xl md:text-[28px] font-bold leading-relaxed max-w-[850px]">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mt-6">
              <button className="px-14 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl font-bold rounded-2xl hover:bg-white/20 transition-all shadow-lg min-w-[220px]">
                Learn More
              </button>
              <button className="px-14 py-4 bg-[#6366F1] text-white text-xl font-bold rounded-2xl hover:bg-[#4F46E5] transition-all shadow-xl min-w-[220px]">
                Latest News
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. قسم الأخبار - Our News Slider Section */}
      <section className="relative w-full py-16 px-6 md:px-24 bg-[#EBC4D2]/20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#EBC4D2]/40 z-10 mix-blend-multiply" />
          <img
            src="/images/home.jpg"
            alt="Section Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-6xl mx-auto flex flex-col gap-6 relative z-20">
          <h2 className="text-[#5D5FEF] text-5xl md:text-[60px] font-extrabold">
            Our News
          </h2>
          <p className="text-black text-xl md:text-2xl font-semibold max-w-4xl leading-relaxed italic">
            explore more about World, believe that "As there are a thousand
            thoughts lying within a man that he does not know till he takes up
            the pen to write."
          </p>

          <div className="relative mt-10">
            <div className="backdrop-blur-md rounded-[45px] overflow-hidden shadow-xl p-6 md:p-10 border border-white/20 bg-white/10">
              <img
                src="/images/home.jpg"
                alt="News"
                className="w-full h-[450px] object-cover rounded-[35px] shadow-lg mb-10"
              />
              <p className="text-black text-xl md:text-2xl font-bold text-center leading-relaxed max-w-4xl mx-auto">
                we pursue truth with independence and empath. we believe
                journalism should be accessible, data-informed and grounded in
                the lived experiences of the communities we served
              </p>
            </div>

            {/* أزرار السلايدر */}
            <button className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 bg-[#B89DA9] p-5 rounded-full shadow-lg text-white hover:bg-[#6366F1] transition-all z-30">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 bg-[#B89DA9] p-5 rounded-full shadow-lg text-white hover:bg-[#6366F1] transition-all z-30">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-4 mt-10">
            {[1, 2, 3, 4].map((dot) => (
              <div
                key={dot}
                className={`w-5 h-5 rounded-full transition-all ${dot === 2 ? "bg-[#6366F1] scale-125" : "bg-[#B89DA9]/50"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. قسم الأهداف - Our Goals Section */}
      <section className="relative w-full py-20 px-6 md:px-24 bg-[#F2D8E1]/40 overflow-hidden min-h-screen flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none z-0">
          <img src="/images/floating-papers.png" alt="decor" className="w-full h-full object-contain" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 relative z-10">
          <h2 className="text-[#6366F1] text-5xl md:text-[60px] font-black text-center mb-8">
            Our Goals
          </h2>
          <div className="w-full flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/images/news2.png"
                alt="Our Goals Image"
                className="w-full max-w-lg h-auto rounded-[40px] shadow-2xl border-4 border-white/30"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-10">
              <div className="flex flex-col gap-8 text-black text-xl md:text-[26px] font-bold leading-snug">
                <p>be number one across the Arab world</p>
                <p>introduce several new innovations in the field of journalism and media...</p>
                <p>open wide the doors of fame for talents</p>
              </div>
            </div>
          </div>
          <h3 className="text-[#6366F1] text-3xl md:text-[45px] font-bold mt-20 text-center">
            What our valuable Readers say <br /> about us.
          </h3>
        </div>
      </section>

      {/* 5. قسم التقييمات - Testimonials Section */}
      <section className="relative w-full py-20 px-6 bg-[#F2E8EB]/50">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
            <div className="w-full max-w-[450px] bg-[#B89DA9] rounded-[40px] p-8 shadow-xl flex flex-col gap-6">
              <div className="flex gap-1 text-yellow-400 text-2xl">★★★★★</div>
              <p className="text-black text-xl font-bold italic">"I Really loved your ways in creating interesting contents!."</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-400 rounded-full overflow-hidden">
                  <img src="/images/person2.png" alt="User" className="w-full h-full object-cover" />
                </div>
                <div><p className="font-bold">Zineb M</p><p className="text-sm opacity-70">Cairo- Egypt</p></div>
              </div>
            </div>
            <div className="w-full max-w-[450px] bg-[#B89DA9] rounded-[40px] p-8 shadow-xl flex flex-col gap-6">
              <div className="flex gap-1 text-yellow-400 text-2xl">★★★★★</div>
              <p className="text-black text-xl font-bold italic">"I Really loved your ways in creating interesting contents!."</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-400 rounded-full overflow-hidden">
                  <img src="/images/person1.png" alt="User" className="w-full h-full object-cover" />
                </div>
                <div><p className="font-bold">Zineb M</p><p className="text-sm opacity-70">Cairo- Egypt</p></div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-6xl bg-[#B89DA9] rounded-[30px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <h3 className="text-white text-2xl md:text-[34px] font-bold">stay informed, learn more & contact us</h3>
            <button className="px-12 py-4 bg-[#6366F1] text-white text-xl font-bold rounded-[20px] shadow-xl">send message</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}