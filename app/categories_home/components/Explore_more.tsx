import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Explore_more() {
  return (
    <>
      {" "}
      <section className="relative z-10 text-center mx-auto px-6 mb-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-[40px] font-bold mb-2">Explore more</h2>
            <p className="text-[#000000] text-[40px]">
              Top headlines and In-depthg across the world
            </p>
          </div>
        </div>

        {/* أزرار الفلاتر */}
        {/* Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          {[
            "All",
            "Fashion",
            "Nature",
            "Child",
            "Sports",
            "Social",
            "Entertainment",
            "Health",
          ].map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2 text-[20px] md:text-[36px] font-medium transition-all ${
                cat === "All"
                  ? "bg-[#F178B680]/50 text-[#FFFFFF] border-pink-500"
                  : "bg-[#F178B6] text-[#FFFFFF] border-white/10 hover:border-pink-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="bg-white/5 rounded-2xl overflow-hidden  hover:border-pink-500 transition-all group text-center max-w-[320px] w-full"
            >
              {/* Image */}
              <div className="h-40 relative overflow-hidden">
                {/* الصورة */}
                <img
                  src="/images/categories/categories_home12.png"
                  alt="Arts"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* التدرج الأسود فوق الصورة */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* النص */}
                <div className="absolute bottom-3 left-1/2  -translate-x-1/2 bg-[#BD9FA9] text-[36px] px-2 py-1 font-bold uppercase">
                  Arts
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col items-center bg-[#FFFFFF]">
                <h4 className="font-bold text-[14px] text-[#0C0C0D] mb-2 line-clamp-2">
                  It has one principle and one motto that can be read
                  individually, meaning each 
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* أزرار التنقل بين الصفحات */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button className="p-2 rounded-full bg-blue-600 hover:bg-blue-500">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === 1 ? "bg-blue-600" : "bg-white/20"}`}
              ></div>
            ))}
          </div>
          <button className="p-2 rounded-full bg-blue-600 hover:bg-blue-500">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
