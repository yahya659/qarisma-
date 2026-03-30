"use client";

import React from 'react';
import Sidebar from "@/app/components/dashboard/Sidebar";
import Header from "@/app/components/Header";

export default function Bookmarks() {
  return (
    <>
          <div
            className="flex min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: "url('/images/dashbord.png')" }}
          >
            <div className="hidden md:block w-64 shrink-0">
              <Sidebar />
            </div>
    
            <main className="flex-grow p-4 md:p-10 overflow-y-auto w-full">
              <br />
              <br />
              <br />
              
              <main className="flex-grow flex items-center justify-center p-6 md:p-12">
          
          <div className="flex flex-col items-center text-center max-w-lg w-full">
            
            {/* الصورة الخضراء المركزية بزوايا دائرية كبيرة جداً (2.5rem) كما في التصميم */}
            <div className="w-full aspect-video mb-10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20">
              <img 
                src="/images/Bookmarks Empty Stateory timeline.png" 
                alt="No Bookmarks" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* النصوص: العنوان والوصف */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              No bookmarks yet
            </h2>
            <p className="text-white/80 text-base md:text-lg font-light mb-10 leading-relaxed max-w-sm">
              Explore articles and save your favorites to see them here.
            </p>

            {/* زر Explore Now بنفس اللون والتدوير في صورة الفيفما */}
            <button 
              className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-14 py-4 rounded-2xl font-bold shadow-xl transition-all active:scale-95 text-lg"
              onClick={() => window.location.href = '/dashboard/Explore'}
            >
              Explore Now
            </button>
          </div>

        </main>
              
            </main>
          </div>
        </>
  );
}