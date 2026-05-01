import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

export default function Beyond_the_Headlines() {
  return (
    <>
        <section className="max-w-6xl mx-auto px-4 md:px-8 mt-10 w-full">
          <div className="bg-[#A488D8]   p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl relative border-y-2 border-purple-300/40 border-x-[14px] border-x-[#9474CC]">
            {/* Image */}
            <div className="w-full md:w-1/3 relative">
              <img 
                src="/images/Effective_Treatments/Effective_Treatments1.jpg" 
                alt="Pills in hand" 
                className="w-full h-[220px] object-cover   shadow-lg  "
              />
            </div>
            
            {/* Text Content */}
            <div className="w-full md:w-2/3 text-black text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight drop-shadow-sm">Beyond the Headlines</h2>
              <p className="text-base md:text-lg font-bold mb-8 leading-relaxed text-[#FFFFFF] max-w-xl">
                It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
              </p>
              <button className="bg-[#FF88B9] text-white font-extrabold text-sm px-10 py-2.5 rounded-lg shadow-lg hover:bg-pink-500 transition-all">
                Read More
              </button>
            </div>
          </div>
        </section>
    </>
  );
}
