import { ArrowRight } from "lucide-react";
import React from "react";

export default function Featured_Stories() {
  const featuredStories = [
    {
      category: "F1",
      title: "Monaco GP: A Race of Strategy and Surprises",
      desc: "An in-depth look at how the race weekend unfolded on the streets of Monte Carlo.",
      img: "/images/Sporte/Sporte2.jpg",
      color: "bg-[#5D5FEF6E]/43",
    },
    {
      category: "Tennis",
      title: "Rising Star Shocks World No. 1 at Roland Garros",
      desc: "The young prodigy's incredible journey continues as they take down the champion.",
      img: "/images/Sporte/Sporte1.jpg",
      color: "bg-[#D49CDE]",
    },
    {
      category: "Golf",
      title: "The Masters: A Battle for the Green Jacket",
      desc: "Day 3 highlights and top leaderboard shifts.",
      img: "/images/Sporte/Sporte13.png",
      color: "bg-[#D49CDE]",
    },
  ];
  return (
    <>
      {" "}
      
        {" "}
        <main className="px-12 py-16">
        <section className="mb-24 bg-[#7879F180]/50">
          <h2 className="text-[64px] font-black italic   mb-16 text-white tracking-widest">
            Featured Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {featuredStories.map((story, i) => (
              <div
                key={i}
                className={`${story.color} backdrop-blur-xl rounded-[30px] p-6 border border-white/20 shadow-xl group cursor-pointer h-full flex flex-col`}
              >
                <div className="relative   overflow-hidden mb-4 aspect-square md:aspect-video lg:aspect-square">
                  <img
                    src={story.img}
                    className="w-full h-full object-cover   "
                    alt={story.title}
                  />
                </div>
                <span className="text-[#D800B9] text-[24px] font-black uppercase mb-1">
                  {story.category}
                </span>
                <h4 className="text-[30px] font-black italic mb-2 leading-snug">
                  {story.title}
                </h4>
                <p className="text-[20px] text-[#000000] font-bold  mb-4">
                  {story.desc}
                </p>
                 
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
