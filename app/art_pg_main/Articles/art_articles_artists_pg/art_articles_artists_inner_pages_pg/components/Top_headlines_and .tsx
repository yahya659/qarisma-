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
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-[30px] font-bold text-[#000000] mb-8 text-center   tracking-widest">
       Top headlines and In-depth reportind across the world
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-[#F178B6D4]/80   shadow-2xl transform hover:scale-[1.02] transition-all"
            >
              <div className="h-64  overflow-hidden mb-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-4 pb-4 text-white">
                <h3 className="text-[#000000] text-[32px] font-bold mb-2 leading-tight">
                  {article.title}
                </h3>
                <p className="text-[24px] text-[#FFFFFF] opacity-90 mb-4">{article.desc}</p>
                <a
                  href="#"
                  className="inline-block text-[20px] font-bold  underline   text-[#000000] transition-colors"
                >
                  Read more
                </a>

                <div className="flex items-center justify-between pt-4 
                ">
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/person2.png"
                      className="w-8 h-8 rounded-full border-2 border-white"
                      alt=""
                    />
                    <span className="text-[20px] font-bold">{article.author}</span>
                  </div>
                  <span className="text-[20px] font-bold opacity-80">
                    {article.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button className="text-white opacity-50">
            <ChevronLeft size={32} />
          </button>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full bg-[#5D5FEF]" />
            <div className="w-10 h-10 rounded-full  bg-[#5D5FEF]" />
            <div className="w-10 h-10 rounded-full  bg-[#5D5FEF]" />
            <div className="w-10 h-10 rounded-full  bg-[#5D5FEF]" />
          </div>
          <button className="text-white opacity-50">
            <ChevronRight size={32} />
          </button>
        </div>
      </main>
    </>
  );
}
