import { Play, Send } from "lucide-react";
import React from "react";

export default function Beyond_Headlines() {
  return (
    <>
      <main className="relative   z-10 max-w-7xl mx-auto px-4 py-8 space-y-20">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center    p-10  ">
          <div className="space-y-6">
            <h2 className="text-[64px] font-black text-[#5D5FEF] leading-tight">
              Beyond <br /> Headlines
            </h2>
            <p className="text-[32px] text-[#0C0C0D] font-bold leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, in a single sentence.
              We believe that dedication and teamwork are core for victory.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-pink-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative   overflow-hidden shadow-2xl  ">
              <img
                src="/images/Sporte/Sporte4.jpg"
                alt="Athlete"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#5D5FEF6E]/40 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform cursor-pointer">
                  <Play fill="currentColor" size={24} className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bar */}
        <div className="bg-[#5D5FEF7D]  w-full max-w-[1175px] min-h-[151px] mx-auto px-4 md:px-8 py-4 rounded-[2rem] shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
          <h3 className="text-white text-[32px] font-bold text-center md:text-left">
            stay informed, learn more & contact us
          </h3>

          <button className="bg-[#5D5FEF] hover:bg-purple-700 text-white px-10 py-3 rounded-2xl font-bold transition-all shadow-lg flex items-center gap-2">
            sent message
          </button>
        </div>
      </main>
    </>
  );
}
