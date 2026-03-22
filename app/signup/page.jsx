// import Image from "next/image";
import SignupForm from "../components/SignupForm"; // نخرج مرتين للوصول للجذور

export default function SignupPage() {
  return (
    <div className="min-h-screen flex bg-[#f2e9e9]">
      {/* الجانب الأيسر -  Clip Path الظل*/}
      <div className="relative hidden lg:block lg:w-[50%] h-screen overflow-hidden">
        {/* صورة الستارة  */}
        <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: "url('images/signup.png')",
            backgroundSize: "cover",
            backgroundPosition: "left center",
            //ابعاد الصوره
            clipPath: "polygon(0 0, 100% 0, 78% 100%, 0% 100%)",
          }}
        ></div>
      </div>

      {/* الجانب الأيمن - الفورم */}
      <SignupForm />
    </div>
  );
}