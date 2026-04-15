export default function  Alternating_Blocks(){
    return(
        <>
         <section className="py-12 px-4 md:px-12 max-w-6xl mx-auto space-y-12 ">
        {/* Block 1 */}
        <div className="flex flex-col md:flex-row bg-[#5D5FEF] ">
          <div className="w-full md:w-[45%] shrink-0">
            <img
              src="/images/social/Alternating2.jpg"
              className="w-full h-full object-cover min-h-[350px]"
            />
          </div>
          <div className=" md:p-12 flex flex-col justify-center bg-[#5D5FEFB8]">
            <h2 className="text-[40px] font-black text-[#1a1c4b]">
              Social Concerns for students
            </h2>
            <p className="text-[#FFFFFF] text-[24px]  leading-relaxed font-medium">
              Social concerns among students encompass a range of issues such as
              bullying, cyberbullying, academic pressure, maintaining work-life
              balance, and mental health challenges. These factors not only
              impact their educational journey but also their overall
              well-being. It is crucial to address these concerns head-on,
              creating an environment of open dialogue and support, to ensure
              every student feels heard and valued.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col md:flex-row-reverse bg-[#6a6ca7] ">
          <div className="w-full md:w-[45%] shrink-0">
            <img
              src="/images/social/Alternating1.jpg"
              alt="Students"
              className="w-full h-full object-cover min-h-[350px]"
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center bg-[#5D5FEF4F]/30">
            <h2 className="text-[40px] font-black text-[#1a1c4b]">
              Social Concerns for students
            </h2>
            <p className="text-[#FFFFFF] text-[24px]  leading-relaxed font-medium">
              Social concerns among students encompass a range of issues such as
              bullying, cyberbullying, academic pressure, maintaining work-life
              balance, and mental health challenges. These factors not only
              impact their educational journey but also their overall
              well-being. It is crucial to address these concerns head-on,
              creating an environment of open dialogue and support, to ensure
              every student feels heard and valued.
            </p>
          </div>
        </div>
      </section>
        </>
    );
}