import { Play } from "lucide-react";

export default function Discover_your_world(){
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
    return(
          <>
     
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
     
       
        {/* CTA Strip */}
        <div className="max-w-[254px] mx-auto mt-[50px] px-4  h-[65px] sm:px-6 lg:px-8 mb-20">
          <div className="bg-[#5D5FEF6E] ">
            <button className="text-white text-[24px]  font-bold mb-4 md:mb-0">
              Read more
            </button>
          
          </div>
        </div>
      </div>
    </>
    );
}