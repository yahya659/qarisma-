import Footer from "@/app/components/Footer";
import Basic_Information from "./components/Basic_Information";
import Games_Files from "./components/Games_Files";
import Hero_Welcome from "./components/Hero_Welcome";
import Pricing_Revenue from "./components/Pricing_Revenue";
import Sidebar from "./components/Sidebar";
import Visual from "./components/Visual";
import Header from "@/app/components/Header";

export default function Games_designer_profile(){
    return(
         <>
    
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
<Basic_Information/>
<Pricing_Revenue/>
<Visual/>
<Games_Files/>
          {/* Stats */}

          {/* Top Games */}
          {/* <Top_Performing /> */}

          {/* Feedbacks */}

          {/* <Feedbacks /> */}
          {/* Footer */}
          <div className="text-center text-sm text-white/60 mt-10">
            {/* All Copy Rights are Reserved */}
          </div>
        </main>
      </div>
    </div>
    <Footer/>
    </>
    );
}