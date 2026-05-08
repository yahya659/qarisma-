import { Search } from "lucide-react";
import React from "react";

export default function Vision_Of_Luxury() {
  return (
    <>
     <section className="relative z-10 text-center py-12 sm:py-16 md:py-20 px-4 overflow-hidden">
  <h1 className="text-[28px] sm:text-[36px] md:text-[48px] text-[#5D5FEF] font-bold leading-tight">
    Vision Of{" "}
    <span className="text-[28px] sm:text-[36px] md:text-[48px] text-[#5D5FEF] font-bold">
      Latest news
    </span>
  </h1>

  <p className="text-[14px] sm:text-[16px] md:text-[20px] text-[#000000] mb-6 md:mb-8 max-w-lg mx-auto px-2">
    Explore the latest updates and trends across various industries
    worldwide.
  </p>

  <div className="max-w-2xl bg-[#5D5FEF] mx-auto relative rounded-full overflow-hidden">
    <input
      type="text"
      placeholder="search"
      className="w-full py-3 sm:py-4 px-5 sm:px-6 text-sm sm:text-base md:text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 backdrop-blur-sm"
    />
  </div>

  {/* flowers */}
  <div className="absolute bottom-[-10%] right-[-20%] sm:right-[-10%] md:right-[-7%] w-[120px] h-[120px] sm:w-[220px] sm:h-[220px] md:w-[350px] md:h-[350px] lg:w-[600px] lg:h-[600px] z-40 pointer-events-none">
    <div className="relative w-full h-full animate-float-main">
      <img
        src="/images/flower.png"
        className="w-full h-full object-contain opacity-40"
        alt="flower"
        style={{
          filter: "drop-shadow(0 20px 50px rgba(219,137,171,0.5))",
        }}
      />
    </div>
  </div>
</section>
    </>
  );
}
