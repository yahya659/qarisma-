import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DiscoverSection() {
  return (
    <>
      <div className="w-[1352px] h-[596px] mx-auto bg-[#5D5FEF9C]/30   p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center mb-24 shadow-2xl">
        {" "}
        <div className="flex-1">
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase leading-tight">
            Beyond the
            <br />
            Headlines
          </h3>
          <p className="text-white text-lg md:text-xl font-bold leading-relaxed opacity-90">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth
          </p>
        </div>
        <div className="w-[500px] h-[500px] md:w-1/2  overflow-hidden ">
          <img
            src="/images/social/freepik1.jpg"
            className="w-full h-full object-cover"
            alt="feature"
          />
        </div>
      </div>

      {/* //    Pagination  */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button className="text-white hover:scale-110 transition-transform">
          <ChevronLeft size={36} strokeWidth={4} />
        </button>
        <button className="w-12 h-12 rounded-full bg-[#6573f0] text-white font-black text-xl shadow-xl flex items-center justify-center">
          1
        </button>
        <button className="w-12 h-12 rounded-full text-white font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center">
          2
        </button>
        <button className="w-12 h-12 rounded-full text-white font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center">
          3
        </button>
        <button className="text-white hover:scale-110 transition-transform">
          <ChevronRight size={36} strokeWidth={4} />
        </button>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}
