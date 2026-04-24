"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
export default function SocietySection() {
  const [currentPage, setCurrentPage] = useState("articles");
       const recipeCards = [
    {
      id: 1,
      title: "Breakfast Recipes",
      titleColor: "text-[#ff68a5]", // Pink title
      desc: "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth",
      img: "/images/entertainment/entertainment2.png",
      bgColor: "bg-[#5D5FEF]" // Blue bg
    },
    {
      id: 2,
      title: "Lunch Recipes",
      titleColor: "text-[#5b67f6]", // Blue title
      desc: "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth",
      img: "/images/entertainment/entertainment2.png",
      bgColor: "bg-[#F178B6]" // Pink bg
    },
    {
      id: 3,
      title: "Healthy Snacks",
      titleColor: "text-[#5b67f6]", // Blue title
      desc: "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth",
      img: "/images/entertainment/entertainment2.png",
      bgColor: "bg-[#F178B6]" // Pink bg
    },
    {
      id: 4,
      title: "Worldwide Recipes",
      titleColor: "text-[#5b67f6]", // Blue title
      desc: "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth",
      img: "/images/entertainment/enterainment5.jpg",
      bgColor: "bg-[#F178B6]" // Purple bg
    }
  ];



  return (
    <>
          {/* Grid Cards */}
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8 md:gap-12 relative z-10 px-0 md:px-10">
            {recipeCards.map((card) => (
              <div key={card.id} className={`${card.bgColor} p-4 w-[642px] h-[611px] shadow-xl `}>
                <div className="h-[330.7078857421875] w-[594.2025756835938] rounded-md overflow-hidden mb-4 border-2 border-white/20">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                </div>
                <div className="px-2 pb-2">
                  <h4 className={`text-[36px] font-black ${card.titleColor} mb-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]`}>
                    {card.title}
                  </h4>
                  <p className="text-black text-[20px] font-bold leading-relaxed mb-4">
                    {card.desc}
                  </p>
                  <button className="px-5 py-1.5 bg-[#5D5FEFAB] w-[175.9951629638672] h-[46.72003936767578] hover:bg-blue-700 text-white text-[20px] font-bold rounded-md transition-colors shadow-md">
                    Explore More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Pagination */}
          <div className="flex items-center justify-center space-x-3 mt-12 z-10 relative">
            <button className="h-8 w-8 rounded-full bg-[#5b67f6] flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-md">
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2">
              <span className="h-3 w-3 rounded-full bg-white opacity-40"></span>
              <span className="h-3 w-3 rounded-full bg-white opacity-40"></span>
              <span className="h-3 w-3 rounded-full bg-white"></span>
              <span className="h-3 w-3 rounded-full bg-white opacity-40"></span>
            </div>
            <button className="h-8 w-8 rounded-full bg-[#5b67f6] flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-md">
              <ChevronRight size={20} />
            </button>
          </div></>
   
  );
}
