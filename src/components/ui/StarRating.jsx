export default function StarRating({ rating = 0, outOf = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(outOf)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? "gold" : "lightgray"}
          className="w-5 h-5"
        >
          <path d="M10 1l2.6 5.3L18 7.3l-4 4 1 5.7L10 14.7 5 17l1-5.7-4-4 5.4-1z" />
        </svg>
      ))}
    </div>
  );
}
