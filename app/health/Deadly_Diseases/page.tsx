import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import Top_Story from "./components/Top_Story";
import Latest_News from "./components/Latest_News";
import Epidemic_Pandemicprone_Disease from "./components/Epidemic_Pandemicprone_Disease";
import Studies_Recent_Research from "./components/Studies_Recent_Research";
import Watch_Explore from "./components/Watch_Explore";

export default function Deadly_Diseases() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">
        {/* Background Gradient (في الخلف) */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[# 5D5FEF] via-[#5D5FEF] to-[#5 D5FEF]" />

        {/* Hero Section */}
        {/* <HeroSection /> */}

        {/* Discover Section */}
        <div className="relative w-full">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 -z-10"
            style={{
              backgroundImage: "url('/images/social/macaws1.png')",
            }}
          />
          <Top_Story />
          <Latest_News />
          <Epidemic_Pandemicprone_Disease />
          <Studies_Recent_Research />
          <Watch_Explore/>
          <Footer />
        </div>
      </div>
    </>
  );
}
