import React, { useState } from "react";
import styles from "./styles/income_tracker.module.css";
import IncomePieChart from '@/components/IncomePieChart';
import ExpensePieChart from "@/components/ExpensePieChart";
// import { BarChartComponent } from "@/components/bar-chart";
import { BodyOne2 } from "@/components/bodyone2";
import { Bodythree1 } from "@/components/bodythree1";
import { useRouter } from "next/router";
// import Profile from "@/components/profile";
import { TransactionWithId } from "@/components/addRecord";


export default function Home() {
  const [transactions, setTransactions] = useState<TransactionWithId[]>([]);
  // const [imageUrl, setImageUrl] = useState<string>("");
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);
  const profit = income+expense
  const router = useRouter()
  const Records = () => {
    router.push('records')
  }
  let a: string | undefined;

  if (typeof window !== "undefined") {
      const currency = localStorage.getItem("currency");
      console.log("currency", currency);
      if (currency !== null) {
          a = currency;
      }
  } else {
      console.log("localStorage is not available in this environment.");
  }
  let b: string | undefined;

  if (typeof window !== "undefined") {
      const country = localStorage.getItem("country");
      console.log("country", country);
      if (country !== null) {
          b = country;
      }
  } else {
      console.log("localStorage is not available in this environment.");
  }

  
  return (
    <div >
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#F3F4F6",
          overflowY: "scroll",
        }}
      >
        <header className={styles.head}>
          <div className={styles.headone} style={{ border: '0' }}>
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
            <div>Dashboard</div>
            <div onClick={()=>router.push('records')}>Records</div>
            <div onClick={()=>router.push('note')}>Advice</div>
          </div>
          <div className={styles.headtwo}>
            <div className={styles.headtwo1} onClick={Records}>+ Record</div>
            <div className={styles.headtwo1} onClick={()=>router.push("login")}>Log out</div>
          </div>
        </header>
        <body>
          <div className={styles.bodyone}>
            <div className={styles.bodyone1} style={{ backgroundImage: `url("dell.png")`, padding: '100px 20px ' }}>
            <div style={{ color: 'white' }}>Country:{b}</div>
              <div style={{ color: 'white' }}>Result</div>
              <div style={{ fontSize: '24px', color: 'white' }}>{profit}</div>
            </div>
            <BodyOne2 income={income} expense={expense}/>
          </div>
          <div className={styles.bodytwo}>
            <div className={styles.bodytwo1}>
              <div>
                {/* <BarChartComponent transactions={transactions}/> */}
                <IncomePieChart transactions={transactions} setIncome={setIncome} a={a || ''}/>
              </div>
            </div>
            <div className={styles.bodytwo2}>
              <div>
                <ExpensePieChart transactions={transactions} setExpense={setExpense} a={a || ''}/>
              </div>

            </div>
          </div>
          <div className={styles.bodythree}>
          <Bodythree1 transactions={transactions} setTransactions={setTransactions} a={a || ''}/>
          </div>
        </body>
      </div>
    </div>
  );
}
