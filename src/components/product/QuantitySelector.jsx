import { useState } from "react";

export default function QuantitySelector() {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex items-center gap-3">
      <button
        className="w-8 h-8 border rounded"
        onClick={() => setQty(Math.max(1, qty - 1))}
      >
        -
      </button>

      <span className="px-4">{qty}</span>

      <button
        className="w-8 h-8 border rounded"
        onClick={() => setQty(qty + 1)}
      >
        +
      </button>
    </div>
  );
}
