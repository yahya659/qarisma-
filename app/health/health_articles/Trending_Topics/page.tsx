import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import React from 'react'
import Headline from './components/Headline';
import Related_Articles from './components/Related_Articles';
import Studies_Exclusive from './components/Studies_Exclusive';
import Watch_Explore from './components/Watch_Explore';

export default function page() {
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



  {/* Discover Section */}
  <div className="relative w-full">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-10 -z-10"
      style={{
        backgroundImage: "url('/images/social/macaws1.png')",
      }}
    />
<Headline/>
<Related_Articles/>
<Studies_Exclusive/>
<Watch_Explore/>
   
    <Footer/>
  </div>
  
</div>

</>
  );
}
