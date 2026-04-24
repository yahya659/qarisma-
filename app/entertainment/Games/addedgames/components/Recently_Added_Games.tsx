import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Recently_Added_Games() {
  return (
    <section className="relative z-10 px-8 py-16 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10 px-4 md:px-8">
        <h2 className="text-3xl font-black text-black">Recently Added Games</h2>
        <a
          href="#"
          className="text-black font-bold text-sm underline decoration-2 underline-offset-4 hover:text-pink-600 transition-colors"
        >
          all games
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 px-4 md:px-8">
        {[
          {
            id: 1,
            img: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            id: 2,
            img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            id: 3,
            img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
          {
            id: 4,
            img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          },
        ].map((game) => (
          <div
            key={game.id}
            className="relative bg-[#C0A9E7] rounded-xl shadow-2xl flex border border-white/20 hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Left Hinge Details */}
            <div className="w-6 bg-[#9985CC] rounded-l-xl border-r border-[#8A75BD] flex flex-col justify-evenly items-center shadow-inner">
              <div className="w-1.5 h-6 bg-[#7C66B3] rounded-full shadow-inner opacity-60"></div>
              <div className="w-1.5 h-6 bg-[#7C66B3] rounded-full shadow-inner opacity-60"></div>
              <div className="w-1.5 h-6 bg-[#7C66B3] rounded-full shadow-inner opacity-60"></div>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-3">
              <div className="h-48 w-full rounded-lg overflow-hidden mb-3 border-[3px] border-[#9985CC]/30">
                <img
                  src={game.img}
                  alt="Game Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-white font-bold text-lg mb-1 drop-shadow-sm">
                  Card Game
                </h3>
                <p className="text-[#000000] text-[14px] leading-relaxed font-medium mb-3">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole, we
                  believe that reality and maturity are core for truth
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                      alt="Avatar"
                      className="w-5 h-5 rounded-full border border-white/50"
                    />
                    <span className="text-white text-[16px] font-semibold">
                      john Willson
                    </span>
                  </div>
                  <span className="text-white/70 text-[14px]">4 days ago</span>
                </div>
              </div>
            </div>

            {/* Right Hinge Details */}
            <div className="w-6 bg-[#9985CC] rounded-r-xl border-l border-[#8A75BD] flex flex-col justify-evenly items-center shadow-inner">
              <div className="w-1.5 h-6 bg-[#7C66B3] rounded-full shadow-inner opacity-60"></div>
              <div className="w-1.5 h-6 bg-[#7C66B3] rounded-full shadow-inner opacity-60"></div>
              <div className="w-1.5 h-6 bg-[#7C66B3] rounded-full shadow-inner opacity-60"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Mini Pager */}
      <div className="flex justify-center items-center gap-3 mt-12">
        <button className="w-10 h-10 rounded-full bg-[#5D63EB] text-white flex items-center justify-center hover:bg-[#4E54D4] transition shadow-lg">
          <ArrowLeft size={20} strokeWidth={3} />
        </button>
        <div className="w-4 h-4 rounded-full bg-[#F48BBE] shadow-sm"></div>
        <div className="w-4 h-4 rounded-full bg-[#F48BBE]/50"></div>
        <div className="w-4 h-4 rounded-full bg-[#F48BBE]/50"></div>
        <div className="w-4 h-4 rounded-full bg-[#F48BBE]/50"></div>
        <button className="w-10 h-10 rounded-full bg-[#5D63EB] text-white flex items-center justify-center hover:bg-[#4E54D4] transition shadow-lg">
          <ArrowRight size={20} strokeWidth={3} />
        </button>
      </div>
    </section>
  );
}
