import React, { Dispatch, SetStateAction } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { TransactionWithId } from "./addRecord";

ChartJS.register(ArcElement, Tooltip, Legend);
// const [data, setData] = useState([]);
 type ChartProps = {
    transactions: TransactionWithId[]
    setIncome:Dispatch<SetStateAction<number>>
}
export const IncomePieChart = ({ transactions,setIncome}: ChartProps) => {
    console.log(transactions)
    const food = transactions.reduce((total, transaction) => {
        if (transaction.transactionType === 'income' && transaction.category === "food") {
            return total + transaction.amount;
        } else {
            return total
        }
    }, 0)
    const shopping = transactions.reduce((total, transaction) => {
        if (transaction.transactionType === 'income' && transaction.category === "shopping") {
            return total + transaction.amount;
        } else {
            return total
        }
    }, 0)
    const bills = transactions.reduce((total, transaction) => {
        if (transaction.transactionType === 'income' && transaction.category === "bills") {
            return total + transaction.amount;
        } else {
            return total
        }
    }, 0)
    const clothing = transactions.reduce((total, transaction) => {
        if (transaction.transactionType === 'income' && transaction.category === "clothing") {
            return total + transaction.amount;
        } else {
            return total
        }
    }, 0)

    const categories = ["Food", "Shopping", "Bills", "Clothing"];
    const incomes = [`${food}`, `${shopping}`, `${bills}`, `${clothing}`,];
    const colors = ["#1C64F2", "#E74694", "#FDBA8C", `#16BDCA`];

    const sum = incomes.reduce((a, b) => a - b, 0);
    const sumIncome = sum*-1
    setIncome(sumIncome)
    const dataSet = {
        labels: categories,
        datasets: [
            {
                data: incomes,
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
                <h1 style={{color:"#84CC16",fontSize:"20px"}}>Total income: {sum*-1} MNT</h1>
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
                <Labels categories={categories} colors={colors} incomes={incomes} sum={sum} />
            </div>
        </div>
    </div>
    )
}

const Labels = ({ categories, colors, incomes, sum }: { categories: string[], colors: string[], incomes: number[], sum: number }) => {
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
                    <div style={{ width: "100px", color: "#84CC16" }}>{incomes[index]} MNT</div>
                    <div style={{ width: "100px" }}>{Math.round((incomes[index] * -100) / sum)}%</div>
                </div>
            ))}
        </div>
    );
};
export default IncomePieChart;
// export const IncomePieChart = ({ transactions, setIncome }: ChartProps) => {
//     console.log(transactions);

//     const categoryTotals = transactions.reduce((totals, transaction) => {
//         if (transaction.transactionType === 'income') {
//             totals[transaction.category] = (totals[transaction.category] || 0) + transaction.amount;
//         }
//         return totals;
//     }, {});

//     const categories = Object.keys(categoryTotals);
//     const incomes = Object.values(categoryTotals).map(amount => `${amount}`);
//     const colors = ["#1C64F2", "#E74694", "#FDBA8C", `#16BDCA`];
