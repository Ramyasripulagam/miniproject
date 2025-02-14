import React, { useState } from "react";
import {
  UserCircle2,
  LogOut,
  History,
  PlayCircle,
  AlertCircle,
  HeartPulse,
  Activity,
  Home,
} from "lucide-react";
import "./Profileicon.css"; // Import the CSS file

function Profileicon() {
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    age: 35,
    email: "john.doe@example.com",
    gender: "Male",
    bloodType: "O+",
    weight: 70,
    height: 175,
  });

  const [riskFactors, setRiskFactors] = useState({
    smoking: false,
    familyHistory: false,
    previousCancer: false,
    radiation: false,
  });

  const [symptoms, setSymptoms] = useState({
    unexplainedWeightLoss: false,
    fatigue: false,
    fever: false,
    pain: false,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");

  const handleRiskFactorChange = (factor) => {
    setRiskFactors((prev) => ({
      ...prev,
      [factor]: !prev[factor],
    }));
  };

  const handleSymptomChange = (symptom) => {
    setSymptoms((prev) => ({
      ...prev,
      [symptom]: !prev[symptom],
    }));
  };

  const getRiskLevel = () => {
    const riskCount = Object.values(riskFactors).filter(Boolean).length;
    if (riskCount >= 3) return { level: "High", color: "text-red-600" };
    if (riskCount >= 1) return { level: "Moderate", color: "text-yellow-600" };
    return { level: "Low", color: "text-green-600" };
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-content">
          <h1 className="sidebar-title">MediScan AI</h1>
          <nav className="sidebar-nav">
            <div className="nav-item" onClick={() => setActiveSection("home")}>
              <Home size={24} />
              <span className="nav-text">Home</span>
            </div>
            <div
              className={`nav-item ${activeSection === "profile" ? "active" : ""}`}
              onClick={() => setActiveSection("profile")}
            >
              <UserCircle2 size={24} />
              <span className="nav-text">Profile</span>
            </div>
            <div
              className={`nav-item ${activeSection === "history" ? "active" : ""}`}
              onClick={() => setActiveSection("history")}
            >
              <History size={24} />
              <span className="nav-text">History</span>
            </div>
            <div className="nav-item">
              <PlayCircle size={24} />
              <span className="nav-text">Start Detection</span>
            </div>
            <div className="nav-item">
              <AlertCircle size={24} />
              <span className="nav-text">Symptoms</span>
            </div>
          </nav>
        </div>
        <div className="sidebar-footer">
          <button className="sign-out-button">
            <LogOut size={20} />
            <span className="sign-out-text">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-container">
          {activeSection === "profile" && (
            <>
              {/* User Details Card */}
              <div className="card">
                <div className="card-header">
                  <div>
                    <h2 className="card-title">Personal Information</h2>
                    <p className="card-subtitle">Manage your profile details</p>
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="edit-button"
                  >
                    {isEditing ? "Save Changes" : "Edit Profile"}
                  </button>
                </div>

                <div className="grid-container">
                  {Object.keys(userDetails).map((key) => (
                    <div key={key}>
                      <label className="input-label">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <input
                        type={typeof userDetails[key] === "number" ? "number" : "text"}
                        value={userDetails[key]}
                        disabled={!isEditing}
                        className="input-field"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk Factors Card */}
              <div className="card">
                <div className="card-header">
                  <HeartPulse className="icon-violet" size={24} />
                  <h3 className="card-title">Risk Factors</h3>
                </div>
                <div className="grid-container">
                  {Object.keys(riskFactors).map((factor) => (
                    <label className="checkbox-label" key={factor}>
                      <input
                        type="checkbox"
                        checked={riskFactors[factor]}
                        onChange={() => handleRiskFactorChange(factor)}
                        className="checkbox"
                      />
                      <span className="checkbox-text">
                        {factor.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="risk-level-container">
                  <p className="risk-level-text">
                    Risk Level:{" "}
                    <span className={`risk-level ${getRiskLevel().color}`}>
                      {getRiskLevel().level}
                    </span>
                  </p>
                </div>
              </div>

              {/* Symptoms Tracking */}
              <div className="card">
                <div className="card-header">
                  <Activity className="icon-violet" size={24} />
                  <h3 className="card-title">Current Symptoms</h3>
                </div>
                <div className="grid-container">
                  {Object.keys(symptoms).map((symptom) => (
                    <label className="checkbox-label" key={symptom}>
                      <input
                        type="checkbox"
                        checked={symptoms[symptom]}
                        onChange={() => handleSymptomChange(symptom)}
                        className="checkbox"
                      />
                      <span className="checkbox-text">
                        {symptom.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeSection === "history" && (
            <div className="card">
              <h2 className="card-title">History</h2>
              <p className="card-subtitle">View your medical history</p>
              {/* Add history content here */}
            </div>
          )}

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stats-card">
              <h3 className="stats-title">Total Users</h3>
              <div className="stats-content">
                <p className="stats-value">0</p>
                <p className="stats-subtext">Registered Today</p>
              </div>
            </div>
            <div className="stats-card">
              <h3 className="stats-title">Detected Cases</h3>
              <div className="stats-content">
                <p className="stats-value">0</p>
                <p className="stats-subtext">Cancer Patients</p>
              </div>
            </div>
          </div>

          {/* Status Card */}
          <div className="card">
            <h3 className="card-title">Detection Status</h3>
            <div className="status-container">
              <p className="status-text">Not checked for Cancer yet!</p>
              <button className="status-button">Start Detection</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profileicon;