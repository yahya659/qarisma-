export default function HeroSection(){
    return(
          <div className="relative w-full h-[100vh]  bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/entertainment/enterainment6.png" 
            alt="Food Spread" 
            className="w-full h-full object-cover object-center blur-[2px] scale-105"
          />
          {/* Dark/Purple Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 to-purple-800/80"></div>
        </div>

        {/* Simulated Pink Curtains (Left & Right) */}
        {/* <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-b from-[#e866b4] to-[#c74c96] rounded-br-[150px] shadow-[10px_0_30px_rgba(0,0,0,0.5)] z-10 transform -translate-x-10 md:translate-x-0 opacity-90 border-r-4 border-pink-400/50"></div> */}
        {/* <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-b from-[#e866b4] to-[#c74c96] rounded-bl-[150px] shadow-[-10px_0_30px_rgba(0,0,0,0.5)] z-10 transform translate-x-10 md:translate-x-0 opacity-90 border-l-4 border-pink-400/50"></div> */}

        {/* Hero Content */}
      <div className="absolute inset-0 flex bg-[#5D5FEF7D]/46 flex-col items-center justify-center text-center z-30 px-12 md:px-20">
          <h1 className="text-[40px]  font-black text-white mb-4 drop-shadow-lg">
            Explore more about <span className="text-[#ff9cd2] drop-shadow-md">Culture & Cuisines</span>
          </h1>
          <p className="mt-2 text-[30px] text-white/90 max-w-2xl font-bold drop-shadow leading-relaxed mb-8">
            It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
          </p>
          
          {/* Search Pill */}
          <div className="w-full max-w-md bg-[#F178B6A3] backdrop-blur-md  py-3 px-6 text-center shadow-xl cursor-text hover:bg-white/30 transition-colors">
             <span className="text-white font-bold text-[32px] drop-shadow-sm">Search</span>
          </div>
        </div>
      </div>
    );
}