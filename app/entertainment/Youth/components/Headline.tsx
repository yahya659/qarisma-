import { Play } from "lucide-react";

export default function Headline() {
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-purple-300/50 p-4 rounded-xl border border-white/20"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-purple-400">
                  <img
    src="/images/entertainment/Games1.jpg"
    alt="thumbnail"
    className="w-full h-full object-cover"
  />
              <div className="  absolute inset-0 flex items-center justify-center text-white/50">
                <Play size={32} />
              </div>
            </div>
            <h4 className="font-bold text-[#000000] text-[32px] mb-2">
              Headline
            </h4>
            <p className="text-[14px] text-[#000000] mb-3">
              It has one principle and one motto that can be read individually,
              meaning each word on its own.
            </p>
            <a
              href="#"
              className="text-[16px] font-bold text-blue-700 underline"
            >
              View more
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-12 px-4">
        <p className="text-white max-w-2xl mx-auto mb-6 text-[25px] ">
          It has one principle and one motto that can be read individually,
          meaning each word on its own, or as a whole, we believe that reality
          and maturity are core for truth.
        </p>
        <button className="bg-[#F178B6] hover:bg-pink-500 text-white px-10 py-2 rounded-lg font-bold transition-all shadow-lg">
          Learn More
        </button>
      </div>
    </>
  );
}
