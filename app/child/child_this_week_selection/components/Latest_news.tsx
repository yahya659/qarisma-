import { Cloud } from "lucide-react";
import React from "react";

export default function Latest_news() {
  return (
    <>
  <div className="max-w-[1553px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20">

  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">

    {/* Main Content */}
    <div className="lg:col-span-3 space-y-8 md:space-y-10 lg:space-y-12">

      <section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-[#5D5FEF85] overflow-hidden group border border-white/10 shadow-lg rounded-xl"
            >

              {/* Image */}
              <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src="/images/child/tols3.png"
                  alt="news"
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 space-y-2">

                <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#5D5FEF]">
                  Latest News
                </h3>

                <p className="text-xs sm:text-sm md:text-base line-clamp-3">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a
                  whole...
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>

    {/* Sidebar */}
    <aside className="space-y-6 mt-6 lg:mt-0">

      {/* Box 1 */}
      <div className="bg-[#5D5FEF6E]/43 rounded-3xl p-4 md:p-5">

        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[36px] mb-4 text-[#5D5FEF] border-b border-white/10 pb-2">
          Do you know?
        </h3>

        <div className="space-y-4">

          {[1, 2].map((i) => (
            <div key={i} className="space-y-1">

              <h4 className="text-sm sm:text-base md:text-lg lg:text-[24px] text-black/60 font-bold">
                Beyond the Headlines
              </h4>

              <p className="text-xs sm:text-sm md:text-[15px] text-black leading-relaxed">
                It has one principle and one motto that can be read
                individually, meaning each word on its own...
              </p>

            </div>
          ))}

        </div>

      </div>

    </aside>

  </div>

</div>
    </>
  );
}
