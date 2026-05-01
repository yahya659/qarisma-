"use client";
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import React, { useState } from "react";

export default function Early_Child_Development() {
  const [currentPage, setCurrentPage] = useState(1);
  const newsItems = [
    {
      id: 1,
      image:
        "/images/child/tols2.png",
      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth",
      size: "large",
    },
    {
      id: 2,
      image:
        "/images/child/tols2.png",
      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth",
      size: "small",
    },
    {
      id: 3,
      image:
        "/images/child/tols2.png",
      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth",
      size: "large",
    },
    {
      id: 4,
      image:
        "/images/child/tols2.png",
      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth",
      size: "large",
    },
    {
      id: 5,
      image:
        "/images/child/tols2.png",
      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth",
      size: "large",
    },
    {
      id: 6,
      image:
        "/images/child/tols2.png",
      description:
        "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth",
      size: "large",
    },
  ];

  return (
    <>
      {" "}
      <section className="text-center w-full max-w-[1234.1090087890625px] mx-auto px-4 sm:px-6 lg:px-8">
  <h3 className="text-[#FFFFFF] text-[24px] sm:text-[32px] md:text-[40px] mb-2">
    Ask & Explore More About
  </h3>

  <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold mb-12 text-[#F178B6]">
    Early Child Development & Nutrition
  </h2>

  <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      {newsItems.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col bg-gradient-to-br from-purple-500 to-pink-500 p-1 transition-transform hover:scale-[1.02] duration-300 ${
            item.size === "small" ? "md:scale-90" : ""
          }`}
        >
          <div className="bg-[#F178B6] p-4 h-full flex flex-col">
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden mb-6 relative">
              <img
                src={item.image}
                alt="news"
                className="w-full h-full object-cover"
              />

              <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm p-1 rounded-full">
                {/* <Heart className="w-4 h-4 text-pink-500 fill-current" /> */}
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <p className="text-[14px] sm:text-[15px] text-[#FFFFFF] font-bold leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            {/* Button */}
            <div className="pt-4 border-t border-purple-50/50">
              <button className="w-full bg-[#5D5FEF] hover:bg-blue-600 text-white text-[13px] sm:text-[14px] font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group">
                Read more
                {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </main>
</section>
    </>
  );
}
