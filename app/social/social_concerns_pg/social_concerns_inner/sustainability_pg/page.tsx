import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import HeroSection from "../sustainability_pg/components/HeroSection";
import Latest_Reports_Research from "./components/Latest_Reports_Research";
import Inner_Page_Topic from "./components/Lnner_Page_Topic";
import Programs_Section from "./components/Programs_Section";
import From_our_Selection from "./components/From_our_Selection";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function sustainability_pg() {
  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
      <div className="fixed inset-0 bg-[#F178B6A3]/80" />
      <div className="min-h-screen font-sans text-white selection:bg-purple-500 overflow-x-hidden">
        {/* sustainability_pg */}
        <HeroSection />
        {/* Latest_Reports_Research */}
        <Latest_Reports_Research />

        {/* ///////////////// */}
      </div>
      {/* Inner_Page_Topic */}
      <Inner_Page_Topic />

      {/* Latest Podcasts & Programs Section */}
      <Programs_Section />
      {/* From our Selection - Advanced Slider */}
      <From_our_Selection />
      <Footer/>
    </>
  );
}
