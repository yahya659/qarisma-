import Footer from "@/app/components/Footer";
import HeroSection from "./components/HeroSection";
import Header from "@/app/components/Header";
import How_we_Can_Teach from "./components/How_we_Can_Teach";
import Explore_More_About from "./components/Explore_More_About";
import Empower_your_Relations from "./components/Empower_your_Relations";


export default function child_Health_tools(){
    return(
        <>
           <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
   <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">
  
  {/* Background Gradient (في الخلف) */}
<div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#5D5FEF] via-[#5D5FEF] to-[#F178B6]" />
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
<How_we_Can_Teach/>
  <Explore_More_About/>
  <Empower_your_Relations/>
    <Footer/>
  </div>
  
</div>

</>
    );
}