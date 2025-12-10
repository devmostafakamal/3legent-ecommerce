import React from "react";

function TopBar() {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-semibold">Living Room</h2>

      <div className="flex items-center gap-4">
        {/* Sort */}
        <select className="border px-3 py-1 rounded-md">
          <option>Sort by</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>

        {/* Grid Icons */}
        <div className="flex gap-2">
          <button className="p-2 border rounded hover:bg-gray-100">🔳</button>
          <button className="p-2 border rounded hover:bg-gray-100">📄</button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
