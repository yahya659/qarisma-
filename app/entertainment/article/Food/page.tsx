import Footer from "@/app/components/Footer";
import Discover_Filters_Section from "./components/Discover_Filters_Section";
import HeroSection from "./components/HeroSection";
import Latest_News from "./components/Latest_News";
import SocietySection from "./components/SocietySection";
import TopStory from "./components/Top_Story";
import Header from "@/app/components/Header";

export default function Food(){
    return(
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
    <SocietySection/>
    <Latest_News />
    <TopStory/>
    
    <Footer/>


    
  </div>
  
</div>

</>
    );
}