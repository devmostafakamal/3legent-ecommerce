import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { LuTicketPercent } from "react-icons/lu";

function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // প্রতিবার page লোড হলে দেখাবে (sessionStorage চেক করবে
    const hidden = sessionStorage.getItem("announcementHidden");
    if (!hidden) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("announcementHidden", "true"); // এই tab-এ আর দেখাবে না
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[#38CB89]  py-3 px-4 sm:flex items-center justify-center gap-3 text-sm font-medium relative hidden">
      <LuTicketPercent className="text-lg shrink-0" />
      <p className="flex items-center gap-2">
        <span>30% off storewide — Limited time!</span>
        <a
          href="#"
          className="underline hover:no-underline font-semibold flex items-center gap-1 whitespace-nowrap"
        >
          Shop Now <span className="text-lg">→</span>
        </a>
      </p>
      <button
        onClick={handleClose}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-white/50 rounded-full p-1 transition"
        aria-label="Close"
      >
        <IoCloseOutline className="text-xl" />
      </button>
    </div>
  );
}

export default AnnouncementBar;
