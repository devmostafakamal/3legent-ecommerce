import PaymentMethodCard from "../ui/PaymentMethodCard";
import SocialIcons from "../ui/SocialIcons";

export default function MainFooter() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      {/* TOP SECTION */}
      <div className="text-white flex flex-col gap-12 sm:flex-row sm:items-start sm:gap-8 mb-16">
        {/* Brand + Social */}
        <section className="flex-1">
          <h3 className="text-2xl font-semibold">3legent</h3>
          <p className="text-lg my-6">
            More than just a game <br /> It's a lifestyle
          </p>
          <SocialIcons />
        </section>

        {/* Links */}
        <section className="inter flex-1 grid grid-cols-2 sm:grid-cols-3 gap-10 sm:flex sm:justify-between">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold">Page</h3>
            <ul className="text-sm flex flex-col gap-4">
              <li>Home</li>
              <li>Shop</li>
              <li>Product</li>
              <li>Action</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold">Info</h3>
            <ul className="text-sm flex flex-col gap-4">
              <li>Shopping Policy</li>
              <li>Return & Refund</li>
              <li>Support</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold">Office</h3>
            <div className="text-sm flex flex-col gap-2">
              <p>43111 Hai Trieu Street</p>
              <p>District 1, HCMC</p>
              <p>Vietnam</p>
              <p>84-756-3237</p>
            </div>
          </div>
        </section>
      </div>

      {/* DIVIDER */}
      <div className="bg-gray-800 h-px"></div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-8 gap-6 text-center sm:text-left">
        <div className="text-white text-xs flex flex-col sm:flex-row gap-4 inter items-center">
          <p>Copyright © 2023 3legent. All rights reserved</p>

          <div className="hidden sm:block w-px h-4 bg-gray-700"></div>

          <div className="flex gap-4">
            <p className="text-white/60">Privacy Policy</p>
            <p className="text-white/60">Terms & Conditions</p>
          </div>
        </div>

        <PaymentMethodCard />
      </div>
    </div>
  );
}
