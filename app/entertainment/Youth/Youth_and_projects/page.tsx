import Footer from "@/app/components/Footer";
import Stay_informed from "../components/Stay_informed";
import Filter_Search from "./components/Filter_Search";
import HeroSection from "./components/HeroSection";
import Share_your_project from "./components/Share_your_project";
import What_our_youth_about from "./components/What_our_youth_about";
import Header from "@/app/components/Header";

export default function Youth_and_projects() {
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
          <Filter_Search />
          <Share_your_project />
          <What_our_youth_about />
          <Stay_informed />
          <Footer />
        </div>
      </div>
    </>
  );
}
