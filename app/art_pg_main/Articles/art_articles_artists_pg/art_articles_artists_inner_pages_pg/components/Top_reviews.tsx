import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React from "react";

export default function Top_reviews() {
  const REVIEWS = [
    {
      id: 1,
      name: "Zineb M",
      location: "Cairo, Egypt",
      rating: 5,
      text: "I Really loved your ways in creating interesting contents!",
      color: "bg-[#5D5FEF85]/50",
    },
    {
      id: 2,
      name: "Zineb M",
      location: "Cairo, Egypt",
      rating: 5,
      text: "I Really loved your ways in creating interesting contents!",
      color: "bg-[#F178B6A3]/60",
    },
    {
      id: 3,
      name: "Zineb M",
      location: "Cairo, Egypt",
      rating: 5,
      text: "I Really loved your ways in creating interesting contents!",
      color: "bg-[#5D5FEF85]/50",
    },
  ];
  return (
    <>
      {" "}
      <section className="max-w-6xl mx-auto px-6 py-20   backdrop-blur-sm   mb-20  ">
        <h2 className="text-[48px] font-bold text-[#5D5FEF] text-center mb-16 uppercase tracking-tighter">
          top reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className={`${review.color} backdrop-blur-md p-8   shadow-xl relative`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={34.70478820800781} fill="gold" stroke="gold" />
                ))}
              </div>
              <p className="text-[#000000] text-[20px] font-bold italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/images/person2.png"
                  className="w-12 h-12 rounded-full  "
                  alt=""
                />
                <div>
                  <h4 className="font-black text-[16px] text-[#000000]">
                    {review.name}
                  </h4>
                  <p className="text-[16px] text-white ">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {}
      {/* stay informed */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="bg-[#5D5FEF7D]/50 backdrop-blur-md p-6 rounded-[10px] flex flex-col md:flex-row items-center justify-between   ">
          <h3 className="text-white text-xl font-black italic mb-4 md:mb-0">
            stay informed, learn more
          </h3>
          <button className="bg-[#F178B6]   text-white px-10 py-3 rounded-2xl font-black shadow-lg t   ">
            send message
          </button>
        </div>
      </div>
      {/* paginachion */}
      <div className="max-w-6xl mx-auto px-6 mb-20 flex justify-center items-center gap-6">
        <button className="w-16 h-16 bg-blue-400/50 rounded-2xl flex items-center justify-center text-white">
          <ChevronLeft size={40} />
        </button>
        <a href="/art_pg_main/Articles/art_articles_artists_pg"><button className="w-16 h-16 bg-blue-400/50 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-xl">
          1
        </button></a>
        
        <button className="w-16 h-16 bg-indigo-500  rounded-2xl flex items-center justify-center text-white text-3xl font-black">
          2
        </button>
        <button className="w-16 h-16 bg-blue-400/50 rounded-2xl flex items-center justify-center text-white text-3xl font-black">
          3
        </button>
        <button className="w-16 h-16 bg-blue-400/50 rounded-2xl flex items-center justify-center text-white">
          <ChevronRight size={40} />
        </button>
      </div>
    </>
  );
}
