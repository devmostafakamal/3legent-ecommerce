import GallerySection from "../components/product/sections/GallerySection";
import InfoSection from "../components/product/sections/InfoSection";
import OptionsSection from "../components/product/sections/OptionsSection";
import ReviewsSection from "../components/product/sections/ReviewsSection";
import TimerSection from "../components/product/sections/TimerSection";

export default function ProductPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-10">
      {/* TOP WRAPPER */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT */}
        <div className="flex-1">
          <GallerySection />
        </div>

        {/* RIGHT */}
        <div className="flex-1 space-y-6">
          <InfoSection />
          <TimerSection />
          <OptionsSection />
        </div>
      </div>

      {/* REVIEWS + TABS */}
      <div className="mt-16">
        <ReviewsSection />
      </div>
    </div>
  );
}
