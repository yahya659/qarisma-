

export default function Hero_Welcome() {
  
  const stats = [
    { label: "Total Games", value: "15" },
    { label: "Downloads", value: "5" },
    { label: "Total Revenue", value: "15" },
    { label: "followers", value: "15" },
  ];

  return (
    <>
      {" "}
      <div className="p-8">
        <div className="relative overflow-hidden bg-indigo-900/30 p-12 text-center shadow-2xl">
          {/* <div className="absolute inset-0 z-0 opacity-30">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200"
              className="w-full h-full object-cover blur-sm"
              alt="Welcome BG"
            />
          </div> */}
          <div className="relative z-10">
            <h1 className="text-[#F178B6]  text-[64px] font-black mb-4 drop-shadow-md">
              Welcome back Sara
            </h1>
            <p className="text-[40px] font-medium opacity-90 max-w-2xl mx-auto">
              Explore more about what ‘s happening with your games
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-indigo-400/40 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl text-center transition-transform hover:-translate-y-1"
            >
              <p className="text-[20px] font-bold uppercase tracking-widest opacity-70 mb-2">
                {stat.label}
              </p>
              <p className="text-[#000000] text-[48px] font-black">{stat.value}</p>
            </div>
          ))}
        </div>

     
      </div>
    </>
  );
}
