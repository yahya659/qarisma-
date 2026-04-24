export default function Share_your_project(){
    return(
          <section className="bg-[#5D5FEF85]/50 py-20 mt-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-[#F178B6] text-[64px] font-bold ">Share your project with us</h2>
            <p className="mb-8 text-[30px] opacity-90 max-w-xl">
              It has one principle and one motto that can be read individually, 
              meaning each word on its own, or as a whole, we believe that reality 
              and maturity are core for truth.
            </p>
            <button className="px-8 py-3 bg-pink-400 hover:bg-pink-500 rounded-xl font-bold shadow-lg transition">
              Add your project
            </button>
          </div>
          <div className="flex-1 relative flex gap-4 justify-center">
            <div className="w-[241px] h-[240px] overflow-hidden shadow-2xl ">
               <img src="/images/Youth/Youth4.jpg" className="w-[241px] opacity-50 h-[240px] object-cover" alt="sample" />
            </div>
            <div className="w-[241px] h-[240px] overflow-hidden shadow-2xl  mt-100">
               <img src="/images/Youth/Youth4.jpg" className="w-full h-full object-cover opacity-50" alt="sample" />
            </div>
          </div>
        </div>
      </section>
    );
}