import React from "react";

export default function HeroSection() {
  return (
    <>
      {" "}
      <section className="    h-[100vh] overflow-hidden bg-[#F178B6]/50 shadow-2xl flex flex-col md:flex-row border border-white/10">
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-[48px] bg-[#F178B6]  text-[#5D5FEF] font-bold mb-6 leading-tight">
            Featured scoop
          </h1>
          <p className="text-[#000000] mb-8 text-[32px] font-bold max-w-md">
            It has one principle and one motto that can be read individually,
            meaning each
          </p>
          <button className="  underline text-[32px] text-white px-8 py-3   font-bold w-max transition-all shadow-lg active:scale-95">
          Read fullstory
          </button>
        </div>
        <div className="w-[749px] p-6 flex items-center justify-center">
          <div className="w-full h-[558px] rounded-3xl overflow-hidden shadow-2xl ">
            <img
              src="/images/scoop_inner1.png"
              alt="Biennale Event"
              className="w-[749px] h-[558px] object-cover opacity-70"
            />
          </div>
        </div>
      </section>
    </>
  );
}
