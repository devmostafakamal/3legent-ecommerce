import { useEffect, useState } from "react";
import PrimaryButton from "../ui/button/PrimaryButton";

export default function OfferTiming() {
  const targetDate = new Date("2025-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = String(
        Math.floor(distance / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((distance % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row rounded overflow-hidden shadow-2xl max-w-8xl mx-auto">
        {/* LEFT IMAGE - Responsive */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ibb.co.com/x8smGDrV/image.png"
            alt="Offer"
            className="w-full h-64 sm:h-80 lg:h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT - Responsive Padding & Typography */}
        <div className="w-full lg:w-1/2 bg-[#0C0C0C] text-white p-6 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-center">
          <span className="inline-block text-[10px] sm:text-xs font-bold text-[#71EFA3] border border-[#71EFA3] px-3 py-1.5 tracking-widest uppercase">
            Limited Edition
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-6 leading-tight">
            Hurry up! 30% OFF
          </h1>

          <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base">
            Find clubs that are right for your game
          </p>

          <p className="mt-6 text-gray-400 text-xs sm:text-sm">
            Offer expires in:
          </p>

          {/* TIMER - Fully Responsive */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white text-black rounded-lg flex flex-col items-center justify-center 
                         py-3 sm:py-4 px-2 min-w-[60px] sm:min-w-20 lg:min-w-[100px]"
              >
                <span className="text-lg sm:text-2xl lg:text-3xl font-bold leading-none">
                  {item.value}
                </span>
                <span className="text-[9px] sm:text-xs text-gray-600 mt-1 uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <PrimaryButton className="w-full sm:w-auto text-sm sm:text-base px-8 py-4">
              Shop Now
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
