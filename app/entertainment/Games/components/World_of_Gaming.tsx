export default function World_of_Gaming() {
  return (
    <section className="py-12 max-w-6xl mx-auto px-4 flex items-center justify-center gap-4">
      {/* Left Decorative Tech Bar */}
      <div className="hidden md:flex w-6 h-72 bg-gradient-to-b from-gray-400 to-gray-500 rounded-sm border-2 border-gray-300 shadow-inner flex-col justify-between py-3 items-center">
        <div className="w-2 h-2 rounded-full bg-gray-300 shadow-sm"></div>
        <div className="w-1.5 h-40 bg-gray-600 rounded-full shadow-inner opacity-50"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300 shadow-sm"></div>
      </div>

      {/* Banner Content */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-[#161224] shadow-2xl flex items-center h-80 border border-white/10">
        {/* Background blending */}
        <div
          className="absolute inset-y-0 left-0 w-2/3 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: 'url("/images/entertainment/Games1.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#161224]/80 to-[#161224]"></div>
        </div>

        <div className="relative z-10 w-full md:w-3/5 pl-12 pr-6 py-10 ml-auto">
          <h3 className="text-white text-[40px] font-medium mb-0 tracking-wide">
            welcome to your
          </h3>
          <h2 className="text-[#F07CB4] text-[60px] font-black mb-4 tracking-wide drop-shadow-md">
            world of Gaming
          </h2>
          <p className="text-white/90 text-sm font-medium leading-relaxed mb-6 max-w-md">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth
          </p>
          <button className="bg-[#5C4DB5] hover:bg-[#6A5AE0] text-white px-8 py-2.5 rounded-lg font-bold shadow-lg transition transform hover:-translate-y-0.5">
            Add Your item
          </button>
        </div>
      </div>

      {/* Right Decorative Tech Bar */}
      <div className="hidden md:flex w-6 h-72 bg-gradient-to-b from-gray-400 to-gray-500 rounded-sm border-2 border-gray-300 shadow-inner flex-col justify-between py-3 items-center">
        <div className="w-2 h-2 rounded-full bg-gray-300 shadow-sm"></div>
        <div className="w-1.5 h-40 bg-gray-600 rounded-full shadow-inner opacity-50"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300 shadow-sm"></div>
      </div>
    </section>
  );
}
