import React from "react";
import "./Shop.css";
import Hero from "../../components/hero/Hero";
import Popular from "../../components/popular/Popular";
import Offer from "../../components/offer/Offer";
import NewCollections from "../../components/newCollections/NewCollections";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
    </div>
  );
};

export default Shop;
