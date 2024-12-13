import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./About.css";

const About = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="about-us-page-con">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
       Back
      </button>

      {/* Header Section */}
      <header className="header-con">
        <h1 className="header-title">About Us</h1>
      </header>

      {/* Main Content Section */}
      <section className="about-section-con">
        <h2 className="section-title">Who Are We?</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              At CancerDetect, we are committed to revolutionizing healthcare by focusing on early cancer detection and empowering individuals to take charge of their health. Our innovative solutions combine cutting-edge technology and scientific research to provide accurate, reliable, and accessible diagnostic tools.
            </p>
            <ul>
              <li>Innovative AI-powered diagnostics</li>
              <li>Collaborative research with global healthcare leaders</li>
              <li>Accessible and patient-centric services</li>
            </ul>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdrpz-CiFyc-6ctHt6dp2zdaDyY7poThFO0K8cZeOkTnCcN9MoLyOTyYfamdslUbc4B10&usqp=CAU"
            alt="Team working on cancer detection solutions"
            className="about-image"
          />
        </div>
        <div className="mission-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            To save lives through advanced technology, enabling early cancer detection, improving survival rates, and enhancing quality of life.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;