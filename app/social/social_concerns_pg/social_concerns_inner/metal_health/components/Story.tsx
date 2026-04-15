export default function Story(){
    return (
          <div className="min-h-screen p-4 md:p-8 flex items-center justify-center font-sans">
      
      {/* Main Container */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-6">
        
        {/* Left Column - Main Story */}
        <div className="flex-1 ">
          <div className="bg-[#5D5FEF]  rounded-xl overflow-hidden h-full flex flex-col shadow-lg">
            
            {/* Image Section */}
            <div className="relative ">
              <img 
                src="/images/social/sustainability1.jpg" 
                alt="Main story people" 
                className="w-full h-[350px] object-cover object-top"
              />
              {/* Top Story Badge */}
              <div className="absolute bottom-0 left-0 bg-[#5D5FEF61]/100 backdrop-sm px-8 py-3 rounded-tr-xl ]">
                <h2 className="text-[#F57AB6] font-black text-3xl tracking-wide drop-shadow-md">
                  Top Story
                </h2>
              </div>
            </div>

            {/* Content Section */}
            {/* <div className="p-8 flex flex-col flex-1 "> */}
              <h1 className="text-[#000000] font-extrabold text-[40px] leading-[1.3] underline decoration-[#0a0a0a] decoration-4 underline-offset-4 mb-6">
                Social Relationships and Mental Health Disparities by Race/Ethnicity in Late-middle-age and OlderAdulthood
              </h1>
              
              <p className="text-[#FFFFFF] text-[32px] leading-[1.6] font-medium mb-8">
                It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
              </p>
              
              <div className="mt-auto">
                <button className="bg-[#EE6EA9] hover:bg-[#d85d96] text-white font-bold text-lg py-2.5 px-6 rounded-xl transition-colors duration-200">
                  Read Full story
                </button>
              </div>
            {/* </div> */}
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="flex-1 lg:max-w-[45%] flex flex-col gap-6">
          
          {/* Related Articles Box */}
          <div className="bg-[#5D5FEF] rounded-xl p-6 shadow-lg">
            <h3 className="text-white text-center text-[36px] font-bold mb-6">
              Related Articles
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Article 1 */}
              <div className="bg-[#F178B6A3] rounded-xl overflow-hidden shadow-md flex flex-col">
                <img src="/images/social/sustainability2.jpg" alt="Article 1" className="w-full h-[100px] object-cover" />
                <div className="p-3">
                  <p className="text-[#0a0a0a] font-extrabold text-[20px] leading-tight">
                    Parenting Multiple Kids With Mental Health Challenges
                  </p>
                </div>
              </div>
              
              {/* Article 2 */}
                  <div className="bg-[#F178B6A3] rounded-xl overflow-hidden shadow-md flex flex-col">
                <img src="/images/social/sustainability2.jpg" alt="Article 1" className="w-full h-[100px] object-cover" />
                <div className="p-3">
                  <p className="text-[#0a0a0a] font-extrabold text-[20px] leading-tight">
                    Parenting Multiple Kids With Mental Health Challenges
                  </p>
                </div>
              </div>

              {/* Article 3 */}
                  <div className="bg-[#F178B6A3] rounded-xl overflow-hidden shadow-md flex flex-col">
                <img src="/images/social/sustainability2.jpg" alt="Article 1" className="w-full h-[100px] object-cover" />
                <div className="p-3">
                  <p className="text-[#0a0a0a] font-extrabold text-[20px] leading-tight">
                    Parenting Multiple Kids With Mental Health Challenges
                  </p>
                </div>
              </div>

              {/* Article 4 (Gardening) */}
                 <div className="bg-[#F178B6A3] rounded-xl overflow-hidden shadow-md flex flex-col">
                <img src="/images/social/sustainability2.jpg" alt="Article 1" className="w-full h-[100px] object-cover" />
                <div className="p-3">
                  <p className="text-[#0a0a0a] font-extrabold text-[20px] leading-tight">
                    Parenting Multiple Kids With Mental Health Challenges
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Programs & Reports Box */}
          <div className="bg-[#5D5FEF] rounded-xl p-6 shadow-lg flex-1">
            <h3 className="text-white text-center text-[36px] font-bold mb-6">
              Programs & Reports
            </h3>
            
            <div className="flex flex-col gap-4">
              {/* Program Item 1 */}
              <div className="bg-[#F178B6A3]/70 rounded-xl p-3 flex gap-4 items-center shadow-sm">
                <div className="relative w-24 h-16 shrink-0 rounded border border-black/20 overflow-hidden">
                  <img src="/images/social/sustainability2.jpg" alt="Video thumbnail" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-white/80 rounded-full p-1 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#A86A98" className="w-5 h-5 ml-0.5">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-[#0a0a0a] text-[15px] font-bold leading-snug">
                  It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
                </p>
              </div>

              {/* Program Item 2 */}
             <div className="bg-[#F178B6A3]/70 rounded-xl p-3 flex gap-4 items-center shadow-sm">
                <div className="relative w-24 h-16 shrink-0 rounded border border-black/20 overflow-hidden">
                  <img src="/images/social/sustainability2.jpg" alt="Video thumbnail" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-white/80 rounded-full p-1 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#A86A98" className="w-5 h-5 ml-0.5">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-[#0a0a0a] text-[15px] font-bold leading-snug">
                  It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
                </p>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
    );
}