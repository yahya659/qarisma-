import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Featured_Card(){

    return(
     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <h2 className="text-3xl md:text-[32px] font-black text-white text-center mb-10 drop-shadow-md">
            Latest Recipes & Articles
          </h2>

          {/* Top Story Card */}
          <div className="relative bg-[#5D5FEF85]  shadow-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-8 mb-12 border border-[#8a72ef] z-10">
            {/* Decorative Side Columns */}
            <div className="hidden md:flex absolute left-[-15px] top-1/2 -translate-y-1/2 w-8 h-[90%] bg-gradient-to-b from-[#9681f2] to-[#6b50d9] border border-[#a695f5] rounded-lg shadow-inner items-center justify-center flex-col gap-2">
               <div className="w-2 h-2 rounded-full bg-white/50"></div>
               <div className="w-1 h-32 bg-black/10 rounded-full"></div>
               <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
            <div className="hidden md:flex absolute right-[-15px] top-1/2 -translate-y-1/2 w-8 h-[90%] bg-gradient-to-b from-[#9681f2] to-[#6b50d9] border border-[#a695f5] rounded-lg shadow-inner items-center justify-center flex-col gap-2">
               <div className="w-2 h-2 rounded-full bg-white/50"></div>
               <div className="w-1 h-32 bg-black/10 rounded-full"></div>
               <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>

            <div className="w-full md:w-1/2 h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-lg border-2 border-[#947bf4]">
              <img 
                src="/images/entertainment/enterainment5.jpg" 
                alt="Donuts" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full md:w-1/2 text-left px-2 md:px-6">
              <h3 className="text-3xl font-black text-black mb-4">Top Story</h3>
              <p className="text-white font-bold leading-relaxed mb-8 text-base">
                It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
              </p>
              <button className="px-8 py-2.5 bg-[#F178B6] hover:bg-pink-600 text-white font-bold  transition-colors shadow-lg">
                Learn More
              </button>
            </div>
          </div>

        </div>
    );
}