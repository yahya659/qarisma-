import React from "react";

export default function Feature_Story() {
  return (
    <>
     <main className="relative z-10 max-w-7xl mt-20 mx-auto px-4 md:px-8 pb-20">
      {" "}
      <div className="relative w-full   overflow-hidden h-full bg-[#F178B6C7]/78 flex flex-col md:flex-row shadow-2xl">
        <div className="md:w-1/2 relative h-[300px] md:h-auto">
          <img
            src="/images/reviews1.jpg"
            alt="Artistic trends"
            className="w-full h-full object-cover     "
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-600/20" /> */}
        </div>

        <div className="md:w-1/2 p-10 md:p-20 flex flex-col justify-center text-white">
          <span className="  backdrop-blur-md px-4 py-1 text-[#000000] text-[36px] font-bold w-fit mb-6">
            Feature Story
          </span>
          <h1 className="text-[48px]  font-black mb-6 text-[#FFFFFF] leading-tight">
            The Language of Light and Shadow
          </h1>
          <p className="text-[30px] text-[#000000] opacity-90 mb-8 max-w-md leading-relaxed">
            It has one principle and one motto that can be read individually,
            meaning each it has one principle and one motto.
          </p>
          <a
            href="#"
            className="text-[32px] font-bold   decoration-4 underline-offset-8 text-[#000000] transition-colors mb-12 block"
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
      </main>
    </>
  );
}
