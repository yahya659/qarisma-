import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import HeroSection from "../sustainability_pg/components/HeroSection";
import Latest_Reports_Research from "../sustainability_pg/components/Latest_Reports_Research";
import Latest_programs_Reports from "./components/Latest_programs_Reports";
import Programs_Section from "./components/Programs_Section";

import Story from "./components/Story";
import From_our_Selection from "./components/From_our_Selection";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
// import Story_sec from "./components/story_sec";

export default function metal_health() {
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
        {/* sustainability_pg */}
        <Latest_Reports_Research />

        {/* ///////////////// */}
      {/* </div> */}
      {/* Inner_Page_Topic */}
      {/* //   <Inner_Page_Topic /> */}
      {/* Latest_programs_Reports */}
      <Latest_programs_Reports />
      {/* Programs_Section */}
      <Programs_Section/>
      {/* Latest Podcasts & Programs Section */}
      {/* //   <Programs_Section /> */}
      {/* From our Selection - Advanced Slider */}
      {/* //   <From_our_Selection /> */}
     <Story/>


    <From_our_Selection/>
     </div>
     <Footer/>
    </>
  );
}
