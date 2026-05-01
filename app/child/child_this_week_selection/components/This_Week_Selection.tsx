import { Quote } from "lucide-react";
import React from "react";

export default function This_Week_Selection() {
  return (
    <>
     <section className="text-center space-y-8 md:space-y-10 py-10 px-4 sm:px-6 lg:px-8">

  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-black tracking-tight">
    This Week Selection
  </h2>

  <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">

    {/* Left Card */}
    <div className="w-full max-w-[509px] h-auto lg:h-[395px] bg-[#5D5FEF]">

      <div className="bg-purple-400/30 p-4 sm:p-5 md:p-6 border border-white/20 text-left h-full">

        <p className="text-xs sm:text-sm md:text-base">
          A recent study indicates that reading to children for 10
          minutes each day clearly contributes to an increase in their
          vocabulary over a short period. Researchers confirmed that this
          simple routine helps the child acquire new words and improve
          comprehension and expression skills. Specialists also
          recommended choosing books with attractive pictures and
          appropriate
        </p>

      </div>

    </div>

    {/* Main Card */}
    <div className="w-full max-w-[988px] h-auto lg:h-[702px] bg-gradient-to-br from-blue-400 to-purple-500 p-6 md:p-8 shadow-2xl relative">

      <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">

        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[106px] md:h-[112px] rounded-full overflow-hidden shadow-lg">
          <img
            src="/images/child/child10.png"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-3 md:space-y-4">

          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] text-black font-black italic">
            "Reading to children for 10 minutes daily enhances their
            vocabulary"
          </h3>

          <p className="text-sm sm:text-base md:text-lg lg:text-[24px] font-bold leading-relaxed opacity-90">
            A recent study indicates that reading to children for 10
            minutes each day clearly contributes to an increase in their
            vocabulary over
          </p>

          <button className="text-pink-600 font-bold text-sm sm:text-base md:text-lg lg:text-[24px] tracking-widest hover:text-pink-100 transition">
            Read More
          </button>

        </div>

      </div>

      {/* Quote icon */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 opacity-20">
        <Quote size={32} className="md:w-12 md:h-12 lg:w-12 lg:h-12" />
      </div>

    </div>

    {/* Right Card */}
    <div className="w-full max-w-[509px] h-auto lg:h-[395px] bg-[#5D5FEF]">

      <div className="bg-purple-400/30 p-4 sm:p-5 md:p-6 border border-white/20 text-left h-full">

        <p className="text-xs sm:text-sm md:text-base">
          A recent study indicates that reading to children for 10
          minutes each day clearly contributes to an increase in their
          vocabulary over a short period. Researchers confirmed that this
          simple routine helps the child acquire new words and improve
          comprehension and expression skills. Specialists also
          recommended choosing books with attractive pictures and
          appropriate
        </p>

      </div>

    </div>

  </div>

  {/* Dots */}
  <div className="flex justify-center gap-2 sm:gap-3">

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
    </>
  );
}
