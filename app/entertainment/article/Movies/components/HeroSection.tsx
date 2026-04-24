import { ChevronsLeft, ChevronsRight, Play } from "lucide-react";

export default function HeroSection(){
    return (
        <>
      <section className="relative h-[940px] flex items-center overflow-hidden">
        {/* Background Image with pinkish overlay mimicking curtains/lighting */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/entertainment/move1.png')",
          }}
        >
          {/* Gradient Overlay to simulate the pink/purple mood */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/80 via-purple-600/40 to-pink-500/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/60"></div>
        </div>

        <div className="relative z-10 max-w-2xl px-12 text-white">
          <h2 className="text-[48px] font-semibold mb-1">Explore more about</h2>
          <h1 className="text-[64px] font-black text-[#5D5FEF] mb-4 drop-shadow-md">Cinema & Movies</h1>
          <p className="text-base font-medium mb-8 max-w-lg leading-relaxed drop-shadow-sm">
            It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
          </p>
          
          <div className="relative w-[500px]">
            <input 
              type="text" 
              placeholder="search" 
              className="w-full text-[30px] bg-[#5D5FEF85]/80 backdrop-blur-md text-white placeholder-white/80 border border-white/30 rounded-full py-3 px-6 outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* //////////////////////////// */}
    
       
       

          
        </>
    );
}