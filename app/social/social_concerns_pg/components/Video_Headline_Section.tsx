import { ChevronLeft, ChevronRight, Play } from "lucide-react"

export default function Video_Headline_Section(){
    return(
   <>
         <section className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-[#BE76B173] p-8 ">
          <div>
            <h2 className="text-[#000000] text-[64px] font-bold mb-6">Headline</h2>
            <p className="text-[32px] text-[#FFFFFF] mb-8 leading-relaxed">
              It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
            </p>
            <button className="px-10 py-3 bg-[#5D5FEF9C] hover:bg-purple-500 rounded-xl transition-all border border-white/20 shadow-lg text-sm font-bold uppercase tracking-widest">
              Learn More
            </button>
          </div>
          
          <div className="relative  overflow-hidden shadow-2xl group cursor-pointer border-4 border-white/20">
            <img 
              src="/images/social/scoli2.jpg" 
              className="w-full h-full object-cover brightness-75"
              alt="Video thumbnail"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play fill="white" size={24} />
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-pink-500/40 to-transparent" />
          </div>
        </section>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mb-20">
          <button className="p-2 text-white/50 hover:text-white transition-colors"><ChevronLeft size={30} /></button>
          <div className="flex gap-2">
            {[1, 2, 3].map(num => (
              <button 
                key={num}
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-all ${
                  num === 1 ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          <button className="p-2 text-white/50 hover:text-white transition-colors"><ChevronRight size={30} /></button>
        </div>
   </>
    );
}