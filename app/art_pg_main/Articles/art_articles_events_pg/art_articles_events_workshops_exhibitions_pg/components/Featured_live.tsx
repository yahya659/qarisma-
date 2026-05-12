import { Play } from "lucide-react";
import React from "react";

export default function Featured_live() {
  return (
    <>
      {" "}
      <main className="relative z-10 max-w-7xl mt-20 mx-auto px-4 md:px-8 pb-20">
        <section className="grid grid-cols-1 bg-[#5D5FEF85]/30 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative group ">
            <div className="aspect-video   overflow-hidden shadow-2xl relative">
              <img
                src="/images/exhibitions1.png"
                className="w-full h-full object-cover  "
                alt="Live session"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button className="w-20 h-20 bg-[#F178B6A3]/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
                  <Play fill="#5D5FEF" size={32} />
                </button>
              </div>
            </div>
          </div>
          <div className="p-4">
            <span className="text-[36px] font-bold  font-bold  mb-4 block text-[#000000]">
              Featured live
            </span>
            <h2 className="text-[48px] font-bold mb-6 font-bold">
              The Language of Light and Shadow
            </h2>
            <p className="text-[#000000] mb-4 text-[32px] font-bold">
              It has one principle and one motto that can be read individually,
              meaning each word on its own.
            </p>
          </div>
        </section>

        {/* Featured Live Session 2 (Reverse) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div className="p-4">
            <span className="text-[36px] font-bold  font-bold  mb-4 block text-[#000000]">
              Featured live
            </span>
            <h2 className="text-[48px] font-bold mb-6 font-bold">
              The Language of Light and Shadow
            </h2>
            <p className="text-[#000000] mb-4 text-[32px] font-bold">
              It has one principle and one motto that can be read individually,
              meaning each word on its own.
            </p>
          </div>
          <div className="relative group order-1 md:order-2">
            <div className="aspect-video   overflow-hidden shadow-2xl relative">
              <img
                src="/images/exhibitions1.png"
                className="w-full h-full object-cover    "
                alt="Live session"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button className="w-20 h-20 bg-[#F178B6A3]/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
                  <Play fill="#5D5FEF" size={32} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
