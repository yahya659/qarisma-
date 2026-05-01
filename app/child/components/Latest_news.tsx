import React from "react";

export default function Latest_news() {
  return (
    <section className="relative py-16 md:py-20 bg-[#5D5FEF]/20 w-full max-w-6xl mx-auto px-4 md:px-6">

  <div className="container mx-auto">

    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 relative">

      <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold text-center md:text-left">
        Latest news
      </h2>

      {/* Decorative image */}
      <div className="md:absolute md:right-10 md:-top-20 animate-float flex justify-center">
        <div className="w-32 h-32 md:w-[200px] md:h-[200px] overflow-hidden rounded-2xl shadow-2xl">
          <img
            src="/images/child/child3.png"
            alt="decor"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>

    {/* Card */}
    <div className="bg-[#5D5FEF]/30 overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/10 rounded-2xl">

      {/* Image */}
      <div className="md:w-1/2">
        <img
          src="/images/child/child5.png"
          alt="Playground"
          className="w-full h-64 md:h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="md:w-1/2 p-6 md:p-10 lg:p-12 space-y-6 flex flex-col justify-center">

        <p className="text-base md:text-xl lg:text-[32px] text-black leading-relaxed">
          Experience the magic of outdoor play! Our new playground designs
          focus on safety, innovation, and pure childhood joy. Join us in
          creating spaces where every child can explore, imagine, and grow
          through active play.
        </p>

        <button className="w-fit text-base md:text-lg lg:text-[24px] px-6 md:px-8 py-3 bg-[#5d5fef] rounded-xl font-bold text-white hover:bg-[#4d4fd9] transition-all">
          Explore more
        </button>

      </div>

    </div>

  </div>
</section>
  );
}
