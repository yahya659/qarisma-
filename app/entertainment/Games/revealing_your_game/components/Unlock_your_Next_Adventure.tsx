export default function Unlock_your_Next_Adventure() {
  const gamesItems = [
    {
      id: 1,
      title: "Headline games",
      category: "Action",
      author: "Dev Name",
      image:
        "/images/entertainment/aded2.jpg",
    },
    {
      id: 2,
      title: "Headline games",
      category: "Adventure",
      author: "Dev Name",
      image:
        "/images/entertainment/aded2.jpg",
    },
    {
      id: 3,
      title: "Headline games",
      category: "Puzzle",
      author: "Dev Name",
      image:
        "/images/entertainment/aded2.jpg",
    },
    {
      id: 4,
      title: "Headline games",
      category: "Action",
      author: "Dev Name",
      image:
        "/images/entertainment/aded2.jpg",
    },
    {
      id: 5,
      title: "Headline games",
      category: "RPG",
      author: "Dev Name",
      image:
        "/images/entertainment/aded2.jpg",
    },
    {
      id: 6,
      title: "Headline games",
      category: "Strategy",
      author: "Dev Name",
      image:
        "/images/entertainment/aded2.jpg",
    },
    {
      id: 7,
      title: "Headline games",
      category: "Simulation",
      author: "Dev Name",
      image:
        "/images/entertainment/aded2.jpg",
    },
    {
      id: 8,
      title: "Headline games",
      category: "Arcade",
      author: "Dev Name",
      image:
        "/images/entertainment/aded2.jpg",
    },
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-[#4a2b63]/50">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-[64px] font-black text-[#000000] mb-4 uppercase tracking-tighter">
          Unlock your Next Adventure
        </h2>
        <p className="text-[]#FFFFFF font-bold uppercase tracking-widest text-[32px]">
          Top Rated games by talented Artists & Developers in our community
        </p>
      </div>

      <div className="container  mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {gamesItems.map((game) => (
          <div
            key={game.id}
            className="group w-[307px] bg-[#F178B66B] backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-pink-300/30 hover:shadow-[0_0_30px_rgba(244,114,182,0.2)]"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={game.image}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt={game.title}
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between text-[12px] bg-[#5D5FEF85]/52 font-bold text-blue-300 mb-2">
                <span className="">Game name</span>
                <span>Genre</span>
              </div>
              <h3 className="font-black text-[20px] mb-1">{game.title}</h3>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full bg-gray-400"></div>
                <span className="text-[11px] font-medium text-gray-300">
                  {game.author}
                </span>
              </div>
          
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-[#5D5FEF] text-[32px] hover:bg-blue-700 text-white px-12 py-3 rounded-xl font-black transition-all shadow-xl">
          View More
        </button>
      </div>
    </section>
  );
}
