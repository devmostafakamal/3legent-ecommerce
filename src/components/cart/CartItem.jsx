import QuantitySelector from "./QuantitySelector";

export default function CartItem({ item, updateQty, removeItem }) {
  return (
    <div className="grid grid-cols-4 items-center py-6 border-b">
      {/* Product */}
      <div className="flex items-center gap-4 col-span-2">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-md"
        />

        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-gray-500">Color: {item.color}</p>

          <button
            onClick={() => removeItem(item.id)}
            className="text-sm text-red-500 hover:underline mt-1"
          >
            Remove
          </button>
        </div>
      </div>

      {/* Quantity */}
      <QuantitySelector
        value={item.qty}
        onIncrease={() => updateQty(item.id, item.qty + 1)}
        onDecrease={() => updateQty(item.id, Math.max(1, item.qty - 1))}
      />

      {/* Subtotal */}
      <p className="font-semibold">${(item.price * item.qty).toFixed(2)}</p>
    </div>
  );
}
