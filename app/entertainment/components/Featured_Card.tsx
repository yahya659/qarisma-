import { Play } from "lucide-react";

export default function Featured_Card() {
  const cards = [
    {
      id: 1,
      tag: "Headline",
      title: "Headline",
      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality.",
      image: "/images/entertainment/entertainment1.jpg",
    },
    {
      id: 2,
      tag: "Youth",
      title: "Headline",
      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality.",
      image: "/images/entertainment/entertainment1.jpg",
    },
    {
      id: 3,
      tag: "Games",
      title: "Headline",
      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality.",
      image: "/images/entertainment/entertainment1.jpg",
    },
  ];
  return (
    <>
      {/* Featured Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-[#5D5FEF6E]/40 backdrop-blur-md rounded-[2.5rem] border border-white/20 p-4 md:p-6 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden">
            <img
              src="/images/entertainment/entertainment1.jpg"
              alt="Neon Street"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-left pr-0 md:pr-10 pb-6 md:pb-0 text-white">
            <h3 className="text-3xl font-black mb-4 drop-shadow-sm">
              JOY & Happiness
            </h3>
            <p className="text-[#000000] font-bold leading-relaxed mb-8 text-[20px]">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
            <button className="px-8 py-2.5 bg-blue-600 hover:bg-blue-600 text-white font-bold rounded-full transition-colors shadow-lg shadow-blue-500/30">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <h2 className="text-[64px] font-black text-black drop-shadow-sm">
          Discover your world
        </h2>
        <p className="mt-2 text-[24px] font-medium max-w-2xl mx-auto text-[#FFFFFF]">
          It has one principle and one motto that can be read individually,
          meaning each word on its own, or as a whole, we believe that reality
          and maturity are core for truth
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#F178B6A3]  border border-white/30 rounded-3xl overflow-hidden shadow-xl flex flex-col transform transition-transform hover:-translate-y-1"
            >
              <div className="relative h-48 w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#A77AB9A8] text-[#000000] text-[32px] font-bold px-3 py-1 rounded-sm shadow-md">
                  {card.tag}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-white/60">
                <div>
                  <h4 className="text-xl font-black text-gray-900 mb-2 ">
                    {card.title}
                  </h4>
                  <p className="text-[16px] text-[#000000] font-bold leading-relaxed line-clamp-3">
                    {card.description}
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="px-5 py-1.5 bg-[#E9E9E9] w-[148px] h-[36px] hover:bg-pink-500 text-[#F178B6] text-xs font-bold rounded-2xl transition-colors shadow-md">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Video / Feature Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-[64px] font-black text-black mb-4 drop-shadow-sm">
                Headline
              </h2>
              <p className="text-[#FFFFFF] text-[25px] font-medium leading-relaxed mb-6">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth
              </p>
              <button className="px-8 py-2.5 bg-[#f97aa9] text-[16px] hover:bg-pink-500 text-white  font-bold rounded-md transition-colors shadow-lg">
                Read more
              </button>
            </div>
            <div className="w-full md:w-1/2 relative group cursor-pointer">
              {/* Device Frame Simulation */}
              <div className=" ">
                <div className="relative rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                  <img
                    src="/images/entertainment/entertainment1.jpg"
                    alt="Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Play Button Overlay */}
                  <div className="relative z-10 w-16 h-16 bg-[#5D5FEF] backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                    <Play className="text-white ml-1 w-8 h-8 fill-current" />
                  </div>
                </div>
                {/* Frame Stand Details */}
                <div className="flex justify-between items-center px-4 mt-1">
                  <div className="h-1 w-6 bg-gray-500 rounded-full"></div>
                  <div className="h-1 w-6 bg-gray-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-[#5D5FEF7D] rounded-xl py-6 px-8 flex flex-col md:flex-row items-center justify-between shadow-xl border border-white/20">
            <h3 className="text-white text-[32px] md:text-2xl font-bold mb-4 md:mb-0">
              stay informed, learn more & contact us
            </h3>
            <button className="px-8 py-2.5 bg-[#5D5FEF] hover:bg-blue-600 text-white font-bold rounded-lg transition-colors shadow-lg uppercase text-sm tracking-wider">
              send message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
