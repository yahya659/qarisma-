import { Heart } from "lucide-react";
import React from "react";

export default function Child_Health() {
  return (
   <section className="py-12 md:py-20">
  <div className="max-w-7xl mx-auto px-4 md:px-6">

    {/* Title */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
        Child Health
      </h2>

      <div className="flex justify-center flex-wrap gap-3">
        {[
          "programs articles",
          "FQA",
          "Expert Tips",
          "Common Diseases",
          "Tools For Parents",
        ].map((t, i) => (
          <button
            key={i}
            className={`px-4 md:px-6 py-2 rounded-xl text-sm md:text-xl font-medium ${
              i === 0 ? "bg-[#F178B6]" : "bg-[#5D5FEF85]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

      {[1,2,3].map((_, i) => (
        <div key={i} className="p-1 rounded-[2rem] md:rounded-[3rem] shadow-2xl">
          
          <div className="bg-gradient-to-l from-pink-400/60 to-indigo-500/60 backdrop-blur-md p-6 md:p-8 h-full flex flex-col">

            {/* Top */}
            <div className="w-full bg-[#5D5FEF29] p-4 md:p-6 mb-4 md:mb-6 rounded-xl">
              <h4 className="text-black font-black text-lg md:text-xl mb-2 bg-[#F178B661]/38 inline-block px-2 rounded">
                Vitamins
              </h4>
              <p className="text-sm md:text-base text-white italic">
                "Vitamins are the tiny sparks that keep a child's body running smoothly."
              </p>
            </div>

            {/* Benefits */}
            <div className="w-full bg-[#5D5FEF29] p-4 md:p-6 mb-6 md:mb-8 rounded-xl">
              <h4 className="text-black font-black text-lg md:text-xl mb-2 bg-[#F178B661]/38 inline-block px-2 rounded">
                Benefits
              </h4>
              <ul className="text-sm md:text-base text-white italic space-y-1">
                <li>• Strengthening immune system</li>
                <li>• Supporting healthy growth</li>
                <li>• Improving concentration</li>
              </ul>
            </div>

            {/* Bottom */}
            <div className="mt-auto flex items-center gap-3">
              
              <div className="w-20 h-24 md:w-24 md:h-32 bg-[#F178B6] flex items-center justify-center rounded-xl overflow-hidden">
                <img
                  src="/images/child/child6.png"
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>

              <button className="flex-1 py-2 md:py-3 bg-[#F178B6] text-sm md:text-base text-white rounded-xl font-bold shadow-lg hover:scale-105 transition">
                Read More
              </button>

            </div>

          </div>
        </div>
      ))}

    </div>
  </div>
</section>
  );
}
