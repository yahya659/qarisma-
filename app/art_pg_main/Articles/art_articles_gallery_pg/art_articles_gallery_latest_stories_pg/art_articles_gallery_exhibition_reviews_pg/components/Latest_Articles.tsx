import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Latest_Articles() {
  const ARTICLES = [
    {
      id: 1,
      category: "Exhibition",
      title: "Parenting Multiple Kids With Mental Health Challenges",
      author: "john william",
      color: "bg-pink-400",
    },
    {
      id: 2,
      category: "Interview",
      title: "Parenting Multiple Kids With Mental Health Challenges",
      author: "john william",
      color: "bg-indigo-400",
    },
    {
      id: 3,
      category: "Exhibition review",
      title: "Parenting Multiple Kids With Mental Health Challenges",
      author: "john william",
      color: "bg-pink-400",
    },
    {
      id: 4,
      category: "interview",
      title: "Parenting Multiple Kids With Mental Health Challenges",
      author: "john william",
      color: "bg-pink-400",
    },
    {
      id: 5,
      category: "Exhibition",
      title: "Parenting Multiple Kids With Mental Health Challenges",
      author: "john william",
      color: "bg-indigo-400",
    },
    {
      id: 6,
      category: "Art History",
      title: "Parenting Multiple Kids With Mental Health Challenges",
      author: "john william",
      color: "bg-pink-400",
    },
  ];
  const ArticleCard = ({ article }) => (
    <div className="bg-[#F178B6B8]/70 backdrop-blur-md   overflow-hidden shadow-xl     ">
      <div className="h-48 bg-gray-300 relative overflow-hidden">
        <img
          src="/images/f.png"
          alt={article.title}
          className="w-full h-full object-cover"
        />
        {/* <div
          className={`absolute bottom-3 left-3 ${article.color} text-white text-[24px] px-3 py-1   bg-[#F178B6A3]/50 font-bold`}
        >
          {article.category}
        </div> */}
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
      {" "}
      <section className="max-w-[1396.14453125] h-auto mx-auto px-4 mt-32">
         

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="flex justify-center mt-16 p-20">
          <button className="bg-[#F178B69C]  hover:bg-pink-500 w-[457px] text-[#FFFFFF] text-[40px] font-bold py-4 px-12   shadow-lg transform transition active:scale-95">
            View More
          </button>
        </div>
      </section>
    
    </>
  );
}
