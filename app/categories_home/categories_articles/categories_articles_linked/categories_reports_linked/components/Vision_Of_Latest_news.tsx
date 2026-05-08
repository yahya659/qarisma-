import React from "react";

export default function Vision_Of_Latest_news() {
  const relatedArticles = [1, 2, 3, 4].map((id) => ({
    id,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=200",
  }));
  return (
    <>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="text-center text-[64px] font-bold text-white mb-2 drop-shadow-lg">
            Vision Of <span className="text-pink-400">Latest news</span>
          </h2>
          <p className="text-center text-[32px] text-white/80 mb-10 italic">
            Top headlines and in-depth reporting across the world
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Card */}
            <div className="lg:col-span-2 bg-[#F178B6A3]/60  overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1585241936939-be4099591252?auto=format&fit=crop&q=80&w=800"
                alt="News"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-[#5D5FEF]  font-bold text-[48px] mb-2">
                  Art & Society
                </h3>
                <h4 className="text-[40px] font-bold text-[#000000] mb-4">
                  Beyond the Headlines
                </h4>
                <p className="text-[#FFFFFF] text-[24px] mb-6">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, we
                  believe that reality and maturity are core for truth.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-400 rounded-full"></div>
                  <span className="font-semibold text-[24px] text-[#5D5FEF]">
                    Written by John William
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Side Panels */}
            <div className="space-y-6">
              <div className="bg-[#5D5FEF33] backdrop-blur-sm p-4  ">
                <h5 className="text-[#F178B6]  text-[24px]  font-bold ">
                  MORNING WATCHING
                </h5>
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex gap-4 mb-4 bg-[#F178B6] p-3 rounded-2xl"
                  >
                    <div className="w-16 h-16 bg-slate-800 rounded-xl flex-shrink-0"></div>
                    <div>
                      <h6 className="text-[#5D5FEF] font-bold text-[20px]">
                        Beyond the Headlines
                      </h6>
                      <p className="text-[#000000] text-[13px]">
                        A brief description of history matching across sectors.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#5D5FEF33] p-4  ">
                <h5 className="text-white font-bold mb-4   text-[24px]">
                  Related Articles
                </h5>
                <div className="grid grid-cols-2 gap-2">
                  {relatedArticles.map((art) => (
                    <img
                      key={art.id}
                      src={art.image}
                      className="w-full h-20 object-cover "
                      alt="related"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
