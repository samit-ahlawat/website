import React from "react";

const Navbar = ({ activeView, setActiveView }) => {

  return (
    <nav className="navbar">
      <h1 className="logo">Samit Ahlawat</h1>

      <ul className="nav-links">
        <li 
          className={activeView === "dashboard" ? "active" : ""}
          onClick={() => setActiveView("dashboard")}
        >
          Technical Patterns
        </li>
        <li 
          className={activeView === "earnings" ? "active" : ""}
          onClick={() => setActiveView("earnings")}
        >
          Earnings Summary
        </li>
        <li 
          className={activeView === "profile" ? "active" : ""}
          onClick={() => setActiveView("profile")}
        >
          Profile
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
