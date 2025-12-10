import StarRating from "../../ui/StarRating";

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Amazing quality! Highly recommended.",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 2,
      name: "Sarah Lee",
      rating: 4,
      comment: "Very comfortable and premium feel.",
      avatar: "https://i.pravatar.cc/150?img=15",
    },
  ];

  return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold">Customer Reviews</h2>

      <div className="mt-6 space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="flex gap-4 pb-6 border-b">
            <img
              src={review.avatar}
              className="w-12 h-12 rounded-full"
              alt=""
            />
            <div>
              <h4 className="font-semibold">{review.name}</h4>
              <StarRating rating={review.rating} />
              <p className="text-gray-600 mt-2">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
