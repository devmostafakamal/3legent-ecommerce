function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-4 py-12">
      <h2 className="flex items-center gap-2 font-semibold mb-6">
        <span className="text-lg">⚙</span> Filter
      </h2>

      {/* Categories */}
      <div className="mb-10">
        <h3 className="font-semibold mb-3">CATEGORIES</h3>
        <ul className="space-y-2 text-gray-600">
          <li>Golf Polo Shirt</li>
          <li>Footwear</li>
          <li>Glove Snow</li>
          <li>Glove Clubs</li>
          <li>Golf Balls</li>
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-semibold mb-3">PRICE</h3>
        <div className="space-y-3 text-gray-600">
          {[
            "$0.00 - 99.99",
            "$100.00 - 199.99",
            "$200.00 - 299.99",
            "$300.00 - 399.99",
            "$400.00+",
          ].map((price) => (
            <label key={price} className="flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-sm" />
              {price}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;
