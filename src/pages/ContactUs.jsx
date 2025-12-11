import React from "react";
import { BiLock, BiMapPin, BiPhone } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import { CiMapPin } from "react-icons/ci";
import { FiRefreshCw } from "react-icons/fi";
import { RiMvAiLine } from "react-icons/ri";

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold  mb-8">
        We believe in sustainable <br /> decor. We’re passionate about <br />{" "}
        life at home.
      </h1>
      <p>
        Our features timeless furniture, with natural fabrics, curved lines,
        plenty of mirrors and classic design, which <br />
        can be incorporated into any decor project. The pieces enchant for their
        sobriety, to last for generations, <br /> faithful to the shapes of each
        period, with a touch of the present
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {/* Left Side: Image & About Section */}
        <div className="flex-1">
          <img
            src="https://i.ibb.co.com/KcmtTSQp/db20cf91b72f641e5264621731f0e776916d679e.jpg"
            alt="Decor"
            className="w-full h-50 object-cover rounded-lg"
          />
        </div>

        {/* Right Side: About Us and Contact Info */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-xl font-semibold">About Us</h2>
            <p className="text-gray-600 mt-2">
              3legant is a gift & decorations store based in HCMC, Vietnam. Est
              since 2019. Our customer service is always prepared to support you
              24/7.
            </p>
            <a
              href="/shop" // Link to your shop page
              className="text-blue-600 mt-4 inline-block"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white rounded-lg shadow-md p-8 text-center border border-gray-200">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <BiMapPin className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-gray-600">
            234 Hai Trieu, Ho Chi Minh City,
            <br />
            Viet Nam
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 text-center border border-gray-200">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <BiPhone className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-600">+84 234 567 890</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 text-center border border-gray-200">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <RiMvAiLine className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-gray-600">hello@3legant.com</p>
        </div>
      </div>

      {/* Contact Form + Map */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Form */}
          <div className="p-8 lg:p-12">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 rounded-md hover:bg-gray-800 transition font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="relative h-96 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.448569103034!2d106.6974816148005!3d10.773989992323337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38e5d606a1%3A0x7e0d1e3d4569e700!2sHai%20Tri%C3%A8u%2C%20B%E1%BA%BFn%20Ngh%C3%A9%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2s!4v1698000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
            {/* Custom Pin Icon on Map */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="bg-white rounded-full p-3 shadow-xl border-4 border-blue-600">
                <CiMapPin className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <BsTruck className="w-12 h-12 mx-auto mb-3 text-gray-700" />
          <h4 className="font-semibold">Free Shipping</h4>
          <p className="text-sm text-gray-600">Order above $200</p>
        </div>
        <div>
          <FiRefreshCw className="w-12 h-12 mx-auto mb-3 text-gray-700" />
          <h4 className="font-semibold">Money-back</h4>
          <p className="text-sm text-gray-600">30 days guarantee</p>
        </div>
        <div>
          <BiLock className="w-12 h-12 mx-auto mb-3 text-gray-700" />
          <h4 className="font-semibold">Secure Payments</h4>
          <p className="text-sm text-gray-600">Secured by Stripe</p>
        </div>
        <div>
          {/* <HeadphonesIcon className="w-12 h-12 mx-auto mb-3 text-gray-700" /> */}
          <h4 className="font-semibold">24/7 Support</h4>
          <p className="text-sm text-gray-600">Phone and Email support</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
