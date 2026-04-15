export default function Top_Weekly(){
    return(
        <section className="mb-20 relative max-w-6xl mx-auto pt-[60px] text-center">
          {/* Side Pillars - Left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[350px] bg-gradient-to-b from-[#69569b] via-[#8574a6] to-[#4c3a7a] border-4 border-[#a28bc0] rounded-sm hidden lg:flex flex-col justify-between p-1 shadow-xl">
             <div className="w-full h-4 bg-[#bfaadc] rounded-sm"></div>
             <div className="w-full h-24 border-l-2 border-r-2 border-[#bfaadc]/40"></div>
             <div className="w-full h-4 bg-[#bfaadc] rounded-sm"></div>
          </div>
          
          {/* Side Pillars - Right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-[350px] bg-gradient-to-b from-[#69569b] via-[#8574a6] to-[#4c3a7a] border-4 border-[#a28bc0] rounded-sm hidden lg:flex flex-col justify-between p-1 shadow-xl">
             <div className="w-full h-4 bg-[#bfaadc] rounded-sm"></div>
             <div className="w-full h-24 border-l-2 border-r-2 border-[#bfaadc]/40"></div>
             <div className="w-full h-4 bg-[#bfaadc] rounded-sm"></div>
          </div>

          <h2 className="text-3xl md:text-[64px] font-bold mb-14 drop-shadow-md">
            <span className="text-white">Top Weekly </span>
            <span className="text-[#6459ff]">Community</span>
          </h2>

          <div className="flex justify-center items-center gap-4 md:gap-8 mb-10 px-12">
            {/* Left Video */}
            <div className="relative w-28 md:w-56 h-40 md:h-64 overflow-hidden shadow-lg group cursor-pointer shrink-0">
              <img src="/images/social/sustainability13.jpg" alt="Community Video" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#5D5FEF6E] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
              </div>
            </div>
            
            {/* Center Video (Active/Larger) */}
            <div className="relative w-40 md:w-72 h-48 md:h-80 scale-110 z-10  overflow-hidden shadow-2xl group cursor-pointer shrink-0 mx-2 md:mx-4">
              <img src="/images/social/sustainability13.jpg" alt="Community Video Main" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <svg className="w-16 h-16 text-[#5D5FEF6E] drop-shadow-lg group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
              </div>
            </div>

            {/* Right Video */}
            <div className="relative w-28 md:w-56 h-40 md:h-64  overflow-hidden shadow-lg group cursor-pointer shrink-0">
              <img src="/images/social/sustainability13.jpg" alt="Community Video" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#5D5FEF6E] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
              </div>
            </div>
          </div>

          <button className="bg-[#5D5FEF] hover:bg-[#5249e6] text-white w-[327px] font-bold text-sm md:text-base py-3 px-12 rounded-[17px] shadow-xl transition-transform hover:-translate-y-0.5">
            Learn More
          </button>
        </section>
    );
}