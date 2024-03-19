import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const TodayRecords = ({del}) => {
    const [transactions, setTransactions] = useState([]);
    const bgColor = (type) => {
        if(type === 'expense') {
            return 'red'
        }else{
            return 'green'
        };
    }
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
            {transactions.map((transactions) => (
                <div className={styles.selectOne} key={transactions}>
                    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                        <div>
                            <input style={{display: del ? "none":"flex"}}
                                type="checkbox"
                            />
                        </div>
                        <div>
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="20" cy="20" r="20" fill="#0166FF" />
                                <path
                                    d="M27.5 19.0272V26.2499C27.5 26.5814 27.3683 26.8994 27.1339 27.1338C26.8995 27.3682 26.5815 27.4999 26.25 27.4999H23.125C22.7935 27.4999 22.4755 27.3682 22.2411 27.1338C22.0067 26.8994 21.875 26.5814 21.875 26.2499V23.1249C21.875 22.9591 21.8092 22.8002 21.6919 22.6829C21.5747 22.5657 21.4158 22.4999 21.25 22.4999H18.75C18.5842 22.4999 18.4253 22.5657 18.3081 22.6829C18.1908 22.8002 18.125 22.9591 18.125 23.1249V26.2499C18.125 26.5814 17.9933 26.8994 17.7589 27.1338C17.5245 27.3682 17.2065 27.4999 16.875 27.4999H13.75C13.4185 27.4999 13.1005 27.3682 12.8661 27.1338C12.6317 26.8994 12.5 26.5814 12.5 26.2499V19.0272C12.5 18.8542 12.5359 18.6831 12.6054 18.5247C12.6749 18.3663 12.7766 18.224 12.9039 18.1069L19.1539 12.21L19.1625 12.2015C19.3926 11.9922 19.6925 11.8762 20.0035 11.8762C20.3146 11.8762 20.6144 11.9922 20.8445 12.2015C20.8472 12.2045 20.8501 12.2074 20.8531 12.21L27.1031 18.1069C27.2292 18.2246 27.3295 18.3672 27.3978 18.5256C27.4661 18.6839 27.5009 18.8548 27.5 19.0272Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div>
                            <div>{transactions.category}</div>
                            <div style={{ color: "#6B7280" }}>{transactions.createdAt}</div>
                        </div>
                    </div>
                    <div style={{color:`${bgColor(transactions.transactionType)}`}}>{transactions.amount} MNT</div>
                </div>
            ))}
        </div>
    )
}