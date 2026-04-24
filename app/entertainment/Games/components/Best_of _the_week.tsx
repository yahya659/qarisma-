import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Best_of_the_week(){
    return(
        <><section className="py-12 max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-[64px] font-black text-[#E879B5] mb-2 drop-shadow-sm">Best of the week</h2>
            <p className="text-black font-medium text-[40px]">Top headlines and in-depthg across the world</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className=" overflow-hidden shadow-xl  bg-[#F178B663]/39 flex flex-col">
                 <div className="h-44 w-full">
                    <img src="/images/entertainment/Games1.jpg" alt="Best of week" className="w-full h-full object-cover" />
                 </div>
                 <div className="p-3 bg-[#E879B5] text-center">
                    <span className="text-white font-black tracking-wider uppercase text-[24px] drop-shadow-sm">Educational</span>
                 </div>
              </div>
            ))}
          </div>

          {/* Mini Pager */}
          <div className="flex justify-center items-center gap-3">
            <button className="w-8 h-8 rounded-full bg-[#5C4DB5] text-white flex items-center justify-center hover:bg-[#6A5AE0] transition shadow-md"><ArrowLeft size={16} strokeWidth={3} /></button>
            <div className="w-3.5 h-3.5 rounded-full bg-black/10"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-black/10"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-black/10"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-black/10"></div>
            <button className="w-8 h-8 rounded-full bg-[#5C4DB5] text-white flex items-center justify-center hover:bg-[#6A5AE0] transition shadow-md"><ArrowRight size={16} strokeWidth={3} /></button>
          </div>
        </section></>
    );
}