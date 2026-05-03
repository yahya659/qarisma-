import { ArrowRight, Clock, Play, Search, Star } from "lucide-react";
import React from "react";

export default function Content() {
  const analysisCards = [
    {
      id: 1,
      league: "Premier League - England",
      match: "Manchester United 2 - 1 Liverpool",
      stats: {
        possession: "55% vs 45%",
        playerRatings: "7.8 vs 7.2",
        topPerformer: "Marcus Rashford",
      },
      img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
      progress: 75,
    },
    {
      id: 2,
      league: "NBA - Regular Season",
      match: "Lakers 112 - 108 Warriors",
      stats: {
        fieldGoal: "48% vs 44%",
        playerRatings: "8.1 vs 7.9",
        topPerformer: "LeBron James",
      },
      img: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=80",
      progress: 85,
    },
  ];
  const topPicks = [
    {
      name: "Tactical Review: Barcelona",
      analyst: "By Alex Dan",
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      name: "Defense vs Attack",
      analyst: "By Liam Smith",
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      name: "Midfield Mastery",
      analyst: "By Olivia Hope",
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    },
  ];
  const videos = [
    {
      title: "Tactical Breakdown: Man Utd's Counter-Attack",
      img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&q=80",
    },
    {
      title: "LeBron James: A Masterclass in the Fourth Quarter",
      img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80",
    },
    {
      title: "How Pit Stop Strategy Won the Monaco Grand Prix",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80",
    },
  ];
  return (
    <>
      <main className="px-12 py-12 flex flex-col lg:flex-row gap-12">
        {/* Left Column: Analysis Cards */}
        <div className="flex-1 space-y-12">
          {analysisCards.map((card) => (
            <div
              key={card.id}
              className="bg-blue-600/30 rounded-[40px] p-6 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden relative"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/5 relative">
                  <div className="absolute -left-2 top-4 bottom-4 w-1 bg-purple-400 rounded-full"></div>
                  <img
                    src={card.img}
                    className="w-full aspect-[4/5] object-cover rounded-3xl shadow-lg border border-white/20"
                    alt={card.match}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-pink-400 text-xs font-bold uppercase tracking-widest mb-2">
                    {card.league}
                  </span>
                  <h3 className="text-2xl font-black italic mb-6 leading-tight">
                    {card.match}
                  </h3>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-[10px] font-bold text-white/70 uppercase mb-6">
                    <div>
                      <p className="text-blue-200 mb-1">Possession</p>
                      <p className="text-white text-sm">
                        {card.stats.possession}
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-200 mb-1">Player Ratings</p>
                      <p className="text-white text-sm">
                        {card.stats.playerRatings}
                      </p>
                    </div>
                    <div>
                      <p className="text-blue-200 mb-1">Top Performer</p>
                      <p className="text-white text-sm">
                        {card.stats.topPerformer}
                      </p>
                    </div>
                    <div>
                      <button className="text-pink-400 flex items-center gap-1 hover:underline">
                        View More <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 mb-8">
                    <p className="text-[10px] font-bold uppercase text-white/50">
                      Performance Index
                    </p>
                    <div className="h-2 w-full bg-black/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                        style={{ width: `${card.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <button className="bg-blue-600 text-white text-xs font-bold py-3 px-6 rounded-xl self-start hover:bg-blue-700 transition-colors shadow-lg">
                    View Detailed Analysis
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Sidebar */}
        <aside className="w-full lg:w-80 space-y-12">
          {/* Top Picks */}
          <div className="bg-purple-900/20 backdrop-blur-md rounded-3xl p-6 border border-white/10">
            <h4 className="text-blue-200 font-bold mb-6 italic">
              Top Analyst Picks
            </h4>
            <div className="space-y-6">
              {topPicks.map((pick, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <img
                    src={pick.img}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                    alt={pick.analyst}
                  />
                  <div className="flex-1">
                    <p className="text-[11px] font-black leading-tight group-hover:text-pink-400 transition-colors">
                      {pick.name}
                    </p>
                    <p className="text-[9px] text-white/50">{pick.analyst}</p>
                  </div>
                  <div className="bg-blue-600 flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-bold">
                    <Star size={8} fill="white" /> {pick.rating}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Videos */}
          <div className="space-y-6">
            <h4 className="text-pink-400 font-bold italic text-sm">
              Recommended Analysis Videos
            </h4>
            {videos.map((vid, i) => (
              <div key={i} className="space-y-3 group cursor-pointer">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-white/10">
                  <img
                    src={vid.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={vid.title}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <Play size={20} fill="white" className="ml-1" />
                    </div>
                  </div>
                </div>
                <p className="text-xs font-bold leading-relaxed group-hover:text-blue-200 transition-colors">
                  {vid.title}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </main>
    
    </>
  );
}
