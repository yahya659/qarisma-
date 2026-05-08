import React from 'react'

export default function Left_side() {
  return (
    <> <div className="relative hidden md:flex md:w-1/2 min-h-screen overflow-hidden">
        {/* <div className="absolute inset-0 scale-110 animate-slow-zoom"> */}
          <img
            src="/images/Getstartednow/Getstartednow.png"
            alt="Background"
            className="w-full h-full object-cover    blur-sm scale-110"
          />
        {/* </div> */}

        <div className="absolute inset-0 backdrop-blur-[2px] bg-[#5c56d6]/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2d1b2e]/60 via-transparent to-transparent"></div>

        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute -top-1 -left-20 w-[450px] opacity-30 animate-float-slow">
            <img
              src="/images/launch_page/launch_page2.png"
              className="w-full h-full object-contain  "
            />
          </div>
          <div className="absolute -bottom-2 -left-10 w-[400px] opacity-30 animate-float-delayed">
            <img
              src="/images/launch_page/launch_page2.png"
              className="w-full h-full object-contain -rotate-12"
            />
          </div>
        </div>

     
      </div></>
   );
}
