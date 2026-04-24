export default function World_of_Gaming() {
  return (
    <>
      {" "}
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
              backgroundImage:
                'url("/images/entertainment/Games1.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#161224]/80 to-[#161224]"></div>
          </div>
        </div>

        {/* Right Decorative Tech Bar */}
        <div className="hidden md:flex w-6 h-72 bg-gradient-to-b from-gray-400 to-gray-500 rounded-sm border-2 border-gray-300 shadow-inner flex-col justify-between py-3 items-center">
          <div className="w-2 h-2 rounded-full bg-gray-300 shadow-sm"></div>
          <div className="w-1.5 h-40 bg-gray-600 rounded-full shadow-inner opacity-50"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300 shadow-sm"></div>
        </div>
      </section>
    
    </>
  );
}
