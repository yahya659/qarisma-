import Footer from "@/app/components/Footer";
import Best_of_the_week from "./components/Best_of _the_week";
import Explore_Latest_News from "./components/Explore_Latest_News";
import HeroSection from "./components/HeroSection";
import New_Trailer_screen from "./components/New_Trailer_screen";
import Pagination from "./components/Pagination";
import Recently_Added from "./components/Recently_Added";
import World_of_Gaming from "./components/World_of_Gaming";
import Header from "@/app/components/Header";

export default function Games() {
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
          <Recently_Added />
          <Explore_Latest_News />
          <World_of_Gaming />
          <New_Trailer_screen />
          <Best_of_the_week />
          <Pagination />

          <Footer />
        </div>
      </div>
    </>
  );
}
