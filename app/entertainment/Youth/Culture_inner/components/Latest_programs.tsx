import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function Latest_programs() {
  return (
    <>
      {" "}
      <section className="py-24 px-8 bg-black/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[48px] font-bold text-center mb-4">
            Latest programs & Reports
          </h2>
          <p className="text-[48px] text-center mb-16 font-semibold opacity-90">
            about projects & our culture
          </p>

          <div className="relative flex items-center justify-center gap-4 mb-16 overflow-hidden py-10 px-10">
            {/* Carousel Simulation */}
            <button className="absolute left-0 z-30 p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition">
              <ChevronLeft size={30} />
            </button>
            <button className="absolute right-0 z-30 p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition">
              <ChevronRight size={30} />
            </button>

            <div className="flex gap-8 animate-scroll-gentle">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`relative flex-shrink-0 w-[400px] md:w-[600px] h-[350px] rounded-[50px] overflow-hidden shadow-2xl border-4 border-white/20 transform transition-all duration-500 ${i === 2 ? "scale-105 z-20 shadow-pink-500/20" : "scale-90 opacity-60"}`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
                    className="w-full h-full object-cover"
                    alt="report"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent flex flex-col justify-end p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 backdrop-blur-md bg-[#FFFFFF] rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:bg-white/50 transition">
                        <Play fill="#F178B6" size={24} />
                      </div>
                      <h3 className="text-[40px] bg-[#5D5FEF]/50  font-bold">Headline</h3>
                    </div>
                    <p className="text-[20px] opacity-90 line-clamp-2 font-medium">
                      It has one principle and one motto that can be read
                      individually, meaning each word on its own, or as a whole,
                      we believe that reality and maturity are core for truth.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full transition-all ${i === 3 ? "bg-blue-600 scale-150" : "bg-pink-300"}`}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
