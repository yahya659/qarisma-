import { ArrowLeft, ArrowRight, Play } from "lucide-react";

export default function Explore_Latest_News() {
  return (
    <>
      {/* Explore Latest News Section */}
      <section className="py-8 max-w-6xl mx-auto px-8">
        <div className="text-center mb-10">
          <h2 className="text-[64px] font-black text-black mb-2">
            Explore Latest News
          </h2>
          <p className="text-black font-medium text-[40px]">
            Top headlines and in-depthg across the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Large Headline Card */}
          <div className="md:col-span-2 bg-[#A084E8] rounded-xl overflow-hidden shadow-2xl border-x-[6px] border-[#B9A2F3] flex flex-col">
            <div className="h-[280px] w-full">
              <img
                src="/images/entertainment/Games1.jpg"
                alt="Headline news"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-[#A084E8] flex-1">
              <h3 className="text-[36px] font-black text-black mb-2">Headline</h3>
              <p className="text-black/85 text-[24px] font-medium mb-4 leading-relaxed">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth
              </p>
              <a
                href="#"
                className="text-blue-700 font-bold text-[24px] hover:underline decoration-2 underline-offset-2"
              >
                View more
              </a>
            </div>
          </div>

          {/* Right Stacked Videos */}
          <div className="flex flex-col justify-between gap-6">
            {[1, 2].map((video) => (
              <div
                key={video}
                className="relative rounded-xl overflow-hidden h-[190px] shadow-xl border-x-[6px] border-[#B9A2F3]"
              >
                <img
                  src="/images/entertainment/Games1.jpg"
                  alt="Video news"
                  className="w-[374px] h-[318px] object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button className="w-12 h-12 rounded-full bg-[#5D5FEF6E] text-white flex items-center justify-center shadow-lg hover:scale-105 transition">
                    <Play size={20} className="ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Pager */}
        <div className="flex justify-center items-center gap-3 mt-8">
          <button className="w-8 h-8 rounded-full bg-[#5C4DB5] text-white flex items-center justify-center hover:bg-[#6A5AE0] transition shadow-md">
            <ArrowLeft size={16} strokeWidth={3} />
          </button>
          <div className="w-3.5 h-3.5 rounded-full bg-black/10"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-black/10"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-black/10"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-black/10"></div>
          <button className="w-8 h-8 rounded-full bg-[#5C4DB5] text-white flex items-center justify-center hover:bg-[#6A5AE0] transition shadow-md">
            <ArrowRight size={16} strokeWidth={3} />
          </button>
        </div>
      </section>
    </>
  );
}
