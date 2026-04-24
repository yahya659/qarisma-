import { ArrowLeft, ArrowRight, Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-20   relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-6 mb-16 overflow-x-auto pb-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`relative group shrink-0 transition-all duration-500  overflow-hidden  ${i === 2 ? "110 z-10 w-80" : "scale-90 opacity-100 w-64"}`}
            >
              <img
                src="/images/entertainment/entertainment4.jpg"
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
  );
}
