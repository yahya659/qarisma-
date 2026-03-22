import Image from 'next/image';
import Link from 'next/link';

export default function ForgetPasswordPage() {
  return (
    // 1. حاوية الخلفية الرئيسية (تحمل صورة الخلفية وتغطي الشاشة بالكامل)
    <main className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
        >
          <div className="absolute inset-0 z-0">
        <img 
          src="images/CreateAccount.png" 
          alt="Background" 
          className="w-full h-full object-cover grayscale-[20%] brightness-75 opacity-60" 
        />
      </div>
      {/* 2. البطاقة الشفافة (Card) */}
      {/* تأثيراتtailwind المستخدمة: backdrop-blur للتضبيب، bg-white/10 للشفافية، rounded-3xl للزوايا، و border مع shadow للأزرق المضيء */}
      <div className="w-full max-w-[640px] backdrop-blur-md bg-white/10 rounded-3xl p-12 flex flex-col items-center border border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        
        {/* 3. حاوية الشعار والعنوان القريب منه */}
        <div className="flex items-center gap-4 self-start mb-8 w-full justify-center">
          <div className="relative w-16 h-16 rounded-full overflow-hidden ">
             <Image 
              src="/images/logo.png" 
              alt="Logo" 
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-950">Forget password</h1>
        </div>

        {/* 4. النص الوصفي */}
        <div className="text-center mb-10 space-y-2 max-w-[500px]">
          <p className="text-lg text-gray-900 font-medium">
            Don't worry! Just enter your email address below, and we'll send you a link to reset your password.
          </p>
          <p className="text-base text-gray-700">
            Enter the email associated with your account
          </p>
        </div>

        {/* 5. حقل الإدخال (Email Input) */}
        <div className="w-full mb-6">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full h-14 px-6 rounded-xl bg-[#6C5DD3] text-white placeholder:text-purple-200 text-lg outline-none focus:ring-2 focus:ring-purple-300 transition"
          />
        </div>

        {/* 6. زر الإرسال (Send Link Button) */}
        <div className="w-full mb-8">
          <button 
            type="submit" 
            className="w-full h-14 rounded-xl bg-[#F6F6F6] text-gray-950 text-lg font-semibold hover:bg-gray-200 transition duration-150 shadow-sm"
          >
            Send Reset Link
          </button>
        </div>

        {/* 7. رابط العودة لتسجيل الدخول */}
        <div className="text-base text-gray-900 mb-12">
          Remembered your password?{' '}
          <Link href="/signup" className="font-semibold underline hover:text-gray-700">
            Log In
          </Link>
        </div>

    
      </div>
    </main>
  );
}