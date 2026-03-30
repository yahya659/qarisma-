"use client";

import React, { useState } from 'react';
import Sidebar from "@/app/components/dashboard/Sidebar";

export default function Feedback() {
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Bug');

  const emojis = ['⭐', '😂', '😌', '😋', '🤔', '😀', '🥳', '😎', '❤️', '🤬', '🤒', '😭', '😑', '😩', '😍'];
  const categories = ['Bug', 'Content', 'UX', 'Suggestion'];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* الخلفية */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/images/dashbord.png')" }} 
      />

      <div className="flex h-screen">
        
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>

        {/* Content */}
        <main className="flex-grow overflow-y-auto p-6 md:p-10 no-scrollbar">

          <br/><br/><br/><br/>

          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-4xl font-bold text-white mb-12 drop-shadow-md">
              Share your thoughts
            </h1>

            {/* Emojis */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-14 px-4">
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedEmoji(index)}
                  className={`text-2xl transition-all duration-300 transform hover:scale-150 ${
                    selectedEmoji === index 
                      ? 'scale-150 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]' 
                      : 'opacity-80'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>

            {/* Categories */}
            <div className="text-left mb-10">
              <h2 className="text-white/90 text-sm font-bold uppercase tracking-widest mb-4 ml-2">
                Category (Optional)
              </h2>

              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-8 py-3 rounded-2xl text-xs font-bold transition-all duration-300 shadow-lg ${
                      selectedCategory === cat 
                        ? 'bg-[#D800B9] text-white'
                        : 'bg-[#D800B9] text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Textarea */}
            <div className="relative group mb-10">
              <textarea
                placeholder="Type your feedback here..."
                className="w-full h-48 bg-[#5D5FEF40] backdrop-blur-md border border-white/20 rounded-[2rem] p-6 text-white placeholder:text-white/40 outline-none focus:border-[#db2777]/50 transition-all shadow-inner resize-none"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <button className="bg-[#5D5FEF] hover:bg-[#4f46e5] text-white px-12 py-4 rounded-2xl font-bold shadow-2xl transition-all active:scale-95 text-sm uppercase tracking-wider">
                Submit Feedback
              </button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}