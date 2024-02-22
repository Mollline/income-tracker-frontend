// components/Labels.tsx
import React from "react";

interface LabelsProps {
  categories: string[];
  expenses: number[];
  colors: string[];
  sum: number;
}

const Labels: React.FC<LabelsProps> = ({ categories, expenses, colors, sum }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", width: "150px" }}>
            <div style={{ width: "20px", height: "20px", backgroundColor: colors[index], margin: "5px", borderRadius: "50%" }} />
            <p style={{ marginRight: "10px" }}>{category}</p>
          </div>
          <div style={{ width: "100px" }}>{expenses[index]}$</div>
          <div style={{ width: "100px" }}>{(expenses[index] * 100) / sum}%</div>
        </div>
      ))}
    </div>
  );
};

export default Labels;
