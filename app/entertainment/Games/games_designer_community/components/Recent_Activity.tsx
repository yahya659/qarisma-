import { MessageCircle, Star } from "lucide-react";
const reviews = [
  {
    id: 1,
    name: "Sara smith",
    rating: 4,
    comment:
      "“I Really loved your ways in creating interesting contents!. great games”",
  },
  {
    id: 2,
    name: "Sara smith",
    rating: 4,
    comment:
      "“I Really loved your ways in creating interesting contents!. great games”",
  },
  {
    id: 3,
    name: "Sara smith",
    rating: 4,
    comment:
      "“I Really loved your ways in creating interesting contents!. great games”",
  },
  {
    id: 4,
    name: "Sara smith",
    rating: 4,
    comment:
      "“I Really loved your ways in creating interesting contents!. great games”",
  },
];
function ActivityCard({ review }) {
  return (
    <>
    
    <div className="bg-[#F178B66E] backdrop-blur-md shadow-md">
        
      <div className="flex items-start ml-20 gap-4">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
          alt={review.name}
          className="w-25 h-25 rounded-full mt-5 object-cover shadow-sm mt-1"
        />
        <div className="flex-1">
          <h4 className="text-gray-800 text-[36px] font-bold">{review.name}</h4>
          <div className="flex items-center gap-1 my-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < review.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-yellow-400/30"
                }
              />
            ))}
          </div>
          <p className="text-gray-900 font-medium text-[24px] leading-relaxed max-w-3xl mt-2">
            {review.comment}
          </p>
          <button className="flex items-center gap-1.5 text-gray-800 font-bold text-[24px] mt-3 hover:text-black transition">
            <MessageCircle size={18} />
            Reply
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
export default function Recent_Activity() {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <ActivityCard key={review.id} review={review} />
      ))}
    </div>
  );
}
