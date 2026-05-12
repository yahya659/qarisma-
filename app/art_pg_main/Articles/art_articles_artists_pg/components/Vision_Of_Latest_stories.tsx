import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Vision_Of_Latest_stories() {
  return (
    <>
      {" "}
      <section className="max-w-7xl mx-auto px-4 mt-20 text-center">
        <h2 className="text-[48px] font-bold text-[#FFFFFF]">
          Vision Of <span className="text-[#F178B6]">Latest stories</span>
        </h2>
        <p className="text-[#FFFFFF] text-[32px] font-bold mb-12">
          Top headlines and in-depth reporting across the world
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative pb-16">
          {/* Small Card Left */}
          <div className="hidden lg:block w-72 bg-indigo-400/20 backdrop-blur-md p-6  transform  ">
            <div className="h-40 bg-gray-200   mb-4 overflow-hidden">
              <img
                src="/images/f.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="text-left">
              <div className="absolute bottom-40 left- bg-[#5D5FEF]/50  backdrop-blur-md px-4 py-1   text-white font-bold   tracking-widest text-[30px]">
                Artists
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
                  src="/images/Youth/Youth4.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute bottom-1 left- bg-[#F178B6A3]/60   px-4 py-1  text-white font-bold   tracking-widest text-[40px]">
                  Artists
                </div>
              </div>
              <div className="text-left text-white px-2">
                <h3 className="text-[28px] text-[#000000] font-black mb-3">Modern photography</h3>
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
                src="/images/atisit1.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="text-left">
              <div className="absolute bottom-40 left- bg-[#5D5FEF]/50  backdrop-blur-md px-4 py-1   text-white font-bold   tracking-widest text-[30px]">
                Artists
              </div>
              <h4 className="font-bold text-gray-800 text-[26px] mt-2">
                Modern Artistic painting
              </h4>
              <p className="font-bold text-[#FFFFFF] text-[15px] mt-2">
                Top headlines and In-depth reportind across the world
              </p>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="absolute bottom-2  left-1/2 -translate-x-1/2 flex items-center gap-6">
            <button className="p-3 bg-white/80 rounded-full text-indigo-900 shadow-md">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === 2 ? "bg-pink-500 scale-125" : "bg-pink-200"}`}
                />
              ))}
            </div>
            <button className="p-3 bg-white/80 rounded-full text-indigo-900 shadow-md">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
