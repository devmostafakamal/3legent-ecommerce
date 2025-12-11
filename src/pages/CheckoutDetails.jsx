"use client";

import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { LuX } from "react-icons/lu";
import StepProgress from "../components/cart/StepProgress";
import { Link } from "react-router";

export default function CheckoutDetails() {
  const [promoCode, setPromoCode] = useState("");
  const [appliedCode, setAppliedCode] = useState("JenkateMW");

  const cartItems = [
    { id: 1, name: "Footwear", color: "Black", price: 38.0, qty: 2 },
    { id: 2, name: "Footwear", color: "Black", price: 38.0, qty: 2 },
    { id: 3, name: "Footwear", color: "Black", price: 38.0, qty: 2 },
  ];

  const subtotal = 99.0;
  const shipping = "Free";
  const discount = 25.0;
  const total = 234.0;

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <h1 className="text-3xl font-bold text-center mb-8">Check Out</h1>

          {/* Progress Steps */}
          <StepProgress currentStep={2} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
            {/* Left Column - Forms */}
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Contact Information
                </h2>

                {/* Make this responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full mt-4 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full mt-4 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>

                <input
                  type="text"
                  placeholder="Street Address *"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black"
                />

                <input
                  type="text"
                  placeholder="Country *"
                  className="w-full mt-4 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black"
                />

                {/* City + State + Zip - Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="Town / City"
                    className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="State"
                      className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black"
                    />
                    <input
                      type="text"
                      placeholder="Zip Code"
                      className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>

                <label className="flex items-center mt-4 text-sm">
                  <input type="checkbox" className="mr-2" />
                  Use a different billing address (optional)
                </label>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Payment method</h2>

                <div className="space-y-3">
                  <label className="flex items-center p-4 border-2 border-black rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked
                      className="mr-3"
                    />
                    <span className="font-medium">Pay by Card Credit</span>
                  </label>
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer">
                    <input type="radio" name="payment" className="mr-3" />
                    <span>Paypal</span>
                  </label>
                </div>

                <div className="mt-6 space-y-4">
                  <input
                    type="text"
                    placeholder="1234 1234 1234"
                    className="w-full border rounded-lg px-4 py-3"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="border rounded-lg px-4 py-3"
                    />
                    <input
                      type="text"
                      placeholder="CVC code"
                      className="border rounded-lg px-4 py-3"
                    />
                  </div>
                </div>
              </div>

              {/* Button */}
              <Link to="/order-complete">
                <button className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800">
                  Place Order
                </button>
              </Link>
            </div>

            {/* Right Column - Order Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
              <h2 className="text-lg font-semibold mb-6">Order summary</h2>

              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-20 h-20 shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500">Color: Black</p>

                      <div className="flex items-center justify-between mt-2">
                        {/* Qty box responsive */}
                        <div className="flex items-center border rounded-lg">
                          <button className="p-2">
                            <BiMinus className="w-4 h-4" />
                          </button>
                          <span className="px-4">{item.qty}</span>
                          <button className="p-2">
                            <BiPlus className="w-4 h-4" />
                          </button>
                        </div>

                        <span className="font-semibold">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              <div className="mt-8">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Input"
                    className="flex-1 border rounded-lg px-4 py-3"
                  />
                  <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800">
                    Apply
                  </button>
                </div>

                {appliedCode && (
                  <div className="flex items-center justify-between mt-3 text-sm">
                    <span className="flex items-center text-green-600">
                      <span className="mr-2">✓</span> {appliedCode}
                    </span>
                    <button className="text-red-500 flex items-center gap-1">
                      <LuX />
                    </button>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="border-t pt-6 mt-8 space-y-3">
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-4 border-t">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
