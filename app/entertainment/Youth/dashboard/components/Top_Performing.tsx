export default function Top_Performing() {
      const performingGames = [
    {
      id: 1,
      title: "Card Game",
      release: "Aug 2024",
      revenue: "$15,200",
      metricLabel: "Revenue",
    },
    {
      id: 2,
      title: "Card Game",
      release: "Aug 2024",
      downloads: "5k",
      metricLabel: "Downloads",
    },
    {
      id: 3,
      title: "Card Game",
      release: "Aug 2024",
      revenue: "$15,200",
      metricLabel: "Revenue",
    },
  ];
  return (
    <section className="mt-12 bg-[#5D5FEF36]/21 backdrop-blur-xl border border-white/10 rounded-[32px] p-8">
      <div className="flex justify-between  items-center mb-8">
        <h2 className="text-[40px] font-black tracking-tight">
          Top Performing Games
        </h2>
        <button className="text-blue-300 font-bold text-[32px] hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-6">
        {performingGames.map((game, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-center  justify-between gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group"
          >
            <div className="flex items-center gap-6 w-full sm:w-auto">
              <div className="w-[121px]  h-[85px] aspect-video  overflow-hidden border border-white/20 shadow-lg">
                <img
                  src="/images/entertainment/addedgames1.jpg"
                  className="w-[121px] h-[85px] object-cover text-[32px] group-hover:scale-110 transition-transform duration-500"
                  alt={game.title}
                />
              </div>
              <div>
                <h3 className="font-black ">{game.title}</h3>
                <p className="text-[20px] text-[#000000] opacity-70">
                  card released {game.release}
                </p>
              </div>
            </div>

            <div className="text-center sm:text-right w-full sm:w-auto">
              <p className="text-[32px] font-black">
                {game.revenue || game.downloads}
              </p>
              <p className="text-[20px] text-[#000000] uppercase font-bold opacity-60 tracking-widest">
                {game.metricLabel}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
