import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Loginandsignup.css";

function Loginandsignup() {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  // Toggle between login and signup forms
  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form reload
    if (!isSignup) {
      // Perform login logic here (e.g., API call)
      navigate("/home"); // Navigate to /home after login
    } else {
      // Perform signup logic here
      console.log("Sign-up form submitted.");
    }
  };

  return (
    <div className="login-body">
      <div className="left-body">
        <video
          src="https://cdn.pixabay.com/video/2024/03/30/206173_tiny.mp4"
          autoPlay
          loop
          muted
          className="video-background"
          disablePictureInPicture
          playsInline
        ></video>
      </div>
      <div className="right-body">
        <div className="login-container">
          <h2>{isSignup ? "Sign Up" : "Login"}</h2>
          <form>
            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Email:
              </label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <label htmlFor="password" className="input-label">
                Password:
              </label>
              <div className="password-container">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {isSignup && (
              <div className="input-group">
                <label htmlFor="confirm-password" className="input-label">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                />
              </div>
            )}

            {!isSignup && (
              <button className="login-button" type="submit"><Link to="/home">
                Login
              </Link></button>
            )}

            {isSignup && (
              <button type="submit" className="login-button">
                Sign Up
              </button>
            )}

            <button type="button" className="google-signin-button">
              {isSignup ? "Sign up with Google" : "Sign in with Google"}
            </button>

            <div className="signup-link">
              <p>
                {isSignup
                  ? "Already have an account? "
                  : "Don't have an account? "}
                <a href="#!" onClick={toggleForm}>
                  {isSignup ? "Login" : "Sign Up"}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginandsignup;
