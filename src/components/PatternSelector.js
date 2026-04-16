// src/components/PatternSelector.js
import React from "react";

const PatternSelector = ({ patterns, selected, onChange }) => {
  return (
    <div>
      <label>Select Pattern: </label>
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        <option value="">-- Select --</option>
        {patterns.map((pattern) => (
          <option key={pattern} value={pattern}>
            {pattern}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PatternSelector;
