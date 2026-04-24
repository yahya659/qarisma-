import { Upload } from "lucide-react";

export default function Basic_Information() {
  return (
    <>
      {" "}
      <div className="bg-[#F178B6A3]/64 backdrop-blur-xl   p-8 shadow-2xl ">
        <h2 className="text-[#5B65E9] text-[40px] font-black mb-8 ">
          Basic Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-[#1e1b4b] text-[32px] font-black mb-2">
              Game Title
            </label>
            <input
              type="text"
              className="w-full bg-[#CCADE1]/80 rounded-2xl text-[24px] p-4 font-bold outline-none shadow-inner"
              placeholder="Enter game title"
            />
          </div>
          <div>
            <label className="block text-[#1e1b4b] text-[32px] font-black mb-2">
              Genre
            </label>
            <input
              type="text"
              className="w-full bg-[#CCADE1]/80  text-[24px] rounded-2xl p-4 font-bold outline-none shadow-inner"
              placeholder="Adventure"
            />
          </div>
          <div>
            <label className="block text-[#1e1b4b] text-[32px] font-black mb-2">
              Game URL
            </label>
            <input
              type="text"
              className="w-full bg-[#CCADE1]/80  text-[24px] rounded-2xl p-4 font-bold outline-none shadow-inner"
              placeholder="Enter game url"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-[#1e1b4b] text-[32px] font-black mb-2">
              Description
            </label>
            <textarea
              className="w-full bg-[#CCADE1]/80  text-[24px] rounded-2xl p-4 font-bold h-32 outline-none shadow-inner"
              placeholder="Enter detailed description..."
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
