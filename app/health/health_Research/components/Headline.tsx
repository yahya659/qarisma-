import React from "react";

export default function Headline() {
  return (
    <>
      {" "}
   <section className="max-w-5xl mx-auto px-4 md:px-8 mt-6 mb-12 w-full">
          <div className="bg-[#5D5FEF85]   p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl relative ">
            {/* Left Image with Side Trim */}
            <div className="w-full md:w-[45%] relative border-l-[12px] border-[#A082D3] pl-4">
              <img 
                src="/images/health_Research/Research1.jpg" 
                alt="Medical Team" 
                className="w-full h-[220px] md:h-[280px] object-cover rounded-xl shadow-xl border-2 border-white/20"
              />
            </div>
            
            {/* Right Content */}
            <div className="w-full md:w-[55%] text-black pr-2">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Headline</h2>
              <p className="text-lg md:text-xl font-bold mb-6 leading-relaxed text-gray-900">
                It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
              </p>
              <a href="#" className="text-white font-extrabold text-lg hover:text-[#6953F5] transition-colors inline-block underline underline-offset-4 decoration-2">
                View more
              </a>
            </div>
          </div>
        </section>
    </>
  );
}
