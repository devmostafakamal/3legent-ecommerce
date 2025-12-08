import PaymentMethodCard from "../ui/PaymentMethodCard";
import SocialIcons from "../ui/SocialIcons";

export default function MainFooter() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      {/* TOP SECTION */}
      <div className="text-white flex gap-8 items-start mb-16">
        {/* Brand + Social */}
        <section className="flex-1">
          <h3 className="text-2xl font-semibold">3legent</h3>
          <p className="text-lg my-8">
            More than just a game <br /> It's a lifestyle
          </p>
          <SocialIcons />
        </section>

        {/* Links */}
        <section className="inter flex-1 flex justify-between items-start">
          <div className="flex flex-col gap-10">
            <h3 className="text-lg font-semibold">Page</h3>
            <ul className="text-sm flex flex-col gap-6">
              <li>Home</li>
              <li>Shop</li>
              <li>Product</li>
              <li>Action</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className="flex flex-col gap-10">
            <h3 className="text-lg font-semibold">Info</h3>
            <ul className="text-sm flex flex-col gap-6">
              <li>Shopping Policy</li>
              <li>Return & Refund</li>
              <li>Support</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="flex flex-col gap-10">
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
      <div className="flex justify-between items-center py-8">
        <div className="text-white text-xs flex gap-4 inter items-center">
          <p>Copyright © 2023 3legant. All rights reserved</p>
          <div className="w-px h-4 bg-gray-700"></div>
          <p className="text-white/60">Privacy Policy</p>
          <p className="text-white/60">Terms & Conditions</p>
        </div>

        <PaymentMethodCard />
      </div>
    </div>
  );
}
