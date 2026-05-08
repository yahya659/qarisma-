import { ArrowRight } from "lucide-react";
import React from "react";

export default function Latest_Articles() {
  const categories = [
    {
      title: "Nature",
      subtitle: "Green eco-mobility",
      image: "/images/nature/weather1.jpg",
      color: "bg-[#F178B6A3]/50",
    },
    {
      title: "Child",
      subtitle: "Modern Education",
      image: "/images/nature/weather1.jpg",
      color: "bg-[#5D5FEF]/50",
    },
    {
      title: "Sports",
      subtitle: "Sports & Nutrition",
      image: "/images/nature/weather1.jpg",
      color: "bg-[#5D5FEF]/50",
    },
    {
      title: "Fashion",
      subtitle: "Latest brands",
      image: "/images/nature/weather1.jpg",
      color: "bg-[#5D5FEF]/50",
    },
  ];
  return (
    <>
     <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto">

  <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-8 sm:mb-12">
    <div>
      <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold">
        Latest Articles
      </h2>
    </div>

    <button className="text-[20px] sm:text-[28px] md:text-[40px] font-semibold opacity-60 hover:opacity-100 transition-opacity text-left sm:text-right">
      View all
    </button>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

    {categories.map((cat, idx) => (
      <div
        key={idx}
        className="bg-[#F178B6A3] backdrop-blur-md p-4 flex flex-col sm:flex-row gap-4 sm:gap-6 border border-white/10 hover:bg-white/10 transition-all group rounded-xl"
      >

        {/* الصورة */}
        <div className="relative w-full sm:w-48 h-40 sm:h-48 overflow-hidden flex-shrink-0 rounded-lg">
          <img
            src={cat.image}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            alt={cat.title}
          />

          <div
            className={`absolute bottom-2 left-2 ${cat.color} px-2 sm:px-3 py-1 rounded-lg text-[16px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-bold uppercase tracking-widest`}
          >
            {cat.title}
          </div>
        </div>

        {/* النص */}
        <div className="flex flex-col justify-center">
          <h4 className="text-[20px] sm:text-[28px] md:text-[36px] text-[#000000] font-bold mb-2">
            {cat.subtitle}
          </h4>

          <p className="text-[14px] sm:text-[18px] md:text-[24px] text-white mb-4 sm:mb-6">
            Top headlines and in-depth reporting across the world
          </p>

          <button className="flex items-center gap-2 text-[#000000] text-[16px] sm:text-[20px] md:text-[24px] font-bold tracking-wider hover:text-pink-400 transition-colors">
            Read more
          </button>
        </div>

      </div>
    ))}
  </div>

  {/* زر المزيد */}
  <div className="mt-10 sm:mt-16 text-center">
    <button className="bg-[#F178B6A3]/60 hover:from-pink-600 hover:to-purple-600 px-8 sm:px-12 py-3 sm:py-4 rounded-2xl font-black text-white text-[24px] sm:text-[36px] md:text-[48px] shadow-xl shadow-pink-500/20 transform hover:-translate-y-1 transition-all">
      More
    </button>
  </div>

</section>
    </>
  );
}
