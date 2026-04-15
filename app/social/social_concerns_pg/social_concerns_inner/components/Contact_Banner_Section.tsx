import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Contact_Banner_Section(){
    return (
        <>
          {/* Contact Banner Section */}
          <section className="mb-20">
            <div className="bg-blue-600/40 backdrop-blur-xl rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-0">
                stay informed, learn more & contact us
              </h2>
              <button className="px-10 py-3 bg-blue-500 hover:bg-blue-400 rounded-xl font-bold transition-all shadow-lg whitespace-nowrap">
                send message
              </button>
            </div>
          </section>

          {/* Bottom Pagination */}
          <div className="flex justify-center items-center gap-4 mb-20">
            <button className="p-2 text-white/50 hover:text-white transition-colors">
              <ChevronLeft size={30} />
            </button>
            <div className="flex gap-2">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-all ${
                    num === 1
                      ? "bg-blue-500 shadow-lg shadow-blue-500/50"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
            <button className="p-2 text-white/50 hover:text-white transition-colors">
              <ChevronRight size={30} />
            </button>
          </div>
        </>
    );

}