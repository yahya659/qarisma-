import { Star } from "lucide-react";

export default function Feedbacks() {
   
  return (
   <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
            <h2 className="text-[40px] font-semibold mb-6">Feedbacks & Reviews</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="bg-pink-300/30 backdrop-blur-lg p-5 rounded-xl shadow-lg">
                  <div className="text-yellow-400 mb-2">★★★★★</div>

                  <p className="text-[20px] text-white/90 mb-4">
                    I really loved your ways in creating interesting contents!
                  </p>

                  <div className="flex items-center gap-3">
                    <img src="/images/Games/zainp.jpg" className="w-15 h-15 rounded-full" />
                    <div>
                      <p className="text-[16px] font-semibold">Zineb M</p>
                      <span className="text-[16px] text-white/60">Cairo - Egypt</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  );
}
