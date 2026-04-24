import { Play } from "lucide-react";

export default function Share_your_creativity(){
    return(<section className="relative z-10 px-8 py-16 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            
            {/* Left Content */}
            <div className="flex-1 text-left">
              <h2 className="text-[35px] font-black text-black mb-4">Share your creativity & Art with us</h2>
              <p className="text-white font-medium text-base text-[25px] leading-relaxed mb-8 max-w-lg drop-shadow-sm">
                It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
              </p>
              <button className="bg-[#6B61F6] hover:bg-[#584EE6] text-white px-8 py-3 rounded-xl font-black text-lg shadow-xl transition transform hover:-translate-y-1 tracking-wide">
                Explore
              </button>
            </div>
            
            {/* Right Image/Video Placeholder */}
            <div className="flex-1 w-full max-w-lg relative">
              {/* Solid black offset shadow to match design */}
              <div className="absolute top-4 left-4 w-full h-full bg-black rounded-lg"></div>
              
              <div className="relative rounded-lg overflow-hidden border-2 border-white/10 z-10">
                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Creativity & Art" className="w-full h-64 md:h-80 object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform">
                    <Play size={28} className="ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>);
}