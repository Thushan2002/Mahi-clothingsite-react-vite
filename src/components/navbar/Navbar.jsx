import React, { use, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Frontend_Assets/logo.png";
import cart from "../../assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";

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
          <Link className="custom-link" to={"/"}>
            Shop
          </Link>
        </li>
        <li
          style={{ color: `${menu === "men" ? "#171717" : "#626262"}` }}
          onClick={() => {
            setMenu("men");
          }}>
          <Link className="custom-link" to={"/mens"}>
            Men
          </Link>
        </li>
        <li
          style={{ color: `${menu === "women" ? "#171717" : "#626262"}` }}
          onClick={() => {
            setMenu("women");
          }}>
          <Link className="custom-link" to={"/womens"}>
            Women
          </Link>
        </li>
        <li
          style={{ color: `${menu === "kids" ? "#171717" : "#626262"}` }}
          onClick={() => {
            setMenu("kids");
          }}>
          <Link className="custom-link" to={"/kids"}>
            Kids
          </Link>
        </li>
      </ul>
      <div className="login-cart">
        <Link className="custom-link" to={"/login"}>
          <button>Log in</button>
        </Link>
        <Link className="custom-link" to="/cart">
          <img src={cart} alt="" />
        </Link>
        <p className="cart-count">0</p>
      </div>
    </div>
  );
};

export default Navbar;
