import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import Latest_Stories from "./components/Latest_Stories";
import Explore_More_Sports from "./components/Explore_More_Sports";

export default function Latest_Scores() {
  return (
    <>
      {" "}
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">
        {/* Background Gradient (في الخلف) */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#e2cceb] via-[#a380ce] to-[#d89fd1]" />

        {/* Hero Section */}
        {/* <HeroSection /> */}

        {/* Discover Section */}
        <div className="relative w-full">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
            style={{
              backgroundImage: "url('/images/social/macaws1.png')",
            }}
          />
 <Latest_Stories/>
 <Explore_More_Sports/>
          <Footer />
        </div>
      </div>
    </>
  );
}
