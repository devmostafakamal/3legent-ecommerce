import StarRating from "../../ui/StarRating";

export default function InfoSection() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <StarRating rating={4.8} />
        <span className="text-gray-500 text-sm">11 Reviews</span>
      </div>

      <h1 className="text-3xl font-bold mt-1">Footwear</h1>

      <p className="mt-2 text-gray-600 text-sm">
        Buy one or buy a few and make every space where you sit more convenient.
      </p>

      <p className="text-2xl font-bold mt-4">$199.00</p>
      <p className="text-gray-400 line-through text-sm">$400.00</p>

      <div className="mt-4 text-sm">
        <span className="font-medium">Measurements:</span>
        <span className="ml-1">17 1/2” × 20 5/8”</span>
      </div>
    </div>
  );
}
