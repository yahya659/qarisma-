import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Latest_Movies(){
    return(
        <> {/* Latest Movies & News Carousel Section */}
        <section className="py-8 text-center max-w-7xl mx-auto px-4">
          <h2 className="text-[64px] font-black text-white mb-10 drop-shadow-md">Latest Movies & News</h2>
          
          <div className="flex items-center  justify-center gap-6">
            <button className="text-white hover:text-pink-300 transition-colors">
              <ChevronsLeft size={48} strokeWidth={3} />
            </button>

            {/* Inactive Left Card */}
            <div className="w-64 rounded-xl  overflow-hidden shadow-lg border-x-4 border-[#9F93EB] bg-[#5C4DB5] opacity-80 scale-95 transition-transform">
               <div className="h-32 relative">
                 <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Movie" className="w-full h-full object-cover" />
               </div>
               <div className="p-4 bg-[#594BBA]/90 h-24">
                 <p className="text-[10px] text-white/90 leading-tight">It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole.</p>
               </div>
            </div>

            {/* Active Center Card with Pink Padding */}
            <div className="w-72 bg-[#F07CB4]  p-3 rounded-xl shadow-2xl z-10 transform scale-105">
               <div className="rounded-lg overflow-hidden border-2 border-white/20">
                 <div className="h-40 relative">
                   <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Movie" className="w-full h-full object-cover" />
                 </div>
                 <div className="p-4 bg-[#F07CB4]">
                   <p className="text-[11px] text-white font-medium leading-tight text-left">
                     It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
                   </p>
                 </div>
               </div>
            </div>

            {/* Inactive Right Card */}
            <div className="w-64 rounded-xl overflow-hidden shadow-lg border-x-4 border-[#9F93EB] bg-[#5C4DB5] opacity-80 scale-95 transition-transform">
               <div className="h-32 relative">
                 <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Movie" className="w-full h-full object-cover" />
               </div>
               <div className="p-4 bg-[#594BBA]/90 h-24">
                 <p className="text-[10px] text-white/90 leading-tight">It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole.</p>
               </div>
            </div>

            <button className="text-white hover:text-pink-300 transition-colors">
              <ChevronsRight size={48} strokeWidth={3} />
            </button>
          </div>
        </section></>
    );
}