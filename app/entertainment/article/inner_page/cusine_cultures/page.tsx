// import Stay_informed from "./components/";
import Stay_informed from "./components/Stay_informed";
import Global_Cuisine from "./components/Global_Cuisine";
import HeroSection from "./components/HeroSection";
import Latest_News from "./components/Latest_News";
import Middle_East_Cuisine from "./components/Middle_East_Cuisine";
import Restaurant_Celebrities from "./components/Restaurant_Celebrities";
import Top_story from "./components/Top_story";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function cusine_cultures() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">
        {/* Background Gradient (في الخلف) */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#e2cceb] via-[#a380ce] to-[#d89fd1]" />

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
          <Top_story />
          <Middle_East_Cuisine />
          <Global_Cuisine />
          <Restaurant_Celebrities />
          <Latest_News />
          <Stay_informed />
          <Footer />
        </div>
      </div>
    </>
  );
}
