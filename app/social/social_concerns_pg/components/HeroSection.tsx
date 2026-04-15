export default function HeroSection(){
    return(
        <>
        <section className="relative bg-[#5D5FEF9C] backdrop-blur-lg overflow-hidden border border-white/10 mb-20">
          <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/social/scoli2.jpg" 
                  alt="Culture" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative side borders similar to design */}
              <div className="absolute -left-2 top-10 bottom-10 w-1 bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
              <div className="absolute -right-2 top-10 bottom-10 w-1 bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
            </div>
            <div>
              <h2 className="text-[50px] font-bold mb-6 text-black/90">Beyond the Headlines</h2>
              <p className="text-[#FFFFFF] text-[32px] font-bold">
                It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
              </p>
              {/* Decorative elements - butterfly shapes could be SVGs */}
              <div className="absolute right-10 bottom-10 opacity-20 pointer-events-none">
                <div className="text-8xl">🦋</div>
              </div>
            </div>
          </div>
        </section>

        </>
    );
}