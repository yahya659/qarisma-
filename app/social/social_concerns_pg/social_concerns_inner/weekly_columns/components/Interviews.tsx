export default function Interviews(){
    return(
        <section
        className="py-16 px-4 md:px-12"
        style={{
          background:
            "linear-gradient(360deg, rgba(241, 120, 182, 0.6) 0%, rgba(93, 95, 239, 0.312) 49.83%, rgba(93, 95, 239, 0.6) 100%)",
        }}
      >
        {" "}
        <h2 className="text-[64px] font-black text-center text-white mb-12 drop-shadow-md">
          Latest Podcasts & Interviews
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-[#5D5FEF85]  p-3 border-[4px] border-[#5D5FEF]/52 shadow-xl relative group cursor-pointer"
            >
              <div className="relative  overflow-hidden  h-[363.11419677734375]">
                <img
                  src="/images/social/Alternating4.jpg"
                  alt="Podcast"
                  className="w-[573px] h-[363.11419677734375] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:bg-white transition-colors">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-[#fe6fba] border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                {/* Headline Badge */}
                <div className="absolute bottom-0 left-0 bg-[#5D5FEF6E]/43 px-6 py-2  flex items-center gap-2">
                  <h4 className="text-[#5D5FEF]  font-black text-[40px]">
                    Headline
                  </h4>
                </div>
              </div>
              <p className="text-[20px] font-Medium text-[#FFFFFF] mt-4 px-2 pb-2 leading-relaxed">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality.
              </p>
            </div>
          ))}
        </div>
        {/* Slider Navigation */}
        <div className="flex justify-center items-center gap-3 mt-12">
          <button className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white bg-white/10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className="w-3 h-3 bg-[#fe6fba] rounded-full"></div>
          <div className="w-3 h-3 bg-white/40 rounded-full"></div>
          <div className="w-3 h-3 bg-white/40 rounded-full"></div>
          <div className="w-3 h-3 bg-white/40 rounded-full"></div>
          <button className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white bg-white/10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </section>
    );
}