"use client";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
export default function Home() {
  const [current, setCurrent] = useState(0);

  const cards = [
    {
      title: "Green Cities",
      img: "/images/nature/freepik2.jpg",
      desc: "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth.",
    },
    {
      title: "Earth",
      img: "/images/nature/freepik3.jpg",
      desc: "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth.",
    },
    {
      title: "Wild life",
      img: "/images/nature/freepik4.jpg",
      desc: "It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth.",
    },
  ];
  const router = useRouter();
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="relative min-h-screen text-white font-sans overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/nature/naturebavkgrauond.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="background"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5D5FEF]/40 to-[#F178B6]/80"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* HERO */}
          <section className="px-6 py-10 max-w-6xl mx-auto">
            <h1 className="text-[#5D5FEF] text-[64px] font-bold drop-shadow-lg mb-2">
              Nature
            </h1>
            <p className="text-[#FFFFFF] text-[40px] mb-6">
              Top headlines and In-depth across the world
            </p>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap mb-6">
              <button className="px-4 py-2 rounded-[18px] text-[#FFFFFF] backdrop-blur-md bg-[#F178B6] text-white">
                All
              </button>

              <button
                onClick={() => router.push("/nature/Articles")}
                className="px-4 py-2 rounded-[18px] text-[14px] backdrop-blur-md bg-[#5D5FEF85] hover:bg-white/30 transition"
              >
                Articles
              </button>

              <button onClick={() => router.push("/nature/Landscapes")} className="px-4 py-2 rounded-[18px] text-[14px] backdrop-blur-md bg-[#5D5FEF85] hover:bg-white/30 transition">
                Landscapes
              </button>

              <button onClick={() => router.push("/nature/Programs")} className="px-4 py-2 rounded-[18px] text-[14px] backdrop-blur-md bg-[#5D5FEF85] hover:bg-white/30 transition">
                Programs
              </button>

              {/* Search */}
              <input
                placeholder="Search..."
                className="bg-[#5D5FEF] backdrop-blur-md px-4 py-2 outline-none w-60 placeholder-white translate-x-100 text-center"
              />
            </div>
            <button  onClick={() => router.push("/nature/BenefitsHarms")} className="px-4 py-2 rounded-[18px] text-[14px] backdrop-blur-md bg-[#5D5FEF85] hover:bg-white/30 transition">
              Benefits & Harms
            </button>
            <button onClick={() => router.push("/nature/outook")} className="px-4 py-2 rounded-[18px] text-[14px] backdrop-blur-md bg-[#5D5FEF85] hover:bg-white/30 transition">
              Outings & Places
            </button>
            <button onClick={() => router.push("/nature/Teams_Of_The_Week")} className="px-4 py-2 rounded-[18px] text-[14px] backdrop-blur-md bg-[#5D5FEF85] hover:bg-white/30 transition">
              Teams Of The Week
            </button>
          </section>

          {/* FEATURE CARD */}
          <section className="max-w-6xl mx-auto px-6">
            <div className="bg-[#00000040] backdrop-blur- border border-white/20 p-6 rounded-2xl shadow-xl flex flex-col md:flex-row gap-6 items-center">
              <img
                src="/images/nature/freepik.png"
                className="w-full md:w-1/2 h-60 object-cover rounded-xl"
              />

              <div>
                <h2 className="text-[#FFFFFF] text-[50px] font-bold mb-3">
                  Beyond the Headlines
                </h2>
                <p className="text-[#000000] text-[30px] font-bold mb-4">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole.
                </p>

                <div className="flex gap-3">
                  <button className="bg-[#5D5FEF] hover:bg-[#4a4cd6] px-4 py-2 rounded-md">
                    Learn More
                  </button>
                  <button className="bg-[#F178B6] hover:bg-[#e15aa3] px-4 py-2 rounded-md">
                    Latest News
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* DISCOVER */}
          <section className="text-center mt-16 px-6">
            <h2 className="text-[#FFFFFF]  text-[64px] font-bold mb-2">
              Discover your world
            </h2>
            <p className="text-[#F178B6] text-[40px] font-bold mb-8">
              Top headlines and In depth across the world
            </p>

            <div className="flex items-center justify-center gap-6">
              {/* Cards */}
              <div className="flex gap-6">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`w-60 p-4 rounded-xl transition ${
                      index === current
                        ? "bg-white/30 scale-105"
                        : "bg-white/20"
                    }`}
                  >
                    <img
                      src={card.img}
                      className="h-40 w-full object-cover rounded-lg mb-3"
                    />
                    <h3 className="bg-[#F178B669] text-[#000000] text-[30px] font-bold">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#FFFFFF] text-[20px]">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="flex items-center gap-6 justify-center mt-10">
            {/* سهم السابق */}
            <button className="text-white  bg-[#5D5FEF] rounded-4xl opacity-70 hover:opacity-100 transition-all">
              <ChevronsLeft size={32} />
            </button>

            {/* أرقام الصفحات */}
            <div className="flex gap-3">
              <button className="w-12 h-12  text-white rounded-2xl font-bold text-xl shadow-lg">
                1
              </button>
              <button className="w-12 h-12 bg-white/20 text-white rounded-2xl font-bold text-xl hover:bg-white/30 transition-all">
                2
              </button>
              <button className="w-12 h-12 bg-white/20 text-white rounded-2xl font-bold text-xl hover:bg-white/30 transition-all">
                3
              </button>
            </div>

            {/* سهم التالي */}
            <button className="text-white bg-[#5D5FEF] rounded-4xl  opacity-70 hover:opacity-100 transition-all">
              <ChevronsRight size={32} />
            </button>
          </div>

          {/* VIDEO SECTION */}
          <section className="max-w-6xl mx-auto mt-16 px-6 pb-10">
            <div className="bg-[#00000040] backdrop-blur-md p-6 shadow-xl flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-full  md:w-1/2">
                <img
                  src="/images/nature/freepik5.png"
                  className="w-full h-60 object-cover "
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#F178B6] w-14 h-14 flex items-center justify-center rounded-full text-white text-xl">
                    ▶
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-[#FFFFFF] text-[50px] font-bold mb-3">
                  Beyond the Headlines
                </h2>
                <p className="text-[#000000] text-[30px] font-bold">
                  It has one principle and one motto that can be read
                  individually, meaning each word on its own, or as a whole.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
