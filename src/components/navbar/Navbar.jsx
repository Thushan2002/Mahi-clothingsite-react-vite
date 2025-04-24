import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Frontend_Assets/logo.png";
import cart from "../../assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Shopzy logo" />
        <p>SHOPZY</p>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        {["shop", "men", "women", "kids"].map((item) => (
          <li
            key={item}
            style={{ color: `${menu === item ? "#171717" : "#626262"}` }}
            onClick={() => {
              setMenu(item);
              closeMenu();
            }}>
            <Link
              className="custom-link"
              to={`/${item === "shop" ? "" : item + "s"}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="login-cart">
        <Link className="custom-link" to={"/login"}>
          <button>Log in</button>
        </Link>
        <Link className="custom-link" to="/cart">
          <img src={cart} alt="Cart" />
        </Link>
        <p className="cart-count">{getTotalCartItems()}</p>
      </div>
    </div>
  );
};

export default Navbar;
