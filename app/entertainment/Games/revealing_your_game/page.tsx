import Header from "@/app/components/Header";
import HeroSection from "./components/HeroSection";
import Limited_Time_Offer from "./components/Limited_Time_Offer";
import Stay_informed from "./components/Stay_informed";
import Unlock_your_Next_Adventure from "./components/Unlock_your_Next_Adventure";
import World_of_Gaming from "./components/World_of_Gaming";
import Footer from "@/app/components/Footer";

export default function revealing_your_game(){
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
    <World_of_Gaming/>
    <Unlock_your_Next_Adventure/>
    <Limited_Time_Offer/>
    <Stay_informed/>

    <Footer/>
  </div>
  
</div>

</>
    );
}