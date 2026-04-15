import { ArrowLeft, ArrowRight, Play } from "lucide-react";

export default function SocietySection() {
  return (
    <>
      {/* Video / Stories Section */}
      <section className="py-20   relative">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-6 mb-16 overflow-x-auto pb-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`relative group shrink-0 transition-all duration-500  overflow-hidden  ${i === 2 ? "110 z-10 w-80" : "scale-90 opacity-80 w-64"}`}
              >
                <img
                  src="/images/social/freepik1.jpg"
                  alt="Story"
                  className="w-[421px]  h-[421px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                  <div className="w-16 h-16 bg-[#5D5FEF6E] backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                    <Play fill="white" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[32px] font-black text-[#000000] mb-6 uppercase tracking-tight">
              Beyond the Headlines
            </h2>
            <p className="text-[#FFFFFF] text-[32px] mb-10 leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth.
            </p>
            <button className="bg-[#5D5FEF] hover:bg-blue-700 w-[327px] h-[64px] text-white px-12 py-3 rounded-2xl font-bold shadow-xl">
              Learn More
            </button>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
              <ArrowLeft size={20} />
            </button>
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
              <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
            </div>
            <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
