import { ChevronDown } from "lucide-react";

export default function Earning_overview() {
  return (
    <>
      <section className="px-8 lg:px-16 mb-10">
        <div className="bg-indigo-400/40 h-[637px] backdrop-blur-xl  p-10">
          <div className="flex flex-wrap justify-between items-center mb-10">
            <h3 className="text-[40px] font-bold">Earning overview</h3>
            <button className="px-8 py-2.5 bg-[#5D5FEF] text-[32px]  font-bold flex items-center gap-2">
              Last 6 months
            </button>
          </div>
          {/* Mock Bar Chart */}
          <div className="flex items-end mt-30 justify-between h-60 gap-2 md:gap-4 px-4">
            {[100, 70, 70, 40, 70, 40].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-xl bg-indigo-500/60`}
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
