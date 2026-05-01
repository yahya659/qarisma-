import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Explore_expert_backed() {
  const expertTips = [
    {
      id: 1,
      title:
        "Developing emotional intelligence enhances decision-making skills, resilience, and self-control.",
      category: "Expert Tips",
      img: "/images/child/tols3.png",
    },
    {
      id: 2,
      title:
        "Developing emotional intelligence enhances decision-making skills, resilience, and self-control.",
      category: "Expert Tips",
      img: "/images/child/tols3.png",
    },
    {
      id: 3,
      title:
        "Developing emotional intelligence enhances decision-making skills, resilience, and self-control.",
      category: "Expert Tips",
      img: "/images/child/tols3.png",
    },
  ];
  return (
    <>
     <section className="px-4 sm:px-6 py-16 max-w-7xl mx-auto relative">

  <div className="flex flex-col items-center mb-16 relative">
    <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-center leading-tight px-2">
      Explore expert-backed tips that cover essential strategies for
      raising happy, healthy children.
    </h2>

    <div className="absolute -right-10 -top-10 sm:-right-20 sm:-top-16 md:-right-32 md:-top-20 hidden sm:block">
      <img
        src="/images/child/child3.png"
        alt="decorative icon"
        className="w-[120px] sm:w-[180px] md:w-[250px] lg:w-[319px] h-auto"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center">
    {expertTips.map((tip) => (
      <div
        key={tip.id}
        className="bg-[#F178B62B] w-full max-w-[385px] h-auto min-h-[650px] p-4 sm:p-6 flex flex-col gap-4 hover:bg-purple-800/30 transition-all"
      >
        <div className="space-y-4">

          <div className="bg-[#F178B661] px-3 sm:px-4 py-2">
            <span className="text-[14px] sm:text-[16px] font-bold text-[#000000]">
              Foster Emotional Intelligence
            </span>
          </div>

          <h1 className="bg-[#F178B661] text-[12px] sm:text-[14px] px-3 sm:px-4 py-2">
            Children who learn to identify and regulate emotions grow
            into empathetic, confident individuals. Emotional intelligence
            helps them navigate relationships, resolve conflicts, and
            express feelings healthily.
          </h1>

          <div className="bg-[#F178B661] px-3 sm:px-4 py-2">
            <span className="text-[14px] sm:text-[16px] font-bold text-[#000000]">
              Expert Tips
            </span>
          </div>

          <h1 className="bg-[#F178B661] text-[12px] sm:text-[14px] px-3 sm:px-4 py-2">
            Children who learn to identify and regulate emotions grow
            into empathetic, confident individuals. Emotional intelligence
            helps them navigate relationships, resolve conflicts, and
            express feelings healthily.
          </h1>

        </div>

        <div className="flex gap-4 items-start mt-4">
          <img
            src={tip.img}
            className="w-[90px] sm:w-[110px] md:w-[139px] h-[90px] sm:h-[110px] md:h-[139px] object-cover"
            alt="tip"
          />
          <p className="text-[14px] sm:text-[16px] md:text-[20px] text-[#000000] font-bold leading-relaxed">
            {tip.title}
          </p>
        </div>

        <button className="mt-auto bg-[#F178B62B] hover:bg-pink-500 text-[14px] sm:text-[16px] py-2 px-4 rounded-lg font-bold w-fit transition-colors">
          Read More
        </button>
      </div>
    ))}
  </div>

  <div className="flex justify-center gap-4 mt-12 items-center flex-wrap">

    <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
      <ChevronLeft size={20} />
    </button>

    <div className="flex gap-2">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`h-2.5 w-2.5 rounded-full ${
            i === 2 ? "bg-pink-400 scale-125" : "bg-white/20"
          }`}
        ></div>
      ))}
    </div>

    <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
      <ChevronRight size={20} />
    </button>

  </div>

</section>
    </>
  );
}
