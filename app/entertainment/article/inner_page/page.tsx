

import Featured_Card from "./components/Featured_Card";
import HeroSection from "./components/HeroSection";
import Photend from "./components/Photend";
import SocietySection from "./components/SocietySection";
import Pagention from "./components/Pagention";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function inner_page(){
    return(
        <>
           <Header/>
    <br/>
    <br/>
    <br/> 
 
   <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">
  
  {/* Background Gradient (في الخلف) */}
  <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#e2cceb] via-[#a380ce] to-[#5D5FEF]" />

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
     

    {/* <Discover_Filters_Section /> */}
    <Featured_Card />
    <SocietySection/>

    <Photend/>

    
    <Pagention/>
    <Footer/>
  </div>
  
</div>

</>
    );
}