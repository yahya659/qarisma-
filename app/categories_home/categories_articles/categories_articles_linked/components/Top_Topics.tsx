import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import React from "react";

export default function Top_Topics() {
  const topics = [1, 2, 3, 4].map((id) => ({
    id,
    title: "Social sustainability",
    description:
      "A brief description of the topic that provides value to the reader.",
    image: "/images/Youth/Youth2.jpg",
  }));
  return (
    <>
      {" "}
      <section className="text-center mb-16 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl md:text-[64px] font-bold mb-2">
          Top Topics
        </h2>

        <p className="text-lg sm:text-2xl md:text-[40px] text-[#000000] font-semibold mb-10">
          Top Events and In-depth across the world
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="w-full sm:w-64 bg-[#F178B6A3]/70 overflow-hidden shadow-md group cursor-pointer transition-transform hover:-translate-y-2"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4 text-left">
                <h5 className="text-[#5D5FEF] font-bold text-base sm:text-lg mb-2 bg-[#F178B6]">
                  {topic.title}
                </h5>

                <p className="text-[11px] mb-4 line-clamp-2">
                  {topic.description}
                </p>

                <button className="text-[#5D5FEF] font-bold text-sm sm:text-[14px] hover:underline">
                  Read more
                </button>

                <div className="flex items-center gap-2 mt-4">
                  <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                  <span className="text-[10px] text-white">
                    Written by Admin
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Pagination */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 shadow-md">
            <ChevronLeft size={22} />
          </button>

          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-300"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-300"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-300"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-300"></div>
          </div>

          <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 shadow-md">
            <ChevronRight size={22} />
          </button>
        </div>
      </section>
      {/* Newsletter / Stay Informed Section */}
      <section className="px-4 sm:px-6 py-10 sm:py-12 max-w-5xl mx-auto">
        <div className="bg-[#5D5FEF7D] backdrop-blur-md p-4 sm:p-3 flex flex-col sm:flex-row items-center gap-4 pl-4 sm:pl-8 border border-white/10 rounded-xl text-center sm:text-left">
          <span className="text-lg sm:text-2xl md:text-[32px] text-white hidden md:block">
            stay informed, learn more
          </span>

          <div className="flex-1"></div>

          <button className="bg-[#F178B6] hover:bg-pink-500 px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-bold uppercase transition-all w-full sm:w-auto">
            send message
          </button>
        </div>
      </section>
      {/* Main Pagination */}
      <section className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-20 px-4">
        <button className="p-3 bg-white/80 rounded-xl text-blue-500 shadow-md hover:bg-white transition-colors">
          <ChevronsLeft size={22} />
        </button>

        <div className="flex gap-3 sm:gap-4">
          <button className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 text-white rounded-xl font-bold text-lg sm:text-xl shadow-lg">
            1
          </button>

          <button className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-200 text-blue-600 rounded-xl font-bold text-lg sm:text-xl hover:bg-blue-300 transition-colors">
            2
          </button>

          <button className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-200 text-blue-600 rounded-xl font-bold text-lg sm:text-xl hover:bg-blue-300 transition-colors">
            3
          </button>
        </div>

        <button className="p-3 bg-white/80 rounded-xl text-blue-500 shadow-md hover:bg-white transition-colors">
          <ChevronsRight size={22} />
        </button>
      </section>
    </>
  );
}
