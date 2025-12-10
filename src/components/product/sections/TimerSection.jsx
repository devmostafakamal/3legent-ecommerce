import { useEffect, useState } from "react";

export default function TimerSection() {
  const target = new Date("2025-12-31T23:59:59").getTime();
  const [time, setTime] = useState({ d: "00", h: "00", m: "00", s: "00" });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) return clearInterval(timer);

      const d = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      );
      const h = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      );
      const m = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
      const s = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

      setTime({ d, h, m, s });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p className="text-sm text-gray-500 mb-2">Offer expires in:</p>

      <div className="flex gap-3">
        {[
          { label: "Days", value: time.d },
          { label: "Hours", value: time.h },
          { label: "Minutes", value: time.m },
          { label: "Seconds", value: time.s },
        ].map((item) => (
          <div
            key={item.label}
            className="w-16 h-16 bg-gray-100 rounded flex flex-col items-center justify-center"
          >
            <span className="font-bold text-xl">{item.value}</span>
            <span className="text-xs text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
