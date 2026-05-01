import React from "react";

export default function Interactive_Educational_Games() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20">

  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

    {/* Image */}
    <div className="w-full md:w-1/2">

      <div className="p-3 md:p-4 shadow-2xl rounded-xl overflow-hidden">

        <img
          src="/images/child/child5.png"
          alt="Nutritional Plate"
          className="w-full h-64 sm:h-80 md:h-full object-cover"
        />

      </div>

    </div>

    {/* Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black text-black mb-4 md:mb-6 leading-tight">
        Educational Games
      </h2>

      <p className="text-base sm:text-xl md:text-2xl lg:text-[36px] text-white font-bold leading-relaxed mb-6 md:mb-8">
        It has one principle and one motto that can be read individually,
        meaning each word on its own, or as a whole, we believe that reality
        and maturity are core for truth
      </p>

      <button className="px-6 md:px-10 py-3 bg-[#F178B6] text-white text-base sm:text-lg md:text-xl lg:text-[24px] font-bold rounded-xl transition shadow-lg shadow-pink-500/30">
        Read More
      </button>

    </div>

  </div>

</div>
    </>
  );
}
