import React from "react";

const reviews = [
  {
    name: "Priya Patel",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200",
    text:
      "The Tasty Sweets Are Simply Divine. Every Bite Of The Cake Was Moist And Delicious. A Real Treat!",
  },
  {
    name: "Rahul Gupta",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    text:
      "Foodify Breakfast Is Truly Satisfying! They Always Hit The Spot For Me.",
  },
  {
    name: "Meera Pandi",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    text:
      "It's The Ultimate Comfort Food To Start Your Day With. Highly Recommend!",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center gap-1 my-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`text-xl ${i <= rating ? "text-orange-500" : "text-orange-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function CustomerReviews() {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-4xl font-semibold text-center mb-12 ">
        Our Customers <span className="text-orange-500">Reviews</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {reviews.map((r, index) => (
          <div
            key={index}
            className="relative bg-[#064e6b] text-white rounded-2xl shadow-lg pt-16 px-6 pb-8 hover:scale-105 transition"
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <img
                src={r.image}
                alt={r.name}
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold text-center mt-4">
              {r.name}
            </h3>

            <StarRating rating={r.rating} />

            <p className="text-center text-sm leading-relaxed opacity-90">
              "{r.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
