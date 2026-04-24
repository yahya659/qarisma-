export default function Pricing_Revenue() {
  return (
    <>
      {" "}
      <div className="bg-[#F178B6A3]/64 backdrop-blur-xl   p-8 shadow-2xl">
        <h2 className="text-[#5B65E9] text-[40px] font-black mb-8 ">
          Pricing & Revenue
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-[#E48DC8] border-2 border-[#E48DC8] text-center font-black uppercase text-sm shadow-md">
            Free / No payments
          </div>
          <div className="p-5 rounded-2xl bg-[#CCADE1]/80 text-center font-black uppercase text-sm">
            Pay What you want
          </div>
          <div className="p-5 rounded-2xl bg-[#CCADE1]/80 text-center font-black uppercase text-sm">
            Paid
          </div>
        </div>
      </div>
    </>
  );
}
