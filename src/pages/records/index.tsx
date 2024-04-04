// import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import { AddRecords } from "@/components/addRecords";
import { TodayRecords } from "@/components/todayrecords";
import {  useState } from "react";
import {  TransactionWithId } from "@/components/addRecord";
import { useRouter } from "next/router";
export default function Home() {
  const [transactions, setTransactions] = useState<TransactionWithId[]>([]);
  const [select, setSelect] = useState("all");
  const router = useRouter()

  const sumIncome = transactions.reduce((total, transaction) => {
    if (transaction.transactionType === "income") {
        return total + transaction.amount;
    } else {
        return total;
    }
}, 0);
const sumExpense = transactions.reduce((total, transaction) => {
    if (transaction.transactionType === "expense") {
        return total + transaction.amount;
    } else {
        return total;
    }
}, 0);
const Profit = sumIncome - sumExpense;
const profitColor = Profit < 0 ? "red" : "green"; 
  const currentTime = new Date();
  const day = currentTime.getDate();
  const month = (currentTime.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because January is 0
  const year = currentTime.getFullYear();
  
  console.log(`${year}-${month}-${day} `);
  
  
  const filteredData = select !== "all" ? transactions.filter(t=> t.transactionType === select): transactions
  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#F3F4F6",
          overflowY: "scroll",
        }}
      >
        <header className={styles.head} style={{zIndex:"1"}}>
          <div className={styles.headone}>
            <div>
              <svg
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8296 9.36772V0.300781H9.56514V9.36772H0.300659V18.6322H9.56514V27.6991H18.8296V18.6322H28.0941V9.36772H18.8296ZM18.8296 18.4347H9.56514V9.56665H18.8296V18.4347Z"
                  fill="#0166FF"
                />
              </svg>
            </div>
            <div onClick={()=>router.push('income_tracker')}>Dashboard</div>
            <div>Records</div>
          </div>
          <div className={styles.headone}>
            <div onClick={()=>router.push("note")}>Note</div>
          </div>
        </header>
        <body className={styles.record_body}>
          <AddRecords transactions={transactions} setTransactions={setTransactions} select={select} setSelect={setSelect}/>
          <div>
            <div className={styles.date}>
              <div>
                <div></div>
                <div>Last 30 days</div>
                <div></div>
              </div>
              <div>
                <div>Newest first</div>
                <div></div>
              </div>
            </div>
            <div className={styles.list}>
              <div className={styles.selectAll}>
                <div style={{ gap: "16px", display: "flex" }}>
                  <div>

                  </div>
                  <div style={{fontSize:"20px"}}>GROSS PROFIT</div>
                </div>
                <div style={{color:`${profitColor}`}}>{Profit}</div>
              </div>

              <div style={{ width: "894px", marginTop: "24px" }}>
                <div>Today</div>
                <TodayRecords transactions={filteredData} setTransactions={setTransactions}/>
              </div>

              <div style={{ width: "894px", marginTop: "24px" }}>
                <div>Yesterday</div>
              </div>
              <div></div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}
