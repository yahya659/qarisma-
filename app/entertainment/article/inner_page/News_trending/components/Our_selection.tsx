import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Our_selection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-20 text-center">
      <h2 className="text-[64px] font-black text-white mb-12 drop-shadow-lg">
        our selection
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 relative h-[350px]">
        <button className="absolute left-0 md:left-10 z-20 text-white hover:text-pink-300 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm hidden md:block">
          <ChevronsLeft size={36} strokeWidth={3} />
        </button>

        <div className="flex items-center justify-center w-full h-full relative perspective-1000">
          {/* Left Card */}
          <div className="hidden md:flex absolute left-[15%] w-72 h-[260px] bg-gradient-to-br from-[#705ee0] to-[#4b35b6] rounded-2xl p-6 flex-col justify-between shadow-2xl border border-white/20 transform -translate-x-1/2 scale-90 opacity-70 z-0">
            <div>
              <h4 className="text-[#000000] font-bold text-[20px] mb-3">
                "Reading is still one's Continuous Activity with their
                vocabulary"
              </h4>
              <p className="text-white/70 text-[10px] leading-relaxed">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth. It has one
                principle and one motto that can be read individually.
              </p>
            </div>
            <a
              href="#"
              className="text-white font-bold text-xs hover:underline uppercase"
            >
              Read more
            </a>
          </div>

          {/* Center Active Card */}
          <div className="absolute left-1/2 w-80 md:w-96 h-[300px] bg-gradient-to-br from-[#7763ed] to-[#553ec5] rounded-2xl p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-[#a28af7] transform -translate-x-1/2 z-10">
            <div>
              <h4 className="text-[#000000] font-black text-[20px] mb-4 drop-shadow-sm">
                "Reading is still one's Continuous Activity with their
                vocabulary"
              </h4>
              <p className="text-white/80 text-[11px] leading-relaxed font-semibold">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth. It has one
                principle and one motto that can be read individually, meaning
                each word on its own, or as a whole, we believe that reality.
              </p>
            </div>
            <a
              href="#"
              className="text-white font-black text-[20px] hover:underline uppercase tracking-wide"
            >
              Read more
            </a>
          </div>

          {/* Right Card */}
          <div className="hidden md:flex absolute left-[85%] w-72 h-[260px] bg-gradient-to-br from-[#705ee0] to-[#4b35b6] rounded-2xl p-6 flex-col justify-between shadow-2xl border border-white/20 transform -translate-x-1/2 scale-90 opacity-70 z-0">
            <div>
              <h4 className="text-[#000000] font-bold text-[20px] mb-3">
                "Reading is still one's Continuous Activity with their
                vocabulary"
              </h4>
              <p className="text-white/70 text-[10px] leading-relaxed">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth. It has one
                principle and one motto that can be read individually.
              </p>
            </div>
            <a
              href="#"
              className="text-white font-bold text-xs hover:underline uppercase"
            >
              Read more
            </a>
          </div>
        </div>

        <button className="absolute right-0 md:right-10 z-20 text-white hover:text-pink-300 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm hidden md:block">
          <ChevronsRight size={36} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
