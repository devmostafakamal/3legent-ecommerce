export default function QuantitySelector({ value, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center gap-2 border rounded-md px-3 py-1">
      <button
        onClick={onDecrease}
        className="px-2 text-gray-600 hover:text-black"
      >
        -
      </button>

      <span className="w-6 text-center">{value}</span>

      <button
        onClick={onIncrease}
        className="px-2 text-gray-600 hover:text-black"
      >
        +
      </button>
    </div>
  );
}
