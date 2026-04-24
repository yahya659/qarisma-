import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Youth_Led_Initiatives_Slider() {
  return (
    <>
      <section className="max-w-6xl mx-auto mb-32 text-center">
        <h2 className="text-[64px] text-[#F178B6]   font-bold mb-4">
          Youth -Led Initiatives
        </h2>
        <p className="text-[40px] mb-16">
          Discover and support incredible projects started by very-talented
          youth with us
        </p>

        <div className="relative px-12 bg-[#5D5FEF85]">
          <div className="flex justify-center items-center gap-8  overflow-hidden py-10">
            {/* Left ghost card */}
            <div className="hidden md:block opacity-30 scale-75 transform -translate-x-10">
              <div className="bg-white/10 p-8  w-80 text-left">
                <div className="text-6xl font-black opacity-20 mb-4">01</div>
                <h3 className="text-xl font-bold mb-4">project headline</h3>
              </div>
            </div>

            {/* Main Card */}
            <div className="bg-[#F178B6A3] backdrop-blur-xl  p-8 md:p-12  shadow-2xl max-w-lg relative z-10 transform scale-105 transition-all">
              <div className="absolute -top-6 -left-6 bg-[#F178B6A3] mt-5 left-35 p-4 rounded-2xl shadow-xl font-black text-2xl text-[#5D5FEF]">
                01
              </div>
              <h3 className="text-[30px] font-black mb-6">project headline</h3>
              <p className="text-[24px] leading-relaxed text-[#000000]">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth.
              </p>
            </div>

            {/* Right ghost card */}
            <div className="hidden md:block opacity-30 scale-75 transform translate-x-10">
              <div className="bg-white/10 p-8   w-80 text-left">
                <div className="text-6xl font-black opacity-20 mb-4">02</div>
                <h3 className="text-xl font-bold mb-4">project headline</h3>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 p-3 hover:text-pink-300 transition">
            <ChevronLeft size={48} strokeWidth={3} />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 p-3 hover:text-pink-300 transition">
            <ChevronRight size={48} strokeWidth={3} />
          </button>
        </div>
      </section>
    </>
  );
}
