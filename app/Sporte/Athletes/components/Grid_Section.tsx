import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Grid_Section() {
    
  const athletes = [
    { id: 1, name: 'Ethan Carter', sport: 'Soccer', stats: 'Wins: 150, Rank: 1, Medals: 3', img: '/images/Sporte/Sporte22.png' },
    { id: 2, name: 'Olivia Bennett', sport: 'Tennis', stats: 'Wins: 120, Rank: 2, Medals: 2', img: '/images/Sporte/Sporte23.png' },
    { id: 3, name: 'Aiden Cooper', sport: 'Baseball', stats: 'Wins: 100, Rank: 3, Medals: 1', img: '/images/Sporte/Sporte24.png' },
    { id: 4, name: 'Liam Foster', sport: 'Football', stats: 'Wins: 200, Rank: 1, Medals: 5', img: '/images/Sporte/Sporte22.png' },
    { id: 5, name: 'Isabella Hayes', sport: 'Volleyball', stats: 'Wins: 80, Rank: 2, Medals: 2', img: '/images/Sporte/Sporte23.png' },
    { id: 6, name: 'Mia Carter', sport: 'Hockey', stats: 'Wins: 140, Rank: 1, Medals: 2', img: '/images/Sporte/Sporte24.png' },
  ];
  return (
    <>
      {" "}
       <main className="px-12 py-16">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {athletes.map((athlete) => (
            <div key={athlete.id} className="relative group perspective-1000">
              <div className="bg-white/30 p-2 rounded-3xl backdrop-blur-sm border border-white/40 shadow-xl overflow-hidden   ">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <img
                    src={athlete.img}
                    className="w-full h-full object-cover"
                    alt={athlete.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
                  <div className="absolute bg-[#F178B6A3] w-[322px] bottom-4 left-4 right-4">
                    <h4 className="text-[48px] text-[#000000] italic mb-1 drop-shadow-md">
                      {athlete.name}
                    </h4>
                  </div>
                </div>
                <div className="px-4 pb-4 text-[#5D5FEF]">
                  <p className="text-[16px] font-bold uppercase  tracking-widest mb-1">
                    {athlete.sport}
                  </p>
                  <p className="text-[11px] font-medium leading-tight">
                    {athlete.stats}
                  </p>
                </div>
                {/* Decorative card side effect similar to the image */}
                <div className="absolute -left-1 top-10 bottom-10 w-2 bg-purple-600/40 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-16">
          <button className="p-2 text-white/50 hover:text-white">
            <ChevronLeft size={24} />
          </button>
          <button className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-bold">
            1
          </button>
          <button className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center font-bold">
            2
          </button>
          <button className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center font-bold">
            3
          </button>
          <button className="p-2 text-white/50 hover:text-white">
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

        {/* Bottom Banner */}
        <section className="mt-24">
          <button className="w-full py-8 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-[30px] flex items-center justify-center gap-4 group hover:shadow-2xl transition-all">
            <span className="text-[50px] font-black italic tracking-widest">EXPLORE HISTORICAL STATS</span>
            
          </button>
        </section>
      </main>
    </>
  );
}
