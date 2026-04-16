import React from "react";

const Navbar = ({ setActiveView }) => {

  return (
    <nav className="navbar">
      <h1 className="logo">Samit Ahlawat</h1>

      <ul className="nav-links">
        <li onClick={() => setActiveView("dashboard")}>Technical Patterns</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;
