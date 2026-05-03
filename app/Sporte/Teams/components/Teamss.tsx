"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

export default function Teamss() {
  const categories = [
    "All",
    "Football",
    "Basketball",
    "Tennis",
    "Racing",
    "More",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const topTeams = [
    { name: "Real Madrid", performance: 90 },
    { name: "Barcelona", performance: 75 },
    { name: "Manchester United", performance: 70 },
    { name: "Liverpool", performance: 65 },
    { name: "Bayern Munich", performance: 60 },
  ];

  const teams = [
    {
      name: "Real Madrid",
      league: "La Liga",
      stats: "12W - 2L",
      color: "bg-black",
      logo: "/images/Sporte/real.png",
    },
    {
      name: "Barcelona",
      league: "La Liga",
      stats: "10W - 3L",
      color: "bg-white",
      text: "text-black",
      logo: "/images/Sporte/barca.png",
    },
    {
      name: "Manchester United",
      league: "Premier League",
      stats: "9W - 4L",
      color: "bg-black",
      logo: "/images/Sporte/mansdster.png",
    },
    {
      name: "Liverpool",
      league: "Premier League",
      stats: "8W - 5L",
      color: "bg-white",
      text: "text-black",
      logo: "/images/Sporte/levarbool.png",
    },
    {
      name: "Bayern Munich",
      league: "Bundesliga",
      stats: "11W - 2L",
      color: "bg-white",
      text: "text-black",
      logo: "/images/Sporte/chalse.png",
    },
    {
      name: "Borussia Dortmund",
      league: "Bundesliga",
      stats: "9W - 5L",
      color: "bg-black",
      logo: "/images/Sporte/Boruss.png",
    },
  ];

  return (
    <>
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8 space-y-16">
        {/* Hero Section */}
        <header className="px-8 mt-12 max-w-4xl">
          <h1 className="text-[#5D5FEF] font-extrabold mb-4 text-[64px]">
            Teams
          </h1>

          <p className="text-[30px] text-[#000000] font-medium">
            Explore detailed information about your favorite sports teams,
            including their latest results, upcoming matches, and team
            statistics.
          </p>
        </header>

        {/* Filter & Search */}
        <section className="px-8 mt-10 flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap gap-3 p-2 rounded-2xl backdrop-blur-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-xl font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-[#F178B6] text-white text-[32px] shadow-lg"
                    : "bg-[#5D5FEF85]/50 hover:bg-purple-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex-grow max-w-md relative">
            <input
              type="text"
              placeholder="search"
              className="w-full py-3 px-6 rounded-2xl bg-white text-purple-900 focus:outline-none shadow-inner"
            />

            <Search
              className="absolute right-4 top-3.5 text-purple-300"
              size={20}
            />
          </div>
        </section>

        {/* Teams Section */}
        <main className="px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Teams Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {teams.map((team, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0"></div>

                <div className="relative bg-[#FFCFFB]/10 backdrop-blur-xl p-6 shadow-xl overflow-hidden">
                  {/* تم إصلاح الصور هنا فقط */}
                  <div
                    className={`w-full aspect-video ${team.color} rounded-2xl mb-4 flex items-center justify-center text-4xl shadow-lg border border-white/20`}
                  >
                    <img
                      src={team.logo}
                      alt={team.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>

                  <h3 className="text-[16px] font-bold text-[#FFFFFF]">
                    {team.name}
                  </h3>

                  <p className="text-[#FFFFFF] text-[14px] font-semibold">
                    {team.league}
                  </p>

                  <p className="text-[#FFFFFF] text-[14px] font-bold mt-1">
                    {team.stats}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside>
            <div className="bg-[#7879F180] backdrop-blur-2xl rounded-[2rem] p-6 border border-black shadow-2xl">
              <h4 className="text-[22px] font-bold mb-6 text-white text-center">
                Top Teams
              </h4>

              <div className="overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left pb-4 font-bold">Team</th>
                      <th className="text-center pb-4 font-bold">Fan</th>
                      <th className="text-left pb-4 font-bold">Performance</th>
                    </tr>
                  </thead>

                  <tbody>
                    {topTeams.map((t, i) => (
                      <tr key={i} className="group cursor-pointer">
                        <td className="py-4 font-medium text-white/90 text-[14px]">
                          {t.name}
                        </td>

                        <td className="py-4 text-center">👤</td>

                        <td className="py-4">
                          <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-pink-500 rounded-full"
                              style={{
                                width: `${t.performance}%`,
                              }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <button className="w-full mt-6 py-4 rounded-2xl bg-[#5D5FEF80] hover:bg-purple-600 transition-all font-bold backdrop-blur-sm border border-white/20">
              View Team Historical Stats
            </button>
          </aside>
        </main>
      </main>
    </>
  );
}
