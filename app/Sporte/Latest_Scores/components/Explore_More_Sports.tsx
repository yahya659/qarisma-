import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Explore_More_Sports() {
  return (
    <>
     <main className="relative z-10 max-w-7xl mx-auto px-4 py-8 space-y-24"> 
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-[64px] font-black text-[#FFFFFF] drop-shadow-lg inline-block px-8 py-2">
            Explore More Sports
          </h2>
        </div>

        <div className="grid grid-cols-1 bg-[#5D5FEF6E]/40 md:grid-cols-3 gap-8">
          {[
            {
              title: "Basketball Highlights",
              img: "/images/Sporte/Sporte7.jpg",
              color: "bg-[#5D5FEF6E]/40",
            },
            {
              title: "Motogerut Thrills",
              img: "/images/Sporte/Sporte6.jpg",
              color: "bg-[#F178B6A3]/60",
            },
            {
              title: "Tennis Aces",
              img: "/images/Sporte/Sporte7.jpg",
              color: "bg-[#5D5FEF6E]/40",
            },
            {
              title: "Endurance Races",
              img: "/images/Sporte/Sporte6.jpg",
              color: "bg-[#5D5FEF6E]/40",
            },
            {
              title: "Global Football",
              img: "/images/Sporte/Sporte7.jpg",
              color: "bg-[#F178B6A3]/60",
            },
            {
              title: "Extreme Water Sports",
              img: "/images/Sporte/Sporte6.jpg",
              color: "bg-[#5D5FEF6E]/40",
            },
          ].map((sport, idx) => (
            <div
              key={idx}
              className="group relative  backdrop-blur-md   overflow-hidden shadow-xl   hover:translate-y-[-10px] transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={sport.img}
                  alt={sport.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className={`p-6 ${sport.color} text-white space-y-4`}>
                <h3 className="text-[30px] font-bold">{sport.title}</h3>
                <button className="px-6 py-2 bg-indigo-600/90 hover:bg-indigo-700 text-xs font-bold rounded-lg transition-colors">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mb-50 items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:scale-110 transition">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${i === 3 ? "bg-indigo-600 scale-125" : "bg-pink-300"}`}
              ></span>
            ))}
          </div>
          <button className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:scale-110 transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
      </main>
    </>
  );
}
