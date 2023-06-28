import React from "react";

const MenuNav = () => {
  return (
    <ul className="flex flex-col absolute top-10 inset-x-0 bg-slate-200 z-10">
      <li className="px-2 py-1 active:bg-cyan-100 hover:bg-cyan-300 transition duration-[400ms] ease-in-out">
        <a>Home</a>
      </li>
      <li className="px-2 py-1 active:bg-cyan-100 hover:bg-cyan-300 transition duration-[300ms] ease-in-out">
        <a>Portfolio</a>
      </li>
      <li className="px-2 py-1 active:bg-cyan-100 hover:bg-cyan-300 transition duration-[400ms] ease-in-out">
        <a>About</a>
      </li>
    </ul>
  );
};

export default MenuNav;
