import { Play } from "lucide-react";
import React from "react";

export default function Spotlight_Ethan_Carter() {
  return (
    <>
      <main className="px-12 py-16">
        {" "}
        <section className="flex flex-col md:flex-row gap-12 items-center mb-24   p-8 rounded-[40px] backdrop-blur-md border border-white/10">
          <div className="w-full md:w-1/3">
            <div className="rounded-[30px] overflow-hidden shadow-2xl ">
              <img
                src="/images/Sporte/Sporte21.png"
                className="w-full aspect-square object-cover"
                alt="Ethan Carter"
              />
            </div>
          </div>
          <div className="flex-1 text-purple-950">
            <div className="bg-[#FFFFFF6E]/40 inline-block px-6 py-2    mb-4">
              <h3 className="text-[48px] text-[#5D5FEF] font-bold italic">
                Spotlight: Ethan Carter
              </h3>
            </div>
            <p className="text-[36px] text-[#FFFFFF] leading-relaxed mb-8 font-medium">
              Ethan Carter's rise to soccer stardom is a tale of perseverance
              and skill. From local leagues to international acclaim, his
              journey is an inspiration. The Journey of a Champion.
            </p>
            <button className="flex items-center gap-2 bg-[#5D5FEF] text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-purple-500/30 transition-all hover:-translate-y-1">
                Watch Now
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
