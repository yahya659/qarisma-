import React from "react";

export default function Studies_Exclusive() {
  return (
    <>
      {" "}
      <section className="w-full  bg-[#5D5FEF6E]/30 mt-20 py-16 relative border-y border-purple-400/50 shadow-2xl overflow-hidden">
        {/* Decorative left/right borders simulating metallic frames */}
        <div className="absolute left-2 md:left-6 top-6 bottom-6 w-6 md:w-8 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 rounded border border-gray-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] flex flex-col justify-between py-4 items-center z-0 hidden sm:flex">
          <div className="w-4 h-8 bg-gray-600/30 rounded-sm"></div>
          <div className="w-4 h-8 bg-gray-600/30 rounded-sm"></div>
        </div>
        <div className="absolute right-2 md:right-6 top-6 bottom-6 w-6 md:w-8 bg-gradient-to-l from-gray-400 via-gray-300 to-gray-500 rounded border border-gray-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] flex flex-col justify-between py-4 items-center z-0 hidden sm:flex">
          <div className="w-4 h-8 bg-gray-600/30 rounded-sm"></div>
          <div className="w-4 h-8 bg-gray-600/30 rounded-sm"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-[64px]  font-extrabold text-black mb-4 drop-shadow-sm">
            Studies & Exclusive
          </h2>
          <p className="text-white font-bold text-[40px] mb-12 max-w-4xl mx-auto  ">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mb-10 text-left">
            {[
              {
                title: "Major Success",
                img: "/images/health/health4.jpg",
              },
              {
                title: "Effective Pharmacy",
                img: "/images/health/health4.jpg",
              },
              {
                title: "Major Research",
                img: "/images/health/health4.jpg",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#F178B64D]/30   overflow-hidden shadow-lg border border-purple-400/50 transform transition-transform hover:-translate-y-1"
              >
                <div className="h-40 relative">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
                  <span className="absolute bottom-2 left-2 bg-[#F178B64D]/30 text-white text-[11px] font-bold px-3 py-1 rounded shadow">
                    {card.title}
                  </span>
                </div>
                <div className="p-4 flex flex-col bg-[#F178B64D] justify-between h-[120px]">
                  <p className="text-[13px] font-medium text-white leading-tight">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, or as a whole...
                  </p>
                  <button className="bg-[#F57FA0] text-white text-[14px] font-bold px-5 py-1.5 rounded-md hover:bg-pink-500 self-end shadow-sm">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-[#5D5FEF] text-white font-bold text-[24px] px-10 py-3 rounded-xl shadow-lg hover:bg-[#5741E0] transition-colors">
            Read More
          </button>
        </div>
      </section>
    </>
  );
}
