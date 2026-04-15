import { Play } from "lucide-react";

export default function Programs_Section() {
  return (
    <section className="mb-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-[#5D5FEFC7] backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group cursor-pointer transition-all hover:bg-white/10"
          >
            <div className="relative aspect-video">
              <img
                src="/images/social/sustainability1.jpg"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                alt="Podcast Thumbnail"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <div className="w-14 h-14 bg-[#5D5FEFC7] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play fill="white" size={24} className="ml-1" />
                </div>
              </div>
            </div>
            {/* Visual Audio Progress Bar Mockup */}
            <div className="p-5 bg-gradient-to-r from-pink-500/20 to-purple-500/20">
              <div className="flex items-center gap-3">
                <div className=" h-1.5 bg-white/20 rounded-full overflow-hidden"></div>
                {/* <span className="text-[10px] font-mono text-white/60">12:45 / 45:00</span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-12">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i === 1 ? "bg-blue-500" : "bg-white/20"}`}
          />
        ))}
      </div>
    </section>
  );
}
