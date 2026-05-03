"use client";
import { ChevronsLeft, ChevronsRight, Search } from "lucide-react";
import React, { useState } from "react";

export default function Matches() {
  const [activeMatchFilter, setActiveMatchFilter] = useState("All");

  const mainCategories = ["All", "Matches", "Teams", "Athletes"];
  const matchFilters = ["All", "Live", "Upcoming", "Results", "Teams"];

  const [activeTab, setActiveTab] = useState("Matches"); // Default to Matches as per request

  const matches = [
    {
      id: 1,
      team1: "Real Madrid",
      team2: "Barcelona",
      score: "2-1",
      league: "La Liga",
      status: "Live",
      color: "bg-[#5D5FEF6E]/40",
      img: "/images/Sporte/Sporte8.png",
    },
    {
      id: 2,
      team1: "Manchester United",
      team2: "Liverpool",
      date: "12/15/2024",
      league: "Premier League",
      status: "Upcoming",
      color: "bg-[#DD8DCD]",
      img: "/images/Sporte/Sporte9.png",
    },
    {
      id: 3,
      team1: "Bayern Munich",
      team2: "Borussia Dortmund",
      score: "3-2",
      league: "Bundesliga",
      status: "Results",
      color: "bg-[#5D5FEF6E]/40",
      img: "/images/Sporte/Sporte10.png",
    },
    {
      id: 4,
      team1: "Real Madrid",
      team2: "Barcelona",
      score: "2-1",
      league: "La Liga",
      status: "Live",
      color: "bg-[#5D5FEF6E]/40",
      img: "/images/Sporte/Sporte11.png",
    },
    {
      id: 5,
      team1: "Real Madrid",
      team2: "Barcelona",
      score: "2-1",
      league: "La Liga",
      status: "Upcoming",
      color: "bg-[#DD8DCD]",
      img: "/images/Sporte/Sporte12.png",
    },
    {
      id: 6,
      team1: "Bayern Munich",
      team2: "Borussia Dortmund",
      score: "3-2",
      league: "Bundesliga",
      status: "Live",
      color: "bg-[#5D5FEF6E]/40",
      img: "/images/Sporte/Sporte8.png",
    },
  ];
  return (
    <>
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8 space-y-16">
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-[64px] font-black text-[#5D5FEF] tracking-tight">
              {activeTab}
            </h1>
            <p className="text-[36px] text-[#000000] font-bold  ">
              Stay updated with the latest match results, upcoming games, and
              live scores from your favorite sports leagues.
            </p>
          </div>

          {/* Sub-Filters for Matches */}
          {activeTab === "Matches" && (
            <div className="flex flex-wrap gap-3">
              {matchFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveMatchFilter(filter)}
                  className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeMatchFilter === filter
                      ? "bg-[#F178B6] text-[24px] text-white shadow-lg"
                      : "bg-[#5D5FEF85]/50 text-white hover:bg-purple-400"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
        </section>
        {/* ///--------------------------------------- */}
        <section className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {matches.map((match) => (
              <div
                key={match.id}
                className="group relative mt-10 bg-white/20 backdrop-blur-md rounded-[2.5rem] overflow-hidden shadow-xl   hover:translate-y-[-10px] transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={match.img}
                    alt={match.team1}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-40 right-4 px-3 py-1 rounded-lg text-[14px] font-bold text-white uppercase tracking-wider ${match.status === "Live" ? "bg-[#EF5DA8] animate-pulse" : match.status === "Upcoming" ? "bg-[#5D5FEF]" : "bg-[#EF5DA8]"}`}
                  >
                    {match.status}
                  </span>
                </div>
                <div className={`p-6 ${match.color} text-white space-y-3`}>
                  <h3 className="text-xl font-black">
                    {match.team1} vs. {match.team2}
                  </h3>
                  <p className="text-sm font-bold opacity-90">
                    {match.score || match.date} - {match.league}
                  </p>
                  <button className="w-full py-2.5 bg-[#5D5FEF] hover:bg-indigo-700 text-xs font-bold rounded-xl transition-colors shadow-lg">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination for Matches */}
          <div className="flex justify-center items-center gap-4">
            <button className="p-2 rounded-xl bg-white/50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition shadow-sm">
              <ChevronsLeft size={24} />
            </button>
            <div className="flex gap-2 font-bold">
              {[1, 2, 3].map((i) => (
                <button
                  key={i}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${i === 1 ? "bg-indigo-600 text-white shadow-lg" : "bg-white/50 text-indigo-600 hover:bg-white"}`}
                >
                  {i}
                </button>
              ))}
            </div>
            <button className="p-2 rounded-xl bg-white/50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition shadow-sm">
              <ChevronsRight size={24} />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
