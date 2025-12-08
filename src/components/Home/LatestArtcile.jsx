export default function LatestArticle() {
  const article = [1, 2, 3];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl text-black mb-12">Latest Article</h1>

      {/* Responsive Grid */}
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-8
      "
      >
        {article.map((_, i) => (
          <div key={i} className="w-full">
            <img
              className="w-full h-64 object-cover rounded"
              src="https://i.ibb.co.com/hxqw5WFg/Ryder-cup.jpg"
              alt=""
            />

            <p className="text-xl font-bold mt-3">description</p>
            <button className="underline text-sm mt-1">Read more</button>
          </div>
        ))}
      </div>
    </div>
  );
}
