export default function CategoryGrid() {
  const categories = [
    {
      id: 1,
      categoryName: "Golf Polo Shirt",
      categoryImage: "https://i.ibb.co.com/6RN4p5Nh/Golf-Clubs.png",
    },
    {
      id: 2,
      categoryName: "Footwear",
      categoryImage: "https://i.ibb.co.com/6RN4p5Nh/Golf-Clubs.png",
    },
    {
      id: 3,
      categoryName: "Glove Snow",
      categoryImage: "https://i.ibb.co.com/6RN4p5Nh/Golf-Clubs.png",
    },
    {
      id: 4,
      categoryName: "Glove Clubs",
      categoryImage: "https://i.ibb.co.com/6RN4p5Nh/Golf-Clubs.png",
    },
    {
      id: 5,
      categoryName: "Golf Balls",
      categoryImage: "https://i.ibb.co.com/6RN4p5Nh/Golf-Clubs.png",
    },
    {
      id: 6,
      categoryName: "Glove Clubs",
      categoryImage: "https://i.ibb.co.com/6RN4p5Nh/Golf-Clubs.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl text-black mb-12 text-center">
        Shop by Categories
      </h1>

      {/* Fully Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 place-items-center">
        {categories.map((c) => (
          <div key={c.id} className="w-full max-w-[375px] text-center p-4">
            <img
              src={c.categoryImage}
              alt={c.categoryName}
              className="w-full h-auto object-cover rounded"
            />
            <p className="mt-4 text-lg font-medium">{c.categoryName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
