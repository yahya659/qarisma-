import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeroSection from "./components/HeroSection";
import Explore_More_About from "./components/Explore_More_About";
import Interactive_Educational_Games from "./components/Interactive_Educational_Games";
import Educational_Games from "./components/Educational_Games";

export default function child_Program(){
    return(
        <>
  <Header />

 
  <div className="h-20 md:h-24" />

  <div className="relative min-h-screen font-sans text-white selection:bg-[#F178B687]">

    {/* Background Gradient */}
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#F178B687] via-[#a380ce] to-[#d89fd1]" />

    {/* Hero */}
    <HeroSection />

    {/* Background Image Layer */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
      style={{
        backgroundImage: "url('/images/social/macaws1.png')",
      }}
    />

    {/* Page Content */}
    <main className="relative z-10 space-y-20 md:space-y-28">

      <section>
        <Explore_More_About />
      </section>

      <section>
        <Interactive_Educational_Games />
      </section>

      <section>
        <Educational_Games />
      </section>

    </main>

    {/* Footer */}
    <Footer />

  </div>
</>
    );
}