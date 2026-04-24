export default function Sustainability_food(){
    return(
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
               <div className="relative  overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3]">
                  <img 
                    src="/images/entertainment/enterainment8.jpg" 
                    alt="Sustainability Dish" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
               </div>
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-[48px] md:text-4xl font-black text-black mb-6 drop-shadow-sm">
                Sustainability & food
              </h2>
              <p className="text-white font-bold leading-relaxed mb-4 text-[20px] drop-shadow-sm">
                It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
              </p>
              <p className="text-white font-bold leading-relaxed mb-8 text-lg drop-shadow-sm">
                It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
              </p>
              <button className="px-10 py-3 bg-[#5D5FEF85] text-[#F178B6] text-[36px] font-bold rounded-xl transition-colors shadow-lg shadow-indigo-500/30 uppercase tracking-wide">
                Read More
              </button>
            </div>
          </div>
        </div>
    );
}