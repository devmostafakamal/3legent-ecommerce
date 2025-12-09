import React, { useState } from "react";
import { FiFilter, FiChevronDown } from "react-icons/fi";

const categories = [
  "Golf Polo Shirt",
  "Footwear",
  "Glove Snow",
  "Glove Clubs",
  "Golf Balls",
  "Glove Clubs",
];

const priceRanges = [
  { label: "All Price", min: 0, max: Infinity },
  { label: "$0.00 - $99.99", min: 0, max: 99.99 },
  { label: "$100.00 - $199.99", min: 100, max: 199.99 },
  { label: "$200.00 - $299.99", min: 200, max: 299.99 },
  { label: "$300.00 - $399.99", min: 300, max: 399.99 },
  { label: "$400.00+", min: 400, max: Infinity },
];

const products = [
  {
    id: 1,
    name: "Golf Polo Shirt",
    price: 199,
    oldPrice: 400,
    rating: 5,
    badge: "NEW",
    discount: "-50%",
  },
  {
    id: 2,
    name: "Double Strap Bag",
    price: 199,
    oldPrice: 400,
    rating: 5,
    badge: "NEW",
    discount: "-50%",
  },
  {
    id: 3,
    name: "Footwear",
    price: 199,
    oldPrice: 400,
    rating: 5,
    badge: "NEW",
    discount: "-50%",
  },
  {
    id: 4,
    name: "Golf Polo Shirt",
    price: 199,
    oldPrice: 400,
    rating: 5,
    badge: "NEW",
    discount: "-50%",
  },
  {
    id: 5,
    name: "Footwear",
    price: 199,
    oldPrice: 400,
    rating: 5,
    badge: "NEW",
    discount: "-50%",
  },
  {
    id: 6,
    name: "Double Strap Bag",
    price: 199,
    oldPrice: 400,
    rating: 5,
    badge: "NEW",
    discount: "-50%",
  },
  // আরো প্রোডাক্ট চাইলে add করো
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All Price");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // ফিল্টার লজিক (যদি API থেকে আনো তাহলে এখানে filter করবে)
  const filteredProducts = products;

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar - Filter Button (Mobile) + Sort */}
      <div className="border-b lg:hidden">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 font-medium"
          >
            <FiFilter /> Filter
          </button>
          <select className="border rounded-lg px-4 py-2 text-sm">
            <option>Sort by</option>
          </select>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              {/* Categories */}
              <div className="mb-10">
                <h3 className="font-bold text-lg mb-5">CATEGORIES</h3>
                <ul className="space-y-3">
                  <li>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === "All"}
                        onChange={() => setSelectedCategory("All")}
                        className="w-4 h-4 text-black"
                      />
                      <span>All</span>
                    </label>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat}>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(cat)}
                          className="w-4 h-4 text-black"
                        />
                        <span className="text-gray-700">{cat}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-bold text-lg mb-5">PRICE</h3>
                <ul className="space-y-3">
                  {priceRanges.map((range) => (
                    <li key={range.label}>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="price"
                          checked={selectedPrice === range.label}
                          onChange={() => setSelectedPrice(range.label)}
                          className="w-4 h-4 text-black"
                        />
                        <span className="text-gray-700">{range.label}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header - Desktop */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold">Living Room</h1>
              <div className="flex items-center gap-6">
                <select className="border rounded-lg px-4 py-2 text-sm">
                  <option>Sort by</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                  {product.discount && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-[#38CB89] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.discount}
                      </span>
                    </div>
                  )}

                  <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square mb-4">
                    <div className="w-full h-full bg-gray-200 border-2 border-dashed rounded-xl" />
                  </div>

                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>

                  <h3 className="font-semibold mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More */}
            <div className="text-center mt-16">
              <button className="border border-gray-300 rounded-full px-8 py-2 font-medium hover:bg-gray-50 transition">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Sidebar (Overlay) */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setIsMobileFilterOpen(false)}>✕</button>
            </div>
            {/* একই ক্যাটাগরি + প্রাইস এখানে */}
          </div>
        </div>
      )}
    </div>
  );
}
