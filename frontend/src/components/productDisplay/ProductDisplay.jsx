import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../context/ShopContext";
import { FaStar, FaRegStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const images = [product.image, product.image, product.image, product.image]; // In a real app, these would be different images

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const navigateImage = (direction) => {
    if (direction === "prev") {
      setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          {images.map((img, index) => (
            <div
              key={index}
              className={`thumbnail ${selectedImage === index ? "active" : ""}`}
              onClick={() => handleThumbnailClick(index)}>
              <img src={img} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="productDisplay-img-container">
          <div className="image-navigation">
            <button
              className="nav-btn prev"
              onClick={() => navigateImage("prev")}>
              <IoIosArrowBack />
            </button>
            <button
              className="nav-btn next"
              onClick={() => navigateImage("next")}>
              <IoIosArrowForward />
            </button>
          </div>
          <img
            className="productDisplay-main-img"
            src={images[selectedImage]}
            alt={product.name}
          />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-reviews">
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) =>
              star <= 3 ? (
                <FaStar key={star} className="star-icon" />
              ) : (
                <FaRegStar key={star} className="star-icon" />
              )
            )}
            <span>(122 reviews)</span>
          </div>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-price-new">
            Rs.{product.new_price}
          </div>
          <div className="productDisplay-right-price-old">
            Rs.{product.old_price}
          </div>
        </div>
        <div className="productDisplay-right-description">
          A modern, comfortable and stylish choice for everyday wear. This
          product features premium materials and careful craftsmanship for
          lasting quality and perfect fit.
        </div>
        <div className="productDisplay-right-size">
          <h2>Select Size</h2>
          <div className="productDisplay-right-size-select">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className={`size-option ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => handleSizeSelect(size)}>
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="productDisplay-right-actions">
          <button
            className="add-to-cart-btn"
            onClick={() => {
              if (!selectedSize) {
                alert("Please select a size first");
                return;
              }
              addToCart(product.id);
            }}>
            <FaShoppingCart /> ADD TO CART
          </button>
          <button className="wishlist-btn">
            <FaHeart /> WISHLIST
          </button>
        </div>
        <div className="productDisplay-right-details">
          <div className="detail-item">
            <span className="detail-label">Category:</span>
            <span className="detail-value">Women, T-Shirt, Crop Top</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Tags:</span>
            <span className="detail-value">Modern, Latest</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">SKU:</span>
            <span className="detail-value">
              TS{product.id.toString().padStart(4, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
