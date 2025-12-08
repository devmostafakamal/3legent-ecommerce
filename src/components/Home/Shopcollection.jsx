function ShopCollection() {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-4xl text-black mb-12">Shop Collection</h1>

      {/* GRID FIX: auto rows prevent layout break */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-[260px]">
        {/* LEFT BIG IMAGE */}
        <div className="row-span-2 bg-gray-100 relative">
          <div className="w-full h-full aspect-4/3">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co.com/x8Kt8HLB/junior-set.png"
              alt=""
            />
          </div>

          <div className="absolute bottom-6 left-6">
            <p className="text-xl font-semibold">Juniors Set</p>
            <p className="text-gray-600 flex items-center gap-1">
              Collections →
            </p>
          </div>
        </div>

        {/* RIGHT TOP */}
        <div className="bg-gray-100 relative">
          <div className="w-full h-full aspect-4/3">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co.com/x8Kt8HLB/junior-set.png"
              alt=""
            />
          </div>

          <div className="absolute bottom-6 left-6">
            <p className="text-xl font-semibold">Men’s Set</p>
            <p className="text-gray-600 flex items-center gap-1">
              Collections →
            </p>
          </div>
        </div>

        {/* RIGHT BOTTOM */}
        <div className="bg-gray-100 relative">
          <div className="w-full h-full aspect-4/3">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co.com/x8Kt8HLB/junior-set.png"
              alt=""
            />
          </div>

          <div className="absolute bottom-6 left-6">
            <p className="text-xl font-semibold">Women’s Set</p>
            <p className="text-gray-600 flex items-center gap-1">
              Collections →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCollection;
