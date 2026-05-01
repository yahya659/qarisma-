import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import React from 'react'

export default function Empower_your_Relations() {
  return (
    <><section className="py-20   px-6 relative overflow-hidden">
        <h2 className="text-3xl font-extrabold text-center text-purple-900 mb-16">Empower your Relations with your child</h2>
        
        {/* Simplified Carousel UI */}
        <div className="relative max-w-6xl mx-auto flex items-center justify-center gap-4">
          <button className="p-3 bg-white/50 rounded-full hover:bg-white transition-all">
            <ChevronLeft className="w-8 h-8 text-purple-700" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Side Card 1 */}
            <div className="hidden md:block opacity-60 scale-90 transition-all cursor-pointer">
              <div className="aspect-video bg-purple-300 rounded-3xl relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="v1" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white fill-current" />
                </div>
              </div>
            </div>

            {/* Center Main Video Card */}
            <div className="z-10 scale-110 shadow-2xl">
              <div className="aspect-video bg-white rounded-3xl relative overflow-hidden border-4 border-white">
                <img src="https://images.unsplash.com/photo-1544333346-64e4fe182747?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="v2" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center p-6 text-center">
                  <div className="p-4 bg-white/30 backdrop-blur-md rounded-full mb-4">
                    <Play className="w-12 h-12 text-white fill-current" />
                  </div>
                  <p className="text-white text-xs font-medium leading-tight">
                    It has one principle and one motto that can be read individually, meaning each word on its own...
                  </p>
                </div>
              </div>
            </div>

            {/* Side Card 2 */}
            <div className="hidden md:block opacity-60 scale-90 transition-all cursor-pointer">
              <div className="aspect-video bg-purple-300 rounded-3xl relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="v3" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white fill-current" />
                </div>
              </div>
            </div>
          </div>

          <button className="p-3 bg-white/50 rounded-full hover:bg-white transition-all">
            <ChevronRight className="w-8 h-8 text-purple-700" />
          </button>
        </div>

     
     

        {/* Floating wavy shape bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-pink-300/40" style={{ clipPath: 'ellipse(70% 50% at 50% 100%)' }}></div>
      </section></>
  );
}
