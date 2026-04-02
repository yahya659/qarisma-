import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Brands() {
  return (

    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/Fashion4.jpg"
        className="absolute inset-0 w-full h-full object-cover blur- brightness-150"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Curtains */}
      <div className="absolute left-0 top-0 h-full w-40 bg-pink-400 rounded-r-full blur-xl opacity-70"></div>
      <div className="absolute right-0 top-0 h-full w-40 bg-pink-400 rounded-l-full blur-xl opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-xl text-white">
          <h2 className="text-2xl mb-2">Explore more about</h2>

          <h1 className="text-7xl font-extrabold text-[#5D5FEF] mb-4">
            Fashion weeks
          </h1>

          <p className="text-lg leading-relaxed mb-6 text-gray-200">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth
          </p>

          <button className="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-xl font-bold shadow-xl transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
    <div className="min-h-screen font-sans text-white overflow-hidden bg-[#5D5FEF38]">
       <div className="fixed inset-0 -z-10">
          <img
            src="/images/breaking news.jpg"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/70 via-purple-500/70 to-indigo-500/70"></div>
        </div>
        <br/>
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-[64px] font-black text-[#5d58f0] mb-10">Latest Stories</h1>
        <p className="text-[40px] font-bold text-gray-900">
  Top headlines and In-depthg across the world
</p>
      </header>

      {/* Grid Section (Upper Cards) */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="relative group">
            {/* Pink Frame Background */}
            <div className="absolute inset-0 border-[10px] border-pink-300/40 rounded-sm -m-2 z-0" />
            
            <div className="relative z-10 bg-black/10 overflow-hidden shadow-lg border border-white/10">
              <img 
                src="/images/Fashion7.png" 
                alt="Story" 
                className="w-full h-64 object-cover"
              />
             <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#FFCFFB]">
                <h3 className="text-[32px] font-bold leading-tight">
  Beyond <br /> Headlines
</h3>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Learn More Center Button */}
      <div className="flex justify-center mb-24">
        <button className="bg-[#5D5FEFAB] hover:bg-[#4c47d9] px-10 py-2.5 rounded-xl font-bold shadow-lg transition-all active:scale-95">
          Learn More
        </button>
      </div>

      {/* Bottom Feature Section */}
      <section className="max-w-6xl mx-auto mb-20 flex flex-col md:flex-row gap-10 items-center  bg-[#B06DCFDA]">
        {/* Left Image with Blue Border */}
        <div className="md:w-1/2 relative group">
          <div className="absolute inset-0 border-4 border-blue-500 translate-x-2 translate-y-2 rounded-sm" />
          <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl">
            <img 
              src="/images/Beauty2.png" 
              alt="Feature" 
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-black text-white drop-shadow-md">Beyond Headlines</h2>
          <p className="text-gray-900 text-lg font-medium leading-relaxed max-w-md">
            It has one principle and one motto that can be read individually, 
            <span className="text-[#000000]"> meaning each word on its own</span>, 
            or as a whole, we believe that reality and maturity are core for truth.
          </p>
          <button className="bg-[#F178B6] hover:bg-[#e91e63] text-white px-10 py-3 rounded-2xl font-bold shadow-xl transition-all">
            Learn More
          </button>
        </div>
      </section>

      {/* Pagination Section */}
      <footer className="flex justify-center items-center gap-4 mt-10">
        <button className="p-2 text-white/60 hover:text-white transition-colors">
          <ChevronsLeft size={32} />
        </button>
        
        <div className="flex gap-3">
          <span className="w-12 h-12 flex items-center justify-center bg-[#5d58f0] text-white rounded-2xl font-black text-xl shadow-xl cursor-default">
            1
          </span>
          <span className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white rounded-2xl font-bold text-xl cursor-pointer transition-all">
            2
          </span>
          <span className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white rounded-2xl font-bold text-xl cursor-pointer transition-all">
            3
          </span>
        </div>

        <button className="p-2 text-white/60 hover:text-white transition-colors">
          <ChevronsRight size={32} />
        </button>
      </footer>
    </div>
    <br/>
    <br/>
    <Footer/>
    </>
    
  );
}
