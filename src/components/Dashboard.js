import React, { useState } from "react";
import PatternSelector from "./PatternSelector";
import { fetchPatternData } from "../utils/fetchData";
import FancyCursor from "./FancyCursor";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Brush,
} from "recharts";


const patternDescriptions = {
  cup_and_handle:
    "The Cup and Handle is a bullish continuation pattern that resembles a rounded bottom (cup) followed by a consolidation phase (handle). It typically signals a breakout to the upside after the handle forms.",
};

const Dashboard = () => {
  const [pattern, setPattern] = useState("");
  const [datasets, setDatasets] = useState([]);

  // manually define available patterns
  const patterns = ["cup_and_handle"];

  const handleChange = async (selectedPattern) => {
    setPattern(selectedPattern);

    if (selectedPattern) {
      const data = await fetchPatternData(selectedPattern);
      setDatasets(data);
    } else {
      setDatasets([]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Technical Pattern Viewer</h1>

      <PatternSelector
        patterns={patterns}
        selected={pattern}
        onChange={handleChange}
      />

      {pattern && (
        <div style={{ marginTop: "15px" }}>
        <h3 style={{ marginBottom: "5px" }}>
            {pattern.replaceAll("_", " ")}
        </h3>
        <p style={{ maxWidth: "600px", color: "#ccc" }}>
            {patternDescriptions[pattern]}
        </p>
        </div>
      )}

      <div className="chart-grid">
        {datasets.map((dataset) => (
          <div>
          <h2>{dataset.name}</h2>        
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataset.data}>
                <CartesianGrid stroke="#333" strokeDasharray="3 3" />
                <XAxis dataKey="date" stroke="#aaa" />
                <YAxis stroke="#aaa" domain={['dataMin', 'dataMax']} />
                <Tooltip
                    contentStyle={{
                    background: "rgba(0,0,0,0.7)",
                    border: "1px solid #333",
                    backdropFilter: "blur(10px)",
                    }}
                />
                <Line
                type="monotone"
                dataKey="price"
                stroke="#00f5d4"
                strokeWidth={3}
                dot={false}
                isAnimationActive={true}
                />
                <Brush
                  dataKey="date"
                  height={30}
                  stroke="#00f5d4"
                  travellerWidth={10}
                />    
            </LineChart>
          </ResponsiveContainer>
          </div>  
        ))}
      </div>
      <FancyCursor />
    </div>
  );
};

export default Dashboard;
