import { ChevronsLeft, ChevronsRight } from "lucide-react";
import React from "react";

export default function View_time() {
  return (
    <>
      {" "}
      {/* Featured Content Bottom Cards */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8 space-y-16">
        <section className="px-8 mt-24 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-pink-300/40 backdrop-blur-lg rounded-[2.5rem] p-6 h-64 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform cursor-pointer border border-white/20">
            <div className="w-full h-32 bg-green-500/30 rounded-3xl mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/Sporte/Sporte8.png')] bg-cover bg-center opacity-50"></div>
              <div className="z-10 text-xs">TEAM FORMATION</div>
            </div>
            <h5 className="font-bold text-lg">Top 5 Goals of the Week</h5>
          </div>

          <div className="md:col-span-1 bg-purple-500/60 backdrop-blur-lg rounded-[2.5rem] p-6 h-64 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform cursor-pointer border-4 border-white/30">
            <div className="w-full h-32 bg-green-500/30 rounded-3xl mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/Sporte/Sporte13.png')] bg-cover bg-center opacity-50"></div>
              <div className="z-10 text-xs">TEAM FORMATION</div>
            </div>
            <h5 className="font-bold text-lg">Team Tactics Analysis</h5>
          </div>

          <div className="bg-white/30 backdrop-blur-lg rounded-[2.5rem] p-6 h-64 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform cursor-pointer border border-white/20">
            <div className="w-full h-32 rounded-3xl mb-4 overflow-hidden shadow-inner bg-black/20">
              <img
                src="/images/Sporte/Sporte11.png"
                className="w-full h-full object-cover"
                alt="Stadium"
              />
            </div>
            <h5 className="font-bold text-lg text-purple-900">
              Fan Reactions and Highlights
            </h5>
          </div>

          <div className="bg-pink-300/40 backdrop-blur-lg rounded-[2.5rem] p-6 h-64 flex flex-col items-center justify-center text-center opacity-80 hover:opacity-100 transition-all cursor-pointer border border-white/20">
            <div className="w-full h-24 rounded-2xl mb-4 overflow-hidden">
              <img
                src="/images/Sporte/Sporte10.png"
                className="w-full h-full object-cover"
                alt="Fans"
              />
            </div>
            <h5 className="font-bold text-sm">Fan Reactions and Highlights</h5>
          </div>
        </section>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-20 pb-20">
          <button className="p-3 text-white/50 hover:text-white">
            <ChevronsLeft />
          </button>
          <button className="w-12 h-12 rounded-xl bg-purple-700 shadow-xl font-bold text-xl">
            1
          </button>
          <button className="w-12 h-12 rounded-xl bg-purple-400 font-bold text-xl hover:bg-purple-500">
            2
          </button>
          <button className="w-12 h-12 rounded-xl bg-purple-400 font-bold text-xl hover:bg-purple-500">
            3
          </button>
          <button className="p-3 text-white/50 hover:text-white">
            <ChevronsRight />
          </button>
        </div>
      </main>
    </>
  );
}
