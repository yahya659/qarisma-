import { Send } from "lucide-react";

export default function Stay_informed(){
    return(
        <>
        {/* CTA Footer Section */}
      <section className="bg-indigo-400 px-8 py-10 flex flex-col md:flex-row items-center justify-between ">
        <h3 className="text-xl font-bold mb-4 md:mb-0">Stay informed, learn more & contact us</h3>
        <button className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700  transition">
          send message <Send size={18} />
        </button>
      </section>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 py-12 bg-[#b28eb2]">
        <button className="text-3xl">&laquo;</button>
        <button className="w-10 h-10 rounded-lg bg-blue-600 text-white font-bold">1</button>
        <button className="w-10 h-10 rounded-lg bg-indigo-300 text-white font-bold">2</button>
        <button className="w-10 h-10 rounded-lg bg-indigo-300 text-white font-bold">3</button>
        <button className="text-3xl">&raquo;</button>
      </div></>
        
    );
}