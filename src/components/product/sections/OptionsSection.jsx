import Button from "../../ui/Button";
import ColorSelector from "../ColorSelector";
import QuantitySelector from "../QuantitySelector";

export default function OptionsSection() {
  return (
    <div className="space-y-6 mt-6">
      <ColorSelector />
      <QuantitySelector />

      <div className="flex gap-4">
        <Button className="flex-1 bg-black text-white">Add to Cart</Button>
        <Button className="flex-1 border border-gray-300">Wishlist</Button>
      </div>
    </div>
  );
}
