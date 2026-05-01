import React from "react";

export default function Top_Story() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mt-10 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left: Top Story Main Card */}
      <div className="lg:col-span-2 relative flex flex-col bg-[#A488D8] rounded-2xl shadow-2xl overflow-hidden border-y-2 border-purple-300/40 border-x-[14px] border-x-[#9474CC]">
        <div className="relative h-[250px] md:h-[400px]">
          <img
            src="/images/Deadly_Diseases/Deadly_Diseases1.jpg"
            alt="Lab Research"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-80 left- bg-[#F178B6A3]/70 text-white px-6 py-2 rounded-lg font-bold text-[64px] shadow-lg">
            Top Story
          </div>
        </div>
        <div className="p-8 bg-[#F178B6] flex-1">
           
          <p className="text-gray-900 font-bold text-base md:text-lg leading-relaxed mb-6">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth
          </p>
          <button className="bg-[#5D5FEF] text-white font-bold text-[24px] px-10 py-3 rounded-lg shadow-md hover:bg-[#5741E0] transition-colors">
            Read More
          </button>
        </div>
      </div>

      {/* Right: Sidebars */}
      <div className="flex flex-col gap-6">
        <div className="bg-[#5D5FEF6E]  p-5 shadow-xl  ">
          <h4 className="text-white font-extrabold text-[32px] mb-4 tracking-wide uppercase">
            EDITORS PICKS
          </h4>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-[#EAB8D1] p-4 rounded-xl shadow-sm border border-white/20"
              >
                <h5 className="text-black font-extrabold text-sm mb-1 underline underline-offset-2">
                  Beyond the Headlines:
                </h5>
                <p className="text-gray-800 text-[11px] font-semibold">
                  It has one principle and one motto that can be read
                  individually...
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#5D5FEF6E]  p-5 shadow-xl ">
          <h4 className="text-white font-extrabold text-[32px] mb-4 tracking-wide uppercase">
            Newspaper
          </h4>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-[#D3AEDB] p-4 rounded-xl shadow-sm border border-white/20"
              >
                <h5 className="text-black font-extrabold text-sm mb-1">
                  Beyond the Headlines:
                </h5>
                <p className="text-gray-800 text-[11px] font-semibold">
                  It has one principle and one motto that can be read
                  individually...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
