import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Vision_Of_Latest_stories() {
  return (
    <>
      {" "}
      <section className="max-w-7xl mx-auto px-4 mt-20 text-center">
       

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative pb-16">
          {/* Small Card Left */}
          <div className="hidden lg:block w-72 bg-indigo-400/20 backdrop-blur-md p-6  transform  ">
            <div className="h-40 bg-gray-200   mb-4 overflow-hidden">
              <img
                src="/images/gallery1.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="text-left">
              <div className="absolute bottom-40 left- bg-[#5D5FEF]/50  backdrop-blur-md px-4 py-1   text-white font-bold   tracking-widest text-[30px]">
                Exhibition
              </div>
              <h4 className="font-bold text-gray-800 text-[26px] mt-2">
                Modern Artistic painting
              </h4>
              <p className="font-bold text-[#FFFFFF] text-[15px] mt-2">
                Top headlines and In-depth reportind across the world
              </p>
            </div>
          </div>

          {/* Center Focus Card */}
          <div className="w-full max-w-sm bg-[#F178B6] p-2    transform scale-110 z-20">
            <div className="  p-6 rounded-[28px]">
              <div className="h-48 bg-gray-300   mb-6 overflow-hidden relative shadow-inner">
                <img
                  src="/images/gallery2.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute bottom-1 left- bg-[#F178B6A3]/60   px-4 py-1  text-white font-bold   tracking-widest text-[40px]">
                  Interview
                </div>
              </div>
              <div className="text-left text-white px-2">
                <h3 className="text-[20px] text-[#000000] font-black mb-3">
                 The Language of Art: Decoding Symbols Across Centuries
                </h3>
                <p className="text-[24px]   mb-6 font-bold ">
                  Top headlines and in-depth reporting across the world
                </p>
                <a
                  href="#"
                  className="font-black text-[24px] text-[#000000]    "
                >
                  Read more
                </a>
              </div>
            </div>
          </div>

          {/* Small Card Right */}
          <div className="hidden lg:block w-72 bg-indigo-400/20 backdrop-blur-md p-6  transform  ">
            <div className="h-40 bg-gray-200   mb-4 overflow-hidden">
              <img
                src="/images/gallery1.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="text-left">
              <div className="absolute bottom-40 left- bg-[#5D5FEF]/50  backdrop-blur-md px-4 py-1   text-white font-bold   tracking-widest text-[30px]">
                Exhibition
              </div>
              <h4 className="font-bold text-gray-800 text-[26px] mt-2">
                Modern Artistic painting
              </h4>
              <p className="font-bold text-[#FFFFFF] text-[15px] mt-2">
                Top headlines and In-depth reportind across the world
              </p>
            </div>
          </div>

         
        </div>
      </section>
    </>
  );
}
