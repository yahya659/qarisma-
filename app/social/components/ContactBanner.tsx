import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ContactBanner(){
    return(
        <>
            <section className="px-6 py-10">
              <div className="max-w-7xl mx-auto bg-[#5D5FEF7D]  border border-white/10 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <h3 className="text-xl font-medium">
                  stay informed, learn more & contact us
                </h3>
                <button className="bg-[#5D5FEF] hover:bg-blue-700 px-10 py-3 rounded-xl font-bold flex items-center gap-2 group">
                  send message
                </button>
              </div>
            </section>
             {/* Pagination */}
            <div className="flex justify-center items-center gap-4 py-10">
              <button className="p-2 text-gray-400 hover:text-white">
                <ChevronLeft size={32} />
              </button>
              <button className="w-10 h-10 bg-blue-600 rounded-lg font-bold">
                1
              </button>
              <button className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg font-bold">
                2
              </button>
              <button className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg font-bold">
                3
              </button>
              <button className="p-2 text-gray-400 hover:text-white">
                <ChevronRight size={32} />
              </button>
            </div>
            </>
    );
}