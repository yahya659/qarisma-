export default function Limited_Time_Offer() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="relative overflow-hidden  bg-[#5D5FEFA3] w-[1447px] h-[730px] border border-white/10 shadow-2xl">
        <div className="absolute inset-0 opacity-50">
          <img
            src="/images/entertainment/aded1.jpg"
            className="w-full h-full object-cover"
            alt="Sale BG"
          />
        </div>
        <div className="relative z-10 p-10 md:p-20 max-w-2xl">
          <span className="text-[#FFFFFF] font-bold  tracking-widest text-[24px] mb-4 block">
            Limited Time Offer
          </span>
          <h2 className="text-[60px] font-blacFk text-white mb-6 leading-tight">
            Unlock your Next Adventure
          </h2>
          <p className="text-[#F178B6] font-SemiBold mb-10 text-[32px]">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth.
          </p>
          <button className="bg-[#5D5FEF33]  text-[#FFFFFF] text-[32px] px-10 py-4  font-black transition-all transform hover:scale-105">
            Browse sale
          </button>
        </div>
      </div>
    </section>
  );
}
