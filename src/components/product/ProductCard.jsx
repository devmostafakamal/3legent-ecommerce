function ProductCard({ product }) {
  return (
    <div className="p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition">
      {/* Labels */}
      <div className="flex justify-between text-xs mb-3">
        <span className="bg-gray-200 px-2 py-0.5 rounded">NEW</span>
        <span className="bg-green-500 text-white px-2 py-0.5 rounded">
          -50%
        </span>
      </div>

      {/* Image */}
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-64 object-cover rounded"
      />

      {/* Rating */}
      <div className="flex text-yellow-500 text-sm mt-3">★★★★★</div>

      {/* Title */}
      <h3 className="font-semibold mt-1">{product.title}</h3>

      {/* Price */}
      <p className="mt-1">
        <span className="font-bold">${product.price}</span>{" "}
        <span className="line-through text-gray-400">${product.oldPrice}</span>
      </p>
    </div>
  );
}

export default ProductCard;
