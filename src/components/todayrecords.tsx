import axios from "axios";
import { useEffect, } from "react";
import { SingleTransaction } from "./singleTransaction";
import { TransactionWithId } from "./addRecord";

export type TransactionProps = {
    transactions: TransactionWithId[]
    setTransactions: React.Dispatch<React.SetStateAction<TransactionWithId[]>>;
}
export const TodayRecords = ({ transactions, setTransactions }: TransactionProps) => {
    let id: string | null = null;
    if (typeof window !== 'undefined') {
        id = localStorage.getItem('_id');
    }
    const useTransaction = transactions.filter((e) => id !== null && e.userId === id);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://income-tracker-backend-e8yv.onrender.com/getTransactions');
                if (response.status === 200) {
                    const trans = response.data as TransactionWithId[];
                    setTransactions(trans)
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
            {useTransaction.slice().reverse().map((transaction, index) => (
                <SingleTransaction key={index} transaction={transaction} transactions={transactions} setTransactions={setTransactions} />
            ))}

        </div>
    )
}