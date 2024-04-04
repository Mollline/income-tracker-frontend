import React, { Dispatch, SetStateAction } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { TransactionWithId } from "./addRecord";

ChartJS.register(ArcElement, Tooltip, Legend);
// const [data, setData] = useState([]);
type ChartProps = {
    transactions: TransactionWithId[]
    setExpense:Dispatch<SetStateAction<number>>
}
export const ExpensePieChart = ({ transactions, setExpense }: ChartProps) => {
    console.log(transactions)
    const food = transactions.reduce((total, transaction) => {
        if (transaction.transactionType === 'expense' && transaction.category === "food") {
            return total + transaction.amount;
        } else {
            return total
        }
    }, 0)
    const shopping = transactions.reduce((total, transaction) => {
        if (transaction.transactionType === 'expense' && transaction.category === "shopping") {
            return total + transaction.amount;
        } else {
            return total
        }
    }, 0)
    const bills = transactions.reduce((total, transaction) => {
        if (transaction.transactionType === 'expense' && transaction.category === "bills") {
            return total + transaction.amount;
        } else {
            return total
        }
    }, 0)
    const clothing = transactions.reduce((total, transaction) => {
        if (transaction.transactionType === 'expense' && transaction.category === "clothing") {
            return total + transaction.amount;
        } else {
            return total
        }
    }, 0)

    const categories = ["Food", "Shopping", "Bills", "Clothing"];
    const expenses = [`${food}`, `${shopping}`, `${bills}`, `${clothing}`,];
    const colors = ["#1C64F2", "#E74694", "#FDBA8C", `#16BDCA`];
    interface expense {
        a:number;
        b:number
      }
    const sum = expenses.reduce((a, b):expense => a - b, 0);
    setExpense(sum)
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
    return (<div>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "588px",
                borderRadius: "12px",
                height: '284px',
            }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 20px",
                    height: '56px'
                }}>
                <h1 style={{color:"#F54949",fontSize:"20px"}}>Total expense: {sum} MNT</h1>
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
                <Labels categories={categories} colors={colors} expenses={expenses} sum={sum} />
            </div>
        </div>
    </div>
    )
}

const Labels = ({ categories, colors, expenses, sum }: { categories: string[], colors: string[], expenses: number[], sum: number }) => {
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
                    <div style={{ width: "100px", color: "#F54949" }}>{expenses[index]} MNT</div>
                    <div style={{ width: "100px" }}>{Math.round((expenses[index] * -100) / sum)}%</div>
                </div>
            ))}
        </div>
    );
};

export default ExpensePieChart;