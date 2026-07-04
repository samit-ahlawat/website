import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Earnings from "./components/Earnings";
import "./styles.css";

function App() {
  const [activeView, setActiveView] = useState("dashboard");

  return (
    <div className="app">
      <Navbar activeView={activeView} setActiveView={setActiveView} />

      {activeView === "dashboard" && <Dashboard />}
      {activeView === "earnings" && <Earnings />}
    </div>
  );
}

export default App;
