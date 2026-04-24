import Header from "@/app/components/Header";
import HeroSection from "./components/HeroSection";
import Discover_youth_projects from "./components/Discover_youth_projects";
import Latest_programs from "./components/Latest_programs";
import Stay_informed from "./components/Stay_informed";
import Footer from "@/app/components/Footer";

export default function Culture_inner(){
    return(
               <>   <Header/>
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
        
        <Discover_youth_projects/>
            {/* <The_Generation/> */}
            <Latest_programs/>
            <Stay_informed/>
            <Footer/>
          </div>
          
        </div>
        
        </>
    );
}