import React from "react";

export default function Health_Achievements() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mt-16 w-full">
      <h2 className="text-white text-[64px] font-extrabold mb-8 drop-shadow-md text-center">
       Health& Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-[#A488D8]   overflow-hidden shadow-xl   flex flex-col"
          >
            <div className="relative h-56">
              <img
                src={
                  item % 2 === 0
                    ? "/images/Deadly_Diseases/Deadly_Diseases1.jpg"
                    : "/images/Deadly_Diseases/Deadly_Diseases1.jpg"
                }
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-4 bg-[#F178B654] text-[#5D5FEF] text-[24px] font-bold px-3 py-1  ">
                Mental Health
              </div>
            </div>
            <div className="p-6 bg-[#5D5FEF85] flex-1">
              <p className="text-[20px] font-bold text-[#FFFFFF] leading-relaxed mb-4">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth
              </p>
              <button className="bg-[#F178B6A3]/60 text-white text-[16px] font-bold px-6 py-2 shadow-sm self-end float-right">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Local Slider Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`w-3 h-3 rounded-full border border-white/50 ${dot === 1 ? "bg-white" : "bg-white/20 hover:bg-white/40 cursor-pointer"}`}
          />
        ))}
      </div>
    </section>
  );
}
