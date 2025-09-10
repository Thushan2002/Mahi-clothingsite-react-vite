import React from "react";
import "./Hero.css";
import arrow_icon from "../../assets/Frontend_Assets/arrow.png";
import hero_image from "../../assets/Frontend_Assets/hero_img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hand-icon-container">
            <p>Welcome to</p>
          </div>
          <h1>THE LATEST COLLECTION</h1>
          <p className="hero-description">
            Discover amazing products at unbeatable prices. Shop now and
            experience the difference.
          </p>
          <div className="hero-cta">
            <button className="hero-btn">
              Shop Now
              <img src={arrow_icon} alt="Arrow" className="arrow-icon" />
            </button>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Brands</span>
              </div>
              <div className="stat">
                <span className="stat-number">2000+</span>
                <span className="stat-label">Products</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={hero_image} alt="Hero" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
