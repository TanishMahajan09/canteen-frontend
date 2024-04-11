import React from "react";
import pulogo from "../public/pu-logo.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 flex justify-between">
      <div>
        <img src={pulogo} alt="" className="w-12 m-2" />
      </div>
      <ul className="flex justify-end">
        <li
          className="m-2 p-2 cursor-pointer hover:text-gray-500"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </li>
        <li
          className="m-2 p-2 cursor-pointer hover:text-gray-500"
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </li>
        <li
          className="m-2 p-2 cursor-pointer hover:text-gray-500"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login/Sign up
        </li>
        <li
          className="m-2 p-2 cursor-pointer hover:text-gray-500"
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart
        </li>
      </ul>
    </div>
  );
};

export default Header;
