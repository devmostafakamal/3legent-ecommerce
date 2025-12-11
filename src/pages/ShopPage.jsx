import React from "react";
import Sidebar from "../components/shop/Sidebar";
import ProductGrid from "../components/shop/ProductGrid";
import TopBar from "../components/shop/TopBar";

function ShopPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-10 flex flex-col sm:flex-row gap-10">
      <Sidebar />
      <div className="flex-1">
        <TopBar />
        <ProductGrid />
      </div>
    </div>
  );
}

export default ShopPage;
