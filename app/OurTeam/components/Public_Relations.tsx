import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Public_Relations() {
  return (
    <>
      {" "}
      <header className="text-center py-16">
        <h1 className="text-[65px] font-bold mb-2">Our Team</h1>
        <p className="text-[#FFFFFF] text-[40px]">Meet the people building our platform</p>
      </header>
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-[35px] font-bold">Public Relations</h2>
          <p className="text-gray-400 text-[30px]">
            Building collaborative and managing communication channels.
          </p>
        </div>

        <div className="relative flex items-center justify-center gap-6">
          {/* سهم يسار */}
          <button className="bg-blue-600 p-2 rounded-full hidden lg:block">
            <ChevronLeft />
          </button>

          {/* الكروت */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white/10 p-6 rounded-3xl border border-white/10 text-center hover:bg-white/20 transition-all"
              >
                <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white/20">
                  <svg viewBox="0 0 100 100" className="bg-gray-400">
                    <circle cx="50" cy="40" r="25" fill="#333" />
                    <path d="M20 90c0-15 15-25 30-25s30 10 30 25" fill="#333" />
                  </svg>
                </div>
                <h4 className="font-bold text-[16px] text-[#171212] ">sara</h4>
                <p className="text-orange-300 text-xs mb-2">Content Creator</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                 Crafts engaging narratives that resonate with audiences.
                </p>
              </div>
            ))}
          </div>

          {/* سهم يمين */}
          <button className="bg-blue-600 p-2 rounded-full hidden lg:block">
            <ChevronRight />
          </button>
        </div>

        {/* نقاط التنقل */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
        </div>
      </section>
    </>
  );
}
