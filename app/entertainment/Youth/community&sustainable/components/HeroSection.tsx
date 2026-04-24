export default function HeroSection(){
    return (
        <>  <header className="relative h-[100vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Youth/Youth4.jpg" 
            className="w-full h-full object-cover opacity-60"
            alt="Youth background"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-[#b28eb2]"></div> */}
        </div>

        {/* Pink Curtains Simulation */}
        <div className="absolute inset-y-0 left-0 w-24 bg-pink-400/30 blur-xl md:w-48"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-pink-400/30 blur-xl md:w-48"></div>

   <div className="relative z-10 max-w-[1227px] h-[600px] px-6 bg-[#5D5FEFFC]/30 flex flex-col items-center justify-center text-center">
  
  <h1 className="text-[64px] font-bold mb-6 drop-shadow-lg text-[#F178B6]">
    world of innovation
  </h1>

  <p className="text-[32px] mb-10 font-light">
    Discover and support incredible projects started by very talented youth
  </p>

  <p className="text-[32px] max-w-2xl">
    It has one principle and one motto that can be read individually, meaning each word on its
  </p>

</div>
      </header></>
    );
}