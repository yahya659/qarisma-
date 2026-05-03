import { ChevronRight, Play } from "lucide-react";
import React from "react";

export default function Exclusive_Interviews() {
  return (
    <>
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8 space-y-20">
        <section className="space-y-10">
          <h2 className="text-[65px] font-black text-[#FFFFFF] ">
            Exclusive Interviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`relative    overflow-hidden aspect-video group cursor-pointer shadow-lg ${i === 1 ? "bg-blue-600" : i === 2 ? "bg-pink-400" : "bg-purple-500"}`}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all"></div>
               <div className="relative w-full h-full group ">

  {/* صورة الفيديو */}
  <img
    src="/images/Sporte/Sporte2.jpg"
    alt="video thumbnail"
    className="w-full h-full object-cover"
  />

  {/* طبقة شفافة + زر التشغيل */}
  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
    <div className="w-12 h-12 bg-[#5D5FEF6E]/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-125 transition-transform">
      <Play fill="currentColor" size={20} />
    </div>
  </div>

</div>
                <div className="absolute  bottom-4 left-4 right-4 text-white">
                  <p className="text-[16px] font-medium line-clamp-2">
                    Inside the training camp: Top stars share their secrets for
                    success.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="bg-[#5D5FEF80]/50 hover:bg-purple-500 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg backdrop-blur-sm">
              View All Interviews <ChevronRight size={20} />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
