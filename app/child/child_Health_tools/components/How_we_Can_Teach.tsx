import React from "react";

export default function How_we_Can_Teach() {
  const subCards = [
    { id: 1, title: "Supporting vs Enabling" },
    { id: 2, title: "Supporting vs Enabling" },
    { id: 3, title: "Supporting vs Enabling" },
  ];
  return (
    <>
      {" "}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
          How we Can Teach & Deal with <br /> Children Feelings & Emotions
        </h2>

        {/* Main Feature Card */}
        <div className="bg-purple-400/40 rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <div className="w-full max-w-[845px] h-[200px] sm:h-[280px] md:h-[350px] lg:h-[404px] overflow-hidden shadow-xl border-2 border-white/20">
            <img
              src="/images/child/tols3.png"
              className="w-full h-full object-cover"
              alt="top"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full max-w-[845px] mx-auto mt-4 space-y-2 md:space-y-3">
          <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[48px]">
            Latest News
          </h3>

          <p className="text-sm sm:text-base md:text-lg lg:text-[24px] opacity-80">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth.
          </p>
        </div>

        {/* Sub-cards Row */}
         
        <main className="mx-auto px-4 py-8 space-y-12 md:space-y-16">
          <section className="space-y-8 md:space-y-10 py-10">
            

            <div className="flex flex-wrap justify-center gap-6 w-full h-auto px-2 sm:px-4">
              {[
                {
                  
                  img: "/images/child/tols3.png",
                },
                {  img: "/images/child/tols3.png" },
                {  img: "/images/child/tols3.png" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#BA6CA6] p-4  w-full sm:w-[260px] md:w-[280px] lg:w-[300px] shadow-lg border border-white/10 hover:-translate-y-2 transition-transform"
                >
                  {/* Image */}
                  <div className="  overflow-hidden mb-4 border-2 border-white/20 h-40 w-full">
                    <img
                      src={item.img}
                      // alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-black text-sm sm:text-base bg-[#5D5FEF6E] mb-2 px-2 py-1 rounded-md">
                    {/* {item.title} */}
                  </h3>

                  {/* Text */}
                  <p className="text-xs sm:text-sm md:text-base text-black font-bold leading-relaxed">
                   Supporting vs Enabling
                  </p>

                  {/* Button */}
                
                </div>
              ))}
            </div>
          </section>

          {/* Headline Section */}
        
        </main>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3, 4, 5].map((dot) => (
            <div
              key={dot}
              className={`w-3 h-3 rounded-full ${dot === 2 ? "bg-purple-600 w-6" : "bg-purple-300"}`}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
}
