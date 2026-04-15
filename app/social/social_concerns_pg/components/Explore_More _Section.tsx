import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Explore_More_Section(){
    return(
        <>
          <section className="mb-20">
          <h2 className="text-[64px] font-bold text-center text-[#000000] mb-12">
            Explore More about <span className="text-white">Social life</span>
          </h2>
          
          <div className="flex items-center gap-4 relative">
            <button className="hidden md:flex p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors shadow-xl">
              <ChevronLeft size={24} />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white/20">
                    <img 
                      src="/images/social/scoli2.jpg" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt="Social life"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="mt-4 p-4 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
                    <p className="text-[16px] text-[#FFFFFF] leading-snug">
                      It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="hidden md:flex p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors shadow-xl">
              <ChevronRight size={24} />
            </button>
          </div>
        </section>
        </>
    );
}