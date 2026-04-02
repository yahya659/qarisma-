"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";

const TalentsPage = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="min-h-screen font-sans bg-gradient-to-b from-[#5D5FEF7D] to-[#5D5FEF7D] pb-20">
        {/* HERO */}
        <section className="relative h-[600px] overflow-hidden">
          {/* Background Image */}
          <img
            src="/images/talents.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Curtains */}
          <div className="absolute left-0 top-0 h-full w-40 bg-pink-400 rounded-r-full blur-xl opacity-70"></div>
          <div className="absolute right-0 top-0 h-full w-40 bg-pink-400 rounded-l-full blur-xl opacity-70"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div className="max-w-xl text-white">
              <h2 className="text-2xl mb-2">Explore your</h2>

              <h1 className="text-7xl font-extrabold text-pink-400 mb-4">
                Talents
              </h1>

              <p className="text-lg leading-relaxed mb-6 text-gray-200">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, we
                believe that reality and maturity are core for truth
              </p>

              <button className="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-xl font-bold shadow-xl transition">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* TOP TALENTS */}
        <section className="relative py-20 text-center overflow-hidden">
          {/* Background */}
          <img
            src="/images/reports2.png"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-purple-300/60 backdrop-blur-sm"></div>

          {/* CONTENT */}
          <div className="relative z-10">
            <h2 className="text-6xl font-black text-indigo-700 mb-4">
              Top Talents
            </h2>

            <p className="text-lg text-gray-900 mb-16">
              Top Events and In-depth across the world
            </p>

            <div className="flex items-center justify-center gap-6">
              <button className="w-12 h-12 rounded-full bg-indigo-500 text-white text-xl shadow">
                ←
              </button>

              <div className="flex items-end gap-6 relative">
                <div className="bg-white/70 backdrop-blur rounded-2xl p-3 w-44">
                  <img
                    src="/images/artival2.jpg"
                    className="h-28 w-full object-cover rounded-xl mb-2"
                  />
                  <h4 className="text-sm font-bold text-left">Artists</h4>
                  <p className="text-[10px] text-left">
                    It has one principle...
                  </p>
                </div>

                <div className="bg-white rounded-3xl w-80 shadow-2xl scale-110 z-20 overflow-hidden border-4 border-white">
                  <img
                    src="/images/artival1.png"
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-5 text-left">
                    <h3 className="text-2xl font-bold text-gray-800">
                      Gallery
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      It has one principle...
                    </p>
                    <p className="text-xs text-indigo-500 font-bold mt-2">
                      (Elegance, Personality, Strength)
                    </p>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur rounded-2xl p-3 w-44">
                  <img
                    src="/images/artival2.jpg"
                    className="h-28 w-full object-cover rounded-xl mb-2"
                  />
                  <h4 className="text-sm font-bold text-left">Artists</h4>
                  <p className="text-[10px] text-left">
                    It has one principle...
                  </p>
                </div>
              </div>

              <button className="w-12 h-12 rounded-full bg-indigo-500 text-white text-xl shadow">
                →
              </button>
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-3 mt-10">
              <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
              <div className="w-3 h-3 bg-indigo-300 rounded-full"></div>
              <div className="w-3 h-3 bg-indigo-300 rounded-full"></div>
              <div className="w-3 h-3 bg-indigo-300 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* EXPLORE MORE */}
        <section className="relative flex flex-col md:flex-row items-center gap-16 px-20 py-20 overflow-hidden">
          {/* Background */}
          <img
            src="/images/reports2.png"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-purple-300/60 backdrop-blur-sm"></div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-16 w-full">
            <div className="w-full md:w-2/5">
              <img
                src="/images/talntes3.jpg"
                className="rounded-3xl shadow-2xl"
              />
            </div>

            <div className="w-full md:w-3/5 text-left">
              <h2 className="text-5xl font-black text-indigo-700 mb-6">
                Explore more
              </h2>

              <p className="mt-6 font-bold text-xl">
                It has one principle and one motto that can be read
                individually, meaning each word on its own, or as a whole, in a
                single sentence, whether from right to left or left to right:
              </p>

              <p className="mt-4 font-bold text-xl">
                (Elegance, Personality, Strength)
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <div className="px-12 mt-16">
          <div className="bg-[#8e7cf5] rounded-2xl p-5 flex justify-between items-center text-white shadow-xl">
            <p>stay informed, share your talent with us & contact us</p>

            <button className="bg-indigo-600 px-6 py-2 rounded-lg font-bold">
              send message
            </button>
          </div>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-3 mt-12">
          <button className="px-3 py-2 bg-indigo-300 rounded">«</button>
          <button className="px-3 py-2 bg-indigo-600 text-white rounded">
            1
          </button>
          <button className="px-3 py-2 bg-indigo-300 rounded">2</button>
          <button className="px-3 py-2 bg-indigo-300 rounded">3</button>
          <button className="px-3 py-2 bg-indigo-300 rounded">»</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TalentsPage;
