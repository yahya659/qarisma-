import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Explore_More_About() {
  const nutritionCards = [
    {
      id: 1,
      title: "Healthy Eating",
      desc: "Tips for balanced meals for toddlers.",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      title: "Vitamins & Minerals",
      desc: "Essential nutrients for growing kids.",
      img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      title: "Fruit Fun",
      desc: "Making snacks exciting for picky eaters.",
      img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400",
    },
  ];
  return (
    <section className="bg-[#7c3aed]/50 py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-white text-[64px] font-bold">
            Explore More About Nutrition
          </h2>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nutritionCards.map((card, idx) => (
            <div
              key={card.id}
              className={`bg-pink-400/20 backdrop-blur-lg   p-4 transition-all hover:-translate-y-2 ${idx === 1 ? "md:scale-110 border-pink-400" : ""}`}
            >
              <div className="aspect-video   overflow-hidden mb-4">
                <img
                  src={card.img}
                  className="w-full h-full object-cover"
                  alt={card.title}
                />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">
                {card.title}
              </h3>
              <p className="text-white/80 text-sm mb-4">{card.desc}</p>
              <button className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-pink-600">
                Read more
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i === 2 ? "bg-pink-500 w-8" : "bg-pink-400/40"}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
