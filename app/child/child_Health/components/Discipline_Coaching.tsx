import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function Discipline_Coaching() {
  const disciplineCards = [
    {
      title: "Positive Discipline",
      tag: "Coaching",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=300",
    },
    {
      title: "Social Learning",
      tag: "Behavior",
      img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=300",
    },
    {
      title: "Mindful Parenting",
      tag: "Wellness",
      img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=300",
    },
    {
      title: "Active Play",
      tag: "Health",
      img: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=300",
    },
    {
      title: "Emotional Intelligence",
      tag: "Coaching",
      img: "https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&q=80&w=300",
    },
    {
      title: "Creative Growth",
      tag: "Education",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=300",
    },
  ];
  return (
    <>
      {" "}
      <section className="py-24 px-6 bg-[#F178B6]/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Discipline & Coaching
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {disciplineCards.map((card, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-purple-100 hover:shadow-2xl transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={card.img}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                    alt={card.title}
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    {card.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3">{card.title}</h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Expert advice on fostering a healthy environment for growth
                    and emotional maturity...
                  </p>
                  <button className="text-purple-600 font-bold text-sm border-b-2 border-transparent hover:border-purple-600 transition">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-16">
            <button className="w-10 h-10 rounded-full border border-purple-200 flex items-center justify-center text-purple-400 hover:bg-purple-100">
              <ChevronLeft />
            </button>
            <button className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center">
              1
            </button>
            <button className="w-10 h-10 rounded-full text-purple-600 hover:bg-purple-100 flex items-center justify-center">
              2
            </button>
            <button className="w-10 h-10 rounded-full text-purple-600 hover:bg-purple-100 flex items-center justify-center">
              3
            </button>
            <button className="w-10 h-10 rounded-full border border-purple-200 flex items-center justify-center text-purple-400 hover:bg-purple-100">
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Newsletter / Contact CTA */}
      <section className="px-6 mb-12 ">
        <div className="max-w-6xl mx-auto bg-[#5D5FEF]   p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-xl shadow-purple-200">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Stay Informed, learn more & contact us
            </h2>
          </div>
          <div className="flex w-full md:w-auto gap-4">
            <button className="bg-[#F178B6] text-white px-8 py-3 rounded-2xl font-bold hover:bg-pink-500 transition shadow-lg flex items-center gap-2">
              send message
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
