import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export default function Cart({ product = {} }) {
  const {
    discountPrice = 0,
    images,
    name,
    averageRating = 0,
    category = "none",
    price = 0,
    shortDescription = "none",
  } = product;

  return (
    <div className="w-full px-2">
      {/* IMAGE WRAPPER */}
      <div className="relative group  sm:aspect-3/4 md:aspect-4/5 aspect-w-4 aspect-h-5">
        <img
          className="w-full h-full object-cover"
          src={images ? images : "https://i.ibb.co.com/gLY0mj2x/T-shirt.png"}
          alt={name}
        />

        {/* HOT + DISCOUNT BADGE */}
        <p className="absolute flex flex-col top-4 left-4 gap-2">
          <span className="bg-white text-black text-sm px-3 w-9/12">Hot</span>
          <span className="bg-green-600 text-white text-sm rounded px-4">
            {discountPrice && `-${discountPrice}%`}
          </span>
        </p>

        {/* ADD TO CART BUTTON (HIDDEN UNTIL HOVER) */}
        <button
          className="
            absolute bottom-4 left-1/2 -translate-x-1/2 
            bg-black text-white px-4 py-1 translate-y-4
            opacity-0 group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300
            rounded
          "
        >
          Add to Cart
        </button>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="flex flex-col gap-1 mt-3">
        <Rating style={{ maxWidth: 70 }} value={averageRating} readOnly />
        <p className="text-sm">{shortDescription}</p>
        <p className="text-sm">{category}</p>
        <p className="text-sm font-semibold">$ {price}</p>
      </div>
    </div>
  );
}
