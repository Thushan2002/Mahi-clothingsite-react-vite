import React from "react";
import "./Shop.css";
import Hero from "../../components/hero/Hero";
import Popular from "../../components/popular/Popular";
import Offer from "../../components/offer/Offer";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
    </div>
  );
};

export default Shop;
