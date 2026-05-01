import React from 'react'

export default function FQA() {
  return (
     <section className="py-20 px-6 bg-[#F178B694]/58">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
             <div className="bg-pink-100 text-pink-600 px-6 py-2 rounded-2xl inline-block font-bold mb-4">FQA</div>
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Ask & Explore More About <span className="text-pink-500 italic">your Child</span></h2>
             <p className="text-gray-600 leading-relaxed mb-8">
               It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth.
             </p>
             <a href="#" className="font-bold border-b-2 border-purple-600 pb-1 hover:text-purple-600">View more</a>
          </div>
          <div className="flex-1 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=600" 
              alt="Curtain visualization"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
  );
}
