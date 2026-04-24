import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeroSection from "./components/HeroSection";
import The_Last_Storyteller from "./components/The_Last_Storyteller";
import Discover_youth_projects from "./components/Discover_youth_projects";
import Latest_stories_Reports from "./components/Latest_stories_Reports";
import Youth_Led_Initiatives_Slider from "./components/Youth_Led_Initiatives_Slider";
import Stay_informed from "./components/Stay_informed";

export default function educational_projects() {
  return (
    <>
      {" "}
      <Header />
      <br />
      <br />
      <br />
      <br />
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
<br/>
<br/>
<br/>
<br/>
       <Discover_youth_projects/>
         <The_Last_Storyteller/>
        <Latest_stories_Reports/>
        <Youth_Led_Initiatives_Slider/>
        <Stay_informed/>
        <br/>
        <br/>
        <br/>
        <br/>
          <Footer />
        </div>
      </div>
    </>
  );
}
