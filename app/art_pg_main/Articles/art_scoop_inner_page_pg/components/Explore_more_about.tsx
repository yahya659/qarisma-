import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Explore_more_about() {
  const liveExhibitions = [
    {
      id: 1,
      title: "Marrakech Biennale  ",
      viewers: "1.5k Viewers",
      status: "Live",
      image:
        "/images/exhibitions1.png",
      color: "bg-[#F178B6]",
    },
    {
      id: 2,
      title: "Marrakech Biennale ",
      viewers: "1.2k Viewers",
      status: "Live",
      image:
        "/images/reviews3.jpg",
      color: "bg-[#5D5FEF]",
    },
    {
      id: 3,
      title: "Marrakech Biennale  ",
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
           Explore more about
            <span className="text-[#F178B6] font-bold ">Arts & Scoops</span>
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

          
        </section>
       
      </main>
    </>
  );
}
