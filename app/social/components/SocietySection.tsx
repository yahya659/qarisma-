"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SocietySection() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All");
  const tabs = [
    { name: "All", path: "" },
    { name: "Articles", path: "/social/Articles" },
    { name: "Programs", path: "/social/social_program_pg" },
    { name: "Concerns", path: "/social/social_concerns_pg" },
    { name: "News", path: "/social/social_news_pg" },
    { name: "Stories", path: "/social/social_story_pg" },
    { name: "Teams Of The Week", path: "/social/Teams_Of_The_Week" },
  ];
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-[64px] font-bold mb-2">Society</h2>
      <p className="text-[40px] text-[#000000] font-bold mb-10">
        Top headlines and in-depth across the world
      </p>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => router.push(tab.path)}
              className="px-6 py-2 rounded-lg text-sm font-medium transition-all bg-[#5D5FEF85] text-gray-300 hover:bg-indigo-800 "
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-blue-600/80 backdrop-blur-md border-none rounded-lg py-2 pl-4 pr-10 text-white placeholder-blue-200 focus:ring-2 ring-blue-400 transition-all"
          />
          <Search
            className="absolute right-3 top-2.5 text-blue-200"
            size={18}
          />
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feature - Video/Project */}
        <div className="lg:col-span-2 group">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/images/social/scoli.jpg"
              className="w-[625.7542724609375] h-[350.73529052734375] object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Eco Project"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <div className="flex items-center gap-4 mb-4">
                {/* <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-all border border-white/30">
                        <Play fill="white" size={28} />
                      </div> */}
              </div>

              <h3 className="text-3xl font-bold mb-2 ">
                Eco-friendly projects
              </h3>
              <p className="text-gray-300 max-w-md">
                It has one principle and one motto that can be read
                individually, meaning each word on its own.
              </p>
            </div>
          </div>
        </div>

        {/* Side Panels */}
        <div className="flex flex-col gap-6">
          {/* Editor's Picks */}
          <div className="bg-indigo-900/30 backdrop-blur-md p-6 rounded-3xl border border-white/10">
            <h4 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
              Editor's Picks
            </h4>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="pb-4 border-b border-white/5 last:border-0 last:pb-0"
                >
                  <h5 className="font-bold mb-1">Beyond the Headlines</h5>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    Exploring the stories that shape our community and the world
                    we live in together.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Newspapers */}
          <div className="bg-pink-900/20 backdrop-blur-md p-6 rounded-3xl border border-white/10">
            <h4 className="text-pink-400 text-xs font-bold uppercase tracking-widest mb-4">
              Newspapers
            </h4>
            <div className="space-y-4">
              <h5 className="font-bold">Beyond the Headlines</h5>
              <p className="text-xs text-gray-400">
                Deep dives into societal shifts and cultural phenomenons.
              </p>
              <div className="bg-white/5 p-4 rounded-xl text-xs italic text-gray-400 border-l-2 border-pink-500">
                "Truth and reality are the foundations of any progressive
                society..."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
