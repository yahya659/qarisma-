import { Play } from "lucide-react";
import React from "react";

export default function Videos_of_Expert() {
  const videos = [
    {
      id: 1,
      title: "Videos of Expert Tips for parents & child",
      img: "/images/child/child5.png",
    },
    {
      id: 2,
      title: "Videos of Expert Tips for parents & child",
      img: "/images/child/child5.png",
    },
    {
      id: 3,
      title: "Videos of Expert Tips for parents & child",
      img: "/images/child/child5.png",
    },
    {
      id: 4,
      title: "Videos of Expert Tips for parents & child",
      img: "/images/child/child5.png",
    },
  ];
  return (
    <section className="px-4 sm:px-6 py-16 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent relative">

  {/* Decorative cloud */}
  <div className="absolute left-0 sm:left-4 top-10 opacity-60 hidden sm:block">
    <img
      src="/images/child/child3.png"
      alt="decorative icon"
      className="w-[140px] sm:w-[220px] md:w-[260px] lg:w-[319px] h-auto"
    />
  </div>

  <div className="max-w-7xl mx-auto relative z-10">

    <h2 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold text-center mb-10 sm:mb-16 leading-tight px-2">
      Videos of Expert Tips for <br /> parents & child
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mx-auto">

      {videos.map((v) => (
        <div
          key={v.id}
          className="relative w-full max-w-[515px] aspect-video group overflow-hidden border border-white/20 mx-auto"
        >
          <img
            src={v.img}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            alt="video thumb"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 sm:p-6 text-center">

            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#5D5FEF6E] backdrop-blur-md rounded-full flex items-center justify-center mb-3 sm:mb-4 cursor-pointer hover:bg-white/40 transition-colors group">
              <Play
                fill="white"
                size={28}
                className="sm:scale-110 transition-transform"
              />
            </div>

            <h3 className="font-bold text-[16px] sm:text-[24px] md:text-[30px] lg:text-[36px] text-white max-w-xs">
              {v.title}
            </h3>

          </div>
        </div>
      ))}

    </div>

    <div className="flex justify-center mt-10 sm:mt-12">
      <button className="bg-[#F178B6] hover:bg-pink-500 px-8 sm:px-10 md:px-12 py-2 sm:py-3 rounded-2xl font-bold text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] shadow-lg shadow-pink-500/20 transition-all">
        Watch more
      </button>
    </div>

  </div>

</section>
  );
}
