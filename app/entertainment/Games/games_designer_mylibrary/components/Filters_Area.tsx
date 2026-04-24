import { ChevronDown, Download, Eye, Search } from "lucide-react";

export default function Filters_Area() {
  const games = [
    {
      id: 1,
      title: "Card Game",
      status: "Draft",
      date: "upload 2 weeks ago",
      downloads: "1.3k",
      views: "2.3k",
      price: "$260.00",
      image:
        "https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Card Game",
      status: "Draft",
      date: "upload 2 weeks ago",
      downloads: "1.3k",
      views: "2.3k",
      price: "$260.00",
      image:
        "https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Card Game",
      status: "Draft",
      date: "upload 2 weeks ago",
      downloads: "1.3k",
      views: "2.3k",
      price: "$260.00",
      image:
        "https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "untitled Game",
      status: "Draft",
      date: "upload yesterday",
      downloads: "—",
      views: "—",
      price: "$260.00",
      image:
        "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=500&auto=format&fit=crop",
    },
  ];
  return (
    <>
      <section className="px-8 lg:px-16 mb-10 flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-[410px]">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300"
            size={18}
          />
          <input
            type="text"
            placeholder="Search games"
            className="w-full bg-white/10 backdrop-blur-md  rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 ring-purple-500 transition-all placeholder:text-purple-300/50"
          />
        </div>
        <button className="px-6 text-[#5D5FEF] w-[240px] py-3 bg-white/10 backdrop-blur-md   rounded-xl flex items-center gap-3 ">
          Status all <ChevronDown size={16} />
        </button>
        <button className="px-6 py-3 text-[#5D5FEF] bg-white/10 w-[292x] backdrop-blur-md   rounded-xl flex items-center gap-3  ">
          Sort by <ChevronDown size={16} />
        </button>
      </section>
      {/* Games Grid */}
      <section className="px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8">
        {games.map((game) => (
          <div
            key={game.id}
            className="group relative bg-[#F178B6A3]/30 backdrop-blur-xl  overflow-hidden transition-all hover:translate-y-[-5px] hover:shadow-2xl hover:shadow-purple-500/10"
          >
            {/* Image & Status Badge */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <span
                className={`absolute top-4 right-4 px-4 py-1  text-xs font-bold tracking-wider uppercase ${
                  game.status === "live"
                    ? "bg-[#F178B6] text-white"
                    : "bg-[#F178B6] text-white"
                }`}
              >
                {game.status}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-[36px] text-[#000000] font-bold mb-1">{game.title}</h3>
              <p className="text-[#FFFFFF] text-[20px] mb-6">
                card {game.date}
              </p>

              <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-sm text-purple-100">
                    <Download size={14} className="text-purple-400" />{" "}
                    {game.downloads}
                  </div>
                  <div className="flex items-center gap-1.5 text-[20px] text-purple-100">
                    <Eye size={14} className="text-purple-400 text-[20px]" /> {game.views}
                  </div>
                </div>
                <span className="text-[20px] font-bold text-[#000000]">
                  {game.price}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    game.status === "live"
                      ? "bg-purple-600/50 hover:bg-purple-600"
                      : "bg-indigo-600/50 hover:bg-indigo-600"
                  }`}
                >
                  {game.status === "live" ? "Edit Details" : "Continue Editing"}
                </button>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-purple-400/40"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-400/40"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-400/40"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
