import React from "react";

export default function MEET_OUR_Star() {
  return (
    <>
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12 md:space-y-16">
        <section className="text-center space-y-8 md:space-y-12 py-10">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-black   tracking-widest md:tracking-[0.2em]">
            MEET OUR Star
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative">
                <div className="w-[260px] sm:w-[280px] md:w-[300px] lg:w-[319px] h-[260px] sm:h-[280px] md:h-[300px] lg:h-[307px] bg-gray-800 shadow-2xl relative overflow-hidden">
                  <img
                    src="/images/child/tols2.png"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt="star"
                  />

                  <div className="absolute bottom-3 md:bottom-4 left-0 right-0">
                    <div className="bg-black/40 backdrop-blur-md py-2 mx-3 md:mx-4 rounded-lg font-black text-base sm:text-xl md:text-2xl lg:text-[32px] text-center">
                      JOHN SMITH
                    </div>
                  </div>
                </div>

                {/* stacked effect */}
                <div className="absolute -inset-1 sm:-inset-2 bg-purple-500/20 rounded-2xl -z-10 group-hover:-inset-3 transition-all"></div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 md:mt-10">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`h-2 sm:h-3 rounded-full transition-all ${
                  i === 3 ? "w-8 sm:w-10 bg-blue-400" : "w-2 sm:w-3 bg-white/30"
                }`}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
