export default function Recent_Payouts(){
    return(
        <>    {/* Recent Payouts & Methods */}
      <section className="px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
            <div className="bg-indigo-400/40 backdrop-blur-xl   rounded-[2rem] overflow-hidden min-h-[400px]">
              <div className="p-8 pb-0">
                <h3 className="text-[40px] font-bold mb-6">Recent Payouts</h3>
              </div>
              <div className="w-full bg-[#F178B6A3] text-[#000000] py-3 px-8 grid grid-cols-4 text-[24px] font-black uppercase tracking-wider">
                <span>Date</span>
                <span>Reference</span>
                <span>Amount</span>
                <span>Status</span>
              </div>
              <div className="p-8 text-center text-white/30 italic">No recent transactions to display</div>
            </div>
        </div>
        
        <div className="space-y-8">
          {/* Payout Methods */}
          <div className="bg-indigo-400/40 backdrop-blur-xl  rounded-[2rem]  p-8">
             <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-bold text-white/70">Payouts Methods</span>
                <span className="text-xs font-black uppercase text-white/40 tracking-widest">Primary</span>
             </div>
             <div className="bg-pink-400/50 rounded-2xl p-6 flex items-center gap-4 mb-8">
                <div className="bg-white p-2 rounded-lg">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6 w-6" alt="paypal" />
                </div>
                <div>
                   <p className="font-black italic">PayPal</p>
                   <p className="text-xs text-white/60">sara...dev@gmail.com</p>
                </div>
             </div>
             <div className="space-y-2 mb-8">
                <p className="text-sm font-bold text-white/70">Next payout Estimate</p>
                <p className="text-3xl font-black">$5,250</p>
                <p className="text-[10px] uppercase font-bold text-white/40">Expected on Nov 01, 2025</p>
             </div>
             <button className="w-full py-4 bg-pink-400/60 hover:bg-pink-400 rounded-2xl font-black text-sm transition-all shadow-lg uppercase">
               Manage Methods
             </button>
          </div>
        </div>
      </section></>
    );
}