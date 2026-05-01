import React from "react";

export default function Top_Story() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Left Column: Top Story */}
          <div className="lg:col-span-2  overflow-hidden shadow-xl flex flex-col border border-purple-300/30">
            {/* Image Box */}
            <div className="relative h-[840px] md:h-[400px]">
              <img
                src="/images/health/health2.jpg"
                alt="Medicine"
                className="w-[827px] h-[493px] object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" /> */}
              <div className="absolute bottom-6 left-6 bg-[#5D5FEF6E]/43 w-[358px] h-[112px]   px-4 py-1.5  text-[40px] text-white font-extrabold shadow-lg">
                Top Story
              </div>
            </div>
            {/* Content Box */}
            <div className="bg-[#CB89B8] p-8 text-white flex-1 relative">
              <h3 className="text-[40px] font-extrabold mb-3">Medicine</h3>
              <p className="font-semibold text-[32px] text-[#000000] leading-snug mb-6 max-w-xl">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth
              </p>
              <button className="px-8 py-2.5 bg-[#5D5FEF] text-[24px] hover:bg-[#5741E0] text-white font-bold rounded-lg shadow-lg transition-all">
                Read More
              </button>
              {/* Decorative side lines */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-50">
                <div className="w-1 h-12 bg-white rounded-full"></div>
                <div className="w-1 h-12 bg-white rounded-full"></div>
                <div className="w-1 h-12 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebars */}
          <div className="flex flex-col gap-6">
            {/* Editor's Picks */}
            <div className="bg-[#9F7ED2]   p-4 shadow-lg border border-purple-300/30">
              <h4 className="text-white font-extrabold text-[32px] mb-4 tracking-wider uppercase">
                EDITORS PICKS
              </h4>
              <div className="space-y-3">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="bg-[#B99AE1] p-4 rounded-xl border border-purple-400/50 hover:bg-[#A987D6] transition-colors cursor-pointer"
                  >
                    <h5 className=" text-[25px] text-[#5D5FEF6E] font-bold mb-1">
                      Beyond the Headlines:
                    </h5>
                    <p className="text-white/80 text-[11px] font-bold  ">
                      It has one principle and one motto that can be read
                      individually, meaning each word on its own, or as a whole,
                      we believe that reality and maturity are core for truth.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Morning Watching */}
            <div className="bg-[#5D5FEF38] rounded-2xl p-4 shadow-lg border border-purple-300/30">
              <h4 className="text-[#000000] font-extrabold text-[24px] mb-4 tracking-wider uppercase">
                MORNING WATCHING
              </h4>
              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="bg-[#F178B6A3] p-3 rounded-xl border border-purple-400/50 flex gap-3 items-center hover:bg-[#A987D6] transition-colors cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-gray-200   flex-shrink-0 overflow-hidden  ">
                      <img
                        src="/images/health/health2.jpg"
                        className="w-full h-full object-cover"
                        alt="thumbnail"
                      />
                    </div>
                    <p className="text-[#000000] text-[14px] font-bold leading-tight">
                      It has one principle and one motto that can be read
                      individually, meaning each word on its own, or as a whole,
                      we believe.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
