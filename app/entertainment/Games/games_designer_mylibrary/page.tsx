import Header from "@/app/components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "@/app/components/Footer";
import Hero_Welcome from "./components/Hero_Welcome";
import Filters_Area from "./components/Filters_Area";

export default function games_designer_mylibrary(){
    return(<>
    
    <div className="relative min-h-screen text-white font-sans">
      {/* 🔥 Gradient */}
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-[#5D5FEF]  to-[#F178B6]" />

      {/* 🔥 Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/social/macaws1.png')" }}
      />

      {/* <Header /> */}

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 space-y-8">
          {/* Hero */}  
          <br/>
          <br/>
          <Hero_Welcome />
          <Filters_Area/>
{/* <Basic_Information/> */}
{/* <Pricing_Revenue/> */}
{/* <Visual/> */}
{/* <Games_Files/> */}
          {/* Stats */}

          {/* Top Games */}
          {/* <Top_Performing /> */}

          {/* Feedbacks */}

        
          <div className="text-center text-sm text-white/60 mt-10">
            {/* All Copy Rights are Reserved */}
          </div>
        </main>
      </div>
    </div>
    <Footer/>
    </>);
}