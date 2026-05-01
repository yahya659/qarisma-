import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Watch_Explore() {
  return (
    <>
      {" "}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-24 w-full text-center">
        <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-12 drop-shadow-md">
          Watch & Explore
        </h2>

        <div className="flex items-center justify-center gap-4 md:gap-10 max-w-5xl mx-auto">
          {/* Left Control */}
          <button className="text-white/40 hover:text-white transition-colors">
            <ChevronLeft size={50} strokeWidth={4} />
          </button>

          {/* Carousel Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
            {[1, 2, 3].map((idx) => (
              <div
                key={idx}
                className={`bg-[#A488D8]   overflow-hidden shadow-2xl flex flex-col transform transition-all ${idx === 2 ? "scale-110 z-20 ring-4 ring-pink-400" : "opacity-80 scale-95  "}`}
              >
                <div className="relative h-36 md:h-44">
                  <img
                    src="/images/Effective_Treatments/Effective_Treatments1.jpg"
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
                  <span className="absolute bottom-2 left-2 bg-[#FF88B9] text-white text-[10px] font-bold px-3 py-1 rounded shadow">
                    Major Success
                  </span>
                </div>
                <div className="p-4 bg-[#D3AEDB] flex-1">
                  <p className="text-[10px] text-gray-900 font-bold leading-tight mb-4 text-left">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own...
                  </p>
                  <button className="bg-[#FF88B9] text-white text-[10px] font-bold px-4 py-1.5 rounded-md hover:bg-pink-500 self-end shadow-sm">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Control */}
          <button className="text-white/40 hover:text-white transition-colors">
            <ChevronRight size={50} strokeWidth={4} />
          </button>
        </div>
      </section>
      {/* Pagination */}
    </>
  );
}
