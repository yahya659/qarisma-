import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Recently_Added() {
  return (
    <>
      {" "}
      <section className="relative z-10 py-16 text-center max-w-7xl mx-auto px-4">
        <h2 className="text-[64px] font-black text-black mb-12 tracking-wide">
          Recently Added
        </h2>

        <div className="flex items-center justify-center gap-4 md:gap-8">
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/40 transition">
            <ChevronsLeft size={24} strokeWidth={3} />
          </button>

          {/* Inactive Left Card */}
          <div className="hidden md:flex w-72 rounded-xl shadow-xl bg-[#5D5FEF6E] opacity-80 scale-95 transition-transform flex-row">
            <div className="w-6 bg-[#9985CC] rounded-l-xl border-r border-[#8A75BD] flex flex-col justify-evenly items-center shadow-inner py-6">
              <div className="w-1.5 h-6 bg-[#7C66B3] rounded-full shadow-inner opacity-60"></div>
              <div className="w-1.5 h-6 bg-[#7C66B3] rounded-full shadow-inner opacity-60"></div>
            </div>
            <div className="flex-1 flex flex-col py-2">
              <div className="h-32 relative px-2 mb-2">
                <img
                  src="/images/Anecdotes/Anecdotes.jpg"
                  alt="Game"
                  className="w-full h-full object-cover rounded-md border border-white/20"
                />
              </div>
              <div className="px-3 pb-2 bg-[#C0A9E7] flex-1">
                <p className="text-[15px] text-white/95 leading-tight font-medium text-left">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, we
                  believe that reality and maturity are core for truth
                </p>
              </div>
            </div>
            <div className="w-6 bg-[#9985CC] rounded-r-xl border-l border-[#8A75BD] flex flex-col justify-evenly items-center shadow-inner py-6">
              <div className="w-1.5 h-6 bg-[#7C66B3] rounded-full shadow-inner opacity-60"></div>
              <div className="w-1.5 h-6 bg-[#7C66B3] rounded-full shadow-inner opacity-60"></div>
            </div>
          </div>

          {/* Active Center Card (Pink Border/Bg) */}
          <div className="w-80 rounded-xl shadow-2xl bg-[#F48BBE] z-10 transform scale-105 flex-row flex">
            <div className="w-7 bg-[#E87AA9] rounded-l-xl border-r border-[#D16B98] flex flex-col justify-evenly items-center shadow-inner py-8">
              <div className="w-1.5 h-8 bg-[#C95B8A] rounded-full shadow-inner opacity-60"></div>
              <div className="w-1.5 h-8 bg-[#C95B8A] rounded-full shadow-inner opacity-60"></div>
            </div>
            <div className="flex-1 flex flex-col py-3">
              <div className="h-40 relative px-2.5 mb-3">
                <img
                  src="/images/Anecdotes/Anecdotes.jpg"
                  alt="Game"
                  className="w-full h-full object-cover rounded-md border border-white/30 shadow-sm"
                />
              </div>
              <div className="px-4 pb-2 bg-[#F48BBE] flex-1">
                <p className="text-[15px] text-white font-medium leading-tight text-left">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, we
                  believe that reality and maturity are core for truth
                </p>
              </div>
            </div>
            <div className="w-7 bg-[#E87AA9] rounded-r-xl border-l border-[#D16B98] flex flex-col justify-evenly items-center shadow-inner py-8">
              <div className="w-1.5 h-8 bg-[#C95B8A] rounded-full shadow-inner opacity-60"></div>
              <div className="w-1.5 h-8 bg-[#C95B8A] rounded-full shadow-inner opacity-60"></div>
            </div>
          </div>

          {/* Inactive Right Card */}
          <div className="hidden md:flex w-72 rounded-xl shadow-xl bg-[#C0A9E7] opacity-80 scale-95 transition-transform flex-row">
            <div className="w-6 bg-[#9985CC] rounded-l-xl border-r border-[#8A75BD] flex flex-col justify-evenly items-center shadow-inner py-6">
              <div className="w-1.5 h-6 bg-[#7C66B3] rounded-full shadow-inner opacity-60"></div>
              <div className="w-1.5 h-6 bg-[#7C66B3] rounded-full shadow-inner opacity-60"></div>
            </div>
            <div className="flex-1 flex flex-col py-2">
              <div className="h-32 relative px-2 mb-2">
                <img
                  src="/images/Anecdotes/Anecdotes.jpg"
                  alt="Game"
                  className="w-full h-full object-cover rounded-md border border-white/20"
                />
              </div>
              <div className="px-3 pb-2 bg-[#C0A9E7] flex-1">
                <p className="text-[15px] text-white/95 leading-tight font-medium text-left">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, we
                  believe that reality and maturity are core for truth
                </p>
              </div>
            </div>
            <div className="w-6 bg-[#9985CC] rounded-r-xl border-l border-[#8A75BD] flex flex-col justify-evenly items-center shadow-inner py-6">
              <div className="w-1.5 h-6 bg-[#7C66B3] rounded-full shadow-inner opacity-60"></div>
              <div className="w-1.5 h-6 bg-[#7C66B3] rounded-full shadow-inner opacity-60"></div>
            </div>
          </div>

          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/40 transition">
            <ChevronsRight size={24} strokeWidth={3} />
          </button>
        </div>
      </section>
    </>
  );
}
