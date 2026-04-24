import { Play } from "lucide-react";

export default function Latest_stories_Reports(){
    return(
        <>  <section className="max-w-6xl mx-auto mb-32">
          <h2 className="text-[64px] font-bold text-center mb-12">Latest stories & Reports</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Featured Story (Left) */}
            <div className="lg:col-span-2 right-20 w-[795.9318237304688] h-[769.58251953125] relative group cursor-pointer overflow-hidden bg-[#5D5FEF80] shadow-2xl">
              <img src="/images/Youth/Youth10.jpg" className="w-[734.7257690429688] h-[450px] object-cover opacity-60 group-hover:scale-105 transition duration-700" alt="Top story" />
              <div className="absolute  inset-0 flex flex-col justify-end p-8 md:p-12">
                {/* <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/40 hover:bg-white/40 transition">
                  <Play className="fill-white w-6 h-6 ml-1" />
                </div> */}
                <h3 className="text-[64px] md:text-4xl font-black w-[200px] h-[66px] bg-[#5D5FEF85] mb-4">top story</h3>
                <p className="max-w-xl text-white/90 text-[32px]">It has one principle and one motto that can be read individually, meaning each word on its own.</p>
              </div>
            </div>

            {/* Sidebar Stories (Right) */}
            <div className="flex flex-col gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-4 p-4 w-[362.5306091308594]  h-[200] bg-pink-500/20 border border-white/10 hover:bg-pink-500/30 transition">
                  <img src="/images/Youth/Youth10.jpg" className="w-24 h-24   object-cover" alt="Small" />
                  <div>
                    <h4 className="font-bold text-[#000000] text-[24px] uppercase mb-1">Headline</h4>
                    <p className="text-[14px] text-[#000000] line-clamp-3">A community-led project focusing on the intersection of art and social well-being.</p>
                    <button className="text-[#5D5FEF] text-[16px] font-bold mt-2 ">View more</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            <div className="w-3 h-3 rounded-full bg-pink-400"></div>
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
          </div>
        </section>
</>
    );
}