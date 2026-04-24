import Footer from "../components/Footer";
import Header from "../components/Header";
import Discover_Filters_Section from "./components/Discover_Filters_Section";
import Featured_Card from "./components/Featured_Card";
import HeroSection from "./components/HeroSection";

export default function entertainment() {
  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
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

    <Discover_Filters_Section />
    <Featured_Card />
    <Footer/>
  </div>
  
</div>

</>
  );
}
