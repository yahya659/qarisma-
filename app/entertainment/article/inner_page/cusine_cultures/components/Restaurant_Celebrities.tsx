"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Restaurant_Celebrities(){
     const [currentRestaurantPage, setCurrentRestaurantPage] = useState(1);
      const restaurants = [
    { id: 1, title: "Middle East", img: "/images/entertainment/Middle1.png", },
    { id: 2, title: "America", img: "/images/entertainment/Middle3.png", },
    { id: 3, title: "Asia", img: "/images/entertainment/Middle4.png", },
    { id: 4, title: "Europe", img: "/images/entertainment/Middle2.jpg", },
  ];
    return(
        <div className="bg-[#F178B6A3] py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[64px]  font-black text-white mb-16 drop-shadow-md">Restaurant & Celebrities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {restaurants.map((rest) => (
              <div key={rest.id} className="relative bg-[#5D5FEF]  p-4 md:p-6 shadow-2xl text-left transform hover:scale-[1.02] transition-transform">
                {/* Metallic Brackets */}
                <div className="absolute left-0 top-6 bottom-6 w-2.5 bg-gradient-to-b from-gray-400 via-gray-200 to-gray-400 rounded-r-md shadow-inner border border-gray-500/50"></div>
                <div className="absolute right-0 top-6 bottom-6 w-2.5 bg-gradient-to-b from-gray-400 via-gray-200 to-gray-400 rounded-l-md shadow-inner border border-gray-500/50"></div>
                
                <div className="w-full h-40 md:h-48 rounded-xl overflow-hidden mb-5 border-2 border-white/20">
                  <img src={rest.img} alt={rest.title} className="w-full h-full object-cover" />
                </div>
                <div className="px-2">
                  <h3 className="text-white bg-[#F178B69C] font-black text-[32px] mb-3 drop-shadow-sm">{rest.title}</h3>
                  <p className="text-[#000000] text-[24px]  font-bold leading-relaxed mb-6">
                    It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
                  </p>
                  <button className="px-6 py-2 bg-white text-[#5D5FEF] text-[16px] w-[159.80819702148438]  h-[38.54697799682617] font-black rounded-lg hover:bg-gray-100 transition-colors shadow-md">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-3 mt-16">
             <button onClick={() => setCurrentRestaurantPage(prev => Math.max(1, prev - 1))} className="h-8 w-8 rounded-full bg-[#5b67f6] flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-md">
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2">
              <span className="h-3 w-3 rounded-full bg-white opacity-40"></span>
              <span className="h-3 w-3 rounded-full bg-white opacity-40"></span>
              <span className="h-3 w-3 rounded-full bg-[#5b67f6] border border-white"></span>
              <span className="h-3 w-3 rounded-full bg-white opacity-40"></span>
            </div>
            <button onClick={() => setCurrentRestaurantPage(prev => Math.min(3, prev + 1))} className="h-8 w-8 rounded-full bg-[#5b67f6] flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-md">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    );
}