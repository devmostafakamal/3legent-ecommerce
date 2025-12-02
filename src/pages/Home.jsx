import CategoryGrid from "../components/Home/CategoryGrid";
import Featured from "../components/Home/Featured";
import Hero from "../components/Home/Hero";
import LatestArtcile from "../components/Home/LatestArtcile";
import Newsfeed from "../components/Home/Newsfeed";
import OfferTiming from "../components/Home/OfferTiming";
// import ShopCollection from "../components/Home/ShopCollection";
import Newslatter from "../components/ui/Newslatter";

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <CategoryGrid />
      <OfferTiming />
      {/* <ShopCollection /> */}
      <LatestArtcile />
      <Newslatter />
      <Newsfeed />
    </div>
  );
}
