import { ChevronsLeft, ChevronsRight, Play } from "lucide-react";

export default function HeroSection(){
    return (
        <>
        {/* Hero Section */}
      <section className="relative h-[940px] flex items-center overflow-hidden">
        {/* Background Image with arcade/gaming vibe */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/Youth/Youth1.jpg')",
          }}
        >
          {/* Gradient Overlay for the dark purple mood */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0B2E]/90 via-[#2D1B4E]/70 to-[#1A0B2E]/90"></div>
          <div className="absolute inset-0 bg-purple-900/30 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-2xl px-16 text-white">
          <h2 className="text-[48px] font-semibold mb-1">Explore your way in</h2>
          <h1 className="text-[40px] font-black text-[#F07CB4] mb-4 drop-shadow-lg tracking-wide">Change & Development</h1>
          <p className="text-lg font-medium mb-8 max-w-lg leading-relaxed drop-shadow-md pl-4">
            "Gaming has been a great way to get to know people. That's part of what I love about games, that they are social."
          </p>
          
          <div className="relative w-80">
            <button 
               
              
              className="w-[386px] h-[100px] bg-[#F178B6A3]/60 backdrop-blur-md text-white text-[40px] py-3 px-6 outline-none focus:ring-2 focus:ring-[#F07CB4]/50 shadow-xl"
            >Read More</button>
          </div>
        </div>
      </section>
      {/* //////////////////////////// */}
    
       
       

          
        </>
    );
}