import Header from "@/app/components/Header";
import Discover_youth_projects from "./components/Discover_youth_projects";
import The_Generation from "./components/The_Generation";
import Footer from "@/app/components/Footer";

export default function educational_project_inner(){
    return(
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
               {/* <HeroSection /> */}
       
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
                <The_Generation/>
               {/* <Latest_stories_Reports/> */}
               {/* <Youth_Led_Initiatives_Slider/> */}
               {/* <Stay_informed/> */}
               <br/>
               
                 <Footer />
               </div>
             </div>
           </> 
    );
}