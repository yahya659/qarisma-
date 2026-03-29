import Sidebar from "../components/dashboard/Sidebar";
// import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout(){


  return (
    // التعديل هنا: أضفنا خلفية صورة، وجعلناها تغطي الصفحة بالكامل
    <div className="flex h-screen w-full bg-[url('/dashboard-bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
      
      {/* 1. القائمة الجانبية ثابتة (مع تأثير الشفافية على الخلفية الجديدة) */}
      <aside className="h-full w-64 fixed inset-y-0 z-50">
        <Sidebar />
      </aside>

      {/* 2. محتوى الصفحة المتغير (Padding لإزاحته عن الـ Sidebar)
      <main className="flex-1 pl-64 overflow-y-auto">
        <div className="p-8">
          {children}
        </div>
      </main> */}

    </div>
  );
}