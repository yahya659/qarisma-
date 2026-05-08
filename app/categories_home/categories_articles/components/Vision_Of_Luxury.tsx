import React from "react";

export default function Vision_Of_Luxury() {
  return (
    <>
      {" "}
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden bg-[#5D5FEFB2]/50">

  <div className="max-w-4xl mx-auto text-center relative z-10">

    <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-bold mb-6 sm:mb-8 leading-tight px-2">
      Vision Of{" "}
      <span className="text-pink-400">
        Luxury, Personality
      </span>{" "}
      <br />& <span className="text-pink-400">Power</span> Create Us
    </h2>

    <p className="text-white/70 leading-relaxed sm:leading-loose max-w-3xl mx-auto text-sm sm:text-base lg:text-lg italic px-2">

      "It has one principle and one motto that can be read individually,
      meaning each word on its own, or as a whole, in a single sentence,
      whether from right to left or left to right:

      <br />

      <span className="text-white font-bold not-italic font-sans tracking-widest text-[10px] sm:text-xs md:text-sm uppercase mt-4 block">
        (Elegance, Personality, Strength)
      </span>

      "

    </p>

  </div>

  {/* Curtains Backdrop */}
  <div className="absolute inset-0 z-0 flex justify-between pointer-events-none opacity-30">

    <div className="w-1/2 sm:w-1/3 lg:w-1/4 h-full bg-gradient-to-r from-pink-900/50 to-transparent"></div>

    <div className="w-1/2 sm:w-1/3 lg:w-1/4 h-full bg-gradient-to-l from-pink-900/50 to-transparent"></div>

  </div>

</section>
    </>
  );
}
