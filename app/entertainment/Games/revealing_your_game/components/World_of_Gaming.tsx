export default function World_of_Gaming() {
  return (
    <section className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img
            src="/images/entertainment/aded1.jpg"
            className="relative shadow-2xl w-[681.1355590820312] h-[650.4384765625] aspect-square object-cover"
            alt="Neon Portal"
          />
        </div>
        <div className="text-white space-y-6">
          <h2 className="text-[#FFFFFF] text-[64px] tracking-tight font-Bold">
            world of Gaming
          </h2>
          <p className="text-[36px] leading-relaxed opacity-90 text-[#000000]">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth.
          </p>
          <button className="bg-[#5D5FEF] hover:bg-blue-700 text-white text-[32px] px-8 py-3 rounded-lg font-black transition-all transform hover:-translate-y-1 shadow-lg">
            join our community
          </button>
        </div>
      </div>
    </section>
  );
}
