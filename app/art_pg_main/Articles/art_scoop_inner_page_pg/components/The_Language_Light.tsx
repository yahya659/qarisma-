import { Play } from "lucide-react";
import React from "react";

export default function The_Language_Light() {
  return (
    <>
      {" "}
      <main className="relative z-10 max-w-7xl  mx-auto px-4 md:px-8  ">
        <section className="grid grid-cols-1 bg-[#5D5FEF85]/30 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative group ">
            <div className="aspect-video   overflow-hidden shadow-2xl relative">
              <img
                src="/images/events_biennale1.png"
                className="w-full h-full object-cover  "
                alt="Live session"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                 
              </div>
            </div>
          </div>
          <div className="p-4">
            
            <h2 className="text-[48px] font-bold mb-6 font-bold">
              The Language of Light and Shadow
            </h2>
            <p className="text-[#000000] mb-4 text-[32px] font-bold">
              It has one principle and one motto that can be read individually,
              meaning each word on its own.
            </p>
          </div>
        </section>

      
      </main>
    </>
  );
}
