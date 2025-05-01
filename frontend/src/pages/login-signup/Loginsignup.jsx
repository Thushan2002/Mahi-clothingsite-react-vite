import React, { useState } from "react";
import "./Loginsignup.css";

const Loginsignup = () => {
  const [state, setState] = useState("Login");

  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>{state}</h1>
        <div className="loginSignup-fields">
          {state === "Sign Up" ? (
            <input type="text" placeholder="Your Name" />
          ) : null}
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Your Password" />
        </div>
        <button>{state === "Sign Up" ? "Sign Up" : "Log In"}</button>
        {state === "Sign Up" ? (
          <p className="loginSignup-login">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Log In</span>
          </p>
        ) : (
          <p className="loginSignup-login">
            Don't have an account?{" "}
            <span onClick={() => setState("Sign Up")}>Sign Up</span>
          </p>
        )}

        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms and conditions.</p>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
