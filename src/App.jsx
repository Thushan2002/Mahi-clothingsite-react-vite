import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import Shopcategory from "./pages/shop/Shopcategory";
import Product from "./pages/product/Product";
import Loginsignup from "./pages/login-signup/Loginsignup";
import Footer from "./components/footer/Footer";
import men_banner from "./assets/Frontend_Assets/banner_mens.png";
import women_banner from "./assets/Frontend_Assets/banner_women.png";
import kid_banner from "./assets/Frontend_Assets/banner_kids.png";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<Shopcategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<Shopcategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<Shopcategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Loginsignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
