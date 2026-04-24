import Header from "@/app/components/Header";
import ImageSection from "./components/ImageSection";
import Latest_News from "./components/Latest_News";
import Middle_East_Cuisine from "./components/Most_Features_Trends";
import Top_story from "./components/Top_story";
import Footer from "@/app/components/Footer";

export default function Celebrity(){
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
  <Top_story />

  {/* Discover Section */}
  <div className="relative w-full">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
      style={{
        backgroundImage: "url('/images/social/macaws1.png')",
      }}
    />

<Middle_East_Cuisine/>
<Latest_News/>
<ImageSection/>
  <Footer/>
  </div>
  
</div>

</>
    );
}