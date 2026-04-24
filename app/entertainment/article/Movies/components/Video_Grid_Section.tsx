import { Play } from "lucide-react";

export default function Video_Grid_Section(){
    return(
        <>
           {/* Video Grid Section */}
       <section className="px-12 py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12  gap-y-10">
            {[
              { id: 1, img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { id: 2, img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { id: 3, img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { id: 4, img: "https://images.unsplash.com/photo-1614113489855-66422ad300a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
            ].map((video) => (
              <div key={video.id} className="relative w-[606.0677490234375] h-[505.638671875]  overflow-hidden shadow-2xl border-x-[6px] border-[#9F93EB] bg-[#F178B6A3]">
                {/* Thumbnail */}
                <div className="h-64 w-full relative">
                  <img src={video.img} alt="Video thumbnail" className="w-full h-full object-cover" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-14 h-14 rounded-full bg-pink-500/90 flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform">
                      <Play fill="currentColor" size={24} className="ml-1" />
                    </button>
                  </div>
                </div>

                {/* Text Overlay Box */}
                {/* <div className="absolute bottom-0 left-0 w-[622px] right-0 bg-[#5D5FEF6E]/90 backdrop-blur-sm p-5 border-t border-white/10"> */}
                  <p className="text-[#FFFFFF] text-[20px] leading-relaxed mb-2 font-medium">
                    It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
                  </p>
                  <a href="#" className="text-white text-[20px] font-bold underline decoration-2 underline-offset-2 hover:text-pink-300">
                    Read more
                  </a>
                </div>
            //   </div>
            ))}
          </div>
        </section>
        </>
    );
}