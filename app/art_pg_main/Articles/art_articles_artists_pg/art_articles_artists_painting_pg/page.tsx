import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react'
import HeroSection from './components/HeroSection';
import Top_headlines_and from './components/Top_headlines_and ';

export default function page() {
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
                 <div className="fixed inset-0 -z-10 bg-[linear-gradient(270deg,#5D5FEF_-5.47%,#F178B6_100%)]" />
                 {/* Hero Section */}
               
         
                 {/* Discover Section */}
                 <div className="relative w-full">
                   {/* Background Image */}
                   <div
                     className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
                     style={{
                       backgroundImage: "url('/images/social/macaws1.png')",
                     }}
                   />
                     <HeroSection />
                     <Top_headlines_and/>
                 
                   <Footer />
                 </div>
               </div>
             </>
  );
}
