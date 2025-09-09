import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/Frontend_Assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import {
  FaBars,
  FaTimes,
  FaShoppingBag,
  FaUser,
  FaSearch,
} from "react-icons/fa";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Get current category from URL
  const getCurrentCategory = () => {
    const path = location.pathname;
    if (path === "/") return "shop";
    if (path.startsWith("/mens")) return "men";
    if (path.startsWith("/womens")) return "women";
    if (path.startsWith("/kids")) return "kid";
    return "shop";
  };

  return (
    <>
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={logo} alt="logo" />
          </Link>

          <div className={`search-bar ${searchOpen ? "active" : ""}`}>
            <input type="text" placeholder="Search products..." />
            <button className="search-btn">
              <FaSearch size={14} />
            </button>
          </div>

          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            {["shop", "men", "women", "kid"].map((item) => (
              <li key={item} onClick={closeMenu}>
                <Link
                  className={`nav-link ${
                    getCurrentCategory() === item ? "active" : ""
                  }`}
                  to={`/${item === "shop" ? "" : item + "s"}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              className="icon-btn search-toggle"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search">
              <FaSearch size={18} />
            </button>

            <Link to="/login" className="icon-btn" aria-label="Account">
              <FaUser size={18} />
            </Link>

            <Link to="/cart" className="icon-btn cart-btn" aria-label="Cart">
              <FaShoppingBag size={18} />
              {getTotalCartItems() > 0 ? (
                <span className="cart-count">{getTotalCartItems()}</span>
              ) : (
                <span className="cart-count">0</span>
              )}
            </Link>

            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
