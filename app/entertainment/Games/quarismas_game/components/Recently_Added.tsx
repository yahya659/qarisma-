import { Play } from "lucide-react";

export default function Recently_Added(){
    return(
        <>
        <section className="py-8 max-w-5xl mx-auto px-4">
        <h2 className="text-[64px] font-black text-black text-center mb-8">
          New Trailer&screen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((trailer) => (
            <div
              key={trailer}
              className="relative overflow-hidden h-48 shadow-xl border-4 border-[#D18BBA] bg-[#1A0B2E]"
            >
              <img
                src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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