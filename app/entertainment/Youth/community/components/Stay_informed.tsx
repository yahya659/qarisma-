import { Send } from "lucide-react";

export default function Stay_informed(){
    return(
        <>
      {/* Call to Action Bar */}
      <section className="bg-[#5D5FEF7D] backdrop-blur-md px-10 py-8 flex flex-col md:flex-row items-center justify-between mx-6   -mb-10 relative z-40 shadow-2xl border border-white/10">
        <h3 className="text-2xl font-bold mb-4 md:mb-0">stay informed, learn more & contact us</h3>
        <button className="flex items-center gap-3 px-10 py-4 bg-[#5D5FEF] hover:bg-blue-700  font-bold transition-all shadow-lg active:scale-95">
          send message  
        </button>
      </section>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 pt-32 pb-16">
        <button className="text-3xl font-bold opacity-60 hover:opacity-100">&laquo;</button>
        <button className="w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-xl shadow-lg">1</button>
        <button className="w-12 h-12 rounded-xl bg-indigo-400/50 text-white font-bold text-xl hover:bg-indigo-400 transition">2</button>
        <button className="w-12 h-12 rounded-xl bg-indigo-400/50 text-white font-bold text-xl hover:bg-indigo-400 transition">3</button>
        <button className="text-3xl font-bold opacity-60 hover:opacity-100">&raquo;</button>
      </div></>
        
    );
}