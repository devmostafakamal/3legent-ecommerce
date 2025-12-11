import { useState } from "react";
import ShippingOption from "../components/cart/ShippingOption";
import CartItem from "../components/cart/CartItem";
import StepProgress from "../components/cart/StepProgress";
import { Link } from "react-router";

export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Footwear",
      color: "Black",
      price: 19,
      qty: 2,
      image:
        "https://i.ibb.co.com/KRM6pyF/9fdf56160ab038c306c555f679abf13892bf171f-1.png",
    },
    {
      id: 2,
      name: "Footwear",
      color: "Black",
      price: 19,
      qty: 2,
      image:
        "https://i.ibb.co.com/KRM6pyF/9fdf56160ab038c306c555f679abf13892bf171f-1.png",
    },
  ]);

  const [shipping, setShipping] = useState(0);

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal + shipping;

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-semibold mb-10">Cart</h1>
      <StepProgress currentStep={1} />

      {/* Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* LEFT */}
        <div className="md:col-span-2">
          {/* Table Header - Hide on mobile */}
          <div className="hidden md:grid grid-cols-4 border-b pb-4 font-semibold text-gray-600">
            <p className="col-span-2">Product</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>

          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQty={updateQty}
              removeItem={removeItem}
            />
          ))}
        </div>

        {/* RIGHT (Summary) */}
        <div className="border rounded-xl p-6 h-fit">
          <h3 className="font-semibold mb-4">Cart Summary</h3>

          <div className="space-y-3">
            <ShippingOption
              label="Free Shipping"
              price={0}
              selected={shipping === 0}
              onChange={() => setShipping(0)}
            />

            <ShippingOption
              label="Express Shipping"
              price={15}
              selected={shipping === 15}
              onChange={() => setShipping(15)}
            />

            <ShippingOption
              label="Pick Up"
              price={21}
              selected={shipping === 21}
              onChange={() => setShipping(21)}
            />
          </div>

          <div className="my-6 border-t pt-4">
            <div className="flex justify-between text-sm mb-2">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>

            <div className="flex justify-between text-lg font-semibold">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>

          <Link to="/checkout-details">
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
