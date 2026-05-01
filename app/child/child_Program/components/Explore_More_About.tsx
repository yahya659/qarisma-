import { Play, Send } from "lucide-react";
import React from "react";

export default function Explore_More_About() {
  const articles = [
    {
      id: 1,
      title: "Summer camp & art therapy",
      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own.",
    },
    {
      id: 2,
      title: "Creative Storytelling",
      description:
        "Discover incredible projects started by very talented youth with us and join the fun.",
    },
    {
      id: 3,
      title: "Eco-Friendly Education",
      description:
        "Reality and maturity are core for truth, translated into engaging content for kids.",
    },
    {
      id: 4,
      title: "Eco-Friendly Education",
      description:
        "Reality and maturity are core for truth, translated into engaging content for kids.",
    },
  ];
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

  {/* Header */}
  <div className="text-center mb-12 md:mb-16 space-y-3">

    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tighter italic leading-tight">
      Explore More About
    </h2>

    <p className="text-2xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#5D5FEF] font-bold italic opacity-80">
      Our Programs
    </p>

  </div>

  {/* Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {articles.map((item, idx) => (
      <div
        key={idx}
        className="group bg-[#5D5FEF]/30 p-4 md:p-6 shadow-xl hover:-translate-y-3 transition-all duration-500 rounded-xl"
      >

        {/* Image */}
        <div className="h-48 sm:h-56 md:h-64 lg:h-72 w-full overflow-hidden mb-6 rounded-lg shadow-inner">

          <img
            src="/images/child/child5.png"
            alt="News"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

        </div>

        {/* Title */}
        <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[48px] bg-[#F178B6A3] font-black mb-3 px-3 py-2 rounded-md">
          Headline
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg lg:text-[24px] text-black font-medium mb-6 opacity-80 leading-relaxed">
          {item.description}
        </p>

        {/* Button */}
        <button className="text-white font-black text-base sm:text-lg md:text-xl lg:text-[32px] hover:text-purple-900 transition-colors">
          View more
        </button>

      </div>
    ))}

  </div>

</section>
    </>
  );
}
