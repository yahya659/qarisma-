"use client";
import React, { useState } from "react";

export default function Top_headlines_and_In_depth() {
  const [activeCategory, setActiveCategory] = useState("Art");
  const categories = [
    "Art",
    "Nature",
    "Social",
    "Fashion",
    "child",
    "Sports",
    "Health",
    "Entertainment",
  ];
  const articles = [
    {
      id: 1,
      category: "Nature",
      title: "Green eco-mobility",
      description: "Top headlines and in-depth reporting across the world",
      image:
        "/images/nature/weather1.jpg",
    },
    {
      id: 2,
      category: "Child",
      title: "Modern Education",
      description: "Top headlines and in-depth reporting across the world",
      image:
        "/images/child/tols2.png",
    },
    {
      id: 3,
      category: "sports",
      title: "sports & nutrition",
      description: "Top headlines and in-depth reporting across the world",
      image:
        "/images/Sporte/Sporte25.png",
    },
    {
      id: 4,
      category: "Fashion",
      title: "Latest brands",
      description: "Top headlines and in-depth reporting across the world",
      image:
        "/images/Fashion4.jpg",
    },
  ];
  return (
    <>
    <section className="mb-12">

  <h3 className="text-center text-[24px] sm:text-[30px] md:text-[40px] font-bold text-white mb-6 tracking-wide drop-shadow-md px-4">
    Top headlines and in-depth reporting across the world
  </h3>

  <div className="flex flex-wrap w-full max-w-[1341px] mx-auto justify-center gap-2 px-4">

    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setActiveCategory(cat)}
        className={`px-3 sm:px-4 md:px-6 py-2 rounded-md font-medium transition-all ${
          activeCategory === cat
            ? "bg-[#F178B680] text-white text-[14px] sm:text-[18px] md:text-[24px] shadow-lg"
            : "bg-[#5D5FEFED] text-[#FFFFFF] text-[14px] sm:text-[18px] md:text-[24px] hover:bg-white/60"
        }`}
      >
        {cat}
      </button>
    ))}

  </div>

</section>


{/* Articles Grid */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-16 place-items-center px-4">

  {articles.map((article) => (
    <div
      key={article.id}
      className="bg-[#5D5FEF54] w-full max-w-[575px] backdrop-blur-sm p-4 md:p-6 flex flex-col hover:bg-white/40 transition-all border border-white/20 shadow-sm"
    >

      <div className="relative mb-4">

        <img
          src={article.image}
          alt={article.title}
          className="w-full h-40 sm:h-48 object-cover"
        />

        <span className="absolute bottom-1 left-2 bg-[#5D5FEF54] text-white px-3 md:px-4 py-1 rounded-md text-[18px] sm:text-[24px] md:text-[40px] font-bold uppercase tracking-widest">
          {article.category}
        </span>

      </div>


      <h4 className="text-[22px] sm:text-[28px] md:text-[36px] font-bold text-slate-800 mb-2">
        {article.title}
      </h4>


      <p className="text-[16px] sm:text-[20px] md:text-[24px] text-[#FFFFFF] mb-4">
        {article.description}
      </p>


      <button className="text-slate-900 font-bold text-[16px] sm:text-[20px] md:text-[24px] hover:underline flex items-center gap-2 mt-auto">
        Read more
      </button>

    </div>
  ))}

</section>

    </>
  );
}
