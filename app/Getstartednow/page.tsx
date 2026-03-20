
"use client";


import Image from "next/image";
import { useRouter } from "next/navigation";
export default function GetStartedPage() {
  // بيانات البطاقات لتبسيط الكود
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#1a1625] bg-cover bg-center flex flex-col items-center p-8 text-white relative overflow-hidden">
      {/* صورة الخلفية  -  */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/images/onboardingbackground.png"
          alt="background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
        {/* الشعار */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-pink-200 mb-6 shadow-lg">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>

        {/* العناوين */}
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
          <span className="text-pink-400">welcome to</span> Quarisma
        </h1>
        <p className="text-gray-300 text-center mb-12 max-w-md">
          Explore more about world and be updated with the latest news
        </p>

        {/* الحاوية الرئيسية للبطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* البطاقة الأولى: NEWS */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col items-center">
            <div className="w-full aspect-video relative rounded-2xl overflow-hidden mb-6">
              <Image
                src="/images/news.jpg"
                alt="News"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold tracking-widest border-b-2 border-white/30 pb-1 px-4">
              NEWS
            </h2>
          </div>

          {/* البطاقة الثانية: Home */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col items-center ring-1 ring-white/30">
            <div className="w-full aspect-video relative rounded-2xl overflow-hidden mb-6">
              <Image
                src="/images/home.jpg"
                alt="Home"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold tracking-widest border-b-2 border-white/30 pb-1 px-4">
              Home
            </h2>
          </div>

          {/* البطاقة الثالثة: Categories */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col items-center">
            <div className="w-full aspect-video relative rounded-2xl overflow-hidden mb-6">
              <Image
                src="/images/categories.jpg"
                alt="Categories"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold tracking-widest border-b-2 border-white/30 pb-1 px-4">
              Categories
            </h2>
          </div>
        </div>

        {/* Sign */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-2">Don't have an account?</p>
          <button className="text-pink-400 font-bold text-lg hover:text-pink-300 transition-all" onClick={() => router.push("/signup")}>
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
}
