import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";

export default function sustainablity() {
  const cards = [
    { img: "/images/nature/climate1.png" },
    { img: "/images/nature/climate2.jpg" },
    { img: "/images/nature/climate3.jpg" },
    { img: "/images/nature/climate4.jpg" },
  ];
  return (
    <>
      <br />
      <br />
      <br />
      <Header />
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
      <section className="max-w-[1711px] min-h-[821px] mx-auto  px-6 pb-10 bg-[#F178B64F]">
        <div className="bg-gradient-to-r from-[#c084fc]/40 to-[#F178B64F]/31 backdrop-blur-md p-10 shadow-xl flex flex-col md:flex-row gap-12 items-center h-full ">
          {/* الصورة */}
          <div className="relative w-[529px] h-[591px]">
            <img
              src="/images/nature/weather4.jpg"
              className="w-full h-full object-cover "
            />
          </div>

          {/* النص */}
          <div className="flex flex-col justify-center h-full md:w-1/2 items-start text-left">
            <span className="text-[#5D5FEF] bg-[#FFFFFF6E] font-bold text-[48px]">
              climate change
            </span>

            <h2 className="text-[#000000] text-[64px] font-bold mb-4">
              Beyond the Headlines
            </h2>

            <p className="text-[#FFFFFF] text-[30px] leading-relaxed max-w-[500px]">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth
            </p>

            <button className="mt-6 w-[180px] h-[50px] rounded-xl bg-[#5D5FEF] text-[#FFFFFF] shadow-lg hover:bg-[#4f46e5] transition">
              Read Full Story
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* --------------------------------------------- */}

        {/* <h1>Watch More Stories</h1> */}
        <div className="flex gap-6 justify-center flex-wrap">
          {/* الكارد 1 (نفس كودك 100%) */}
          <div className="relative w-[339.55px] h-[486.80px] bg-[#5D5FEF24] rounded-[13px] overflow-hidden">
            {/* الصورة */}
            <h1 className="text-[#FFFFFF] text-[20px] font-bold leading-relaxed text-center max-w-[280px] mt-85 ">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth.
            </h1>

            <img
              src="/images/nature/Rectangle2.png"
              alt="image"
              className="w-full h-full object-cover"
            />

            {/* طبقة سوداء */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            <div className="absolute top-0 left-0 w-full h-[314.95px] rounded-[13px] overflow-hidden">
              <img
                src="/images/nature/Rectangle3.png"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* البادج */}
            <div className="absolute top-[260px] left-[20px] w-[201.38px] h-[67.65px] bg-[#F178B6A3] flex items-center justify-center rounded-md z-20">
              <span className="text-black font-bold text-[48px]">Earth</span>
            </div>
          </div>
          {/* الكارد 1 (نفس كودك 100%) */}
          <div className="relative w-[339.55px] h-[486.80px] bg-[#5D5FEF24] rounded-[13px] overflow-hidden">
            {/* الصورة */}
            <h1 className="text-[#FFFFFF] text-[16px] font-bold leading-relaxed text-center max-w-[280px] mt-85 ">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth.
            </h1>

            <img
              src="/images/nature/Rectangle2.png"
              alt="image"
              className="w-full h-full object-cover"
            />

            {/* طبقة سوداء */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            <div className="absolute top-0 left-0 w-full h-[314.95px] rounded-[13px] overflow-hidden">
              <img
                src="/images/nature/freepik3.jpg"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* البادج */}
            <div className="absolute top-[260px] left-[20px] w-[201.38px] h-[67.65px] bg-[#F178B6A3] flex items-center justify-center rounded-md z-20">
              <span className="text-black font-bold text-[48px]">Earth</span>
            </div>
          </div>
          {/* الكارد 2 (نفس كودك 100%) */}

          {/* الكارد 3 (نفس كودك 100%) */}
          <div className="relative w-[339.55px] h-[486.80px] bg-[#5D5FEF24] rounded-[13px] overflow-hidden">
            {/* الصورة */}
            <h1 className="text-[#FFFFFF] text-[16px] font-bold leading-relaxed text-center max-w-[280px] mt-85 ">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth.
            </h1>

            <img
              src="/images/nature/Rectangle2.png"
              alt="image"
              className="w-full h-full object-cover"
            />

            {/* طبقة سوداء */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            <div className="absolute top-0 left-0 w-full h-[314.95px] rounded-[13px] overflow-hidden">
              <img
                src="/images/nature/freepik2.jpg"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* البادج */}
            <div className="absolute top-[260px] left-[20px] w-[201.38px] h-[67.65px] bg-[#F178B6A3] flex items-center justify-center rounded-md z-20">
              <span className="text-black font-bold text-[48px]">Earth</span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="flex gap-6 justify-center flex-wrap">
          {/* الكارد 1 (نفس كودك 100%) */}
          <div className="relative w-[339.55px] h-[486.80px] bg-[#5D5FEF24] rounded-[13px] overflow-hidden">
            {/* الصورة */}
            <h1 className="text-[#FFFFFF] text-[16px] font-bold leading-relaxed text-center max-w-[280px] mt-85 ">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth.
            </h1>

            <img
              src="/images/nature/Rectangle2.png"
              alt="image"
              className="w-full h-full object-cover"
            />

            {/* طبقة سوداء */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            <div className="absolute top-0 left-0 w-full h-[314.95px] rounded-[13px] overflow-hidden">
              <img
                src="/images/nature/Rectangle3.png"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* البادج */}
            <div className="absolute top-[260px] left-[20px] w-[201.38px] h-[67.65px] bg-[#F178B6A3] flex items-center justify-center rounded-md z-20">
              <span className="text-black font-bold text-[48px]">Earth</span>
            </div>
          </div>
          {/* الكارد 1 (نفس كودك 100%) */}
          <div className="relative w-[339.55px] h-[486.80px] bg-[#5D5FEF24] rounded-[13px] overflow-hidden">
            {/* الصورة */}
            <h1 className="text-[#FFFFFF] text-[16px] font-bold leading-relaxed text-center max-w-[280px] mt-85 ">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth.
            </h1>

            <img
              src="/images/nature/Rectangle2.png"
              alt="image"
              className="w-full h-full object-cover"
            />

            {/* طبقة سوداء */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            <div className="absolute top-0 left-0 w-full h-[314.95px] rounded-[13px] overflow-hidden">
              <img
                src="/images/nature/freepik3.jpg"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* البادج */}
            <div className="absolute top-[260px] left-[20px] w-[201.38px] h-[67.65px] bg-[#F178B6A3] flex items-center justify-center rounded-md z-20">
              <span className="text-black font-bold text-[48px]">Earth</span>
            </div>
          </div>
          {/* الكارد 2 (نفس كودك 100%) */}

          {/* الكارد 3 (نفس كودك 100%) */}
          <div className="relative w-[339.55px] h-[486.80px] bg-[#5D5FEF24] rounded-[13px] overflow-hidden">
            {/* الصورة */}
            <h1 className="text-[#FFFFFF] text-[16px] font-bold leading-relaxed text-center max-w-[280px] mt-85 ">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole, we believe that
              reality and maturity are core for truth.
            </h1>

            <img
              src="/images/nature/Rectangle2.png"
              alt="image"
              className="w-full h-full object-cover"
            />

            {/* طبقة سوداء */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            <div className="absolute top-0 left-0 w-full h-[314.95px] rounded-[13px] overflow-hidden">
              <img
                src="/images/nature/freepik2.jpg"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* البادج */}
            <div className="absolute top-[260px] left-[20px] w-[201.38px] h-[67.65px] bg-[#F178B6A3] flex items-center justify-center rounded-md z-20">
              <span className="text-black font-bold text-[48px]">Earth</span>
            </div>
          </div>
        </div>
        {/* --------------------------------------------- */}
        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <span className="text-2xl cursor-pointer">«</span>
          <div className="flex gap-2">
            <span className="w-8 h-8 flex items-center justify-center bg-[#6366f1] rounded-md font-bold">
              1
            </span>
            <Link href={"/nature/Articles/sustainablity/nextpage"}>
              <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-md font-bold">
                2
              </span>
            </Link>
          </div>
          <span className="text-2xl cursor-pointer">»</span>
        </div>
      </section>

      <Footer />
    </>
  );
}
