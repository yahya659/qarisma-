import React from "react";
import Alternating_Blocks from "./Alternating_Blocks";
import Related_Articles from "./Related_Articles";
import Interviews from "./Interviews";
import From_our_Selection from "./From_our_Selection";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e7c7e0] via-[#be90cd] to-[#805eb3] font-sans overflow-x-hidden text-white selection:bg-pink-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-16 lg:px-32 flex items-center">
        {/* Decorative Curtains (Simplified CSS representation) */}
        <div className="absolute top-0 left-0 w-8 md:w-24 h-full bg-gradient-to-r from-[#d28bc4] to-transparent opacity-80 mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-8 md:w-24 h-full bg-gradient-to-l from-[#d28bc4] to-transparent opacity-80 mix-blend-multiply"></div>

        <div className=" relative z-10 pl-4 md:pl-12">
          <h1 className="text-4xl md:text-[64px] leading-[1.1] font-black text-[#F178B6] mb-6 drop-shadow-sm">
            The role of discrimination <br />& marginalization
          </h1>
          <p className="text-lg md:text-[36px] font-bold mb-4 text-[#FFFFFF] drop-shadow-sm max-w-2xl">
            Mental health is deeply intertwined with societal factors,
            influencing and being influenced by various social, economic, and
            cultural dynamics.
          </p>

          <button className="bg-[#F178B6] w-[302.99920654296875] hover:bg-[#e0569e] text-white font-extrabold text-[32px] py-3 px-10 rounded-[30px] shadow-lg transition-transform hover:scale-105">
            Read More
          </button>
        </div>
      </section>

     
     

      {/* Top Story & Related Articles */}
     <Alternating_Blocks/>
     <Related_Articles/>

      {/* Latest Podcasts & Interviews */}
      <Interviews/>

      {/* From our Selection Carousel */}
     <From_our_Selection/>
    </div>
  );
}
