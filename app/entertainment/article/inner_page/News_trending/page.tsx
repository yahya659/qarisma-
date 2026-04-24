import Header from "@/app/components/Header";
import Food_trends from "./components/Food_trends";
import HeroSection from "./components/HeroSection";
import Latest_stories from "./components/Latest_stories";
import Our_selection from "./components/Our_selection";

import Stay_informed from "./components/Stay_informed";
import Sustainability_food from "./components/Sustainability_food";
import Footer from "@/app/components/Footer";

export default function News_trending() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">
        {/* Background Gradient (في الخلف) */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#e2cceb] via-[#a380ce] to-[#d89fd1]" />

        {/* Hero Section */}

        {/* Discover Section */}
        <div className="relative w-full">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
            style={{
              backgroundImage: "url('/images/social/macaws1.png')",
            }}
          />
          <HeroSection />
          <Latest_stories />
          <Food_trends />
          <Sustainability_food />
          <Our_selection />
          <Stay_informed />
          <Footer />
        </div>
      </div>
    </>
  );
}
