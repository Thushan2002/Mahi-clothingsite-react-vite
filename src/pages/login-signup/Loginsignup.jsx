import React from "react";
import "./Loginsignup.css";

const Loginsignup = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Your Password" />
        </div>
        <button>Sign Up</button>
        <p className="loginSignup-login">
          Already have an account? <span>Log In</span>
        </p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms and conditions.</p>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
