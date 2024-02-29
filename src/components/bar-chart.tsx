import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
    labels,
    datasets: [
        {
            label: "Income",
            data: labels.map(() => {
                return Math.random() * 3000000;
            }),
            backgroundColor: "#84CC16",
            borderRadius: "30",
        },
        {
            label: "Expense",
            data: labels.map(() => {
                return Math.random() * 3000000;
            }),
            backgroundColor: "#F97316",
            borderRadius: "30",
        },
    ],
};


export const BarChartComponent = () => {
    return (
        <div>
            <div style={{width:'588px',height:'56px',fontSize:'16px',fontWeight:'bold',display:'flex',alignItems:'center',padding:'0px 24px',borderBottom:'1px solid #E2E8F0'}}>
                Income - Expense
            </div>
            <div style={{width: "588px",height:"226px",display:'flex',alignItems:"center",justifyContent:'center'}}>
                <Bar style={{ height: '162px', width: '542px' }}
                    data={data}
                    options={{
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                    }}
                /></div>
        </div>
    );
}