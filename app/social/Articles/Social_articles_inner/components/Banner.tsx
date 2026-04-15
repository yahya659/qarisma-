"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Banner(){
    function setShowPopup(arg0: boolean): void {
        throw new Error("Function not implemented.");
    }

    return(
        <>
           {/* CTA Banner */}
        <div className="bg-[#8b75e6]/80 backdrop-blur-md rounded-2xl p-6 md:px-12 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 border border-white/20 shadow-2xl">
          <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-tight">
            stay informed, learn more & contact us
          </h3>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-[#6665ff] hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold uppercase text-sm shadow-xl transition-all"
          >
            send message
          </button>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button className="text-white hover:scale-110 transition-transform">
            <ChevronLeft size={32} strokeWidth={3} />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#6573f0] text-white font-bold text-lg shadow-lg">
            1
          </button>
          <button className="w-10 h-10 rounded-full text-white font-bold text-lg hover:bg-white/20 transition-all">
            2
          </button>
          <button className="w-10 h-10 rounded-full text-white font-bold text-lg hover:bg-white/20 transition-all">
            3
          </button>
          <button className="text-white hover:scale-110 transition-transform">
            <ChevronRight size={32} strokeWidth={3} />
          </button>
        </div>
        </>
    );
}