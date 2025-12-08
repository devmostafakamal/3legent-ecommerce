import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "../../data/products";
import Cart from "../cart/Cart";

export default function Featured() {
  const topProducts = products
    .toSorted((a, b) => a.averageRating - b.averageRating)
    .slice(0, 8);

  // Responsive breakpoints
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="max-w-6xl mx-auto py-12 b">
      <h1 className="text-4xl text-black mb-12">Featured</h1>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        arrows={false}
        containerClass="pb-16"
        itemClass="px-2"
        showDots={true}
      >
        {topProducts.map((product, i) => (
          <Cart key={i} product={product} />
        ))}
      </Carousel>
    </div>
  );
}
