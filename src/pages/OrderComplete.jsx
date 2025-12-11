import { BiPackage } from "react-icons/bi";
import StepProgress from "../components/cart/StepProgress";

export default function OrderComplete() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <StepProgress currentStep={3} />

          {/* Main Success Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <BiPackage className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Thank you! 🎉
              </h1>
              <p className="text-2xl text-gray-800">
                Your order has been received
              </p>
            </div>

            {/* Ordered Items Preview */}
            <div className="flex justify-center gap-6 my-10 flex-wrap">
              <img
                src="/api/placeholder/100/100"
                alt="Product"
                className="w-20 h-20 rounded-lg object-cover border border-gray-200"
              />
              <img
                src="/api/placeholder/100/100"
                alt="Product"
                className="w-20 h-20 rounded-lg object-cover border border-gray-200"
              />
              <img
                src="/api/placeholder/100/100"
                alt="Product"
                className="w-20 h-20 rounded-lg object-cover border border-gray-200"
              />
              <div className="w-20 h-20 rounded-lg bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-400">+1</span>
              </div>
            </div>

            {/* Order Details */}
            <div className="max-w-md mx-auto text-left space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Order code:</span>
                <span className="font-semibold">#0123-45678</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">October 19, 2023</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total:</span>
                <span className="font-bold text-xl text-gray-900">
                  $1,345.00
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment method:</span>
                <span className="font-medium">Credit Card</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-10">
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-10 rounded-full transition duration-200">
                Purchase history
              </button>
            </div>

            {/* Help Text */}
            <p className="mt-8 text-sm text-gray-500">
              We'll send you a shipping confirmation email when your item(s) are
              on the way!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
