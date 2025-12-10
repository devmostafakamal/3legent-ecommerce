export default function ColorSelector({ colors = [] }) {
  return (
    <div>
      <p className="text-sm font-medium mb-2">Colors:</p>
      <div className="flex gap-3">
        {colors.map((c, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full border cursor-pointer"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </div>
  );
}
