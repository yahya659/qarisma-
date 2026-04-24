"use client";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Discover_youth_projects() {
  const [activeCategory, setActiveCategory] = useState("Education");
  const categories = ["All", "arts&culture", "Education", "community"];

  const projects = Array(9).fill({
    title: "Summer camp & art therapy",
    by: "by Art group",
    category: "Education",
    location: "Morocco",
    description:
      "It has one principle and one motto that can be read individually, meaning each word on its own.",
  });
  return (
    <>
      {" "}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-[64px] text-[#FFFFFF] font-bold mb-2">
            Discover youth projects
          </h2>
          <p className="text-[40px] text-[#000000] font-bold opacity-80 mb-8">
            Discover and support incredible projects started by very-talented
            youth
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2  font-bold text-[32px] transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#F178B6] text-white shadow-lg scale-105"
                      : "bg-indigo-500/40 hover:bg-indigo-500/60 text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80 group">
              <input
                type="text"
                placeholder="search project"
                className="w-full px-6 py-3  bg-white text-gray-700 focus:outline-none shadow-xl border-2 border-transparent focus:border-pink-300 transition-all"
              />
              <Search
                className="absolute right-4 top-3.5 text-gray-400 group-focus-within:text-pink-400 transition-colors"
                size={20}
              />
            </div>
          </div>
        </div>

        {/* Projects Grid (3x3 as per image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Floating Butterfly Decorations */}
          <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20 pointer-events-none rotate-12">
            <svg viewBox="0 0 24 24" fill="white">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {projects.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#5D5FEF38] backdrop-blur-md  overflow-hidden border border-white/20 shadow-2xl hover:scale-[1.03] transition-transform duration-500 group"
            >
              <div className="h-44 relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=400&sig=${idx}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="project"
                />
                <span className="absolute top-4 mt-30 bg-[#5D5FEF] text-[20px] px-3 py-1 w-[178px]  h-[38px] uppercase font-bold tracking-widest shadow-lg">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[20px] mb-1">{p.title}</h3>
                <p className="text-[16px] italic opacity-70 mb-3">{p.by}</p>
                <p className="text-[16px] text-[#000000] leading-relaxed opacity-90 mb-6 line-clamp-2">
                  {p.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[20px] font-bold uppercase tracking-tighter">
                      {p.location}
                    </span>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full border border-white bg-gray-400"></div>
                      <div className="w-6 h-6 rounded-full border border-white bg-gray-500"></div>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-[#5D5FEF] hover:bg-blue-700 text-white rounded-xl text-[20px] font-bold transition-all shadow-md active:scale-95">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
