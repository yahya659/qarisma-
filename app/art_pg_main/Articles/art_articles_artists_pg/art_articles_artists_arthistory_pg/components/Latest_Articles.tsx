import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Latest_Articles() {
  const ARTICLES = [
    {
      id: 1,
      category: "musician",
      title: "Parenting Multiple Kids With Mental Health Challenges",
      author: "john william",
      color: "bg-pink-400",
    },
    {
      id: 2,
      category: "painter",
      title: "Parenting Multiple Kids With Mental Health Challenges",
      author: "john william",
      color: "bg-indigo-400",
    },
    {
      id: 3,
      category: "Photography",
      title: "Parenting Multiple Kids With Mental Health Challenges",
      author: "john william",
      color: "bg-pink-400",
    },
    {
      id: 4,
      category: "Art history",
      title: "Parenting Multiple Kids With Mental Health Challenges",
      author: "john william",
      color: "bg-pink-400",
    },
    {
      id: 5,
      category: "painter",
      title: "Parenting Multiple Kids With Mental Health Challenges",
      author: "john william",
      color: "bg-indigo-400",
    },
    {
      id: 6,
      category: "Photography",
      title: "Parenting Multiple Kids With Mental Health Challenges",
      author: "john william",
      color: "bg-pink-400",
    },
  ];
  const ArticleCard = ({ article }) => (
    <div className="bg-[#5D5FEF6E]/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl     ">
      <div className="h-48 bg-gray-300 relative overflow-hidden">
        <img
          src="/images/f.png"
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute bottom-3 left-3 ${article.color} text-white text-[24px] px-3 py-1   bg-[#F178B6A3]/50 font-bold`}
        >
          {article.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-[24px] text-gray-900 mb-4 leading-snug">
          {article.title}
        </h3>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-400 overflow-hidden">
            <img
              src="/images/person2.png"
              alt="author"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[16px] text-[#FFFFFF] font-medium capitalize italic">
            Written by {article.author}
          </span>
        </div>
      </div>
    </div>
  );
  return (
  <>
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-32">
    
    {/* Header */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 md:mb-12">
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5D5FEF]">
        Latest Articles
      </h2>

      <button className="text-[#FFFFFF] font-bold text-2xl sm:text-3xl md:text-[40px] hover:text-pink-500 transition-colors">
        View all
      </button>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {ARTICLES.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>

    {/* Pagination space */}
    <div className="flex justify-center mt-10 md:mt-16 p-6 md:p-10 lg:p-20">
      {/* pagination here */}
    </div>

  </section>
</>
  );
}
