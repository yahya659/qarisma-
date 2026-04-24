export default function Top_story(){
    return(
       <div className="bg-[#df7dc4] relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-24 md:mb-32">
            {/* Main Large Image */}
            <div className="w-full h-[350px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20">
              <img 
                src="/images/entertainment/enterainment6.png" 
                alt="Main Top Story" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Thumbnails with Floating Top Story Text */}
            <div className="absolute -bottom-16 md:-bottom-24 left-0 w-full px-4 md:px-12 flex justify-center gap-3 md:gap-6 z-20">
              
              {/* Floating Top Story Text */}
              <div className="absolute bg-[#F178B6F5] h-[70px] -top-12 md:-top-16 left-6 md:left-14 z-30 pointer-events-none">
                <span 
                  className="text-[#FFFFFF] font-black text-[48px]  tracking-widest lowercase"
                  style={{ textShadow: '2px 2px 0 #4a4a4a, -2px -2px 0 #4a4a4a, 2px -2px 0 #4a4a4a, -2px 2px 0 #4a4a4a, 0px 8px 15px rgba(0,0,0,0.6)' }}
                >
                  top story
                </span>
              </div>

              {[
                "/images/entertainment/enterainment6.png",
                "/images/entertainment/enterainment6.png",
                "/images/entertainment/enterainment6.png"
              ].map((src, idx) => (
                <div key={idx} className="relative w-1/3 aspect-[4/3] md:h-48 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#df7dc4] to-[#c15eb5]">
                  {/* Metallic Side Brackets */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-b from-gray-300 via-gray-100 to-gray-300 border-r border-gray-400/50 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.2)]"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-b from-gray-300 via-gray-100 to-gray-300 border-l border-gray-400/50 z-10 shadow-[-2px_0_5px_rgba(0,0,0,0.2)]"></div>
                  
                  <img src={src} alt="Thumbnail" className="w-full h-full object-cover px-3 hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 md:pt-12 text-left">
            <h2 
              className="text-[64px]  font-black text-[#5e4bce] mb-6 tracking-wide drop-shadow-md"
             
            >
              Global Cuisines
            </h2>
            <p className="text-white font-bold leading-relaxed mb-8  mtext-[32px] max-w-5xl drop-shadow-sm">
              Understanding major global cuisines allows chefs to stay relevant in today's dynamic culinary scene. With the world becoming increasingly interconnected, diners are more adventurous and interested in trying new and niche flavors. Chefs well-versed in global cuisines can tap into this growing foodservice trend and attract a wider customer base by offering authentic and fusion dishes that showcase a blend of different culinary traditions.
            </p>
            <button className="px-10 py-3 text-[32px] bg-[#5D5FEFAB] hover:bg-indigo-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-500/30 uppercase tracking-wider">
              Explore More
            </button>
          </div>
        </div>
      </div>
    );
}