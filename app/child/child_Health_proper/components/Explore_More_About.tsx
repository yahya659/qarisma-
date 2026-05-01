import React from "react";

export default function Explore_More_About() {
  const articles = [
    {
      id: 1,
      title: "Summer camp & art therapy",
      description:
        "Reality and maturity are core for truth, translated into engaging content for kids.",
    },
    {
      id: 2,
      title: "Creative Storytelling",
      description:
        "Reality and maturity are core for truth, translated into engaging content for kids.",
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
      {" "}
   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  {/* Header */}
  <div className="text-center mb-12 md:mb-16 space-y-3">
    <h2 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tighter italic leading-tight">
      Explore More About Proper Nutrition
    </h2>

    <p className="text-[24px] sm:text-3xl md:text-4xl lg:text-[48px] text-[#F178B6] font-bold italic">
      during your Pregnancy
    </p>
  </div>

  {/* Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
    {articles.map((item, idx) => (
      <div
        key={idx}
        className="group w-full max-w-[600.2322387695312px] mx-auto bg-[#5D5FEF33]/20 p-4 md:p-6 shadow-xl hover:-translate-y-3 transition-all duration-500 rounded-xl"
      >
        {/* Image */}
        <div className="w-full aspect-[16/9] overflow-hidden mb-6 rounded-lg shadow-inner">
          <img
            src="/images/child/tols24.png"
            alt="News"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        {/* Content */}
        <div className="bg-[#F178B6A3] rounded-md px-4 py-3">
          {/* Title */}
          <h3 className="text-black text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-black mb-2">
            Which prenatal supplements are important?
          </h3>

          {/* Description */}
          <p className="text-[14px] sm:text-base md:text-lg lg:text-[20px] text-black font-medium opacity-80 leading-relaxed mb-3">
            {item.description}
          </p>

          {/* Button */}
          <button className="text-[#5D5FEF] font-black text-[14px] sm:text-[16px] md:text-[20px] lg:text-[28px] hover:text-purple-900 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    ))}
  </div>
</section>
    </>
  );
}
