"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import router from "next/router";
import React from "react";
import { useRouter } from "next/navigation";


const cards = [1, 2, 3, 4];

export default function NaturePage() {
    const router = useRouter();
  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <div className="min-h-screen bg-gradient-to-br from-[#F29FD069] to-[#7c3aed] text-white px-6 py-10">
      {/* 🔷 Header */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h1 className="text-[#5D5FEF] text-[64px] font-bold drop-shadow-lg mb-2">
          Nature
        </h1>
        <p className="text-[#FFFFFF] text-[40px] mb-6">
          Top headlines and In-depth across the world
        </p>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap mb-6">
          <button className="px-4 py-2 rounded-[18px] text-[14px] backdrop-blur-md bg-[#5D5FEF] hover:bg-white/30 transition">
            All
          </button>

          <button
            onClick={() => router.push("/nature/Articles")}
            className="px-4 py-2 rounded-[18px] text-[14px] backdrop-blur-md bg-[#5D5FEF85] hover:bg-white/30 transition"
          >
            Articles
          </button>

          <button
            
            className="px-4 py-2 rounded-[18px] text-[#FFFFFF] backdrop-blur-md bg-[#F178B6] text-white"
          >
            Landscapes
          </button>

         <button onClick={() => router.push("/nature/Programs")} className="px-4 py-2 rounded-[18px] text-[14px] backdrop-blur-md bg-[#5D5FEF85] hover:bg-white/30 transition">
                Programs
              </button>

          {/* Search */}
          <input
            placeholder="Search..."
            className="bg-[#5D5FEF] backdrop-blur-md px-4 py-2 outline-none w-60 placeholder-white translate-x-100 text-center"
          />
        </div>
        <button  onClick={() => router.push("/nature/BenefitsHarms")} className="px-4 py-2 rounded-[18px] text-[14px] backdrop-blur-md bg-[#5D5FEF85] hover:bg-white/30 transition">
              Benefits & Harms
            </button>
        <button className="px-4 py-2 rounded-[18px] text-[14px] backdrop-blur-md bg-[#5D5FEF85] hover:bg-white/30 transition">
          Outings & Places
        </button>
        <button className="px-4 py-2 rounded-[18px] text-[14px] backdrop-blur-md bg-[#5D5FEF85] hover:bg-white/30 transition">
          Teams Of The Week
        </button>
      </section>

      {/* 🔷 Main Section */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 🟣 Left Big Card */}
        <div className="lg:col-span-2">
          <div className="relative rounded-xl overflow-hidden">
            <div className="w-full h-[300px] bg-black flex items-center justify-center">
              <img
                src="/images/nature/Rectangle3.png"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="absolute bottom-0 p-6 bg-black/50 w-full">
              <h2 className="text-[64px] font-bold">Earth</h2>
              <p className="text-[16px] bg-[#0E2816] text-white/80 mt-2">
                It has one principle and one motto that can be read individually
              </p>
            </div>
          </div>
        </div>

        {/* 🟣 Sidebar */}
        <div className="flex flex-col gap-4  bg-[#5D5FEFBA]">
          <h3 className="font-bold text-[24px]">EDITORS PICKS</h3>

          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-[#F178B6] border border-white/20 p-4 rounded-xl backdrop-blur-xl shadow-md"
            >
              <h4 className="font-bold text-[24px] text-[#000000] ">
                Beyond the Headlines
              </h4>

              <p className="text-xs text-[15px] mt-2 leading-relaxed">
                It has one principle and one motto that can be read
                individually, meaning each word on its own.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔷 Discover Section */}
      <div className="max-w-[1200px] mx-auto mt-16 text-center">
        <h2 className="text-[64px] text-[#FFFFFF] font-bold">Discover your world</h2>
        <p className="text-[#5D5FEF] text-[40px]">
          Top headlines and in-depth across the world
        </p>
      </div>

      {/* 🔷 Cards */}
      <div className="max-w-[1200px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Card 1 */}
  <div className="bg-[#5D5FEF3D] backdrop-blur-xl p-4 ">
    <div className="relative">
      <img
        src="/images/nature/freepik5.png"
        className="w-full h-[200px] object-cover rounded-md"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 bg-pink-400/80 rounded-full flex items-center justify-center">
          ▶
        </div>
      </div>
    </div>

    <h3 className="mt-4 font-bold text-[48px]">Beyond the Headlines</h3>
    <p className="text-[24px] text-[#000000] mt-2">
      It has one principle and one motto that can be read individually,
      meaning each word on its own
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-[#F29FD069] backdrop-blur-xl p-4 ">
    <div className="relative">
      <img
        src="/images/nature/freepik5.png"
        className="w-full h-[200px] object-cover rounded-md"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 bg-pink-400/80 rounded-full flex items-center justify-center">
          ▶
        </div>
      </div>
    </div>

    <h3 className="mt-4 font-bold text-[48px]">Beyond the Headlines</h3>
    <p className="text-[24px] text-[#000000] mt-2">
      It has one principle and one motto that can be read individually,
      meaning each word on its own
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-[#5D5FEF3D] backdrop-blur-xl p-4 ">
    <div className="relative">
      <img
        src="/images/nature/freepik5.png"
        className="w-full h-[200px] object-cover rounded-md"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 bg-pink-400/80 rounded-full flex items-center justify-center">
          ▶
        </div>
      </div>
    </div>

    <h3 className="mt-4 font-bold text-[48px]">Beyond the Headlines</h3>
    <p className="text-[24px] text-[#000000] mt-2">
      It has one principle and one motto that can be read individually,
      meaning each word on its own
    </p>
  </div>

  {/* Card 4 */}
  <div className="bg-[#5D5FEF3D] backdrop-blur-xl p-4">
    <div className="relative">
      <img
        src="/images/nature/freepik5.png"
        className="w-full h-[200px] object-cover rounded-md"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 bg-pink-400/80 rounded-full flex items-center justify-center">
          ▶
        </div>
      </div>
    </div>

    <h3 className="mt-4 font-bold text-[48px]">Beyond the Headlines</h3>
    <p className="text-[24px] text-[#000000] mt-2">
      It has one principle and one motto that can be read individually,
      meaning each word on its own
    </p>
  </div>

</div>

      {/* 🔷 Pagination */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button>«</button>
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            className={`w-10 h-10 rounded-lg ${
              n === 1 ? "bg-[#5D5FEF]" : "bg-white/30"
            }`}
          >
            {n}
          </button>
        ))}
        <button>»</button>
      </div>
    </div>
    <Footer/>
    </>
  );
}
