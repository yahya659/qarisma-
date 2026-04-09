import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";

export default function nextpagesustainablity(){
    return(
        <>
        <Header/>
        <br/>
        <br/>
        <br/>
         <section className="relative h-[500px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/nature/weather3.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center ml-[100] h-full px-12 max-w-4xl mx-auto text-center">
          <h1 className="text-[#FFFFFF] text-[60px] font-bold mb-4">
            Beyond the Headlines
          </h1>

          <p className="text-[#000000] text-[32px] font-bold mb-6 opacity-90 ">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are .
          </p>

          <button className="self-start w-[327px] h-[64px] rounded-[17px] bg-[#5D5FEF] shadow-[1px_4px_4px_0px_rgba(0,0,0,1)] opacity-100 font-medium transition hover:bg-[#4f46e5]">
            Learn More
          </button>
        </div>
      </section>
       <section className="relative w-full min-h-screen bg-gradient-to-br from-[#f3c1d3] via-[#cbb4ff] to-[#a0c4ff] py-16 px-6 overflow-hidden">
      
      {/* العنوان */}
      <h1 className="text-center text-[64px] md:text-5xl font-bold text-white mb-12">
        Explore More about{" "}
        <span className="text-[#5D5FEF] text-[64px]">Sustainability</span>
      </h1>

      {/* الكارد الكبير */}
      <div className="max-w-6xl mx-auto bg-[#5D5FEF6E] backdrop-blur-md  p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center shadow-lg">
        
        {/* الصورة */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/nature/weather4.jpg" // غيرها بمسارك
            alt="main"
            width={500}
            height={400}
            className=" object-cover w-full h-[300px]"
          />
        </div>

        {/* النص */}
        <div className="w-full md:w-1/2 text-white">
          <h2 className="text-[64px] md:text-3xl font-bold mb-4 text-[#000000]">
            Beyond the Headlines
          </h2>

          <p className="text-[32px] md:text-base text-white/90 leading-relaxed mb-6">
            It has one principle and one motto that can be read individually,
            meaning each word on its own, or as a whole, we believe that reality
            and maturity are core for truth
          </p>

          <button className="px-6 py-3 bg-[#5D5FEF] text-white rounded-xl shadow-md hover:scale-105 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* الكروت الصغيرة */}
     <div className=" min-h-screen p-30 flex flex-col items-center font-sans overflow-hidden">
      

        {/* 2. منطقة الكروت مع أزرار التنقل الجانبية */}
        <div className="relative flex items-center justify-center w-full gap-4 md:gap-8 mb-10">
          {/* حاوية الكروت */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            {/* كارد 1 */}
            <div className="relative w-[300px] h-[420px] bg-[#222]  overflow-hidden shadow-2xl ">
              <img
                src="/images/nature/Rectangle3.png"
                className="w-full h-1/2 object-cover"
                alt="Earth"
              />
              <div className="absolute top-[180px] left-0 bg-[#F178B6] px-4 py-1 z-20">
                <span className="text-black font-bold text-2xl">Earth</span>
              </div>
              <div className="p-4 pt-10 text-white text-xs leading-tight">
                It has one principle and one motto that can be read
                individually...
              </div>
            </div>

            {/* كارد 2 (الأوسط - أكبر قليلاً) */}
            <div className="relative w-[320px] h-[450px] bg-[#222] overflow-hidden shadow-2xl  transform scale-105 z-10">
              <img
                src="/images/nature/freepik3.jpg"
                className="w-full h-1/2 object-cover"
                alt="Earth"
              />
              <div className="absolute top-[200px] left-0 bg-[#F178B6] px-4 py-1 z-20">
                <span className="text-black font-bold text-2xl">Earth</span>
              </div>
              <div className="p-4 pt-12 text-white text-sm leading-snug">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole...
              </div>
            </div>

            {/* كارد 3 */}
            <div className="relative w-[300px] h-[420px] bg-[#222] overflow-hidden shadow-2xl">
              <img
                src="/images/nature/freepik2.jpg"
                className="w-full h-1/2 object-cover"
                alt="Earth"
              />
              <div className="absolute top-[180px] left-0 bg-[#F178B6] px-4 py-1 z-20">
                <span className="text-black font-bold text-2xl">Earth</span>
              </div>
              <div className="p-4 pt-10 text-white text-xs leading-tight">
                It has one principle and one motto that can be read
                individually...
              </div>
            </div>
          </div>
        </div>

        {/* 3. مؤشرات النقاط (Dots) */}
        <div className="flex gap-3 mb-8">
          <div className="w-6 h-6 rounded-full bg-white/20"></div>
          <div className="w-6 h-6 rounded-full bg-white/40"></div>
          <div className="w-6 h-6 rounded-full bg-white/60"></div>
          <div className="w-6 h-6 rounded-full bg-white/20"></div>
        </div>

        {/* 4. الترقيم السفلي (Pagination) */}
        <div className="flex items-center gap-4">
          <span className="text-white text-3xl cursor-pointer">«</span>
          <div className="flex gap-2">
             <Link href={"/nature/Articles/sustainablity"}>
         <button className="w-12 h-12    text-white rounded-xl font-bold text-2xl flex items-center justify-center hover:bg-white/50">
              1
            </button>
            </Link>
            <button className="w-12 h-12   bg-[#5D5FEF] text-white rounded-xl font-bold text-2xl flex items-center justify-center hover:bg-white/50">
              2
            </button>
      
          </div>
          <span className="text-white text-3xl cursor-pointer">»</span>
        </div>
      </div>

   
    </section>
    <Footer/>
    </>
    );
}