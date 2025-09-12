import React from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import "./Offer.css";
import exclusive_image from "../../assets/Frontend_Assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="offer-container">
      <div className="offer">
        <div className="offer-content">
          <div className="offer-left">
            <div className="offer-badge">
              <FiCheckCircle className="badge-icon" />
              <span>Limited Time Offer</span>
            </div>
            <h1>Exclusive Deals</h1>
            <h1>Just For You</h1>
            <p>ONLY ON OUR BEST SELLING PRODUCTS</p>
            <ul className="offer-features">
              <li>
                <FiCheckCircle /> Special discounts up to 50% off
              </li>
              <li>
                <FiCheckCircle /> Premium quality guaranteed
              </li>
              <li>
                <FiCheckCircle /> Free shipping on all orders
              </li>
            </ul>
            <button className="offer-button">
              <span>Shop Now</span>
              <FiArrowRight className="arrow-icon" />
            </button>
          </div>
          <div className="offer-right">
            <div className="image-container">
              <img src={exclusive_image} alt="Exclusive offer" />
              <div className="floating-discount">
                <span>UP TO</span>
                <span className="discount-percent">50% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
