import React from "react";

export default function Latest_News() {
  const cards = [
    {
      id: 1,
      tag: "Major Success",
      title: "Headline",
      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality.",
      image: "/images/child/child5.png",
    },
    {
      id: 2,
      tag: "Effective Treatment",

      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality.",
      image: "/images/child/child5.png",
    },
    {
      id: 3,
      tag: "Major Success",
      title: "Headline",
      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality.",
      image: "/images/child/child5.png",
    },
  ];
  return (
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20 text-center">

  {/* Title */}
  <h2 className="text-3xl md:text-5xl lg:text-[64px] font-black text-white drop-shadow-sm">
    Latest News
  </h2>

  {/* Cards */}
  <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">

    {cards.map((card) => (
      <div
        key={card.id}
        className="bg-[#F178B6] overflow-hidden shadow-xl flex flex-col transition-transform hover:-translate-y-1 rounded-xl"
      >

        {/* Image */}
        <div className="relative h-44 md:h-48 w-full">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-3 left-3 bg-[#A77AB9A8] text-black text-base md:text-xl lg:text-[32px] font-bold px-3 py-1 rounded-sm shadow-md">
            {card.tag}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-5 flex-1 flex flex-col justify-between bg-white/60">

          <p className="text-sm md:text-base lg:text-[15px] text-black font-bold leading-relaxed line-clamp-3">
            {card.description}
          </p>

          <div className="mt-4 flex justify-end">
            <button className="px-4 md:px-5 py-1.5 bg-[#F178B6] hover:bg-pink-500 text-white text-sm md:text-base font-bold transition-colors shadow-md rounded-md">
              Read more
            </button>
          </div>

        </div>

      </div>
    ))}

  </div>

  {/* CTA Section */}
  <div className="max-w-7xl mx-auto mt-16 md:mt-20 mb-16 md:mb-20">

    <div className="bg-[#F178B6A3]/70 rounded-xl py-6 md:py-8 px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl border border-white/20">

      <h3 className="text-white text-lg md:text-xl lg:text-[32px] font-bold text-center md:text-left">
        stay informed, learn more & contact us
      </h3>

      <button className="px-6 md:px-8 py-2.5 bg-[#F178B6] hover:bg-blue-600 text-white font-bold rounded-lg transition uppercase text-xs md:text-sm tracking-wider">
        send message
      </button>

    </div>

  </div>

</div>
  );
}
