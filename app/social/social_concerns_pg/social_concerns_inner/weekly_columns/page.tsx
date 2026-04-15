
import Header from "@/app/components/Header";
import Alternating_Blocks from "./components/Alternating_Blocks";
import HeroSection from "./components/HeroSection";
import Related_Articles from "./components/Related_Articles";
import Footer from "@/app/components/Footer";

export default function weekly_columns() {
  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="min-h-screen font-sans text-white selection:bg-[#5D5FEF6E] overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#8a1a8a] to-[#d63384] -z-10" />
        {/* sustainability_pg */}
              <HeroSection />
               {/* Alternating Image-Text Blocks */}
               
              
              

    </div>
    <Footer/>
    </>
  );
}
