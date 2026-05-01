import React from 'react'

export default function HeroSection() {
  return (
       <header className="relative w-full ">
        <div className="relative w-[1552px] h-[576px] overflow-hidden">
          <img 
            src="/images/health/health4.jpg" 
            className="w-full h-full object-cover "
              alt="Background"
          />
          {/* Purple tint overlay */}
          <div className="absolute inset-0 bg-[#5D5FEF85]/40 mix-blend-multiply"></div>
        </div>
        
        <div className="bg-[#F178B636] py-12 px-6 md:px-32 text-white">
          <h1 className="text-[#000000] text-[48px] font-bold   mb-6">Beyond the Headlines</h1>
          <p className="  text-[#FFFFFF] text-[40px] font-bold leading-relaxed mb-8">
            It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
          </p>
          <button className="bg-[#FFFFFF] text-[#5D5FEF] border border-white/20 hover:bg-[#6255d6] px-10 py-3 rounded-lg font-bold shadow-xl transition-all">
            Read More
          </button>
        </div>
      </header>
  );
}
