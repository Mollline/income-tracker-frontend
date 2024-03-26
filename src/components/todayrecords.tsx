import axios from "axios";
import { useEffect,  } from "react";
import { SingleTransaction } from "./singleTransaction";

export const TodayRecords = ({transactions, setTransactions}) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:9999/getTransactions');
                if (response.status === 200) {
                    const trans = response.data;
                    setTransactions(trans)
                    console.log(trans)
                } else {
                    console.error('Failed to fetch transactions:', response.statusText);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            {transactions.map((transaction) => (
               <SingleTransaction transaction={transaction} transactions={transactions} setTransactions={setTransactions}/>
            ))}
        </div>
    )
}