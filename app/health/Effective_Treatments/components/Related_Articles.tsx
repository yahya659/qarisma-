import React from "react";

export default function Related_Articles() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Related Articles */}
        <div className="lg:col-span-5 flex flex-col">
          <h2 className="text-white text-[40px] font-extrabold mb-6 drop-shadow-md">
            Related Articles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-[]    shadow-lg border border-purple-400/50 flex flex-col transform transition-transform hover:-translate-y-1"
              >
                <div className="relative h-[110px]">
                  <img
                    src="/images/health/health5.jpg"
                    alt="Article thumbnail"
                    className="w-[266.3793640136719] h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                  <span className="absolute bottom-1 left-1 bg-[#F178B6A3] text-white text-[20px] font-bold px-2 py-0.5 rounded shadow">
                    Major Success
                  </span>
                </div>
                <div className="p-3 bg-[#F178B6A3]/60 flex-1 flex flex-col justify-between">
                  <p className="text-[10px] text-white font-medium leading-tight mb-3">
                    It has one principle and one motto that can be read
                    individually, meaning each word on its own...
                  </p>
                  <button className="bg-[#F57FA0] text-white text-[10px] font-bold px-4 py-1.5 rounded-md hover:bg-pink-500 self-end shadow-sm">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Large Headline Card */}
        <div className="lg:col-span-7 flex flex-col h-full">
          <div className="bg-[#5D5FEFC7]/50  p-6 shadow-xl w-[823px] h-[907px] flex-1 flex flex-col justify-center border-l-2 border-purple-300/30">
            <div className="relative h-[250px] md:h-[300px] mb-6  overflow-hidden shadow-md">
              <img
                src="/images/health/health5.jpg"
                alt="Surgery/Medical setup"
                className="w-[757.9067993164062] h-[447.7611999511719] object-cover"
              />
              <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay"></div>
            </div>

            <h2 className="text-white text-[64px] font-extrabold mb-3 drop-shadow-sm">
              Headline
            </h2>
            <p className="text-black font-extrabold text-[36px] leading-snug mb-5">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>
            <a
              href="#"
              className="text-white font-extrabold text-[32px] hover:text-gray-200 transition-colors inline-block underline underline-offset-4 decoration-2"
            >
              View more
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
