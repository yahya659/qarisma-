import React from "react";

export default function Studies_Recent_Research() {
  return (
    <section className="max-w-7xl mx-auto bg-[#5D5FEF6E]/50 px-4 md:px-8 mt-24 w-full">
      <div className="text-center mb-10">
        <h2 className="text-[#000000] text-[64px] font-extrabold mb-4 drop-shadow-md">
          Studies & Recent Research
        </h2>
        <p className="text-[#FFFFFF] font-bold text-[30px] max-w-2xl mx-auto">
          It has one principle and one motto that can be read individually,
          meaning each word on its own, or as a whole, we believe that reality
          and maturity are core for truth{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 bg- sm:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-[#F178B64D]/30   overflow-hidden shadow-xl border border-purple-300/30 flex flex-col"
          >
            <div className="relative h-32">
              <img
                src="/images/Deadly_Diseases/Deadly_Diseases1.jpg"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 left-2 bg-[#F178B64D]/50 text-[#F178B6] text-[20px]  ">
                Major Success
              </span>
            </div>
            <div className="p-4 bg-[#D3AEDB] flex-1">
              <p className="text-[15px] text-[#FFFFFF] font-bold leading-tight mb-4 text-left">
                It has one principle and one motto that can be read
                individually...
              </p>
              <button className="bg-[#F178B6] text-white text-[16px] font-bold px-4 py-1.5 rounded-md hover:bg-pink-500 self-end float-right shadow-sm">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-[#5D5FEF] text-white text-[24px] font-bold px-10 py-2 rounded-lg shadow-lg hover:bg-[#5741E0]">
          Read More
        </button>
      </div>
    </section>
  );
}
