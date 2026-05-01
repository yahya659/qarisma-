import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[100vh] bg-indigo-950 overflow-hidden shadow-2xl">
        {/* Background Image (Using a stylized stage/neon image to match the vibe) */}
        <div 
          className="absolute inset-0 bg-cover bg-center  "
          style={{ backgroundImage: 'url("/images/health/health1.jpg")' }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#B189DB]/80 via-transparent to-transparent" /> */}
        
        {/* Pink Curtains Simulation (Left and Right) */}
        {/* <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-pink-500/40 to-transparent blur-md transform -skew-x-12 -translate-x-10 pointer-events-none" /> */}
        {/* <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-pink-500/40 to-transparent blur-md transform skew-x-12 translate-x-10 pointer-events-none" /> */}

        <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-center items-start text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-wide drop-shadow-lg">
            Explore your <br />
            <span className="text-[#FF7CA3]">way to health with us</span>
          </h1>
          <p className="text-[36px]  e max-w-2xl font-bold   mb-8 drop-shadow-md">
            It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
          </p>
          <button className="px-8 py-3 bg-[#6953F5] hover:bg-[#5741E0] text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105">
            Learn More
          </button>
        </div>
      </section>
  );
}
