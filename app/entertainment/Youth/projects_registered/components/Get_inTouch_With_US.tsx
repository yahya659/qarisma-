import { ArrowRight } from "lucide-react";

export default function Get_inTouch_With_US() {
  return (
    <>
      <main className="relative py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-[64px] font-bold text-center mb-16 text-gray-900 drop-shadow-sm">
          Get inTouch With US
        </h2>

        {/* Decorative Swirl Background Element */}
        <div className="absolute -left-20 bottom-0 w-64 h-64 opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFFFFF"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.4,90.1,-15.7,88.5,-0.9C86.9,13.9,81.1,26.8,72.6,38.5C64.1,50.2,52.9,60.7,40,68.3C27.1,75.9,12.5,80.6,-1.8,83.7C-16,86.8,-32.1,88.3,-45.7,82.1C-59.3,75.9,-70.5,62,-78.4,46.9C-86.4,31.8,-91.1,15.4,-89.1,0.2C-87.1,-15.1,-78.3,-29.2,-68.1,-41.8C-57.9,-54.3,-46.2,-65.4,-32.8,-73.1C-19.5,-80.7,-4.6,-85,10.6,-83.1C25.8,-81.2,44.7,-76.4,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <form className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 ">
              <label className="block text-[32px]  font-bold text-gray-900 ml-1">
                Fullname
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter Your fullname"
                className="w-full p-4   bg-[#5D5FEF33] backdrop-blur-md  text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-inner"
              />
            </div>
            <div className="space-y-3">
              <label className="block text-[32px]  font-bold text-gray-900 ml-1">
                country
              </label>
              <input
                type="text"
                name="country"
                placeholder="Enter Your fullname"
                className="w-full p-4   bg-[#5D5FEF33] backdrop-blur-md   text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-inner"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-[32px] font-bold text-gray-900 ml-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Address"
              className="w-full p-4   bg-[#5D5FEF33] backdrop-blur-md   text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-inner"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-[32px] font-bold text-gray-900 ml-1">
              Brief
            </label>
            <input
              type="text"
              name="brief"
              placeholder="Enter Your Address"
              className="w-full p-4   bg-[#5D5FEF33] backdrop-blur-md   text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-inner"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-[32px] font-bold text-gray-900 ml-1">
              Message
            </label>
            <textarea
              name="message"
              //   rows="6"
              placeholder="Enter your message"
              className="w-full p-6   bg-[#5D5FEF33] backdrop-blur-md   text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-inner resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-6">
            <button
              type="button"
              className="w-full md:w-auto px-12 py-4 bg-pink-400 hover:bg-pink-500 text-white   font-bold text-[40px] shadow-lg hover:shadow-pink-400/30 transition-all active:scale-95"
            >
              send message
            </button>
            <button
              type="button"
              className="w-full md:w-auto px-12 py-4 bg-[#5D5FEF] hover:bg-indigo-600 text-white font-bold text-[40px] shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              Next  
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
