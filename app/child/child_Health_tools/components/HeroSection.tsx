import { Cloud } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover opacity-80 blur-sm bg-center"
          style={{
            backgroundImage: "url('/images/child/tols1.png')", // غير الصورة هنا
          }}
        />

         
        <div className="absolute inset-0 bg-purple-900/40" />

        {/* Curtains */}
        {/* <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-purple-400 z-10 rounded-r-[100px] opacity-80 shadow-2xl"></div> */}
        {/* <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-purple-400 z-10 rounded-l-[100px] opacity-80 shadow-2xl"></div> */}

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="bg-white/40 backdrop-blur-lg p-6 md:p-8 rounded-3xl border border-white/50 shadow-xl">
            <h3 className="text-purple-600 font-semibold mb-2">
              Explore With us
            </h3>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-purple-900 mb-4 leading-tight">
              Tools & Tricks for <br /> Good Enough Parenting
            </h1>

            <p className="text-base md:text-lg text-purple-800 max-w-2xl mx-auto leading-relaxed">
              It has one principle and one motto that can be read individually,
              meaning each word on its own, or as a whole. We believe that
              reality and maturity are core for truth.
            </p>
          </div>
        </div>

        {/* Floating Cloud */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 animate-bounce z-20">
          {/* <div className="relative">
            <Cloud className="w-16 h-16 md:w-24 md:h-24 text-pink-300 fill-current opacity-60" />
            <div className="absolute top-4 left-4 md:top-6 md:left-6 text-xl md:text-2xl">
              😊
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
