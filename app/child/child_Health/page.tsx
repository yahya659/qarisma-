import Footer from "@/app/components/Footer";
import HeroSection from "./components/HeroSection";
import Header from "@/app/components/Header";
import Explore_More_About from "./components/Explore_More_About";
import FQA from "./components/FQA";
import Latest_Articles_About from "./components/Latest_Articles_About";
import Discipline_Coaching from "./components/Discipline_Coaching";

export default function child_Health(){
    return(
         <>
              <Header />
              <br />
              <br />
              <br />
              <br />
              <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">
                {/* Background Gradient (في الخلف) */}
                <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#FBD9EB] via-[#a380ce] to-[#d89fd1]" />
        
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
        
                  <Explore_More_About/>
                  <FQA/>
                  <Latest_Articles_About/>
                  <Discipline_Coaching/>
                  <Footer />
                </div>
              </div>
            </>
          );

}