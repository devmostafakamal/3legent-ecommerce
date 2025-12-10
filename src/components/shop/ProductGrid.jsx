import ProductCard from "../product/ProductCard";

function ProductGrid() {
  const products = [
    {
      id: 1,
      title: "Golf Polo Shirt",
      price: 199,
      oldPrice: 400,
      img: "https://i.ibb.co.com/sT8syG4/9fdf56160ab038c306c555f679abf13892bf171f.png",
    },
    {
      id: 2,
      title: "Double Strap Bag",
      price: 199,
      oldPrice: 400,
      img: "https://i.ibb.co.com/whh3PLgR/88065549c93302b430321d269a04d9072b21c258.png",
    },
    {
      id: 3,
      title: "Footwear",
      price: 199,
      oldPrice: 400,
      img: "https://i.ibb.co.com/g51xTsP/b04a27e4198c0d97d442fa814ed7920237a99f0b.jpg",
    },
    {
      id: 4,
      title: "Golf Polo Shirt",
      price: 199,
      oldPrice: 400,
      img: "https://i.ibb.co.com/sT8syG4/9fdf56160ab038c306c555f679abf13892bf171f.png",
    },
    {
      id: 5,
      title: "Double Strap Bag",
      price: 199,
      oldPrice: 400,
      img: "https://i.ibb.co.com/whh3PLgR/88065549c93302b430321d269a04d9072b21c258.png",
    },
    {
      id: 6,
      title: "Footwear",
      price: 199,
      oldPrice: 400,
      img: "https://i.ibb.co.com/g51xTsP/b04a27e4198c0d97d442fa814ed7920237a99f0b.jpg",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Load more button */}
      <div className="flex justify-center my-10">
        <button className="border px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
          Show more
        </button>
      </div>
    </>
  );
}

export default ProductGrid;
