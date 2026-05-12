import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Latest_Articles() {
  const ARTICLES = [
    {
      id: 1,
      category: "Festival",
      title: "Street Art Festival & graffiti",
      author: "john william",
      color: "bg-[#F178B6A3]/60",
    },
    {
      id: 2,
      category: "Poppins",
      title: "The Language of Light and Shadow",
      author: "john william",
      color: "bg-[#5D5FEF85]",
    },
    {
      id: 3,
      category: "Workshops",
      title: "Sculpture Art in south korea",
      author: "john william",
      color: "bg-[#F178B6A3]/60",
    },
    {
      id: 4,
      category: "Biennale",
      title: "Marrakech Biennale & Contemporary Arts",
      author: "john william",
      color: "bg-[#F178B6A3]/60",
    },
    
  ];
  const ArticleCard = ({ article }) => (
    <div className="bg-[#5D5FEF6E]/40 backdrop-blur-md   overflow-hidden shadow-xl     ">
      <div className="h-48 bg-gray-300 relative overflow-hidden">
        <img
          src="/images/events2.jpg"
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute bottom-3 left-3 ${article.color} text-white text-[24px] px-3 py-1    font-bold`}
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
  

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
      {ARTICLES.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>

    {/* Pagination space */}
    <div className="flex justify-center mt-10 md:mt-16 p-6 md:p-10 lg:p-20">
      {/* pagination here */}
         <div className="flex justify-center mb-24">
           <button className=" text-[40px] text-white px-16 py-4 rounded-2xl font-bold transition-all shadow-xl hover:shadow-pink-400/30 active:scale-95 text-lg">
              View More
           </button>
        </div>
    </div>

  </section>
</>
  );
}
