import React from "react";

export default function EIDIORS_PICKS() {
  return (
    <>
      {" "}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-12 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Featured Article */}
        <div className="lg:col-span-2 relative flex flex-col bg-[#5D5FEF6E]/30  shadow-2xl overflow-hidden border-y-2 border-[#5D5FEF6E]/30 border-x-[14px] border-x-[#A082D3]">
          {/* Image */}
          <div className="relative h-[250px] md:h-[350px] w-full">
            <img
              src="/images/health_Research/Research1.jpg"
              alt="Research Hand"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
          </div>
          {/* Content */}
          <div className="p-8 flex flex-col flex-1 bg-[#D8C4E8]">
            <p className="text-black font-extrabold text-lg md:text-xl leading-relaxed mb-6">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
            <button className="bg-[#6953F5] text-white font-bold text-sm px-8 py-3 rounded-lg shadow-md hover:bg-[#5741E0] transition-colors self-start">
              Read More
            </button>
          </div>
        </div>

        {/* Right: Sidebars */}
        <div className="flex flex-col gap-6">
          {/* EDITORS PICKS */}
          <div className="bg-[#5D5FEF6E]/43 rounded-2xl p-5 shadow-xl border border-purple-400/40">
            <h4 className="text-white font-extrabold text-lg mb-4 tracking-wide uppercase drop-shadow-sm">
              EDITORS PICKS
            </h4>
            <div className="space-y-3">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="bg-[#F178B6] p-4 rounded-xl shadow-sm hover:bg-[#EAE0F2] transition-colors cursor-pointer border border-white/40"
                >
                  <h5 className="text-black font-extrabold text-sm mb-1">
                    Beyond the Headlines:
                  </h5>
                  <p className="text-gray-800 text-[11px] font-semibold leading-tight">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole,
                    we believe that reality and maturity are core for truth.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Newspaper */}
          <div className="bg-[#A488D8] rounded-2xl p-5 shadow-xl border border-purple-400/40">
            <h4 className="text-white font-extrabold text-lg mb-4 tracking-wide uppercase drop-shadow-sm">
              Newspaper
            </h4>
            <div className="space-y-3">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="bg-[#F178B6] p-4 rounded-xl shadow-sm hover:bg-[#EAE0F2] transition-colors cursor-pointer border border-white/40"
                >
                  <h5 className="text-black font-extrabold text-sm mb-1">
                    Beyond the Headlines:
                  </h5>
                  <p className="text-gray-800 text-[11px] font-semibold leading-tight">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole,
                    we believe that reality and maturity are core for truth.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
