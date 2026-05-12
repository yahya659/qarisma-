import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Beyond_Headlines() {
  return (
    <>
      {" "}
       <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-20">
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-[#F178B6B5]/70" />

        {/* Decorative glows */}
        {/* <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-indigo-400/20 blur-[150px] rounded-full" /> */}
        {/* <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-pink-500/10 blur-[150px] rounded-full" /> */}

        <div className="max-w-7xl mx-auto px-6 h-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
            <div className="space-y-8">
              <h2 className="text-6xl font-black text-black leading-tight">
                Beyond Headlines
              </h2>
              <div className="space-y-6 max-w-lg">
                <p className="text-xl text-white/90 font-medium leading-relaxed">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, in
                  a single sentence, whether from right to left or left to
                  right:
                </p>
                <p className="text-2xl font-bold text-white tracking-wide">
                  (Elegance, Personality, Strength)
                </p>
              </div>
              <button className="bg-[#5D5FEF6E]/60 hover:bg-pink-300 text-white px-12 py-5 rounded-2xl font-black text-[40px] shadow-[0_10px_30px_rgba(236,72,153,0.3)] transition-all transform hover:scale-105">
                   Learn More
              </button>
            </div>

            <div className="relative h-full flex items-center justify-center">
              {/* The Window Image with Butterflies */}
              <div className="relative w-[656px] aspect-[4/5]  h-[636px] bg-[#000000]/70  overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/images/events_gallery2.jpg"
                  alt="Window"
                  className="w-full h-full object-cover blur-sm"
                />
                <div className="absolute inset-0 bg-black/10 " />

                {/* Butterflies spawning area */}
              </div>
              <div className="absolute bottom-[-20%] right-[-50%] w-[180px] h-[180px] md:w-[350px] md:h-[350px] lg:w-[600px] lg:h-[600px] z-40 pointer-events-none">
                <div className="relative w-full h-full animate-float-main">
                  <img
                    src="/images/flower.png"
                    className="w-full h-full object-contain opacity-50"
                    alt="flower"
                    style={{
                      filter: "drop-shadow(0 20px 50px rgba(219,137,171,0.5))",
                    }}
                  />

                  <div className="absolute top-10 left-0 w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-float-slow opacity-60">
                    <img
                      src="/images/flower.png"
                      className="w-full h-full object-contain rotate-45"
                      alt="flower"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
           {/* paginadion */}
      <div className="max-w-7xl mx-auto px-4 mt-20 mb-20">
        <div className="flex items-center justify-center gap-4">
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
