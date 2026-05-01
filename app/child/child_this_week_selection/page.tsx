import Footer from "@/app/components/Footer";
import React from "react";
import HeroSection from "./components/HeroSection";
import Header from "@/app/components/Header";
import Latest_news from "./components/Latest_news";
import This_Week_Selection from "./components/This_Week_Selection";
import Top_Of_the_week from "./components/Top_Of_the_week";
import MEET_OUR_Star from "./components/MEET_OUR_Star";

export default function ChildThisWeekSelection() {
  return (
    <>
      <Header />

      {/* spacing بدل br */}
      <div className="h-20 md:h-24" />

      <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">

        {/* Background Gradient */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#e2cceb] via-[#a380ce] to-[#d89fd1]" />

        {/* Hero Section */}
        <HeroSection />

        {/* Content */}
        <div className="relative w-full">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
            style={{
              backgroundImage: "url('/images/social/macaws1.png')",
            }}
          />

          {/* Sections */}
          <div className="space-y-16 md:space-y-24">

            <Latest_news />
            <This_Week_Selection />
            <Top_Of_the_week />
            <MEET_OUR_Star />

          </div>

          <Footer />

        </div>

      </div>
    </>
  );
}