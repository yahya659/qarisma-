import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Pagination(){
    return (
        <>  {/* Global Pagination - Kept exactly from your selection */}
        <section className="flex justify-center items-center gap-3 pb-8 pt-8">
          <button className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition">
             <ChevronsLeft size={20} strokeWidth={3} />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#6A5AE0] text-white font-bold text-lg flex items-center justify-center shadow-md">
            1
          </button>
          <button className="w-10 h-10 rounded-full bg-white/30 text-white font-bold text-lg flex items-center justify-center hover:bg-white/50 transition">
            2
          </button>
          <button className="w-10 h-10 rounded-full bg-white/30 text-white font-bold text-lg flex items-center justify-center hover:bg-white/50 transition">
            3
          </button>
          <button className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition">
             <ChevronsRight size={20} strokeWidth={3} />
          </button>
        </section></>
    );
}