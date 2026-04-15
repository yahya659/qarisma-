export default function MEET_OUR_Star(){
    return(
         <section className="mb-20 max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 drop-shadow-md tracking-wide">
            MEET OUR Star
          </h2>
          
          <div className="flex flex-wrap justify-center items-end gap-6 md:gap-8 mb-12">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={item} className={`relative w-36 md:w-48 h-44 md:h-56 transition-transform hover:-translate-y-2 cursor-pointer ${index === 1 ? 'mb-4 md:mb-8' : ''}`}>
                 {/* Stack/Shadow Effect Layers */}
                 <div className="absolute inset-0 bg-[#6a567c] translate-x-3 translate-y-3 rounded border border-black/30"></div>
                 <div className="absolute inset-0 bg-[#8c74a0] translate-x-1.5 translate-y-1.5 rounded border border-black/30"></div>
                 
                 {/* Top Image Layer */}
                 <div className="relative h-full w-full border-2 border-[#a38bba] rounded overflow-hidden shadow-lg bg-white">
                   <img src="/images/social/freepik2 .jpg" alt="Star" className="w-full h-full object-cover" />
                   
                   {/* Name Banner */}
                   <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-black/30 text-white text-[32px] md:text-sm font-bold py-2 ">
                     JOHN SMITH
                   </div>
                 </div>
              </div>
            ))}
          </div>

          {/* Dots Pagination */}
          <div className="flex justify-center items-center gap-2 mb-4">
             <div className="w-3.5 h-3.5 rounded-full bg-[#a39df3]"></div>
             <div className="w-3.5 h-3.5 rounded-full bg-[#a39df3]"></div>
             <div className="w-3.5 h-3.5 rounded-full bg-[#6a5ced]"></div>
             <div className="w-3.5 h-3.5 rounded-full bg-[#a39df3]"></div>
          </div>
          
          {/* Numbered Pagination */}
          <div className="flex justify-center items-center gap-2">
            <button className="w-8 h-8 rounded-full text-white bg-white/20 hover:bg-white/40 flex items-center justify-center font-bold shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
            </button>
            <button className="w-8 h-8 rounded text-white bg-[#6a5ced] font-bold shadow-sm flex items-center justify-center">1</button>
            <button className="w-8 h-8 rounded text-white bg-white/20 hover:bg-white/40 font-bold shadow-sm flex items-center justify-center">2</button>
            <button className="w-8 h-8 rounded text-white bg-white/20 hover:bg-white/40 font-bold shadow-sm flex items-center justify-center">3</button>
            <button className="w-8 h-8 rounded-full text-white bg-white/20 hover:bg-white/40 flex items-center justify-center font-bold shadow-sm">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
            </button>
          </div>
        </section>
    );
}