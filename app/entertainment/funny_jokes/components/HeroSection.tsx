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
            backgroundImage: "url('/images/funny_jokes/funny_jokes.png')",
          }}
        >
          {/* Gradient Overlay for the dark purple mood */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0B2E]/90 via-[#2D1B4E]/70 to-[#1A0B2E]/90"></div>
          <div className="absolute inset-0 bg-purple-900/30 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-2xl px-16 text-white">
          <h2 className="text-[40px] font-semibold mb-1">Explore with us</h2>
          <h1 className="text-[60px] font-black text-[#F07CB4] mb-4 drop-shadow-lg tracking-wide">world of Gaming</h1>
          {/* <p className="text-lg font-medium mb-8 max-w-lg leading-relaxed drop-shadow-md border-l-4 border-[#F07CB4] pl-4"> */}
           <p className="text-[30px]">Gaming has been a great way to get to know people. That's part of what I love about games, that they are social."
          {/* </p> */}</p>
          
         
        </div>
      </section>
      {/* //////////////////////////// */}
    
       
       

          
        </>
    );
}