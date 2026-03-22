import CreateAccountForm from "../components/CreateAccountForm"; 
export default function CreateAccountPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4">
      {/* صورة الخلفية */}
      <div className="absolute inset-0 z-0">
        <img 
          src="images/CreateAccount.png" 
          alt="Background" 
          className="w-full h-full object-cover grayscale-[20%] brightness-75 opacity-60" 
        />
      </div>

      {/* الفورم في  */}
      <div className="relative z-10">
        <CreateAccountForm />
      </div>
    </div>
  );
}