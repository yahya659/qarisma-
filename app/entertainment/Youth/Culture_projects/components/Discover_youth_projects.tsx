import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Discover_youth_projects() {
  return (
    <>
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[64px] font-bold mb-4">Discover youth projects</h2>
          <p className="text-[40px] text-[#000000] font-bold opacity-80">
            Top headlines and In-depth across the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-[#F178B6A3] rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 relative">
                <img
                  src={`https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400&sig=${item}`}
                  className="w-full h-full object-cover"
                  alt="Project"
                />
                <span className="absolute top-4 mt-38 left-0 bg-[#5D5FEF] text-[20px] px-2 py-1 text-[#000000]  uppercase font-bold">
                  Education
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[20px] mb-2">
                  Summer camp & Art Therapy
                </h3>
                <p className="text-[16px] italic opacity-80 mb-3">by Art group</p>
                <p className="text-[20px] line-clamp-2 mb-6 text-[#000000] font-bold">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[20px] font-bold">middle east</span>
                  <button className="px-6 py-2 bg-[#5D5FEF] hover:bg-indigo-700   text-[24px] font-bold transition">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
            <ChevronLeft />
          </button>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${i === 2 ? "bg-blue-400 scale-125" : "bg-pink-200 opacity-50"}`}
              ></div>
            ))}
          </div>
          <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
            <ChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}
