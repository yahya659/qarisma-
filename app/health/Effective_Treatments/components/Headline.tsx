"use client";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Play } from "lucide-react";
import React, { useState } from "react";
export default function Headline() {
   const [currentBottomPage, setCurrentBottomPage] = useState(1);
   return (
     <>
       {" "}
       {/* Video Headline Bottom Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 mt-20 w-full">
           <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-black tracking-tight text-left">Headline</h3>
                <p className="text-[#FFFFFF] font-bold text-lg md:text-xl leading-relaxed text-left">
                  It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
                </p>
              </div>
              <div className="w-full md:w-1/2 relative   shadow-2xl   group cursor-pointer">
                 <img 
                   src="/images/Major_Successes/Major_Successes1.jpg" 
                   className="w-full h-[280px] object-cover opacity-80" 
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#5D5FEF6E]/80 rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform backdrop-blur-sm  ">
                      <Play fill="currentColor" size={24} />
                    </div>
                 </div>
              </div>
           </div>
        </section>
         {/* Pagination */}
        <div className="flex justify-center items-center gap-3 py-12 mt-8">
          <button className="text-white hover:text-pink-400"><ChevronLeft size={24} strokeWidth={3} /></button>
          <button className="w-10 h-10 rounded-full bg-[#6953F5] text-white font-bold flex items-center justify-center shadow-lg">1</button>
          <button className="w-10 h-10 rounded-full bg-[#A284D7] text-white font-bold flex items-center justify-center hover:bg-[#9271CC] transition-colors shadow-md">2</button>
          <button className="w-10 h-10 rounded-full bg-[#A284D7] text-white font-bold flex items-center justify-center hover:bg-[#9271CC] transition-colors shadow-md">3</button>
          <button className="text-white hover:text-pink-400"><ChevronRight size={24} strokeWidth={3} /></button>
        </div>
     </>
   );
}
