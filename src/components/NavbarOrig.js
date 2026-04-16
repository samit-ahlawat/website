import React, { useState } from "react";

const Navbar = ({ setActiveView }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleAppsClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleTechnicalPatternsClick = () => {
    setActiveView("dashboard");
    setShowDropdown(false);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Samit Ahlawat</h1>

      <ul className="nav-links">
        <li className="dropdown">
          <span onClick={handleAppsClick} style={{ cursor: "pointer" }}>
            Apps
          </span>

          {showDropdown && (
            <ul className="dropdown-menu">
              <li onClick={handleTechnicalPatternsClick}>
                Technical Patterns
              </li>
            </ul>
          )}
        </li>

        <li onClick={() => setActiveView("dashboard")}>Technical Patterns</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;
