import Header from "@/app/components/Header";
import Recently_Added from "../components/Recently_Added";
import Earth from "./components/Earth";
import Genres from "./components/Genres";
import HeroSection from "./components/HeroSection";
import Stay_informed from "./components/Stay_informed";
import World_of_Gaming from "./components/World_of_Gaming";
import Footer from "@/app/components/Footer";

export default function quarismas_game(){
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
    <Genres/>
    <Recently_Added/>
    <World_of_Gaming/>
    <Earth/>
    <Stay_informed/>
    <Footer/>
  </div>
  
</div>

</>
    );
}