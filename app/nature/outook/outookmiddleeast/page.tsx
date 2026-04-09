import React from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function MiddleEastPage() {
  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <main className="min-h-screen bg-[#b5a5db] font-sans overflow-x-hidden">
      {/* 1. قسم الهيرو (الستائر والجمال) */}
      <section className="relative h-[819px] w-[1686px] flex items-center justify-center overflow-hidden">
        {/* الخلفية */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/nature/wild4.jpg"
            alt="Middle East Background"
            className="w-full h-full object-cover brightness-75"
          />

          {/* التدرج */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/40 via-transparent to-[#7c3aed]/40"></div>
        </div>

        {/* </section> */}

        {/* صندوق المحتوى الزجاجي */}
        <div className="relative z-10 bg-[#F178B6C7] backdrop-blur-md border border-white/30 p-20 md:p-12 w-[1199px] h-[300px] text-white text-left mx-6">
          <h1 className="text-[48px] text-[#FFFFFF] md:text-4xl font-extrabold mb-4 leading-tight">
            Explore more about the Beauty of middle east
          </h1>
          <p className="text-[#000000] text-[36px] font-medium leading-[50px]  opacity-90">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth
          </p>
          <button className="bg-[#5D5FEF] hover:bg-[#4f46e5] text-[32px] px-8 py-3 rounded-xl font-bold transition-all shadow-lg">
            Explore more
          </button>
        </div>
      </section>

      {/* 2. قسم Latest Stories (الشبكة) */}
      <section className="py-20 px-6 bg-[#F178B6A3]/50 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[64px] text-[#FFFFFF] font-bold  mb-6">
            Latest Stories
          </h2>
          <p className="text-[#000000] font-poppins font-semibold text-[32px] leading-[41px] tracking-[0.1px] max-w-3xl mx-auto align-middle">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth
          </p>
        </div>

        {/* شبكة الكروت - يدوياً بدون MAP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* كرت 1: Egypt */}
          <div className="bg-[#F178B6]/50 p-4 shadow-xl border-[10px] border-black/5">
            <div className="relative h-56 w-full  overflow-hidden mb-4">
              <img
                src="/images/nature/wild6.jpg"
                alt="Egypt"
                className="object-cover"
              />
            </div>
            <div className="px-2 pb-4">
              <h3 className="text-[24px] font-bold text-[#FFFFFF] mb-2 bg-[#F178B6A3]">
                Tourism in Egypt
              </h3>
              <p className="text-white/90 text-[20px] mb-4">
                It has one principle and one motto that can be read
                individually, meaning each word on its own...
              </p>
              <button className="bg-[#F178B6A3] text-white text-[16px] px-4 py-2 rounded-lg font-bold">
                Explore More
              </button>
            </div>
          </div>

          {/* كرت 2: Morocco */}
          <div className="bg-[#5D5FEF]  p-4 shadow-xl border-[10px] border-black/5">
            <div className="relative h-56 w-full  overflow-hidden mb-4">
              <img
                src="/images/nature/wild9.jpg"
                alt="Morocco"
                className="object-cover"
              />
            </div>
            <div className="px-2 pb-4">
              <h3 className="text-[24px] font-bold text-[#FFFFFF]  bg-[#5D5FEF85]">
                Tourism in Morocco
              </h3>
              <p className="text-white/90 text-[20px] mb-4">
                It has one principle and one motto that can be read
                individually, meaning each word on its own...
              </p>
              <button className="bg-[#F178B6A3] text-[16px]  text-white text-xs px-4 py-2 rounded-lg font-bold">
                Explore More
              </button>
            </div>
          </div>

          {/* كرت 3: Bilad Al-sham */}
          <div className="bg-[#5D5FEF] p-4 shadow-xl border-[10px] border-black/5">
            <div className="relative h-56 w-full overflow-hidden mb-4">
              <img
                src="/images/nature/wild7.png"
                alt="Sham"
                className="object-cover"
              />
            </div>
            <div className="px-2 pb-4">
              <h3 className="text-[24px] font-bold text-[#FFFFFF] bg-[#5D5FEF85]">
                Tourism in Bilad Al-sham
              </h3>
              <p className="text-white/90 text-[20px] mb-4">
                It has one principle and one motto that can be read
                individually, meaning each word on its own...
              </p>
              <button className="bg-[#F178B6A3] text-[16px]  text-white text-xs px-4 py-2 rounded-lg font-bold">
                Explore More
              </button>
            </div>
          </div>

          {/* كرت 4: Arab World */}
          <div className="bg-[#5D5FEF]  p-4 shadow-xl border-[10px] border-black/5">
            <div className="relative h-56 w-full  overflow-hidden mb-4">
              <img
                src="/images/nature/wild8.jpg"
                alt="Arab World"
                className="object-cover"
              />
            </div>
            <div className="px-2 pb-4">
              <h3 className="text-[24px] font-bold text-[#FFFFFF] font-bold text-xl mb-2">
                Tourism in arab world
              </h3>
              <p className="text-white/90 text-[20px] mb-4">
                It has one principle and one motto that can be read
                individually, meaning each word on its own...
              </p>
              <button className="bg-[#F178B6A3] text-[16px]  text-white text-xs px-4 py-2 rounded-lg font-bold">
                Explore More
              </button>
            </div>
          </div>
        </div>

        {/* نقاط التصفح */}
        <div className="flex justify-center gap-3 mt-12">
          <span className="w-5 h-5 rounded-full bg-[#7c3aed]/40"></span>
          <span className="w-5 h-5 rounded-full bg-[#7c3aed]"></span>
          <span className="w-5 h-5 rounded-full bg-[#ec82ab]"></span>
          <span className="w-5 h-5 rounded-full bg-[#ec82ab]/40"></span>
        </div>
      </section>

      {/* 3. قسم "Discover the unseen" (الخلفية الوردية) */}
      <section className="bg-[#F178B6]/50 py-20 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square  overflow-hidden ">
            <img
              src="/images/nature/wild5.jpg"
              alt="Culture"
              className="object-cover"
            />
          </div>
          <div className="text-[#2e1065] space-y-6">
            <h2 className="text-[64px] md:text-5xl font-black leading-tight">
              Discover the unseen beauty of our culture
            </h2>
            <p className="text-[32px] text-[#FFFFFF] font-medium opacity-80 leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
            <button className="bg-[#6366f1] text-white px-10 py-3 rounded-xl font-bold shadow-lg hover:bg-[#4f46e5] transition-all">
              Explore More
            </button>
          </div>
        </div>
      </section>
      {/* 1. قسم Trending outlooks */}
      <section className="py-16 px-6 container mx-auto bg-[#5D5FEF85]/40">
        <div className="flex justify-between items-center mb-10 text-white">
          <h2 className="text-[48px] font-extrabold tracking-tight">
            Trending outlooks
          </h2>
          <Link href="/nature/outook/outook_world" className="text-[40px] font-medium hover:underline">
  view all
</Link>
        </div>

        {/* شبكة الكروت - يدوياً */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* الكرت الأول: Sea & oceans */}
          <div className="bg-[#F178B6]  p-4 shadow-2xl transition-transform hover:scale-105">
            <div className="relative  overflow-hidden mb-4 bg-black/10">
              <img
                src="/images/nature/village1.png"
                alt="Sea"
                className="w-full h-full object-contain"
              />

              <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-lg">
                <span className="text-white font-bold">Sea & oceans</span>
              </div>
            </div>
            <p className="text-[#000000] text-[20px] leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
          </div>

          {/* الكرت الثاني: village */}
          <div className="bg-[#5D5FEFA1]  p-4 shadow-2xl transition-transform hover:scale-105">
            <div className="relative  overflow-hidden mb-4 bg-black/10">
              <img
                src="/images/nature/village1.png"
                alt="Village"
                 className="w-full h-full object-contain"
              />
              <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-lg">
                <span className="text-white font-bold">village</span>
              </div>
            </div>
            <p className="text-[#000000] text-[20px] leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
          </div>

          {/* الكرت الثالث: Mountain */}
          <div className="bg-[#5D5FEFA1]  p-4 shadow-2xl transition-transform hover:scale-105">
            <div className="relative  overflow-hidden mb-4 bg-black/10">
              <img
                src="/images/nature/village3.jpg"
                alt="Mountain"
               className="w-full  object-contain"
              />
              <div className="absolute bottom-2 left-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-lg">
                <span className="text-white font-bold">Mountain</span>
              </div>
            </div>
            <p className="text-[#000000] text-[20px] leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
          </div>
        </div>

        {/* نقاط وأسهم التصفح */}
        <div className="flex justify-center items-center gap-4">
          <button className="bg-[#6366f1] p-3 rounded-full text-white shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-5 h-5 rotate-180"
            >
              <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#6366f1]/40"></span>
            <span className="w-3 h-3 rounded-full bg-[#6366f1]/40"></span>
            <span className="w-3 h-3 rounded-full bg-[#6366f1]"></span>
            <span className="w-3 h-3 rounded-full bg-[#6366f1]/40"></span>
          </div>
          <button className="bg-[#6366f1] p-3 rounded-full text-white shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </section>

      {/* 2. قسم Culture and outlook (الصور المتداخلة) */}
      <section className="bg-[#5D5FEF85] py-20 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <h2 className="text-[50px] text-[#F178B6] font-bold">Culture and outlook</h2>
            <p className="text-[36px] font-bold ">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
            <button className="bg-[#6366f1] px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-[#4f46e5] transition-all">
              Explore More
            </button>
          </div>

          {/* الصور المتداخلة */}
          <div className="relative h-[400px] w-full ">
            {/* الصورة الكبيرة في الخلف */}
            <div className="absolute right-0 top-0 w-4/5 h-4/5  overflow-hidden border-20 border-[#F178B6A3]/40 shadow-2xl">
              <img
                src="/images/nature/wild11.jpg"
                alt="Background"
                className="object-cover"
              />
            </div>
            {/* الصورة الصغيرة في الأمام */}
            <div className="absolute  left-0 bottom-0 w-3/5 h-1/2 overflow-hidden border-20 border-[#5D5FEF85] shadow-2xl z-10">
              <img
                src="/images/nature/wild8.jpg"
                alt="Foreground"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. بار التواصل (Stay informed) */}
      <section className="container bg-[#F178B6A3]/50 mx-auto px-6 mt-20">
        <div className=" rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-white text-[32px] font-bold italic tracking-wide">
            stay informed, learn more & contact us
          </h3>
          <button className="bg-[#6366f1] text-white px-10 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform">
            send message
          </button>
        </div>
      </section>

      {/* 4. أرقام الصفحات في الأسفل */}
      <div className="flex justify-center items-center gap-4 mt-10 text-white">
        <br/>
        <br/>
        <br/>
        <button className="p-2 opacity-60 hover:opacity-100">«</button>
         <Link
                href="/nature/outook"
                className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-xl font-bold cursor-pointer hover:bg-white/30 transition"
              >
                1
              </Link>
        <span className="w-10 h-10 flex items-center justify-center bg-[#6366f1] rounded-xl font-bold shadow-lg">
          2
        </span>
        <span className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-xl font-bold cursor-pointer hover:bg-white/30 transition">
          3
        </span>
        <button className="p-2 opacity-60 hover:opacity-100">»</button>
      </div>
    </main>
    <Footer/>
    </>
  );
}
