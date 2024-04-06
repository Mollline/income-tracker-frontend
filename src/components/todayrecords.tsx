import axios from "axios";
import { useEffect, } from "react";
import { SingleTransaction } from "./singleTransaction";
import { TransactionWithId } from "./addRecord";

export type TransactionProps = {
    transactions: TransactionWithId[]
    setTransactions: React.Dispatch<React.SetStateAction<TransactionWithId[]>>;
}

export const TodayRecords = ({ transactions, setTransactions }: TransactionProps) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:9999/getTransactions');
                if (response.status === 200) {
                    const trans = response.data as TransactionWithId[];
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            {transactions.slice().reverse().map((transaction, index) => (
                <SingleTransaction key={index} transaction={transaction} transactions={transactions} setTransactions={setTransactions} />
            ))}

        </div>
    )
}