import Header from "@/app/components/Header";
import HeroSection from "./components/HeroSection";
import Recently_Added_Games from "./components/Recently_Added_Games";
import Best_of_the_week from "./components/Best_of_the_week";
import Share_your_creativity from "./components/Share_your_creativity";
import Footer from "@/app/components/Footer";

export default function addedgames(){
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
<Recently_Added_Games/>
<Best_of_the_week/>
<Share_your_creativity/>
    
    <Footer/>
  </div>
  
</div>

</> 
    );
}