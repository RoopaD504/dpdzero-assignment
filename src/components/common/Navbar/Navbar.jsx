import React, { useState } from "react";
import { menuItems } from "./menuData";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { navConstants } from "../../constants/navConstants";


function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="flex items-center justify-between py-3 px-6">

        <div className="flex items-center gap-2">
          <img
            src="https://karnatakatourism.org/_next/static/media/logo.572b10f4.svg"
            alt="Logo"
            className="h-12"
          />
        </div>

        <ul className="hidden md:flex gap-10 text-lg font-primary">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="hover:text-[#004D40] transition"
                 onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
  to="/Login"
  className="border-2 border-[#004D40] text-[#004D40] px-4 py-1 rounded-full hover:bg-[#004D40] hover:text-white transition"
>
  {navConstants.TEXT}
</Link>

        <button
          className="md:hidden text-3xl text-[#004D40]"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block text-lg text-gray-700 hover:text-[#004D40] transition"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <button className="w-full border-2 border-[#004D40] text-[#004D40] py-2 rounded-full hover:bg-[#004D40] hover:text-white transition">
            {}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
