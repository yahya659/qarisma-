import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react'
import Beyond_the_Headlines from './components/Beyond_the_Headlines';
import Explore_More_About_Treatments from './components/Explore_More_About_Treatments';
import Related_Articles from './components/Related_Articles';
import Watch_Explore from './components/Watch_Explore';
import Headline from './components/Headline';

export default function Effective_Treatments() {
  return (
    <>
       <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
   <div className="relative min-h-screen font-sans text-white selection:bg-[#5D5FEF6E]">
  
  {/* Background Gradient (في الخلف) */}
  <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#e2cceb] via-[#a380ce] to-[#d89fd1]" />

  {/* Hero Section */}
  {/* <HeroSection /> */}

  {/* Discover Section */}
  <div className="relative w-full">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
      style={{
        backgroundImage: "url('/images/social/macaws1.png')",
      }}
    />
<Beyond_the_Headlines/>
<Explore_More_About_Treatments/>
<Related_Articles/>
<Watch_Explore/>
<Headline/>
    {/* <Discover_Filters_Section />
    <Featured_Card /> */}
    <Footer/>
  </div>
  
</div>

</>
  );
}
