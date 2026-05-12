import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Vision_Of_Luxury_Personality() {
  return (
    <>
      {" "}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <section className="relative py-24 p-20 w-full px-6 md:px-20 overflow-hidden bg-[#5D5FEF85]/50 ">
          {/* Decorative background elements to match image feel */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full -mr-40 -mt-40" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full -ml-20 -mb-20" />

          <div className="relative z-10 max-w-5xl">
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1] mb-10 tracking-tight">
              <span className="text-black">Vision Of </span>
              <span className="text-[#ec4899]">Luxury, Personality </span>
              <br className="hidden md:block" />
              <span className="text-[#ec4899]">& Power </span>
              <span className="text-black">Create Us</span>
            </h1>

            <div className="max-w-3xl space-y-6">
              <p className="text-[36px]  text-[#000000] font-bold leading-relaxed opacity-90">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, in a
                single sentence, whether from right to left or left to right:
              </p>

              <p className="text-[36px]  text-[#000000]    font-bold   tracking-wide">
                (Elegance, Personality, Strength)
              </p>
            </div>
          </div>
        </section>
        <div className="max-w-6xl mx-auto p-10 px-6 mb-20">
          <div className="bg-[#F178B6]/50 backdrop-blur-md p-6 rounded-[10px] flex flex-col md:flex-row items-center justify-between   ">
            <h3 className="text-white text-xl font-black italic mb-4 md:mb-0">
              stay informed, learn more
            </h3>
            <button className="bg-[#5D5FEF]   text-white px-10 py-3 rounded-2xl font-black shadow-lg t   ">
              send message
            </button>
          </div>
        </div>
        {/* paginadion */}
      <div className="max-w-7xl mx-auto px-4 mt-5  mb-20">
        <div className="flex items-center justify-center gap-4 ">
          <button className="w-14 h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white">
            <ChevronLeft size={32} />
          </button>
          <button className="w-14 h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-200">
            1
          </button>
          <a href="/art_pg_main/Articles/art_articles_artists_pg/art_articles_artists_inner_pages_pg">
            {" "}
            <button className="w-14 h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
              2
            </button>
          </a>

          <button className="w-14 h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
            3
          </button>
          <button className="w-14 h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
      </main>
      
    </>
  );
}
