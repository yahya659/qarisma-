import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react'
import HeroSection from './components/HeroSection';
import Top_headlines_and_In_depth from './components/Top_headlines_and_In_depth ';
import Shaping_Explore_the_Future from './components/Shaping_Explore_the_Future';

export default function categories_reports_linked_page_next_page() {
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
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#5D5FEF9C] via-[#5D5FEF9C] to-[#5D5FEF9C]" />
    
            {/* Hero Section */}
            <HeroSection />
    
            {/* Discover Section */}
            <div className="relative w-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
                style={{
                  backgroundImage: "url('/images/social/macaws1.png')",
                }}
              />
    
              <Top_headlines_and_In_depth/>
              <Shaping_Explore_the_Future/>
              <Footer />
            </div>
          </div>
        </>
  );
}
