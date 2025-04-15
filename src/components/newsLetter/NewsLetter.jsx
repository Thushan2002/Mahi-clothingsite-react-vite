import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1>Get Exclusive Offers to your Email</h1>
      <p>Subscribe to Our Newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter your Email.." />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
