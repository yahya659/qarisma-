import { Cloud } from 'lucide-react';
import React from 'react'

export default function Latest_Research_studies() {
     const categories = [
    { title: 'Latest Research & studies', items: [
      { id: 1, tag: 'Funny', title: 'Funny Clips', color: 'bg-purple-100' },
      { id: 2, tag: 'joy & happiness', title: 'Joyful Moments', color: 'bg-purple-100' },
      { id: 3, tag: 'Funny Clips', title: 'Top Funny', color: 'bg-purple-100' },
    ]},
    { title: ' ', link: ' ', items: [
      { id: 4, tag: 'Funny', title: 'Movie Night', color: 'bg-purple-100' },
      { id: 5, tag: 'joy & honey', title: 'Honey Story', color: 'bg-purple-100' },
      { id: 6, tag: 'Family', title: 'Family Time', color: 'bg-purple-100' },
    ]},
   
  ];
  return (
    <>      <div className="max-w-7xl mx-auto px-6 py-12 space-y-20 relative">
        {/* Floating Clouds Background Elements */}
        <div className="absolute top-40 right-10 opacity-40 animate-pulse"><Cloud className="w-32 h-32 text-purple-300 fill-current" /></div>
        <div className="absolute top-[40%] left-[-5%] opacity-30"><Cloud className="w-48 h-48 text-pink-300 fill-current" /></div>

        {categories.map((cat, idx) => (
          <section key={idx} className="relative z-10">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-4xl font-black text-[#F178B6]">{cat.title}</h2>
              <a href="#" className="text-purple-600 font-bold border-b-2 border-purple-600 hover:text-purple-800">{cat.link}</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cat.items.map((item, i) => (
                <div key={i} className={`${item.color} p-4 rounded-[40px] shadow-lg border-2 border-white/50 hover:shadow-2xl transition-all group`}>
                  <div className="aspect-[4/3] rounded-[30px] overflow-hidden mb-4 relative">
                    <img 
                      src={`https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80&sig=${item.id}`} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-pink-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {item.tag}
                    </div>
                  </div>
                  <p className="text-sm text-purple-800 px-2 line-clamp-2 opacity-80 italic">
                    "This is where the inspiring story or clip description goes, sparking imagination and joy in every child's heart."
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div></>
  );
}
