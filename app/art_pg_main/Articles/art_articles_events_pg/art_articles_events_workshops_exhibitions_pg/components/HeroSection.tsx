import React from "react";

export default function HeroSection() {
  return (
    <>
      {" "}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <section className="mt-8 mb-16 relative min-h-[100vh] flex items-center">
          <div className="z-20 max-w-2xl">
            <span className="text-[40px] font-bold    mb-4 block opacity-80">
              Explore more about
            </span>
            <h1 className="text-[40px] text-[#F178B6] md:text-6xl font-bold mb-6 leading-tight">
              Arts & <span className="text-[#F178B6]">live sessions</span>
            </h1>
            <p className="text-[#000000] mb-8 text-[36px]  font-bold max-w-lg">
              It has one principle and one motto that can be read individually,
              meaning each It has one principle and one motto that can be read
              individually.
            </p>
            <button className="bg-[#5D5FEF85]/50 hover:bg-blue-700 text-white px-10 py-3 rounded-2xl font-bold transition-all text-[32px] shadow-xl active:scale-95">
              Explore more
            </button>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block">
            <div className="relative w-full h-full">
              <div className="absolute bottom-50 right-0 w-80 h-96 overflow-hidden ">
                <img
                  src="/images/exhibitions1.jpg"
                  className="w-full h-full object-cover"
                  alt="Art 1"
                />
              </div>
              <div className="absolute bottom-0 right- w-72 h-80   z-10">
                <img
                  src="/images/exhibitions1.jpg"
                  className="w-full h-full object-cover"
                  alt="Art 2"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
