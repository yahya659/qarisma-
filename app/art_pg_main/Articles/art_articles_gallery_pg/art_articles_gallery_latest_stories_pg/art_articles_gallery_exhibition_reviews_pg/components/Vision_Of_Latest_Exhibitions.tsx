import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Vision_Of_Latest_Exhibitions() {
  const liveExhibitions = [
    {
      id: 1,
      title: "Modern & abstract artwork",
      viewers: "1.5k Viewers",
      status: "Live",
      image:
        "/images/reviews2.jpg",
      color: "bg-[#F178B6B8]/70",
    },
    {
      id: 2,
      title: "Art & painting sessions",
      viewers: "1.2k Viewers",
      status: "Live",
      image:
        "/images/reviews3.jpg",
      color: "bg-[#5D5FEF]",
    },
    {
      id: 3,
      title: "Modern & abstract artwork",
      viewers: "1.2k Viewers",
      status: "Upcoming",
      image:
        "/images/reviews2.jpg",
      color: "bg-[#F178B6B8]/70",
    },
  ];

  return (
    <>
      {" "}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-20">
        {" "}
        <section className="mb-20">
          <h2 className="text-[48px] font-bold text-center mb-12">
            Vision Of{" "}
            <span className="text-[#F178B6] font-bold ">Latest Exhibitions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liveExhibitions.map((exh) => (
              <div
                key={exh.id}
                className="relative  overflow-hidden h-[400px] shadow-xl group"
              >
                <img
                  src={exh.image}
                  alt={exh.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80  " />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-[#F178B6A3]/60 px-3 py-1 rounded-lg text-[24px] font-bold uppercase">
                    Live
                  </span>
                  <span className="bg-[#F178B6A3]/60 backdrop-blur-md px-3 py-1 rounded-lg text-[20px] font-bold">
                    {exh.viewers}
                  </span>
                </div>

                {/* Content Overlay */}
                <div
                  className={`absolute bottom-0 left-0 right-0 ${exh.color} p-6 h-1/3  `}
                >
                  <h4 className="text-[25px] text-[#000000] font-bold mb-4 line-clamp-2">
                    {exh.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20 overflow-hidden">
                      <img
                        src="/images/person2.png"
                        alt="Author"
                      />
                    </div>
                    <span className="text-[16px]">john william</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="w-10 h-10 rounded-full border-2 border-pink-400 flex items-center justify-center text-white  bg-[#F178B6]   ">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-pink-400" />
              <div className="w-3 h-3 rounded-full bg-pink-400/30" />
              <div className="w-3 h-3 rounded-full bg-pink-400/30" />
              <div className="w-3 h-3 rounded-full bg-pink-400/30" />
              <div className="w-3 h-3 rounded-full bg-pink-400/30" />
            </div>
            <button className="w-10 h-10 rounded-full border-2 border-pink-400 flex items-center justify-center text-white  bg-[#F178B6]   ">
              <ChevronRight size={24} />
            </button>
          </div>
        </section>
         <div className="max-w-6xl mx-auto p-20 px-6 mb-20">
        <div className="bg-[#5D5FEF7D]/50 backdrop-blur-md p-6 rounded-[10px] flex flex-col md:flex-row items-center justify-between   ">
          <h3 className="text-white text-[32px] font-black italic mb-4 md:mb-0">
            stay informed, learn more
          </h3>
          <button className="bg-[#5D5FEF] text-[25px]  text-white px-10 py-3 rounded-2xl font-black shadow-lg t   ">
            send message
          </button>
        </div>
      </div>
      </main>
    </>
  );
}
