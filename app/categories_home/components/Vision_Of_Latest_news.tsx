import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import React from "react";

export default function Vision_Of_Latest_news() {
  return (
    <>
      {" "}
      <section className="max-w-6xl mx-auto px-6 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-2">
          <h2 className="text-4xl text-[#000000] font-bold mb-4 italic">
            Vision Of <span className="text-pink-500">Latest news</span>
          </h2>
          <p className="text-[#000000] mb-8 text-[20px] ">
            Our vision is to provide accurate and updated information to our
            community.
          </p>

          <div className="relative group rounded-3xl overflow-hidden aspect-video bg-gray-800 border border-white/10">
            <div className="absolute inset-0">
              <img
                src="/images/f.png"
                alt="News"
                className="w-full h-full object-cover"
              />
            </div>{" "}
            <div className="absolute bottom-8 left-8 right-8 bg-[#BD9FA966] ">
              <h3 className="text-2xl font-bold mb-2">Beyond the Headlines</h3>
              <p className="text-gray-300 text-sm line-clamp-2">
                Exploring the stories that shape our world today, from deep
                dives into political changes to cultural shifts.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-6 bg-[#F178B6]  border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer"
            >
              <h4 className="font-bold mb-2 text-[25px] text-[#FFFFFF]">
                Beyond the Headlines
              </h4>
              <p className="text-[16px] text-[#000000]">
                New regulations in the tech industry are set to take effect next
                month.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
