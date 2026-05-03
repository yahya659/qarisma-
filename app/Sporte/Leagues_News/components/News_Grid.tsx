import React from "react";

export default function News_Grid() {
    const mainNews = [
    {
      id: 1,
      category: 'Football',
      title: 'Historic Win: City Claims the Title in a Nail-Biting Final',
      description: 'The final match of the season saw Manchester City claim victory in a dramatic display, securing the championship for the home team...',
      date: 'May 21, 2023',
      img: '/images/Sporte/Sporte13.png'
    },
    {
      id: 2,
      category: 'Basketball',
      title: 'Lakers Secure Playoff Spot with Overtime Victory',
      description: 'A stunning performance from the Lakers saw players take the lead in a final set of overtime plays that secured their spot in the next round...',
      date: 'May 20, 2023',
      img: '/images/Sporte/Sporte7.jpg'
    }
  ];
  return (
    <>
      {" "}
       <main className="px-12 py-16">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
        {mainNews.map((news) => (
          <div
            key={news.id}
            className="bg-[#5D5FEF6E]/43 backdrop-blur-md   p-6 border border-white/20 shadow-2xl group cursor-pointer transition-transform hover:-translate-y-2"
          >
            <div className="relative aspect-video  overflow-hidden mb-6 border border-white/10">
              <img
                src={news.img}
                className="w-full h-full object-cover   "
                alt={news.title}
              />
              <div className="absolute -left-2 top-10 bottom-10 w-1 bg-pink-400 rounded-full"></div>
            </div>
            <div className="px-2">
              <span className="text-[#D800B9] text-[24px] font-bold uppercase tracking-widest mb-2 block">
                {news.category}
              </span>
              <h3 className="text-[40px] font-black italic mb-4 text-white leading-tight">
                {news.title}
              </h3>
              <p className="text-xs text-white/70 mb-6 leading-relaxed line-clamp-2">
                {news.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-white/40 uppercase">
                  {news.date}
                </span>
                <button className="bg-[#5D5FEF6E]  hover:bg-blue-700    px-6 py-2 rounded-xl text-[20px] font-bold shadow-lg transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
      </main>
    </>
  );
}
