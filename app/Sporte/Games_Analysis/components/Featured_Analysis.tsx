import React from "react";

export default function Featured_Analysis() {
  return (
    <>
      {" "}
      {/* Featured Analysis Section (New Selected Code Implementation) */}
      <section className="px-12 mb-24">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-purple-600/80 via-pink-500/80 to-blue-600/80 p-12 text-center group cursor-pointer">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-8 mb-8">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl p-2 rotate-[-6deg]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
                  alt="MU"
                  className="w-full"
                />
              </div>
              <div className="w-48 h-32 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bbbda536339a?w=400&q=80"
                  className="w-full h-full object-cover"
                  alt="stats"
                />
                <div className="absolute inset-x-0 bottom-0 p-2 space-y-1">
                  <div className="h-1.5 w-full bg-pink-400 rounded-full"></div>
                  <div className="h-1.5 w-2/3 bg-pink-400 rounded-full"></div>
                  <div className="h-1.5 w-4/5 bg-pink-400 rounded-full"></div>
                </div>
              </div>
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl p-2 rotate-[6deg]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
                  alt="LFC"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
