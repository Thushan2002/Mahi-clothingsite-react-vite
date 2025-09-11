import React from "react";
import "./Title.css";

const Title = ({ title, size, color }) => {
  return (
    <div>
      <p
        style={{ color: color }}
        className={`title ${
          size === "sm" ? "small" : size === "md" ? "medium" : "large"
        }`}>
        {title}
      </p>
    </div>
  );
};

export default Title;
