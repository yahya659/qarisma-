export default function Earth(){
    return(  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className=" overflow-hidden shadow-xl  bg-[#F178B663]/39 flex flex-col"
          >
            <div className="h-44 w-full">
              <img
                src="/images/entertainment/Games1.jpg"
                alt="Best of week"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 bg-[#E879B5] text-center">
              <span className="text-white font-black tracking-wider uppercase text-[24px] drop-shadow-sm">
                Educational
              </span>
            </div>
          </div>
        ))}
      </div>);
}