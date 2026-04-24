export default function Hero_Welcome() {
    const stats = [
    { label: "Total Games", value: "15" },
    { label: "Downloads", value: "5" },
    { label: "Total Revenue", value: "15" },
    { label: "followers", value: "15" },
  ];
  return (
    <>
      <section className="px-8 lg:px-16 pt-12 pb-8">
        <h1 className="text-[40px] font-bold text-white/90">Explore your</h1>
        <h2 className="text-[64px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 drop-shadow-md mb-4">
          payouts & Earning
        </h2>
        <p className="text-[20px] text-white/70 font-bold mb-8 max-w-xl">
          Create a custom page to instantly distribute or sell your games with
          us{" "}
        </p>
      </section>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-indigo-400/40 backdrop-blur-xl   p-6 rounded-2xl shadow-xl text-center transition-transform hover:-translate-y-1"
          >
            <p className="text-[20px] font-bold uppercase tracking-widest opacity-70 mb-2">
              {stat.label}
            </p>
            <p className="text-[#000000] text-[48px] font-black">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
