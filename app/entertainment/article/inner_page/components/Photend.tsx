"use client";
import React, { useState } from 'react';
import { ChevronsLeft, ChevronsRight, Play } from 'lucide-react';

// مكون الفراشة (SVG) لاستخدامه كعلامة مائية وزخرفة
const Butterfly = ({  }) => (
  <svg 
    viewBox="0 0 512 512" 
   
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M465.1 127c-38.3-25.1-84.4-12.7-111.4 14.3-15.6 15.6-26.6 34.6-32.9 55.2-1.3 4.2-7.1 4.2-8.4 0-6.3-20.6-17.3-39.6-32.9-55.2-27-27-73.1-39.4-111.4-14.3-35.3 23.2-46.3 71.9-25.7 108.6 14.5 25.8 40.5 45.6 69.9 53.6 4.9 1.3 4.9 8.2 0 9.5-29.4 8-55.4 27.8-69.9 53.6-20.6 36.7-9.6 85.4 25.7 108.6 38.3 25.1 84.4 12.7 111.4-14.3 15.6-15.6 26.6-34.6 32.9-55.2 1.3-4.2 7.1-4.2 8.4 0 6.3 20.6 17.3 39.6 32.9 55.2 27 27 73.1 39.4 111.4 14.3 35.3-23.2 46.3-71.9 25.7-108.6-14.5-25.8-40.5-45.6-69.9-53.6-4.9-1.3-4.9-8.2 0-9.5 29.4-8 55.4-27.8 69.9-53.6 20.6-36.8 9.6-85.5-25.7-108.7z" />
  </svg>
);

export default function Photend() {
  const [currentPage, setCurrentPage] = useState(1);
   const videoCards = [
    {
      id: 1,
      title: "Headline",
      desc: "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality",
      img: "/images/entertainment/enterainment5.jpg",
    },
    {
      id: 2,
      title: "Headline",
      desc: "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality",
      img: "/images/entertainment/enterainment5.jpg",
    },
    {
      id: 3,
      title: "Headline",
      desc: "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality",
      img: "/images/entertainment/enterainment5.jpg",
    }
  ];


  return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 relative z-10 text-center">
          <h2 className="text-[64px]  font-black text-white mb-8 drop-shadow-md">
            Watch & Read
          </h2>

          {/* Main Large Image */}
          <div className="w-[1077px] mx-auto h-[626px] overflow-hidden  mb-12">
            <img 
              src="/images/entertainment/enterainment5.jpg" 
              alt="Main Dish" 
              className="w-[1077px] h-[626px] object-cover"
            />
          </div>

          {/* Video Carousel */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <button className="hidden md:flex h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm items-center justify-center text-white transition-colors">
              <ChevronsLeft size={28} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl">
              {videoCards.map((video) => (
                <div key={video.id} className="bg-[#ee76bc] rounded-xl p-3 shadow-xl flex flex-col text-left border-2 border-white/20 transform hover:-translate-y-1 transition-transform">
                  <div className="relative h-32 w-full rounded-lg overflow-hidden mb-3 border border-white/30 group cursor-pointer">
                    <img src={video.img} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                       <div className="w-10 h-10 bg-purple-500/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/50">
                         <Play className="text-white w-5 h-5 ml-0.5 fill-current" />
                       </div>
                    </div>
                  </div>
                  <h4 className="text-lg font-black text-black mb-1">{video.title}</h4>
                  <p className="text-black text-[10px] font-bold leading-tight mb-2 line-clamp-3">
                    {video.desc}
                  </p>
                  <a href="#" className="text-blue-700 text-xs font-bold hover:underline">
                    Watch more
                  </a>
                </div>
              ))}
            </div>

            <button className="hidden md:flex h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm items-center justify-center text-white transition-colors">
              <ChevronsRight size={28} />
            </button>
          </div>
        </div>
  );
}