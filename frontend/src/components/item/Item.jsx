import React, { useState } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";

const Item = (props) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const discountPercentage = Math.round(
    ((props.old_price - props.new_price) / props.old_price) * 100
  );

  return (
    <div className="item-card">
      <Link to={`/product/${props.id}`} className="item-link">
        <div className="item-image-container">
          <div className={`image-placeholder ${imageLoaded ? "loaded" : ""}`}>
            <img src={props.image} alt={props.name} onLoad={handleImageLoad} />
          </div>

          {discountPercentage > 0 && (
            <div className="discount-badge">-{discountPercentage}%</div>
          )}

          <div className="item-actions">
            <button
              className="action-btn wishlist-btn"
              onClick={handleWishlistToggle}
              aria-label="Add to wishlist">
              <FaHeart className={isWishlisted ? "wishlisted" : ""} />
            </button>
            <button
              className="action-btn quickview-btn"
              aria-label="Quick view">
              <FaEye />
            </button>
            <button className="action-btn cart-btn" aria-label="Add to cart">
              <FaShoppingCart />
            </button>
          </div>
        </div>

        <div className="item-info">
          <h3 className="item-name">{props.name}</h3>

          <div className="item-prices">
            <div className="new-price">
              Rs. {props.new_price.toLocaleString()}
            </div>
            {props.old_price > props.new_price && (
              <div className="old-price">
                Rs. {props.old_price.toLocaleString()}
              </div>
            )}
          </div>

          <div className="item-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < 4 ? "star filled" : "star"}>
                  ★
                </span>
              ))}
            </div>
            <span className="rating-count">(24)</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
