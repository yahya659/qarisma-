import { Link } from "lucide-react";
import React from "react";

export default function Right_side_form() {
  return (
    <div className="relative w-full md:w-1/2 min-h-screen flex items-center justify-center p-6 md:p-16 bg-[#BD9FA966]/40">
      <div className="absolute inset-0 bg-[#BD9FA966]/40"></div>

      <div className="relative z-20 w-full max-w-md">
        <div className="flex flex-col items-center mb-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5c56d6] to-[#db89ab] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
            {/* اللوجو يوجه للهوم عند الضغط عليه */}

            <img
              src="/images/logo.png"
              alt="Profile"
              className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full border-4 border-white relative z-10 shadow-2xl hover:scale-105 transition-transform"
            />
          </div>
          <h2 className="mt-6 text-3xl font-black text-[#2d1b2e] tracking-tight italic">
            Welcome Back
          </h2>
        </div>

        <div className="space-y-5">
          <div className="group">
            <label className="text-[10px] font-black text-[#5c56d6] uppercase tracking-widest ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full h-14 px-5 bg-gray-50 border-2 border-transparent focus:border-[#5c56d6]/20 focus:bg-white rounded-2xl transition-all outline-none text-[#2d1b2e] font-semibold"
            />
          </div>

          <div className="group">
            <label className="text-[10px] font-black text-[#5c56d6] uppercase tracking-widest ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-14 px-5 bg-gray-50 border-2 border-transparent focus:border-[#5c56d6]/20 focus:bg-white rounded-2xl transition-all outline-none text-[#2d1b2e]"
            />
          </div>

          {/* زر تسجيل الدخول يوجه للهوم بعد النجاح (هنا نستخدمه كلينك للتجربة) */}
          <a className="w-full h-14 bg-[#5D5FEF] text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(92,86,214,0.3)] hover:shadow-[0_15px_40px_rgba(92,86,214,0.4)]   text-[20px] flex items-center justify-center">
            Log in
          </a>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-xs font-bold   tracking-widest">
             Don’t have an account? 
              {/* رابط إنشاء حساب جديد */}
              <a className="ml-2 text-[#5D5FEF] hover:underline">
                Sign Up Now
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-[-100px]   left-80 w-[661px] h-[600px]  opacity-30   ">
        <img
          src="/images/launch_page/launch_page2.png"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
