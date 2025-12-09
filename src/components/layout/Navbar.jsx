import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoBagHandleOutline, IoClose, IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router";

export default function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 sticky top-0 shadow bg-white z-50 px-4">
        {/* Hamburger - Mobile only */}
        <div className="sm:hidden">
          <button onClick={() => setOpenSidebar(true)}>
            <GiHamburgerMenu size={26} />
          </button>
        </div>

        {/* Logo */}
        <div>
          <h2 className="text-2xl hidden sm:block">3legent</h2>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex">
          <ul className="flex items-center gap-10 ">
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/contactUs">Contact Us</NavLink>
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <IoSearchOutline size={24} />
          <CgProfile size={24} />
          <IoBagHandleOutline size={24} />
        </div>
      </div>

      {/* Sidebar Drawer - Mobile Only */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 sm:hidden ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setOpenSidebar(false)}>
            <IoClose size={28} />
          </button>
        </div>

        <ul className="flex flex-col p-4 text-lg gap-6">
          <NavLink to="/" onClick={() => setOpenSidebar(false)}>
            Home
          </NavLink>
          <NavLink to="/shop" onClick={() => setOpenSidebar(false)}>
            Shop
          </NavLink>
          <NavLink to="/product" onClick={() => setOpenSidebar(false)}>
            Product
          </NavLink>
          <NavLink to="/contactUs" onClick={() => setOpenSidebar(false)}>
            Contact Us
          </NavLink>
        </ul>
      </div>

      {/* Backdrop */}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
        />
      )}
    </>
  );
}
