import Footer from "@/app/components/Footer";
import HeroSection from "./components/HeroSection";
import Video_Grid_Section from "./components/Video_Grid_Section";
import Latest_Movies from "./components/Latest_Movies";
import Headline_Featured from "./components/Headline_Featured";
import Pagination from "./components/Pagination";
import Header from "@/app/components/Header";

export default function Movies(){
    return(
        <>
           <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
   <div className="relative min-h-[100vh] font-sans text-white selection:bg-[#5D5FEF6E]">
  
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
    <Video_Grid_Section/>
    <Latest_Movies/>
    <Headline_Featured/>
    <Pagination/>

    <Footer/> 
  </div>
  
</div>

</>
    );
}