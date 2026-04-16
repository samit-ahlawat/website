import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import "./styles.css";

function App() {
  const [activeView, setActiveView] = useState("home");

  return (
    <div className="app">
      <Navbar setActiveView={setActiveView} />

      {activeView === "dashboard" && <Dashboard />}
    </div>
  );
}

export default App;
