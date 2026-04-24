import { ChevronLeft, ChevronRight, Send } from "lucide-react";

export default function Stay_informed(){
    return(
        <>
     <section className="max-w-5xl mx-auto mb-20">
          <div className="bg-[#F178B6A3] to-pink-500  p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <h2 className="text-[32px]   font-bold text-[#FFFFFF]">stay informed, learn more & contact us</h2>
            <button className="px-10 py-4 bg-[#5D5FEF]  hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center gap-2 shadow-lg transition transform hover:scale-105">
              send message  
            </button>
          </div>
        </section>

        {/* Simple Pagination */}
        <div className="flex justify-center items-center gap-4 text-xl font-bold">
          <ChevronLeft className="opacity-50 cursor-pointer" />
          <span className="w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-lg shadow-lg">1</span>
          <span className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-lg cursor-pointer transition">2</span>
          <span className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-lg cursor-pointer transition">3</span>
          <ChevronRight className="cursor-pointer" />
        </div></>
        
    );
}