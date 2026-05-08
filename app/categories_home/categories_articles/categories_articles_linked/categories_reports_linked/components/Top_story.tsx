import React from "react";

export default function Top_story() {
  return (
    <>
      <section className="bg-[#5D5FEF9C]/60 w-full max-w-[1263px] min-h-[617px] p-6 md:p-8 mb-12 mx-auto flex flex-col md:flex-row items-center justify-center gap-8 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-white/10 skew-x-12"></div>

        <div className="w-full md:w-1/2 relative z-10 flex justify-center">
          <div className="bg-purple-800 w-full max-w-[478px] h-[250px] sm:h-[320px] md:h-[411px] transition-transform duration-500 shadow-lg">
            <img
              src="/images/categories/oo1.jpg"
              alt="Top story"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-white z-10 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-[48px] text-[#000000]  bg-[#F178B687]/50 font-bold mb-4 capitalize opacity-90">
            top story
          </h2>
          <h2 className="text-[48px] text-[#F178B6]   font-bold mb-4 capitalize opacity-90">
           Beyond Headlines
          </h2>

          <p className="text-lg sm:text-2xl md:text-[32px] font-bold mb-6 opacity-90 px-2 md:px-0">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth.
          </p>

          <button className="bg-[#5D5FEF] hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-md">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
}
