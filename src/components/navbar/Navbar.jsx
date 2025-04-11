import React, { use, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Frontend_Assets/logo.png";
import cart from "../../assets/Frontend_Assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <p>SHOPZY</p>
      </div>
      <ul className="nav-menu">
        <li
          style={{ color: `${menu === "shop" ? "#171717" : "#626262"}` }}
          onClick={() => {
            setMenu("shop");
          }}>
          Shop
        </li>
        <li
          style={{ color: `${menu === "men" ? "#171717" : "#626262"}` }}
          onClick={() => {
            setMenu("men");
          }}>
          Men
        </li>
        <li
          style={{ color: `${menu === "women" ? "#171717" : "#626262"}` }}
          onClick={() => {
            setMenu("women");
          }}>
          Women
        </li>
        <li
          style={{ color: `${menu === "kids" ? "#171717" : "#626262"}` }}
          onClick={() => {
            setMenu("kids");
          }}>
          Kids
        </li>
      </ul>
      <div className="login-cart">
        <button>Log in</button>
        <img src={cart} alt="" />
        <p className="cart-count">0</p>
      </div>
    </div>
  );
};

export default Navbar;
