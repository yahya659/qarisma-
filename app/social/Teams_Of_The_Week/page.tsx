import Header from "@/app/components/Header";
import HeroSection from "./components/HeroSection";
import Best_of_The_Week from "./components/Best_of_The_Week";
import Top_Weekly from "./components/Top_Weekly";
import MEET_OUR_Star from "./components/MEET_OUR_Star";
import Footer from "@/app/components/Footer";

export default function Teams_Of_The_Week() {
  return (
    <>
      <Header />

      <div className="min-h-screen text-white font-sans selection:bg-purple-500/30 bg-[linear-gradient(272.99deg,rgba(241,120,182,0.87)_-17.02%,rgba(93,95,239,0.87)_117.79%)]">
        {/* Hero Section */}
        <div className="mt-20 mb-20">
          <HeroSection />
        </div>

        {/* Section */}
        <section className="relative py-20 px-4 md:px-12 mt-90">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('/images/social/macaws1.png')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <Best_of_The_Week />

          {/* Top Weekly Community Section */}
          <Top_Weekly />

          <MEET_OUR_Star />
        </section>
      </div>
      <Footer/>
    </>
  );
}
