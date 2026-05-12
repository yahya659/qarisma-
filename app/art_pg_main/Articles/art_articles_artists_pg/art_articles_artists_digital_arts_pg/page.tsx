import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react'
import HeroSection from './components/HeroSection';
import Latest_Articles from './components/Latest_Articles';
import Vision_Of_Luxury_Personality from './components/Vision_Of_Luxury_Personality';

export default function art_articles_artists_digital_arts_pg() {
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
              <Latest_Articles/>
<Vision_Of_Luxury_Personality/>
              <Footer />
            </div>
          </div>
        </>
  );
}
