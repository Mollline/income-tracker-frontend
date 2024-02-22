// components/BarChartComponent.tsx
import React from "react";
import dynamic from 'next/dynamic';
import { Bar } from "react-chartjs-2";

const Labels = dynamic(() => import('./Labels'), { ssr: false });

const categories = ["Bills", "Food", "Shopping", "Insurance", "Clothing"];
const expenses = [300, 50, 100, 200, 150];
const colors = ["#1C64F2", "#E74694", "#FDBA8C", "#16BDCA", "#F2901C"];

const sum = expenses.reduce((a, b) => a + b, 0);

const dataSet = {
  labels: categories,
  datasets: [
    {
      label: "Expenses",
      data: expenses,
      backgroundColor: colors,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const BarChartComponent: React.FC = () => {
  return (
    <div style={{ width: "588px", borderRadius: "12px", border: "1px solid #E5E5E5" }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: "56px" }}>
        <p>Total: {sum}$</p>
      </div>
      <div style={{ width: "100%", backgroundColor: "#F5F5F5", height: "1px", margin: "10px 0" }} />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Bar data={dataSet} options={options} style={{ maxHeight: "170px", maxWidth: "170px" }} />
        <Labels categories={categories} expenses={expenses} colors={colors} sum={sum} />
      </div>
    </div>
  );
};

export default BarChartComponent;
