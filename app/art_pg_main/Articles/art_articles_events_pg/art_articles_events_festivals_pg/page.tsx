import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import HeroSection from "./components/HeroSection";
import CATEGORIES from "./components/CATEGORIES";
import Vision_Of_Latest_Exhibitions from "./components/Vision_Of_Latest_Exhibitions";
import The_Language_Light_and_Shadow from "./components/The_Language_Light_and_Shadow";
import Latest_Articles from "./components/Latest_Articles ";

export default function art_articles_events_festivals_pg() {
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
        <div className="fixed inset-0 -z-10 bg-[linear-gradient(270deg,#5D5FEF_-5.47%,#F178B6_100%)]" />
        {/* Hero Section */}

        <HeroSection />
        {/* Discover Section */}
        <div className="relative w-full">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
            style={{
              backgroundImage: "url('/images/social/macaws1.png')",
            }}
          />
          <CATEGORIES />
          <Vision_Of_Latest_Exhibitions />

          <Latest_Articles />
          <Footer />
        </div>
      </div>
    </>
  );
}
