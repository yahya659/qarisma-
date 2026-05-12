import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react'
import HeroSection from './components/HeroSection';
import CATEGORIES from './components/CATEGORIES';
 import The_Language_Light from './components/The_Language_Light';
import Recent_Explorations_Perspectives from './components/Recent_Explorations_Perspectives';
import Explore_more_about from './components/Explore_more_about';

export default function art_scoop_inner_page_pg() {
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
                         <Explore_more_about/>+
                         <The_Language_Light/>
                         <Recent_Explorations_Perspectives/>
               
                        <Footer />
                      </div>
                    </div>
                  </> 
   );
}
