import React from "react";

export default function Get_the_latest_sports() {
  return (
    <>
      <main className="px-12 py-16">
        <section className="relative overflow-hidden rounded-[50px]  p-12 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
          <div className="flex-1 space-y-6">
            <h2 className="text-[48px] font-black text-[#FFFFFF] italic leading-tight">
              Get the latest sports news in your inbox.
            </h2>
            <p className="text-[#5D5FEF] text-[30px] font-bold leading-relaxed">
              Join our newsletter for exclusive content, breaking news, and
              in-depth analysis delivered weekly.
            </p>
            <div className="flex gap-4 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#F178B666]/40 text-[20px] border-none rounded-2xl px-6 py-4 text-[#FFFFFF80]/70 focus:ring-2 focus:ring-purple-400"
              />
              <button className="bg-[#F178B6] text-[20px] hover:bg-pink-500 text-white px-8 py-4 rounded-2xl font-black italic tracking-widest shadow-lg transition-all active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative flex justify-center">
            <div className="relative w-[618.1290283203125] h-[420px] lg:w-[420px] lg:h-[520px]">
              <img
                src="/images/Sporte/Sporte30.png"
                className="w-full h-full object-cover"
                alt="Newsletter Trophies"
              />

              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-500 rounded-full blur-2xl opacity-20"></div>
            </div>
          </div>
          {/* Line icons from screenshot background */}
          <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
            {/* <Youtube size={100} /> */}
          </div>
        </section>
      </main>
    </>
  );
}
