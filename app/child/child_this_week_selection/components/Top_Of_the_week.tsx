import React from "react";

export default function Top_Of_the_week() {
  return (
    <>
      {" "}
      <main className="mx-auto px-4 py-8 space-y-12 md:space-y-16">
        <section className="space-y-8 md:space-y-10 py-10">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-black text-center uppercase tracking-wider">
            Top Of the week
          </h2>

          <div className="flex flex-wrap justify-center gap-6 w-full h-auto px-2 sm:px-4">
            {[
              {
                title: "The importance of art",
                img: "/images/child/tols3.png",
              },
              { title: "Physical Health", img: "/images/child/tols3.png" },
              { title: "Growth & Minds", img: "/images/child/tols3.png" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-pink-400/40 p-4  w-full sm:w-[260px] md:w-[280px] lg:w-[300px] shadow-lg border border-white/10 hover:-translate-y-2 transition-transform"
              >
                {/* Image */}
                <div className="  overflow-hidden mb-4 border-2 border-white/20 h-40 w-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="font-black text-sm sm:text-base bg-[#5D5FEF6E] mb-2 px-2 py-1 rounded-md">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="text-xs sm:text-sm md:text-base text-black font-bold leading-relaxed">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own...
                </p>

                {/* Button */}
                <button className="mt-3 bg-[#F178B6] w-[106.08928680419922] h-[26.050031661987305] px-4 py-1 rounded-md text-[13px]   font-bold hover:bg-white/40 transition">
                  Read more
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Headline Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-10 bg-[#F178B6A3]/64   sm:p-8 md:p-12 border border-white/5">
          {/* Text */}
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] text-black font-black">
              Headline
            </h2>

            <p className="text-base sm:text-xl md:text-2xl lg:text-[36px] text-black font-bold leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth.
            </p>

            <button className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold hover:opacity-70 transition-opacity">
              View more
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 overflow-hidden shadow-2xl">
            <img
              src="/images/child/tols3.png"
              alt="headline"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      </main>
    </>
  );
}
