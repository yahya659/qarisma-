import Header from "@/app/components/Header";
import Feedbacks from "./components/Feedbacks";
import Hero_Welcome from "./components/Hero_Welcome";
import Sidebar from "./components/Sidebar";
import Top_Performing from "./components/Top_Performing";
import Footer from "@/app/components/Footer";

export default function dashboard(){
    return (
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

   

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 space-y-8">
          {/* Hero */}  
          <br/>
          <br/>
     <Hero_Welcome/>
          {/* Stats */}

          {/* Top Games */}
          <Top_Performing />

          {/* Feedbacks */}

          <Feedbacks />
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