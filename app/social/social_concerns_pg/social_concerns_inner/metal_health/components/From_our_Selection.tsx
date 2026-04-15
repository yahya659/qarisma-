import { ChevronLeft, ChevronRight } from "lucide-react";

export default function From_our_Selection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b  to-purple-400 relative">
      <h2 className="text-[#FFFFFF] font-bold text-[64px] text-center mb-24 drop-shadow-md">
        From our Selection
      </h2>
      <div className="relative flex items-center justify-center gap-8 overflow-hidden py-10">
        {/* Side Card Left */}
        <div className="hidden lg:block w-72 h-96 bg-gray-800/80 rounded-3xl border border-white/10 p-8 opacity-40 transform -rotate-6 scale-90 translate-x-20 shrink-0">
          <p className="text-white/60 text-sm">
            Social sustainability is centred on people's well-being and the
            strength of communities. It strives to build fairer...
          </p>
        </div>

        {/* Center Card */}

        <div className="w-full max-w-2xl bg-gray-900/90 rounded-[40px] border-4 border-[#b279d6] p-10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] z-20 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2 aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/social/sustainability2.jpg"
              className="w-full h-full object-cover"
              alt="Sel"
            />
          </div>
          <div className="md:w-1/2 text-white space-y-4">
            <p className="leading-relaxed text-lg">
              Social sustainability is centred on people's well-being and the
              strength of communities. It strives to build fairer, more
              resilient societies where everyone has equal access to resources,
              fair treatment, and a good quality of life.
            </p>
          </div>
        </div>

        {/* Side Card Right */}
        <div className="hidden lg:block w-72 h-96 bg-gray-800/80 rounded-3xl border border-white/10 p-8 opacity-40 transform rotate-6 scale-90 -translate-x-20 shrink-0">
          <p className="text-white/60 text-sm">
            Social sustainability is centred on people's well-being and the
            strength of communities. It strives to build fairer...
          </p>
        </div>

        <button className="absolute left-10 p-4 bg-white/20 hover:bg-white/40 rounded-full text-white z-30 transition-all">
          <ChevronLeft size={32} />
        </button>
        <button className="absolute right-10 p-4 bg-white/20 hover:bg-white/40 rounded-full text-white z-30 transition-all">
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Numeric Pagination */}
      <div className="flex justify-center items-center gap-6 mt-16">
        <button  className="text-white opacity-50 hover:opacity-100">
          <ChevronLeft size={40} />
        </button>
        <div className="flex gap-4">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black ${n === 1 ? "bg-blue-600 text-white shadow-xl shadow-blue-500/50" : "bg-white/20 text-white/50 hover:bg-white/30 transition-all"}`}
            >
              {n}
            </button>
          ))}
        </div>
        <button className="text-white opacity-50 hover:opacity-100">
          <ChevronRight size={40} />
        </button>
      </div>
    </section>
  );
}
