import Header from '@/app/components/Header';
import React from 'react'
import Explore_More_About from './components/Explore_More_About';
import Footer from '@/app/components/Footer';
import HeroSection from './components/HeroSection';
import Content from './components/Content';
import Latest_Research_studies from './components/Latest_Research_studies';
import Interactive_Educational_Games from './components/Interactive_Educational_Games';
import Educational_Games from './components/Educational_Games';
import Stay_informed from './components/Stay_informed';
import Empower_your_Relations from './components/Empower_your_Relations';

export default function child_Health_common_diseases_page() {
  return (
     <>
         <Header />
         <br />
         <br />
         <br />
         <br />
         <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">
           {/* Background Gradient (في الخلف) */}
           <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#FBD9EB] via-[#a380ce] to-[#d89fd1]" />
   
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
   <Content/>
             <Explore_More_About/>
        <Latest_Research_studies/>
        <Interactive_Educational_Games/>
        <Educational_Games/>
        <Empower_your_Relations/>
        <Stay_informed/>
             <Footer />
           </div>
         </div>
       </>
  );
}
