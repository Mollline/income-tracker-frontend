import axios from "axios";
import styles from "../styles/Home.module.css";
import { useEffect,  } from "react";
import { TransactionWithId } from "./addRecord";

interface AddRecordProps {
  transactions: TransactionWithId[];
  setTransactions: React.Dispatch<React.SetStateAction<TransactionWithId[]>>;
  a:string
}
export const Bodythree1: React.FC<AddRecordProps> = ({transactions, setTransactions,a}) => {
  const bgColor = (type: string) => {
    if (type === "expense") {
      return "red";
    } else {
      return "green";
    }
  };
  const iconColor = (type: string) => {
    if (type === "expense") {
      return (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#FF4545" />
          <path
            d="M26.875 13.1249V27.4999C26.875 27.6656 26.8092 27.8246 26.6919 27.9418C26.5747 28.059 26.4158 28.1249 26.25 28.1249C26.0842 28.1249 25.9253 28.059 25.8081 27.9418C25.6908 27.8246 25.625 27.6656 25.625 27.4999V23.7499H21.875C21.7092 23.7499 21.5503 23.684 21.4331 23.5668C21.3158 23.4496 21.25 23.2906 21.25 23.1249C21.279 21.6278 21.4681 20.138 21.8141 18.6811C22.5781 15.5179 24.0266 13.3975 26.0039 12.5507C26.0989 12.51 26.2026 12.4935 26.3056 12.5027C26.4086 12.5119 26.5077 12.5464 26.594 12.6034C26.6803 12.6603 26.7512 12.7377 26.8002 12.8287C26.8493 12.9197 26.875 13.0215 26.875 13.1249ZM19.3664 13.0225C19.3542 12.9405 19.3257 12.8617 19.2827 12.7907C19.2397 12.7198 19.183 12.6581 19.1158 12.6093C19.0487 12.5605 18.9726 12.5255 18.8918 12.5065C18.8111 12.4874 18.7273 12.4846 18.6455 12.4982C18.5636 12.5119 18.4853 12.5417 18.4151 12.5859C18.3449 12.6301 18.2842 12.6879 18.2366 12.7558C18.1889 12.8238 18.1553 12.9005 18.1376 12.9816C18.1199 13.0626 18.1186 13.1464 18.1336 13.228L18.7414 16.8749H16.875V13.1249C16.875 12.9591 16.8092 12.8002 16.6919 12.6829C16.5747 12.5657 16.4158 12.4999 16.25 12.4999C16.0842 12.4999 15.9253 12.5657 15.8081 12.6829C15.6908 12.8002 15.625 12.9591 15.625 13.1249V16.8749H13.7586L14.3664 13.228C14.3814 13.1464 14.3801 13.0626 14.3624 12.9816C14.3447 12.9005 14.3111 12.8238 14.2634 12.7558C14.2158 12.6879 14.1551 12.6301 14.0849 12.5859C14.0147 12.5417 13.9364 12.5119 13.8545 12.4982C13.7727 12.4846 13.6889 12.4874 13.6082 12.5065C13.5274 12.5255 13.4513 12.5605 13.3842 12.6093C13.317 12.6581 13.2603 12.7198 13.2173 12.7907C13.1743 12.8617 13.1458 12.9405 13.1336 13.0225L12.5086 16.7725C12.503 16.8064 12.5001 16.8406 12.5 16.8749C12.5012 17.7607 12.8156 18.6175 13.3874 19.294C13.9592 19.9705 14.7518 20.4231 15.625 20.5718V27.4999C15.625 27.6656 15.6908 27.8246 15.8081 27.9418C15.9253 28.059 16.0842 28.1249 16.25 28.1249C16.4158 28.1249 16.5747 28.059 16.6919 27.9418C16.8092 27.8246 16.875 27.6656 16.875 27.4999V20.5718C17.7482 20.4231 18.5408 19.9705 19.1126 19.294C19.6844 18.6175 19.9988 17.7607 20 16.8749C19.9999 16.8406 19.997 16.8064 19.9914 16.7725L19.3664 13.0225Z"
            fill="white"
          />
        </svg>
      );
    } else {
      return (
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
      );
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9999/getTransactions');
        if (response.status === 200) {
          const trans = response.data;
          setTransactions(trans)
        } else {
          console.error('Failed to fetch transactions:', response.statusText);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  let id: string | null = null;
  if (typeof window !== 'undefined') {
      id = localStorage.getItem('_id');
  }
  const useTransaction = transactions.filter((e) => id !== null && e.userId === id);
  console.log("useTransaction:", useTransaction);
  
  return (
    <div className={styles.bodythree1}>
      <div className={styles.bodythree11}>
        <div>Last Records</div>
      </div>
      <div className={styles.bodythree12}>
        {useTransaction.slice(-5).reverse().map((transactions, index) => (
          <div className={styles.bodythree121} key={index}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div>
                {iconColor(transactions.transactionType)}
              </div>
              <div>
                <div>{transactions.category}</div>
                <div style={{ color: '#6B7280' }}>{transactions.createdAt}</div>
              </div>
            </div>
            <div style={{width:"700px",overflowY:"scroll"}}>
              <div style={{fontSize:"15px" }}>{transactions.transactionTitle}</div>
              <div style={{color:"#6B7280"}}>{transactions.note}</div>
            </div>
            <div style={{ color: `${bgColor(transactions.transactionType)}`,width:"100px" }}>{transactions.amount} {a}</div>
          </div>
        ))}

      </div>
    </div>
  )
}