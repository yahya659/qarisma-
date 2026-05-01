import { Search } from 'lucide-react'
import React from 'react'

export default function HeroSection() {
  return (
   <><section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/child/child10.png" 
            className="w-full h-full object-cover brightness-50"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-[#7c3aed]/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h2 className="text-white text-[64px]  font-semibold mb-2">Explore your way</h2>
          <h1 className="text-pink-400 text-[40px] font-bold mb-6">Keep Your Child Healthy With Us</h1>
          <p className="text-white/90 text-[32px]   mb-8 leading-relaxed">
            Stories that inspire, content that builds knowledge that grows with them. From education and entertainment to health and innovation.
          </p>
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="search..." 
              className="w-full py-4 px-6   bg-[#5D5FEF26] backdrop-blur-md text-[40px]  text-white placeholder-white/70 outline-none focus:bg-white/30 transition"
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white" size={40} />
          </div>
        </div>

        {/* Floating Clouds */}
        <div className="absolute -bottom-1 left-0 right-0 h-24 bg-[#7c3aed]" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }}></div>
      </section></>
  )
}
