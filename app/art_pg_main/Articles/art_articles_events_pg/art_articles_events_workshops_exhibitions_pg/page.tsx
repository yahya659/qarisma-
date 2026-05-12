import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react'
import HeroSection from './components/HeroSection';
import CATEGORIES from './components/CATEGORIES';
import Featured_live from './components/Featured_live';
import Vision_Latest_Exhibitions_workshops from './components/Vision_Latest_Exhibitions_workshops';

export default function art_articles_events_workshops_exhibitions_pg() {
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
                <CATEGORIES/>
                <Featured_live/>
                <Vision_Latest_Exhibitions_workshops/>
                       <Footer />
                     </div>
                   </div>
                 </> 
  );
}
