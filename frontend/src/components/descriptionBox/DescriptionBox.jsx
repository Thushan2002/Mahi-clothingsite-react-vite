import React, { useState } from "react";
import "./DescriptionBox.css";
import { FaStar, FaRegStar, FaChevronDown, FaChevronUp } from "react-icons/fa";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [expanded, setExpanded] = useState(false);

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      date: "2023-10-15",
      comment:
        "Absolutely love this product! The quality is exceptional and it fits perfectly.",
    },
    {
      id: 2,
      name: "James K.",
      rating: 4,
      date: "2023-10-10",
      comment:
        "Great product, comfortable material. Would recommend to others.",
    },
    {
      id: 3,
      name: "Emma L.",
      rating: 5,
      date: "2023-10-05",
      comment:
        "This is my second purchase. The quality remains consistent and the style is timeless.",
    },
  ];

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) =>
      i < rating ? (
        <FaStar key={i} className="star filled" />
      ) : (
        <FaRegStar key={i} className="star" />
      )
    );
  };

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div
          className={`descriptionbox-nav-box ${
            activeTab === "description" ? "active" : ""
          }`}
          onClick={() => setActiveTab("description")}>
          Description
        </div>
        <div
          className={`descriptionbox-nav-box ${
            activeTab === "reviews" ? "active" : ""
          }`}
          onClick={() => setActiveTab("reviews")}>
          Reviews (122)
        </div>
      </div>

      <div className="descriptionbox-content">
        {activeTab === "description" ? (
          <div className="descriptionbox-description">
            <p>
              A premium quality product designed for comfort and style. Made
              from high-quality materials that ensure durability and
              long-lasting wear. Perfect for everyday use or special occasions.
            </p>

            <div className={`details ${expanded ? "expanded" : ""}`}>
              <h3>Product Details</h3>
              <ul>
                <li>Material: 100% premium cotton</li>
                <li>Care: Machine wash cold, tumble dry low</li>
                <li>Fit: Regular fit, true to size</li>
                <li>Origin: Ethically sourced and manufactured</li>
                <li>Color: As shown in pictures</li>
              </ul>

              <h3>Additional Information</h3>
              <p>
                This product features our latest innovation in fabric
                technology, providing enhanced comfort and breathability. The
                attention to detail in the stitching and finishing makes this a
                standout piece in any wardrobe.
              </p>
            </div>

            <button className="expand-btn" onClick={toggleExpand}>
              {expanded ? (
                <>
                  <span>Show Less</span>
                  <FaChevronUp />
                </>
              ) : (
                <>
                  <span>Show More</span>
                  <FaChevronDown />
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="descriptionbox-reviews">
            <div className="reviews-summary">
              <div className="average-rating">
                <h3>4.8</h3>
                <div className="stars">{renderStars(5)}</div>
                <p>122 reviews</p>
              </div>

              <div className="rating-bars">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="rating-bar">
                    <span className="rating-number">{rating}</span>
                    <FaStar className="star filled" />
                    <div className="bar-container">
                      <div
                        className="bar-fill"
                        style={{ width: `${(rating / 5) * 100}%` }}></div>
                    </div>
                    <span className="rating-count">
                      {Math.round(122 * (rating / 5))}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reviews-list">
              {reviews.map((review) => (
                <div key={review.id} className="review">
                  <div className="review-header">
                    <div className="reviewer">{review.name}</div>
                    <div className="review-date">{review.date}</div>
                  </div>
                  <div className="review-rating">
                    {renderStars(review.rating)}
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}

              <button className="load-more-btn">Load More Reviews</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
