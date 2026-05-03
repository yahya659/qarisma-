import { ChevronLeft, ChevronRight, User } from "lucide-react";
import React from "react";

export default function Quick_Standings() {
  return (
    <>
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8 space-y-16">
        {" "}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quick Standings */}
          <div className="space-y-6">
            <h2 className="text-[40px] font-black text-[#FFFFFF]">
              Quick Standings
            </h2>
            <div className="bg-[#F178B6]   overflow-hidden shadow-2xl  ">
              <table className="w-full text-left text-white text-[14px]">
                <thead className="bg-[#5D5FEF]">
                  <tr>
                    <th className="p-4">Team</th>
                    <th className="p-4">P</th>
                    <th className="p-4">W</th>
                    <th className="p-4">D</th>
                    <th className="p-4">L</th>
                    <th className="p-4">Pts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/50">
                  {[
                    { name: "Real Madrid", p: 15, w: 12, d: 2, l: 1, pts: 38 },
                    { name: "Barcelona", p: 15, w: 10, d: 3, l: 2, pts: 33 },
                    {
                      name: "Atletico Madrid",
                      p: 15,
                      w: 9,
                      d: 4,
                      l: 2,
                      pts: 31,
                    },
                    { name: "Sevilla", p: 15, w: 8, d: 3, l: 4, pts: 27 },
                    { name: "Real Sociedad", p: 15, w: 7, d: 5, l: 3, pts: 26 },
                  ].map((team, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-white/10 transition-colors"
                    >
                      <td className="p-4 font-bold">{team.name}</td>
                      <td className="p-4 opacity-80">{team.p}</td>
                      <td className="p-4 opacity-80">{team.w}</td>
                      <td className="p-4 opacity-80">{team.d}</td>
                      <td className="p-4 opacity-80">{team.l}</td>
                      <td className="p-4 font-black">{team.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Upcoming Quick List */}
            <div className="space-y-4">
              <h3 className="text-[40px] font-black text-[#FFFFFF]">
                Upcoming Matches
              </h3>
              <div className="space-y-3">
                <div className="bg-[#F178B680]/50 p-4 rounded-2xl text-white flex items-center gap-3">
                  <div className="p-2 bg-[#5D5FEF] rounded-lg">
                    <User size={40} />
                  </div>
                  <span className="font-bold text-[16px]">
                    Manchester United vs. Liverpool
                  </span>
                </div>
                <div className="bg-[#F178B680]/50 p-4 rounded-2xl text-white flex items-center gap-3">
                  <div className="p-2 bg-[#5D5FEF] rounded-lg">
                    <User size={40} />
                  </div>
                  <span className="font-bold text-[16px]">
                    Paris Saint-Germain vs. Marseille
                  </span>
                </div>
              </div>
            </div>

            {/* League Filters */}
            <div className="space-y-3">
              <h3 className="text-[22px] font-black text-[#FFFFFF]   tracking-widest">
                League Filters
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Premier League",
                  "La Liga",
                  "Bundesliga",
                  "Serie A",
                  "Ligue 1",
                ].map((league) => (
                  <span
                    key={league}
                    className="px-3 py-1.5 bg-[#EF5DA8] text-white text-[14px] font-bold rounded-lg cursor-pointer hover:bg-pink-500 transition-colors"
                  >
                    {league}
                  </span>
                ))}
              </div>
              <button className="w-full py-3 bg-[#7A3DF5] text-white rounded-2xl font-bold text-[14px] mt-4 hover:bg-purple-700 shadow-lg">
                Subscribe to Notifications
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="space-y-6">
            <h2 className="text-[40px] font-black text-[#FFFFFF]">
              Related Articles
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Top 5 Goals of the Week",
                  img: "/images/Sporte/Sporte12.png",
                },
                {
                  title: "Team Tactics Analysis",
                  img: "/images/Sporte/Sporte10.png",
                },
                {
                  title: "Fan Reactions and Highlights",
                  img: "/images/Sporte/Sporte14.png",
                },
                {
                  title: "Top 5 Goals of the Week",
                  img: "/images/Sporte/Sporte14.png",
                },
                {
                  title: "Team Tactics Analysis",
                  img: "/images/Sporte/Sporte11.png",
                },
                {
                  title: "Fan Reactions and Highlights",
                  img: "/images/Sporte/Sporte10.png",
                },
              ].map((article, idx) => (
                <div key={idx} className="group cursor-pointer space-y-2">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-[16px] font-bold text-[#FFFFFF] line-clamp-2 leading-tight">
                    {article.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Nav dots for articles */}
            <div className="flex justify-center items-center gap-3 pt-4">
              <button className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:scale-110 transition shadow-md">
                <ChevronLeft size={16} />
              </button>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === 3 ? "bg-indigo-600" : "bg-indigo-300"}`}
                  ></span>
                ))}
              </div>
              <button className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:scale-110 transition shadow-md">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
