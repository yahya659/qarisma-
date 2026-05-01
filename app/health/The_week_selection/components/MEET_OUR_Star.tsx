import React from 'react'

export default function MEET_OUR_Star() {
  return (
        <section className="mt-20 max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-[64px]  font-bold text-white mb-16 drop-shadow-md tracking-wide">
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
         <section className="bg-[#F178B6A3] mb-20 mt-30 w-full max-w-[1417px] mx-auto px-4 md:px-8 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <h3 className="text-lg md:text-xl font-bold">
          Stay informed, learn more & contact us
        </h3>

        <button className="flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-[#5D5FEF] hover:bg-blue-700 transition rounded-xl">
          send message
        </button>
      </section>
        </section>
        
  );
}
