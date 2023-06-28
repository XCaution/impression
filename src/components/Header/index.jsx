import React, { useState } from "react";
import { MenuNav } from "../index";

const ToggleButton = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => setToggle(!toggle);
  return (
    <button className="text-[22px] font-Montserrat font-bold px-10 relative" onClick={handleClick}>
      Menu{toggle ? "" : <MenuNav />}
    </button>
  );
};

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex justify-between px-4 py-2">
      <a className="cursor-pointer">
        <span className="text-[22px] font-Montserrat font-bold">IMPRESSION</span>
      </a>
      <ToggleButton />
    </div>
  );
};

export default Header;
