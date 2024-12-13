import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Profileicon.css";

function Profileicon() {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    age: 35,
    email: "john.doe@example.com"
  });
  const [activeTab, setActiveTab] = useState("profile"); // Track active tab
  const navigate = useNavigate(); // Initialize the navigate function

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save changes logic here (e.g., make an API call)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Set the active tab
  };

  const handleViewHomeClick = () => {
    navigate("/home"); // Navigate to /home
  };

  return (
    <div className="profile-body">
      <div className="user-profile">
        <aside className="sidebar">
          <h2>User profile</h2>
          <nav>
            <ul>
              <li
                className={activeTab === "profile" ? "active" : ""}
                onClick={() => handleTabClick("profile")}
              >
                Profile
              </li>
              <li
                className={activeTab === "history" ? "active" : ""}
                onClick={() => handleTabClick("history")}
              >
                History
              </li>
              <li><Link to="/checkpage">Start Detect</Link></li>
              <li><Link to="/">Sign Out</Link></li>
            </ul>
          </nav>
          <button className="view-home" onClick={handleViewHomeClick}>
            View Home
          </button>
        </aside>

        <main className="content">
          <header className="header"></header>

          {/* Render based on active tab */}
          {activeTab === "profile" && (
            <section className="user-details">
              <h4>User Details</h4>
              {isEditing ? (
                <div>
                  <label>
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={userDetails.name}
                      onChange={handleInputChange}
                    />
                  </label>
                  <br />
                  <label>
                    Age:
                    <input
                      type="number"
                      name="age"
                      value={userDetails.age}
                      onChange={handleInputChange}
                    />
                  </label>
                  <br />
                  <label>
                    Email:
                    <input
                      type="email"
                      name="email"
                      value={userDetails.email}
                      onChange={handleInputChange}
                    />
                  </label>
                  <br />
                  <button className="edit-button" onClick={handleSaveClick}>
                    Save Changes
                  </button>
                </div>
              ) : (
                <div>
                  <p>Name: {userDetails.name}</p>
                  <p>Age: {userDetails.age}</p>
                  <p>Email: {userDetails.email}</p>
                  <button className="edit-button" onClick={handleEditClick}>
                    Edit Details
                  </button>
                </div>
              )}
            </section>
          )}

          {activeTab === "history" && (
            <section className="history">
              <div className="no-data-box">
                <h4>No Data Available</h4>
                <p>Currently, there is no history data to display.</p>
              </div>
            </section>
          )}

          <section className="stats">
            <div className="stat-box zoom-effect">
              <h4>CANCER DETECTION MODEL</h4>
              <p>Random Forest and Logistic Regression</p>
            </div>

            <div className="stat-box zoom-effect">
              <h4>TOTAL USERS</h4>
              <p>0</p>
              <span>Since Today</span>
            </div>

            <div className="stat-box zoom-effect">
              <h4>CANCER PATIENTS</h4>
              <p>0</p>
              <span>Detected Cases</span>
            </div>
          </section>

          <section className="status">
            <h4>YOU HAVE</h4>
            <div className="status-box">
              <p>Not checked for Cancer yet!</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Profileicon;
