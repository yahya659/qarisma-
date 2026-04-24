import { Play } from "lucide-react";

export default function Genres(){
    return(
        <>  
        <section className="px-12 py-12 max-w-7xl mx-auto">       <div className="flex justify-between items-end mb-8 px-4">
        <h2 className="text-[64px] font-black text-black">Genres</h2>
        <div className="flex gap-4 text-xs font-bold">
          <a href="#" className="text-blue-700 text-[24px] hover:underline">
            Review all games
          </a>
          <a href="#" className="text-black text-[24px] hover:underline">
            Browse all screens
          </a>
        </div>
      </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((trailer) => (
            <div
              key={trailer}
              className="relative overflow-hidden h-48 shadow-xl border-4 border-[#D18BBA] bg-[#1A0B2E]"
            >
              <img
                src="/images/entertainment/Games1.jpg"
                alt="Trailer"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-12 h-12 rounded-full bg-[#5C4DB5]/90 text-white flex items-center justify-center shadow-lg hover:scale-105 transition backdrop-blur-sm">
                  <Play size={20} className="ml-1" fill="currentColor" />
                </button>
              </div>
            </div>
          ))}
        </div>
        </section>
        </>

    );
}