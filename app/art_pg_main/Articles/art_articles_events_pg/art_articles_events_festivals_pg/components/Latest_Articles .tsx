import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Latest_Articles () {
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
    <div className="bg-[#5D5FEF6E]/40 backdrop-blur-md overflow-hidden shadow-xl     ">
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
      <section className="max-w-[1396.14453125] h-auto mx-auto px-4 mt-22">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-[48px] font-bold text-[#FFFFFF] ">
            Latest Articles 
          </h2>
          <button className="text-[#FFFFFF] font-bold text-[40px] hover:text-pink-500 transition-colors">
            View all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="flex justify-center mt-16 p-20">
         
        </div>
      </section>
      {/* paginadion */}
      <div className="max-w-7xl mx-auto px-4 mt-5  mb-20">
        <div className="flex items-center justify-center gap-4">
          <button className="w-14 h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white">
            <ChevronLeft size={32} />
          </button>
          <button className="w-14 h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-200">
            1
          </button>
          <a href="/art_pg_main/Articles/art_articles_artists_pg/art_articles_artists_inner_pages_pg">
            {" "}
            <button className="w-14 h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
              2
            </button>
          </a>

          <button className="w-14 h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
            3
          </button>
          <button className="w-14 h-14 bg-indigo-400/50 rounded-2xl flex items-center justify-center text-white">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </>
  );
}
