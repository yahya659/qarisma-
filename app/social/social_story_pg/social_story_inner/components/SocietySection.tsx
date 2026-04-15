import { ArrowLeft, ArrowRight, Play } from "lucide-react";

export default function SocietySection() {
  return (
    <>
      <section className="py-12 bg-white/30">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="bg-[#F178B673] rounded-[40px] overflow-hidden shadow-xl">
              <img
                src="/images/social/modern.jpg"
                alt="Main Visual"
                className="w-full h-[450px] object-cover"
              />
              <div className="p-10">
                <h2 className="text-[24px] font-bold text-[#5D5FEF] mb-6 uppercase">
                  Beyond Headlines
                </h2>
                <p className="text-[#FFFFFF] text-[24px] leading-relaxed font-semibold">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, we
                  believe that reality and maturity are core for truth
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Morning Watching Card */}
            <div className="bg-[#5D5FEF6E] backdrop-blur-md rounded-[32px] p-6 border border-purple-300/30">
              <h3 className="text-[24px] font-black text-[#000000] mb-6 uppercase tracking-wider">
                Morning Watching
              </h3>
              <div className="flex flex-col gap-4">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="bg-[#F178B6] p-3 rounded-2xl flex gap-4 items-center border border-white/50"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden relative shrink-0">
                      <img
                        src="/images/social/modern.jpg"
                        alt="Video"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white">
                        <Play size={16} fill="white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[20px] font-black text-[#5D5FEF] uppercase leading-tight">
                        Beyond the Headlines
                      </h4>
                      <p className="text-[14px] text-gray-700 mt-1 line-clamp-3 leading-tight">
                        It has one principle and one motto that can be read
                        individually, meaning each word on its own, or as a
                        whole...
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trends Card */}
            <div className="bg-[#5D5FEF6E] backdrop-blur-md rounded-[32px] p-6 border border-purple-300/30">
              <h3 className="text-[24px] font-black text-[#000000] mb-6 uppercase tracking-wider">
                Trends
              </h3>
              <div className="flex flex-col gap-4 ">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="bg-[#F178B6] p-4 rounded-2xl border border-pink-200/50"
                  >
                    <h4 className="text-[20px] font-black text-[#5D5FEF] uppercase">
                      Beyond the Headlines
                    </h4>
                    <p className="text-[14px] text-gray-700 mt-2 leading-relaxed">
                      It has one principle and one motto that can be read
                      individually, meaning each word on its own, or as a whole,
                      we believe that reality and maturity are core for truth
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pagination */}
        <div className="container mx-auto px-6 mt-16 flex justify-center items-center gap-6">
          <button className="p-2 text-blue-400">
            <ArrowLeft size={40} strokeWidth={1} />
          </button>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-2xl bg-blue-500 text-white font-black text-xl shadow-lg">
              1
            </button>
            <button className="w-12 h-12 rounded-2xl bg-white/80 text-blue-500 font-black text-xl shadow-md border border-blue-100">
              2
            </button>
            <button className="w-12 h-12 rounded-2xl bg-white/80 text-blue-500 font-black text-xl shadow-md border border-blue-100">
              3
            </button>
          </div>
          <button className="p-2 text-blue-400">
            <ArrowRight size={40} strokeWidth={1} />
          </button>
        </div>
      </section>
    </>
  );
}
