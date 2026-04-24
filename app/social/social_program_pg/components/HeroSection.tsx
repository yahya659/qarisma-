export default function HeroSection(){
    return(
            <header className="relative w-full h-[100vh] overflow-hidden ">
        <div className="relative h-[100vh]   flex items-center justify-center ">
          {/* Main Background Image */}
          <img 
            src="/images/social/freepik1.jpg" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Hero Background"
          />
          
          {/* Purple tint overlay */}
          <div className="absolute inset-0 bg-[#9A6AAB]/70 mix-blend-multiply"></div>

          {/* Curtains Effect (Left & Right) */}
          <div className="absolute inset-y-0 left-0 w-1/4 md:w-1/6 pointer-events-none">
             <div className="h-full bg-gradient-to-r from-[#d18fbc] to-transparent opacity-80"></div>
          </div>
          <div className="absolute inset-y-0 right-0 w-1/4 md:w-1/6 pointer-events-none">
             <div className="h-full bg-gradient-to-l from-[#d18fbc] to-transparent opacity-80"></div>
          </div>

          {/* Content Over the Hero Image */}
          <div className="relative z-10 text-center px-6 max-w-4xl bg-[#5D5FEF85]/50 ">
            <h1 className="text-[96px] md:text-7xl font-black text-[#F178B6] mb-4 drop-shadow-lg ">
              Beyond the Headlines
            </h1>
            <p className="text-[#FFFFFF] text-[32px] md:text-2xl font-bold leading-tight mb-8 drop-shadow-md">
              It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
            </p>
            <button className="bg-[#5D5FEF] hover:bg-blue-700 text-white px-12 py-3 rounded-lg font-black text-sm uppercase shadow-2xl transition-all border border-white/20">
              Watch More
            </button>
          </div>
        </div>
        
 
      </header>
    );
}