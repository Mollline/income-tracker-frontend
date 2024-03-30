import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
// const [data, setData] = useState([]);

const categories = ["Food", "Shopping", "Bills", "Clothing"];
const expenses = [300, 50, 100, 200, ];
const colors = ["#1C64F2", "#E74694", "#FDBA8C", `#16BDCA`];

const sum = expenses.reduce((a, b) => a + b, 0);

const dataSet = {
    labels: categories,
    datasets: [
        {
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
export const PieChartComponent = ({transactions, setTransactions}) => {
    console.log("awefsdcafew")
    return (
        Dashboard(),
        Labels()
    )
}
function Dashboard() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "588px",
                borderRadius: "12px",
                height:'284px',
            }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 20px",
                    height:'56px'
                }}>
                <p>Total: {sum}$</p>
            </div>
            <div
                style={{
                    width: "100%",
                    backgroundColor: "#F5F5F5",
                    height: "1px",
                    margin: "10px 0",
                }}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                <Doughnut
                    data={dataSet}
                    options={options}
                    style={{ maxHeight: "170px", maxWidth: "170px" }}
                />
                <Labels />
            </div>
        </div>
    );
}

const Labels = () => {
    return (
        <div>
            {categories.map((category, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center" }}>
                    <div
                        style={{ display: "flex", alignItems: "center", width: "150px" }}>
                        <div
                            style={{
                                width: "20px",
                                height: "20px",
                                backgroundColor: colors[index],
                                margin: "5px",
                                borderRadius: "50%",
                            }}
                        />
                        <p style={{ marginRight: "10px" }}>{category}</p>
                    </div>
                    <div style={{ width: "100px" }}>{expenses[index]}$</div>
                    <div style={{ width: "100px" }}>{(expenses[index] * 100) / sum}%</div>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;