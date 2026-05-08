import { Star } from "lucide-react";
import React from "react";

export default function Top_reviews() {
  const testimonials = [
    {
      name: "Alex M.",
      role: "Designer",
      text: "Quality content that keeps me coming back every day!",
      rating: 5,
    },
    {
      name: "Sarah J.",
      role: "Photographer",
      text: "The best source for visual inspiration and trends.",
      rating: 5,
    },
    {
      name: "Mark R.",
      role: "Architect",
      text: "Professional reporting and beautiful layout designs.",
      rating: 5,
    },
  ];
  return (
    <>
      {" "}
    <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-[#F178B6A3]/60">

  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-[32px] sm:text-[48px] md:text-[64px] font-black text-[#5D5FEF] mb-2 uppercase tracking-tighter">
      top reviews
    </h2>

    <p className="text-[#FFFFFF] text-[16px] sm:text-[24px] md:text-[36px] mb-10 sm:mb-16 px-2">
      Top headlines and in-depth reporting across the world
    </p>

    {/* Reviews */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

      {testimonials.map((review, i) => (
        <div
          key={i}
          className="bg-[#5D5FEF85] backdrop-blur-md p-5 sm:p-6 lg:p-8 text-left hover:border-pink-500/50 transition-all flex flex-col gap-4 sm:gap-6 rounded-xl"
        >

          {/* Stars */}
          <div className="flex gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="sm:size-[28px] lg:size-[34px] fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Text */}
          <p className="text-[14px] sm:text-[16px] md:text-[20px] text-[#000000] italic leading-relaxed">
            "{review.text}"
          </p>

          {/* User */}
          <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-white/10">

            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 overflow-hidden">
              <img
                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                alt={review.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h5 className="font-bold text-[14px] sm:text-[16px] text-[#000000]">
                {review.name}
              </h5>
              <p className="text-[12px] sm:text-[14px] md:text-[16px] text-white">
                {review.role}
              </p>
            </div>

          </div>

        </div>
      ))}

    </div>

    {/* Pagination dots */}
    <div className="flex justify-center gap-2 sm:gap-3 mt-10 sm:mt-12">

      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
            i === 1
              ? "bg-pink-500 border-2 border-white/50"
              : "bg-white/20"
          }`}
        ></div>
      ))}

    </div>

  </div>

</section>
    </>
  );
}
