export default function GallerySection() {
  return (
    <div>
      <div className="px-2 py-20 bg-gray-100 flex items-center justify-center">
        <img
          className="w-1/2 rounded-lg"
          src="https://i.ibb.co.com/60GDkqyn/f2c8e305f5666462188fb4f9234343f4a0f728b6.png"
          alt="Main Product"
        />
      </div>

      <div className="grid grid-cols-4 gap-3 mt-4 px-2">
        {[1, 2, 3, 4].map((n) => (
          <img
            key={n}
            className="w-[80%] h-20 object-cover rounded shadow-md p-4"
            src="https://i.ibb.co.com/60GDkqyn/f2c8e305f5666462188fb4f9234343f4a0f728b6.png"
          />
        ))}
      </div>
    </div>
  );
}
