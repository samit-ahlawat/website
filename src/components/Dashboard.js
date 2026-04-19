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
  double_top:   
      "A double top is a bearish technical reversal pattern that signals the end of an uptrend and a potential shift to a downtrend. It resembles the letter M, featuring two consecutive peaks at similar price levels separated by a moderate trough (the neckline). It indicates that buyers have failed twice to push prices higher, signaling exhaustion and increased selling pressure",
  double_bottom:
      "A double bottom pattern is a bullish technical analysis reversal pattern, forming a W shape on a price chart after a downtrend. It consists of two distinct, consecutive lows at roughly the same price level, suggesting that selling pressure is exhausted and a new uptrend is beginning. It indicates a shift from a bearish to a bullish market sentiment.",
};

const Dashboard = () => {
  const [pattern, setPattern] = useState("");
  const [datasets, setDatasets] = useState([]);

  // manually define available patterns
  const patterns = ["cup_and_handle", "double_top", "double_bottom"];

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
      <p style={{ maxWidth: "600px", color: "#ccc" }}>Technical patterns are price patterns in security prices that presage future price changes. They can be grouped into two categories: bullish and bearish. Patterns observed in end-of-day security prices of the 30 components of the Dow Jones Index observed over past 5 years are displayed below. If a security has more than one occurrence of a pattern, the most recent occurrence is shown.</p>   
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
