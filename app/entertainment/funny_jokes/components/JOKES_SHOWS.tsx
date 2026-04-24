import { ChevronLeft, ChevronRight } from "lucide-react";

export default function JOKES_SHOWS() {
  const showsItems = [
    {
      id: 1,
      title: "Comedy Night",
      image: "/images/funny_jokes/funny_jokes.png",
    },
    {
      id: 2,
      title: "Stand-up Special",
      image: "/images/funny_jokes/funny_jokes.png",
    },
    {
      id: 3,
      title: "Late Night Talk",
      image: "/images/funny_jokes/funny_jokes.png",
    },
    {
      id: 4,
      title: "City Streets Comedy",
      image: "/images/funny_jokes/funny_jokes.png",
    },
  ];
  return (
    <>
      {" "}
      <section className="py-12 container mx-auto px-6">
        <h2 className="text-[64px] font-black text-center text-white mb-16 tracking-tighter drop-shadow-md uppercase">
          JOKES & SHOWS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {showsItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="bg-[#E8C1C559] p-3  shadow-xl transition-all duration-500 hover:bg-pink-400/70">
                <div className="relative aspect-video  overflow-hidden mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="px-4 pb-6 text-white">
                  <p className="text-[15px] opacity-90 leading-snug mb-6">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own, we believe that
                    reality and maturity are core for truth.
                  </p>
                  <button className="text-[#F178B6] text-[20px] font-bold bg-[#5D5FEF]/20 px-6 py-2 rounded-lg hover:bg-white/40 transition-colors">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-4 mt-16">
          <button className="p-3 bg-blue-600/80 text-white rounded-full hover:bg-blue-600 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-3">
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            <div className="w-3 h-3 rounded-full bg-white/40"></div>
            <div className="w-3 h-3 rounded-full bg-white/40"></div>
            <div className="w-3 h-3 rounded-full bg-white/40"></div>
          </div>
          <button className="p-3 bg-blue-600/80 text-white rounded-full hover:bg-blue-600 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
