// import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import { AddRecords } from "@/components/addRecords";
import { TodayRecords } from "@/components/todayrecords";
import { useState } from "react";
import { TransactionWithId } from "@/components/addRecord";
import { useRouter } from "next/router";
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Home() {
  const [transactions, setTransactions] = useState<TransactionWithId[]>([]);
  const [select, setSelect] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("");
  const router = useRouter()
  let id: string | null = null;
  if (typeof window !== 'undefined') {
      id = localStorage.getItem('_id');
  }
  console.log("id", id)
  const sumIncome = transactions.reduce((total, transaction) => {
    if (transaction.transactionType === "income" && transaction.userId===id) {
      return total + transaction.amount;
    } else {
      return total;
    }
  }, 0);
  const sumExpense = transactions.reduce((total, transaction) => {
    if (transaction.transactionType === "expense" && transaction.userId===id) {
      return total + transaction.amount;
    } else {
      return total;
    }
  }, 0);
  const Profit = sumIncome - sumExpense;
  const profitColor = Profit < 0 ? "red" : "green";
  const gross = Profit < 0 ? "GROSS LOSS" : "GROSS PROFIT";
  const filteredData = select !== "all" ? transactions.filter(t => t.transactionType === select) : transactions

  const filteredByCategoryData = selectedCategory !== "all"
    ? filteredData.filter(t => t.category === selectedCategory)
    : filteredData;

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
        <header className={styles.head} style={{ zIndex: "1" }}>
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
            <div onClick={() => router.push('income_tracker')}>Dashboard</div>
            <div>Records</div>
            <div onClick={() => router.push("note")}>Advice</div>
          </div>
          <div className={styles.headone}>
          </div>
        </header>
        <body className={styles.record_body}>
          <AddRecords transactions={filteredByCategoryData} setTransactions={setTransactions} select={select} setSelect={setSelect} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <div>
            <div className={styles.date}>
              <div>
                <div>
                  {/* <ToggleButtonGroup
                    color="primary"
                    // value={formData.transactionType}
                    exclusive
                    // onChange={(e: React.MouseEvent<HTMLElement>, value: string) => setFormData({
                    //   ...formData,
                    //   transactionType: value,
                    // })}
                    aria-label="Transaction Type"
                  >
                    <ToggleButton value="income">Last 30 days </ToggleButton>
                    <ToggleButton value="expense">all data</ToggleButton>
                  </ToggleButtonGroup> */}
                </div>
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
                  <div style={{ fontSize: "20px" }}>{gross}</div>
                </div>
                <div style={{ color: `${profitColor}` }}>{Profit}</div>
              </div>

              <div style={{ width: "894px", marginTop: "24px" }}>
                <TodayRecords transactions={filteredByCategoryData} setTransactions={setTransactions} />
              </div>

              <div style={{ width: "894px", marginTop: "24px" }}>
              </div>
              <div></div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}
