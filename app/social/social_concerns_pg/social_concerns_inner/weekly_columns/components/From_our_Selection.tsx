export default function From_our_Selection(){
    return(
         <section className="py-16 px-4 md:px-12 relative overflow-hidden">
        <h2 className="text-[64px] font-black text-center text-white mb-16 drop-shadow-md">
          From our Selection
        </h2>

        <div className="max-w-6xl mx-auto flex items-center justify-center relative h-[400px]">
          {/* Left Arrow */}
          <button className="absolute left-0 z-20 text-white/70 hover:text-white hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="flex items-center justify-center w-full h-full relative">
            {/* Left Shadow Card */}
            <div className="absolute left-[-5%] md:left-[5%] w-[60%] h-[280px] bg-[#4a3574] rounded-2xl border border-white/10 opacity-60 scale-90 -z-10 flex items-center px-8">
              <p className="text-[10px] md:text-xs text-white/50">
                Some text here fading out...
              </p>
            </div>

            {/* Center Main Card */}
            <div className="relative w-[85%] md:w-[50%] h-[350px] bg-[#222]  overflow-hidden shadow-2xl border-[3px] border-[#31383B] z-10">
              <img
                src="/images/social/sustainability2.jpg"
                alt="Selection"
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
              />
              <div className="absolute inset-0 p-8 md:p-12 flex items-center">
                <p className="text-white text-[24px] md:text-[17px] font-bold leading-[1.8] drop-shadow-xl z-20 text-center w-full">
                  "Mental health is a societal issue that affects everyone. It
                  involves our emotional, psychological, and social well-being.
                  It affects how we think, feel, and act. It also helps
                  determine how we handle stress, relate to others, and make
                  healthy choices."
                </p>
              </div>
            </div>

            {/* Right Shadow Card */}
            {/* <div className="absolute right-[-5%] md:right-[5%] w-[60%] h-[280px] bg-[#4a3574] rounded-2xl border border-white/10 opacity-60 scale-90 -z-10 flex items-center justify-end px-8">
              <p className="text-[10px] md:text-xs text-white/50 text-right">
                Some text here fading out...
              </p>
            </div> */}
          </div>

          {/* Right Arrow */}
          <button className="absolute right-0 z-20 text-white/70 hover:text-white hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        {/* Numbered Pagination */}
        <div className="flex justify-center items-center gap-3 mt-10">
          <button className="text-white/60 hover:text-white mx-2 font-bold">
            «
          </button>
          <button className="w-10 h-10 rounded-full bg-[#5D5FEF] text-white font-bold flex items-center justify-center shadow-lg border-2 border-transparent">
            1
          </button>
          <button className="w-10 h-10 rounded-full bg-[#5D5FEF29] text-white font-bold flex items-center justify-center hover:bg-white/30 transition-colors">
            2
          </button>
          <button className="w-10 h-10 rounded-full bg-[#5D5FEF29] text-white font-bold flex items-center justify-center hover:bg-white/30 transition-colors">
            3
          </button>
          <button className="text-white/60 hover:text-white mx-2 font-bold">
            »
          </button>
        </div>
      </section>
    );
}