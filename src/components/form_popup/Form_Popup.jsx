import React, { useState } from "react";
import "./form_popup.css";

const Form_Popup = ({ setShowForm }) => {
  const [activeBox, setActiveBox] = useState("login");

  return (
    <div
      style={{ width: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <div className="blur-bg-overlay"></div>

      <div className="form-popup">
        <span
          className="close-btn material-symbols-rounded"
          style={{ cursor: "pointer" }}
          onClick={() => setShowForm(false)}
        >
          x
        </span>

        {activeBox === "login" && (
          <div className="form-box login">
            <div className="form-details">
              <h2>Welcome Back</h2>
              <p>
                Please log in using your personal information to stay connected
                with us.
              </p>
            </div>
            <div className="form-content">
              <h2>LOGIN</h2>
              <form action="#">
                <div className="input-field">
                  <input type="text" required />
                  <label>Email</label>
                </div>
                <div className="input-field">
                  <input type="password" required />
                  <label>Password</label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
                <button type="submit">Log In</button>
              </form>
              <div className="bottom-link">
                Don't have an account?
                <a
                  href="#"
                  id="signup-link"
                  onClick={() => setActiveBox("registration")}
                >
                  Signup
                </a>
              </div>
            </div>
          </div>
        )}

        {activeBox === "registration" && (
          <div className="form-box registration">
            <div className="form-details">
              <h2>Create Account</h2>
              <p>
                To become a part of our community, please sign up using your
                personal information.
              </p>
            </div>
            <div className="form-content">
              <h2>SIGN UP</h2>
              <form action="#">
                <div className="input-field">
                  <input type="text" required />
                  <label>Enter your email</label>
                </div>
                <div className="input-field">
                  <input type="password" required />
                  <label>Create password</label>
                </div>
                <div className="policy-text">
                  <input type="checkbox" id="policy" />
                  <label htmlFor="policy">
                    I agree the
                    <a href="#" className="option">
                      Terms & Conditions
                    </a>
                  </label>
                </div>
                <button type="submit">Sign Up</button>
              </form>
              <div className="bottom-link">
                Already have an account?
                <a
                  href="#"
                  id="login-link"
                  onClick={() => setActiveBox("login")}
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form_Popup;
