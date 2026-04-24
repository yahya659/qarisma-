export default function Games_Files() {
  return (
    <>
      {" "}
      <div className="bg-[#F178B6A3]/64 backdrop-blur-xl   p-8 shadow-2xl">
 <h2 className="text-[#5B65E9] text-[40px] font-black mb-8 ">
          Games Files
        </h2>
        <div className="w-full h-24 rounded-lg bg-[#5D5FEF4F] transition cursor-pointer flex items-center px-4">
          <span className="text-gray-900 text-[24px] font-medium">
            Description
          </span>
        </div>

        <div className="w-full h-24 rounded-lg mt-5 bg-[#5D5FEF4F] hover:bg-[#c298e3] transition cursor-pointer flex items-center px-4">
          <span className="text-gray-900 text-[24px]  font-medium">
            Upload new build
          </span>
        </div>
      </div>
      <div className="flex justify-center pb-12 mt-6">
        <button className="bg-[#5B65E9] text-white text-[36px] font-black py-4 px-16 rounded-xl shadow-xl hover:scale-105 transition-all uppercase tracking-widest">
          submit
        </button>
      </div>
    </>
  );
}
