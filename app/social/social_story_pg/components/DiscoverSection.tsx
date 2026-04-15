import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DiscoverSection(){
    return (
           <section className="py-20 bg-[#F178B624]">
        <div className="container mx-auto px-6">
          <h2 className="text-[48px] font-bold text-center text-[#000000] mb-16">
            Explore More about <span className="text-[#FFFFFF] italic text-[48px]">cultures</span>
          </h2>

          <div className="flex items-center gap-4">
             <button className="p-3 text-blue-500 hover:bg-blue-50 rounded-full hidden md:block">
               <ChevronLeft size={48} strokeWidth={1} />
             </button>

          <div className="justify-center grid w-[350px] h-[370px] grid-cols-1 md:grid-cols-3 gap-8 flex-1">
  {[
    { title: "Tradition", img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800" },
    { title: "Harmony", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" },
    { title: "Legacy", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" }
  ].map((card, idx) => (
    <div key={idx} className="overflow-hidden shadow-lg transition-shadow flex flex-col items-center">

      {/* الصورة في الوسط */}
      <img
        src={card.img}
        alt={card.title}
        className="w-[352px] h-[186px] object-cover mx-auto"
      />

      <div className="p-6 bg-[#000000] text-white text-[16px] leading-relaxed text-center">
        <p>
          It has one principle and one motto that can be read individually,
          meaning each word on its own, or as a whole, we believe that reality
          and maturity are core for truth
        </p>
      </div>

    </div>
  ))}
</div>

             <button className="p-3 text-blue-500 hover:bg-blue-50 rounded-full hidden md:block">
               <ChevronRight size={48} strokeWidth={1} />
             </button>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-16">
            <button className="text-blue-300 hover:text-blue-500">
              <ChevronLeft size={32} />
            </button>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-xl bg-blue-500 text-white font-bold flex items-center justify-center">1</button>
              <button className="w-10 h-10 rounded-xl bg-blue-100 text-blue-500 font-bold flex items-center justify-center">2</button>
              <button className="w-10 h-10 rounded-xl bg-blue-100 text-blue-500 font-bold flex items-center justify-center">3</button>
            </div>
            <button className="text-blue-300 hover:text-blue-500">
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </section>
    );
}