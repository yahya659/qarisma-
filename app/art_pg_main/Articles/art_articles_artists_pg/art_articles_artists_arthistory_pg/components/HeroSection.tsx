import React from "react";

export default function HeroSection() {
  return (
    <>
      {" "}
      <div className="relative w-full   overflow-hidden h-full bg-[#F178B6C7]/78 flex flex-col md:flex-row shadow-2xl">
        <div className="md:w-1/2 relative h-[300px] md:h-auto">
          <img
            src="/images/arthistory.jpg"
            alt="Artistic trends"
            className="w-full h-full object-cover     "
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-600/20" /> */}
        </div>

        <div className="md:w-1/2 p-10 md:p-20 flex flex-col justify-center text-white">
          <span className="bg-[#F178B6] backdrop-blur-md px-4 py-1 text-[#5D5FEF] text-[36px] font-bold w-fit mb-6">
            Top Story
          </span>
          <h1 className="text-[48px]  font-black mb-6 text-[#000000] leading-tight">
            Artistic trends
          </h1>
          <p className="text-[30px] opacity-90 mb-8 max-w-md leading-relaxed">
            It has one principle and one motto that can be read individually,
            meaning each it has one principle and one motto.
          </p>
          <a
            href="#"
            className="text-[32px] font-bold   decoration-4 underline-offset-8 text-[#5D5FEF] transition-colors mb-12 block"
          >
            Read more
          </a>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <img
                src="/images/person2.png"
                className="w-[57px] h-[57px] rounded-full "
                alt=""
              />
              
            </div>
        <span className="text-[20px] font-medium opacity-80">
              Written by john william
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
