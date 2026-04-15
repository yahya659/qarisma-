import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DiscoverSection(){
    return (
        <section className="py-20 relative overflow-hidden">
              {/* Floating Butterflies Background effect */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-20 right-[10%] w-32 h-32 bg-purple-500 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-20 left-[10%] w-40 h-40 bg-pink-500 rounded-full blur-[100px]"></div>
              </div>

              <div className="max-w-7xl mx-auto px-6 text-center ">
                <h2 className="text-5xl font-black mb-4">
                  Discover your world
                </h2>
                <p className="text-[#000000] text-[40px] font-bold mb-16">
                  Top headlines and in-depth across the world
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      img: "/images/social/freepik1.jpg",
                      title: "Headlines",
                      color: "bg-purple-900/80",
                    },
                    {
                      img: "/images/social/freepik2 .jpg",
                      title: "Headlines",
                      color: "bg-indigo-900/80",
                    },
                    {
                      img: "/images/social/freepik3 .jpg",
                      title: "Headlines",
                      color: "bg-blue-900/80",
                    },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="group relative  overflow-hidden shadow-2xl transition-all hover:-translate-y-2 border border-white/10"
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={card.img}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div
                        className={` bg-[#000000] backdrop-blur-sm p-6 text-left`}
                      >
                        <h4 className="text-xl font-bold mb-4 bg-[#F178B669] w-[100px]">
                          {card.title}
                        </h4>
                        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                          It has one principle and one motto that can be read
                          individually, meaning each word on its own.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slider Controls */}
                <div className="flex justify-center items-center gap-6 mt-12">
                  <button className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors">
                    <ChevronLeft size={24} />
                  </button>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  </div>
                  <button className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors">
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </section>
    );
}