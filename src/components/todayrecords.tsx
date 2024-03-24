// import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useEffect,  } from "react";
// import { CiEdit } from "react-icons/ci";
// import { MdDeleteOutline } from "react-icons/md";
import { SingleTransaction } from "./singleTransaction";

export const TodayRecords = ({transactions, setTransactions}) => {
    // const bgColor = (type) => {
    //     if (type === 'expense') {
    //         return 'red'
    //     } else {
    //         return 'green'
    //     };
    // }
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