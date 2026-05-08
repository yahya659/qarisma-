import React from 'react'

export default function Article_Editors() {
  return (
     <><section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-[35px] font-bold">Content Creators</h2>
          <p className="text-gray-400 text-[35px]">Promoting products and services to target audiences.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white/10 p-6 rounded-3xl border border-white/10 text-center">
              <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white/20">
                <svg viewBox="0 0 100 100" className="bg-gray-400"><circle cx="50" cy="40" r="25" fill="#333" /><path d="M20 90c0-15 15-25 30-25s30 10 30 25" fill="#333" /></svg>
              </div>
              <h4 className="font-bold">Name</h4>
              <p className="text-orange-300 text-xs mb-2">Job Description</p>
              <p className="text-gray-400 text-xs">Building impactful relationships and managing communication channels.</p>
            </div>
          ))}
        </div>
      </section></>
  );
}
