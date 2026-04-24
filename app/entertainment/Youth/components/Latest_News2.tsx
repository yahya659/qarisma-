import { Play } from "lucide-react";

export default function Latest_News2() {
  return (
    <section className="py-16 bg-white/20">
      <div className="container mx-auto px-6">
        <h2 className="text-[64px] font-bold text-center mb-10 text-white drop-shadow-sm">
          Latest News
        </h2>

        <div className="w-[1079px] mx-auto  overflow-hidden shadow-2xl relative group">
          <img
            src="/images/Youth/Youth3.jpg"
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Featured"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
