import { Play } from "lucide-react";
import React from "react";

export default function Health_Menta() {
  return (
    <>
      {" "}
      {/* Health Section */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20">

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

      {/* Main Content */}
      <div className="lg:col-span-3 space-y-10 md:space-y-12">

        {/* Latest News */}
        <section>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold">
              Health & Mental Health
            </h2>

            <span className="text-base sm:text-lg md:text-xl lg:text-[30px] text-[#F178B6] font-bold cursor-pointer hover:opacity-70 transition">
              View all
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[#F178B6BD] rounded-2xl overflow-hidden group border border-white/10 shadow-lg"
              >

                {/* Image */}
                <div className="h-40 overflow-hidden">
                  <img
                    src="/images/child/tols3.png"
                    alt="news"
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">

                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#5D5FEF]">
                  Headline
                  </h3>

                  <p className="text-sm md:text-base line-clamp-3">
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
      <aside className="space-y-6">

     

        {/* Box 2 */}
        <div className="bg-[#F178B6A3]/64 rounded-3xl p-4 md:p-5 border border-white/20">

          <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[36px] mb-4 text-white border-b border-white/10 pb-2">
            Newspaper
          </h3>

          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="space-y-1">

                <h4 className="text-base sm:text-lg md:text-xl lg:text-[24px] text-black/60 font-bold">
                  Beyond the Headlines
                </h4>

                <p className="text-sm md:text-[15px] text-black leading-relaxed">
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
