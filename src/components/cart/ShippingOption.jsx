export default function ShippingOption({ label, price, selected, onChange }) {
  return (
    <label
      className={`flex justify-between items-center border rounded-lg px-4 py-3 cursor-pointer ${
        selected ? "border-black" : "border-gray-300"
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="radio"
          checked={selected}
          onChange={onChange}
          className="accent-black"
        />
        <span className="text-sm">{label}</span>
      </div>
      <span className="text-sm text-gray-500">${price}</span>
    </label>
  );
}
