import React, { useState } from "react";
import { FiMail, FiSend, FiCheck } from "react-icons/fi";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubscribed(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }, 1500);
  };

  return (
    <div className="news-letter">
      <div className="news-letter-content">
        <div className="news-letter-icon">
          <FiMail />
        </div>

        <h1>Exclusive Offers Await!</h1>
        <p>
          Subscribe to our newsletter and be the first to receive special deals,
          new product updates, and insider tips.
        </p>

        {subscribed ? (
          <div className="success-message">
            <FiCheck className="success-icon" />
            <span>Thank you for subscribing! Check your email.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="news-letter-form">
            <div className="input-container">
              <FiMail className="input-icon" />
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className={`subscribe-btn ${isLoading ? "loading" : ""}`}
              disabled={isLoading}>
              {isLoading ? (
                <div className="spinner"></div>
              ) : (
                <>
                  <span>Subscribe</span>
                  <FiSend className="send-icon" />
                </>
              )}
            </button>
          </form>
        )}

        <div className="privacy-note">
          We respect your privacy. Unsubscribe at any time.
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
