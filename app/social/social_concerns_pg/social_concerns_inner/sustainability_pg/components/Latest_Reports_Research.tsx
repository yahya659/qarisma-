import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Latest_Reports_Research(){
    return(
       <section className="mb-25">
          <h2 className="text-[64px] text-[#000000] font-bold text-center mb-16 ">Latest Reports & Research</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {[
              { title: "Isolating and blurring social dimensions", img: "/images/social/sustainability1.jpg" },
                { title: "Modifying social change and power", img: "/images/social/lsustainability3.jpg" },
              { title: "Identifying social change and power", img: "/images/social/sustainability2.jpg" },
            
            ].map((report, idx) => (
              <div key={idx} className="bg-[#5D5FEF85] backdrop-blur-md  overflow-hidden group hover:border-pink-500/40 transition-all duration-500 hover:translate-y-[-5px]">
                <div className="relative aspect-video overflow-hidden">
                  <img src={report.img} className="w-full h-full object-cover transition-transform  duration-700 group-hover:scale-110" alt={report.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h4 className="text-[20px] font-bold mb-4  text-[#000000]  ">{report.title}</h4>
                  <p className="text-[15px] text-[#FFFFFF] mb-4 line-clamp-3 leading-relaxed">
                    It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth.
                  </p>
                </div>
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden xl:block">
              <button className="p-3 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg transition-all"><ChevronLeft size={28}/></button>
            </div>
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden xl:block">
              <button className="p-3 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg transition-all"><ChevronRight size={28}/></button>
            </div>
          </div>
          
          {/* Custom Pagination Dots */}
          <div className="flex justify-center gap-3 mt-12">
             {[1,2,3,4,5].map(i => <div key={i} className={`w-3 h-3 rounded-full transition-all duration-300 ${i===1 ? 'bg-blue-500 scale-125' : 'bg-white/20'}`} />)}
          </div>
        </section>
    );
}