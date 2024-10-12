import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between  px-16 max-w-full mx-auto border-b-2 bg-slate-200 ">
      <div className="">
        <Link to={"/"}>
          <img
            className="w-20 h-100 rounded-full"
            src="https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png"
            alt="Logo"
          />
        </Link>
      </div>
      <ul className="flex justify-between w-52 ">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/authentication"}>
          <li>SignUP</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
