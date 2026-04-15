
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeroSection from "../../social_program_pg/social_program_inner/components/HeroSection";
import SocietySection from "../../social_program_pg/social_program_inner/components/SocietySection";

export default function social_program_inner(){
    return(
        <>
           <Header />
              <br />
              <br />
              <br />
              <br />
        
              <div className="min-h-screen text-white font-sans selection:bg-purple-500/30 bg-[#F178B657]">
                <div className="relative w-full">
                  {/* HeroSection */}
                  <HeroSection />

                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                      backgroundImage: "url('/images/nature/naturebavkgrauond.png')",
                    }}
                  />
                  {/* Dark Overlay (اختياري لتحسين وضوح النص) */}
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="relative z-10">
                    {/* Society Section */}
                    <SocietySection />
                    {/* Discover Section */}
                    {/* <DiscoverSection /> */}
                  </div>
                </div>
              </div>
              <Footer />
              </>
    );
}