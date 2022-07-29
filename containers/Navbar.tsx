import React, { useState } from "react";
import { images } from "../constants";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex items-center justify-between ">
      <div className="flex items-center justify-center space-x-4 text-2xl font-bold text-black">
        <img src={images.logo.src} alt="" />
        <div className="">Vioni</div>
      </div>
      <Icon
        onClick={handleMenu}
        className="h-8 w-8 cursor-pointer text-black"
        icon="heroicons-solid:menu-alt-3"
      />
      {/* Toggle Menu on Mob devices */}
      {open && (<div className="fixed right-4 top-4 flex w-full max-w-sm rounded-lg bg-primary p-6 shadow-lg">
        <button className="absolute top-4 right-4 flex items-center justify-center ">
          <Icon
            onClick={handleMenu}
            className="h-6 w-6 text-white"
            icon="eva:close-fill"
          />
        </button>
        <ul className="space-y-6 font-bold text-white">
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div> ) }
    </nav>
  );
};

export default Navbar;
