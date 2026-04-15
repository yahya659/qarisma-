import { Search } from "lucide-react";
import path from "path";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Filters_and_Search() {
     const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
 { name: "All", path: "" },
     {name:"sustainability",path:"/social/social_concerns_pg/social_concerns_inner/sustainability_pg"},
   { name:"mental health",  path: "/social/social_concerns_pg/social_concerns_inner/metal_health"},
    {name:"weekly columns", path: "/social/social_concerns_pg/social_concerns_inner/weekly_columns"},
  ];
  return (
    <>
   {/* Main Title Section */}
         <section className="mb-12">
           <h1 className="text-[54px] text-[#FFFFFF] font-bold mb-6 tracking-tight">
             concerns from various cultures & Communities
           </h1>
           <p className=" text-[32px] text-[#000000] font-bold">
             It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
           </p>
         </section>
 
         {/* Filters and Search */}
         <div className="flex flex-wrap items-center gap-4 mb-16 ">
           <div className="flex flex-wrap gap-2 p-1 bg-white/10 backdrop-blur-sm rounded-xl bg-[#E8C1C559]">
             {categories.map((cat) => (
               <button
                 key={cat.name}
                 onClick={() => router.push(cat.path)}
                 className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                   activeCategory === cat.name
                   ? 'bg-pink-400 text-white shadow-lg' 
                   : 'hover:bg-white/10'
                 }`}
               >
                 {cat.name}
               </button>
             ))}
           </div>
           
           <div className="relative flex-grow max-w-sm">
             <input 
               type="text" 
               placeholder="search" 
               className="w-full bg-white text-gray-800 px-6 py-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-400/30"
             />
             <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
           </div>
         </div>
    
    </>
  );
}
