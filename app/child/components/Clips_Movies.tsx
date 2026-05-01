import { Play, Send } from "lucide-react";
import React from "react";

export default function Clips_Movies() {
  return (
    <>
<section className="py-12 md:py-20">
  <div className="max-w-7xl mx-auto px-4 md:px-6">

    {/* Title */}
    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
      Clips, Movies, and Cartoons
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden bg-gray-800 group relative cursor-pointer"
        >
          <img
            src="/images/child/child1.png"
            alt="Movie"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <Play className="fill-white w-8 h-8 md:w-12 md:h-12" />
          </div>
        </div>
      ))}
    </div>

    {/* Button */}
    <div className="mt-10 md:mt-12 text-center">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20" />
        <button className="relative px-6 md:px-12 py-3 md:py-4 bg-[#F178B6A3] font-bold text-lg md:text-2xl lg:text-3xl rounded-xl hover:scale-105 transition">
          Explore more
        </button>
      </div>
    </div>

  </div>
</section>

{/* CTA Section */}
<section className="bg-[#F178B6A3] px-4 md:px-8 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
  <h3 className="text-lg md:text-xl font-bold">
    Stay informed, learn more & contact us
  </h3>

  <button className="flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-[#5D5FEF] hover:bg-blue-700 transition rounded-xl">
    send message
  </button>
</section>

{/* Pagination */}
<div className="flex justify-center items-center gap-2 md:gap-4 py-8 md:py-12 bg-[#b28eb2] flex-wrap">
  <button className="text-2xl md:text-3xl">&laquo;</button>

  <button className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-600 text-white font-bold">
    1
  </button>
  <button className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-indigo-300 text-white font-bold">
    2
  </button>
  <button className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-indigo-300 text-white font-bold">
    3
  </button>

  <button className="text-2xl md:text-3xl">&raquo;</button>
</div>
    </>
  );
}
