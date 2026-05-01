import React from "react";

export default function HeroSection() {
  return (
    <>
   <main className="relative min-h-screen bg-gradient-to-b from-[#e196be] to-purple-500 py-12 md:py-20 px-4 md:px-6 overflow-hidden">
  {/* Background Layer */}
  <div className="absolute inset-0 z-0">
    {/* Background image */}
    <div
      className="absolute inset-0 opacity-100 grayscale mix-blend-overlay"
      style={{
        backgroundImage: `url('/images/child/child1.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

    <div className="absolute inset-0 bg-gradient-to-r from-[#F178B6]/40 via-[#F178B6]/40 to-transparent z-10" />

    <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[120%] bg-[#F178B6]/40 blur-[120px] rounded-full opacity-60 z-10" />
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center relative z-20">

    {/* Left */}
    <div className="max-w-xl space-y-6 md:space-y-8 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold text-black leading-tight">
        AI Quarisma
      </h1>

      <p className="text-lg md:text-xl lg:text-[29px] text-white leading-relaxed font-semibold">
        Stories… that inspire. Content… that builds. Knowledge… that grows with them.
        From education and entertainment to health and innovation, Charisma Newspaper
        brings together everything that enriches children's minds and sparks their curiosity.
      </p>

      <button className="px-6 md:px-10 py-3 md:py-4 bg-[#5D5FEF] text-white rounded-2xl font-bold text-base md:text-lg lg:text-[24px] hover:bg-[#4d4fd9] transition shadow-xl">
        Explore more
      </button>
    </div>

    {/* Right */}
    <div className="relative flex justify-center items-center scale-100 md:scale-110">

      {/* background circle */}
      <div className="absolute w-[70%] md:w-[85%] aspect-square bg-[#f5d0fe]/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative w-full max-w-[320px] md:max-w-[480px] aspect-square flex items-center justify-center">

        <div className="absolute z-20 overflow-hidden rounded-2xl">
          <img
            src="/images/child/child2.png"
            alt="child"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* decorations */}
        <div className="absolute top-5 right-5 w-8 md:w-10 h-8 md:h-10 bg-blue-300/40 rounded-full blur-md animate-bounce" />
        <div className="absolute bottom-10 left-5 w-4 md:w-6 h-4 md:h-6 bg-purple-300/40 rounded-full blur-sm" />
      </div>
    </div>

  </div>
</main>
    </>
  );
}
