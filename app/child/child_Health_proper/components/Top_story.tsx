import React from "react";

export default function Top_story() {
  return (
    <>
    <section className="px-4 sm:px-6 py-12">
  <div className="w-[1356.004150390625] h-[783px] w-full max-w-[1356.004150390625px] h-auto md:h-[783px] mx-auto bg-[#5D5FEF]/50 flex flex-col md:flex-row items-center gap-6 md:gap-8 relative overflow-hidden p-4 sm:p-6">
    
    <div className="absolute top-4 left-4 bg-[#F178B638] px-3 sm:px-4 py-1 text-[#000000] text-[20px] sm:text-[32px] md:text-[48px] font-bold">
      top story
    </div>

    <div className="flex-1 space-y-3 sm:space-y-4 text-center md:text-left">
      <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-snug">
        Ask & Explore More About <br />
        <span className="text-[#F178B6] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">
          your Child
        </span>
      </h2>

      <p className="text-[#FFFFFF] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] font-bold leading-relaxed">
        It has one principle and one motto that can be read individually,
        meaning each word on its own, or as a whole, we believe that
        reality and maturity are core for truth.
      </p>

      <button className="hover:bg-white/20 px-4 sm:px-6 py-2 font-bold text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] transition-all">
        View more
      </button>
    </div>

    <div className="flex-1 w-[412px] h-[412px] w-full max-w-[412px] h-auto aspect-square overflow-hidden relative">
      <img
        src="/images/child/child5.png"
        className="w-[412px] h-[412px] w-full h-full object-cover"
        alt="child story"
      />
    </div>

  </div>
</section>
    </>
  );
}
