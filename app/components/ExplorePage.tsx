"use client";

import Image from 'next/image';

export default function ExplorePage() {
  return (
    // 1. حاوية الشاشة الرئيسية (تحمل صورة الخلفية وتغطي الشاشة بالكامل)
    <main className="min-h-
538px w-
1,220px relative flex items-center justify-center p-10 overflow-hidden ">
      
      

      {/* 3. حاوية المحتوى الرئيسي (البطاقة البيضاء الكبيرة) */}
      <div className="relative z-10 w-full max-w-[1280px] h-[640px] bg-white rounded-3xl p-12 flex flex-col items-center justify-center ">
        
        {/* 4. حاوية العرض الجانبي (flex box) */}
        <div className="flex w-full h-full items-center gap-12">
          
          {/* 5. القسم الأيسر (الصورة المنحنية) */}
          {/* نستخدم حاوية إضافية للتحكم بالحواف المنحنية والظل */}
          <div className="flex-none w-[480px] h-[520px] rounded-[50px] overflow-hidden shadow-[0_0_30px_rgba(100,0,100,0.3)]">
            <div className="relative w-full h-full">
               <img 
                src="/images/explore.png" // نستخدم نفس صورة الخلفية كمثال، أو يمكنك وضع أي صورة تريدها هنا
                alt="Classical Scene" 
               
className="w-full h-full object-cover grayscale-[20%] brightness-75 "               />
            </div>
          </div>

          {/* 6. القسم الأيمن (النص والعنوان) */}
          <div className="flex-1 space-y-8 pl-8">
            
            {/* العنوان البنفسجي */}
            <h1 className="text-7xl font-bold text-[#7E5BEF] tracking-tight">
              Explore more
            </h1>

            {/* النص الوصفي (Don't worry!) */}
            <div className="space-y-4 max-w-[550px]">
              <p className="text-2xl text-gray-900 font-medium leading-relaxed">
                Don't worry! Just enter your email address below, and we'll send you a link to reset your password.
              </p>
              <p className="text-2xl text-gray-900 font-medium leading-relaxed">
                Don't worry! Just enter your email address below, and we'll send you a link to reset your password.
              </p>
            </div>

           

          </div>

        </div>

      </div>

    </main>
  );
}