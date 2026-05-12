import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Top_headlines_and() {
  const ARTICLES = [
    {
      id: 1,
      title: "Top headlines and In-depth reporting across the world",
      desc: "Top headlines and In-depth reporting across the world",
      author: "John William",
      date: "April 04, 2026",
      image:
        "/images/atisit1.jpg",
    },
    {
      id: 2,
      title: "Top headlines and In-depth reporting across the world",
      desc: "Top headlines and In-depth reporting across the world",
      author: "John William",
      date: "April 04, 2026",
      image:
        "/images/f.png",
    },
    {
      id: 3,
      title: "Storytelling Through traditional artists",
      desc: "Top headlines and In-depth reporting across the world",
      author: "John William",
      date: "April 04, 2026",
      image:
        "/images/f.png",
    },
    {
      id: 4,
      title: "Storytelling Through traditional artists",
      desc: "Top headlines and In-depth reporting across the world",
      author: "John William",
      date: "April 04, 2026",
      image:
        "/images/f.png",
    },
  ];
  return (
    <>
      {" "}
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

  {/* Title */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center">
    Vision Of <span className="text-[#5D5FEF]">Paintings & Arts</span>
  </h2>

  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-6 md:mb-8 text-center tracking-widest">
    Top headlines and In-depth reporting across the world
  </h2>

  {/* Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
    {ARTICLES.map((article) => (
      <div
        key={article.id}
        className="bg-[#F178B6D4]/80 shadow-2xl transform hover:scale-[1.02] transition-all"
      >
        <div className="h-48 sm:h-56 md:h-64 overflow-hidden mb-4 md:mb-6">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-4 pb-4 text-white">
          <h3 className="text-xl sm:text-2xl md:text-[32px] font-bold mb-2 leading-tight text-black">
            {article.title}
          </h3>

          <p className="text-base sm:text-lg md:text-[24px] text-white opacity-90 mb-4">
            {article.desc}
          </p>

          <a
            href="#"
            className="inline-block text-base sm:text-lg md:text-[20px] font-bold underline text-black"
          >
            Read more
          </a>

          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/person2.png"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                alt=""
              />
              <span className="text-sm sm:text-lg md:text-[20px] font-bold">
                {article.author}
              </span>
            </div>

            <span className="text-sm sm:text-lg md:text-[20px] font-bold opacity-80">
              {article.date}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Button */}
  <div className="flex justify-center mt-10 md:mt-16 p-6 md:p-10 lg:p-20">
    <button className="bg-[#5D5FEF85] text-lg sm:text-2xl md:text-[40px] hover:bg-pink-500 w-full max-w-md text-white font-bold py-4 px-8 shadow-lg transform transition active:scale-95">
      View More
    </button>
  </div>

  {/* Pagination */}
  <div className="max-w-7xl mx-auto px-4 mt-12 md:mt-20 mb-12 md:mb-20">
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">

      <button className="w-12 h-12 md:w-14 md:h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white">
        <ChevronLeft size={24} />
      </button>

      <button className="w-12 h-12 md:w-14 md:h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white text-lg md:text-2xl font-bold">
        1
      </button>

      <a href="/art_pg_main/Articles/art_articles_artists_pg/art_articles_artists_inner_pages_pg">
        <button className="w-12 h-12 md:w-14 md:h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white text-lg md:text-2xl font-bold">
          2
        </button>
      </a>

      <button className="w-12 h-12 md:w-14 md:h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white text-lg md:text-2xl font-bold">
        3
      </button>

      <button className="w-12 h-12 md:w-14 md:h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white">
        <ChevronRight size={24} />
      </button>

    </div>
  </div>

</main>
    </>
  );
}
