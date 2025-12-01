import React from "react";
import { menuItems } from "./menuData";

function Navbar() {
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
              <a
                href={item.link}
                className="hover:text-[#004D40] transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">

          <button className="border-2 border-[#004D40] text-[#004D40] px-4 py-1 rounded-full hover:bg-[#004D40] hover:text-white transition">
            Login
          </button>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
