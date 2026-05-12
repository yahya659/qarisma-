import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Vision_Latest_Exhibitions_workshops() {
  const liveSessions = [
    {
      id: 1,
      title: "Dimensions of Thought: Exploring the Abstract",
      author: "john william",
      viewers: "1.2k Viewers",
      image:
        "/images/exhibitions1.jpg",
      status: "Live",
    },
    {
      id: 2,
      title: "Breaking Boundaries with Water and Pigment",
      author: "john william",
      viewers: "1.5k Viewers",
      image:
        "/images/events_gallery2.jpg",
      status: "Live",
    },
    {
      id: 3,
      title: "Canvas & Beyond: A Journey Through Vision",
      author: "john william",
      viewers: "1.1k Viewers",
      image:
        "/images/events2.jpg",
      status: "Live",
    },
    {
      id: 4,
      title: "The Heartbeat of the Canvas",
      author: "john william",
      viewers: "1.8k Viewers",
      image:
        "/images/events_gallery2.jpg",
      status: "Live",
    },
    {
      id: 5,
      title: "Sculpture Art & Spatial Harmony",
      author: "john william",
      viewers: "900 Viewers",
      image:
        "/images/reviews1.jpg",
      status: "Live",
    },
    {
      id: 6,
      title: "Modern & Abstract Design Classes",
      author: "john william",
      viewers: "2.1k Viewers",
      image:
        "/images/festivals.jpg",
      status: "Live",
    },
  ];
  return (
    <>
      <main className="relative z-10 max-w-7xl mx-auto px-4  md:px-8 pb-20">
        <section className="mb-24 ">
          <h2 className="text-[48px]   font-bold text-center mb-16">
            Vision of{" "}
            <span className="text-[#000000]">
              Latest Exhibitions & workshops
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveSessions.map((session) => (
              <div
                key={session.id}
                className="relative  overflow-hidden h-[450px] shadow-2xl group border border-white/10 flex flex-col"
              >
                <div className="h-[65%] overflow-hidden relative">
                  <img
                    src={session.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    alt={session.title}
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#F178B6A3]/60 px-4 py-1  text-[24px] font-bold uppercase shadow-lg tracking-widest">
                      {session.status}
                    </span>
                    <span className="bg-[#F178B6A3]/60 backdrop-blur-md px-4 py-1 rounded-xl text-[20px] font-bold shadow-lg">
                      {session.viewers}
                    </span>
                  </div>
                </div>

                <div
                  className={`flex-grow p-6 flex flex-col justify-between ${session.id % 2 === 0 ? "bg-[#F178B6B8]/60 " : "bg-[#F178B6B8]/60 "} backdrop-blur-md`}
                >
                  <h4 className="text-xl text-[#000000] font-bold leading-tight line-clamp-2">
                    {session.title}
                  </h4>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                    <div className="w-8 h-8 rounded-full bg-white/30 overflow-hidden ring-1 ring-white/50">
                      <img
                        src="/images/person2.png"
                        alt="Author"
                      />
                    </div>
                    <span className="text-[16px] font-bold uppercase tracking-tighter">
                      {session.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="bg-[#F178B6A3]/64   px-20 py-4 rounded-2xl font-bold transition-all shadow-xl hover:shadow-pink-400/40 active:scale-95 text-[48px]">
              View all
            </button>
          </div>
        </section>
      </main>
          {/* paginadion */}
      <div className="max-w-7xl mx-auto px-4 mt-5  mb-20">
        <div className="flex items-center justify-center gap-4">
          <button className="w-14 h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white">
            <ChevronLeft size={32} />
          </button>
          <button className="w-14 h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-200">
            1
          </button>
          <a href="/art_pg_main/Articles/art_articles_artists_pg/art_articles_artists_inner_pages_pg">
            {" "}
            <button className="w-14 h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
              2
            </button>
          </a>

          <button className="w-14 h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
            3
          </button>
          <button className="w-14 h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </>
  );
}
