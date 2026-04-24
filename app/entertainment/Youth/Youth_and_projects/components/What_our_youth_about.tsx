import { Star } from "lucide-react";

export default function What_our_youth_about(){
    
  const testimonials = [
    { id: 1, name: "Amira", role: "Participant", text: "It has been such an amazing experience meeting everyone!", color: "bg-blue-600" },
    { id: 2, name: "Anas M.", role: "Volunteer", text: "I found great ways of learning and developing my skills.", color: "bg-pink-400" },
    { id: 3, name: "Sarah K.", role: "Lead", text: "Watching the project grow and help the community is wonderful.", color: "bg-purple-500" }
  ];
    return(
        <section className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-[48px] font-bold text-center mb-12 text-gray-800">What our youth say about us.</h2>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className={`${t.color} p-8 rounded-[40px] shadow-xl relative transform transition hover:scale-105`}>
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="white" className="text-[#FFC800] w-[34.70478820800781] h-[31.735429763793945] " />)}
              </div>
              <p className="mb-8 font-medium text-[20px] text-[#000000]">"{t.text}"</p>
              <div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden">
  <img
    src="/images/Youth/Youth4.jpg"
    alt="profile"
    className="w-full h-full object-cover"
  />
</div>                <div>
                  <h4 className="font-bold text-[#000000] text-[16px]">{t.name}</h4>
                  <p className="text-[16px]  ">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {[1,2,3,4,5].map(i => (
            <div key={i} className={`w-4 h-4 rounded-full ${i === 3 ? 'bg-blue-600 scale-125' : 'bg-pink-300'}`}></div>
          ))}
        </div>
      </section>
    );
}