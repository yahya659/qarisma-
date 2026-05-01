import { Search } from "lucide-react";

export default function HeroSection(){
  

    return(
     <> <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="/images/child/tols2.png" 
                className="w-full h-full object-cover opacity-60"
                alt="background"
            />
            <div className="absolute inset-0 bg-purple-900/20 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-pink-500 mb-4 drop-shadow-lg">
            Child Health FQA
          </h1>
          <p className="text-xl md:text-2xl text-white font-bold mb-8">
            reliable answers to common questions <br /> about your child health
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input 
                type="text" 
                placeholder="search Child Health Questions" 
                className="w-full py-4 px-8 rounded-2xl bg-white/90 shadow-xl text-purple-900 placeholder:text-pink-300 font-bold focus:outline-none focus:ring-4 focus:ring-pink-300/50"
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-pink-400 w-6 h-6" />
          </div>
        </div>
      </section></>
    );
}