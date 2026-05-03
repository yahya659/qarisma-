import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Explore_More_About_Sports() {
  return (
    <>
      <main className="relative bg-[#A26E8570] z-10 max-w-7xl mx-auto px-4 py-8 space-y-20">
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-[64px] font-bold text-[#FFFFFF]">
              Explore More About Sports
            </h2>
            <p className="text-[#000000] text-[40px] font-bold italic">
              Top show and In-depth across the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Soccer", img: "/images/Sporte/Sporte3.jpg" },
              {
                title: "Racing",
                img: "/images/Sporte/Sporte2.jpg",
              },
              {
                title: "Tennis",
                img: "/images/Sporte/Sporte1.jpg",
              },
            ].map((sport, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:translate-y-[-10px] transition-transform duration-300 border border-purple-50"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={sport.img}
                    alt={sport.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <h3 className="absolute bottom-4 bg-[#BD9FA9] left-1 text-white text-[36px] font-bold">
                    {sport.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-[14px] text-[#0C0C0D] leading-relaxed">
                    Exclusive coverage, technical analysis, and the latest news
                    from the world of {sport.title.toLowerCase()}. Stay updated
                    with our experts.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center hover:bg-purple-600 transition">
              <ChevronLeft />
            </button>
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-300"></span>
              <span className="w-2 h-2 rounded-full bg-pink-300"></span>
              <span className="w-6 h-2 rounded-full bg-purple-500"></span>
              <span className="w-2 h-2 rounded-full bg-pink-300"></span>
            </div>
            <button className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center hover:bg-purple-600 transition">
              <ChevronRight />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
