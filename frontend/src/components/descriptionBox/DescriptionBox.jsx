import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
          assumenda, quis alias aperiam delectus nostrum aliquam aspernatur
          tempore, quia sint dolor molestias maiores pariatur maxime, commodi
          laboriosam ducimus excepturi illo!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
