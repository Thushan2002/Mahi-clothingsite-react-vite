import React, { useState, useEffect } from "react";
import "./Loginsignup.css";
import login_img from "../../assets/Frontend_Assets/login_img.png";
import signup_img from "../../assets/Frontend_Assets/signup_img.png"; // You'll need to add a signup image

const Loginsignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Trigger transition animation when state changes
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [state]);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("login", formData);
  };

  const signUp = async () => {
    console.log("signup", formData);
  };

  const handleStateChange = (newState) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setState(newState);
    }, 250);
  };

  return (
    <div
      className={`loginSignup ${
        state === "Login" ? "login-layout" : "signup-layout"
      } ${isTransitioning ? "transitioning" : ""}`}>
      <div className="side-img">
        <img
          src={state === "Login" ? login_img : signup_img}
          alt={
            state === "Login" ? "Login illustration" : "Sign up illustration"
          }
          className={isTransitioning ? "fade" : ""}
        />
      </div>
      <div
        className={`loginSignup-container ${isTransitioning ? "slide" : ""}`}>
        <h1>{state}</h1>
        <div className="loginSignup-fields">
          {state === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your Name"
              name="username"
              value={formData.username}
              onChange={changeHandler}
            />
          ) : null}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Your Email"
          />
          <input
            type="password"
            placeholder="Your Password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
        </div>
        <button
          onClick={state === "Sign Up" ? signUp : login}
          className="submit-btn">
          {state === "Sign Up" ? "Create Account" : "Continue"}
        </button>
        <div className="loginSignup-switch">
          {state === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <span
                className="state-switch"
                onClick={() => handleStateChange("Login")}>
                Log In
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <span
                className="state-switch"
                onClick={() => handleStateChange("Sign Up")}>
                Sign Up
              </span>
            </p>
          )}
        </div>
        {state === "Sign Up" && (
          <div className="loginSignup-agree">
            <input type="checkbox" name="agree" id="agree" />
            <label htmlFor="agree">
              By continuing, I agree to the terms and conditions.
            </label>
          </div>
        )}
        <div className="login-options">
          <div className="divider">
            <span>Or continue with</span>
          </div>
          <div className="social-login">
            <button className="social-btn google">Google</button>
            <button className="social-btn facebook">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
