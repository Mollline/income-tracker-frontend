import React from "react";
import styles from "./styles/income_tracker.module.css";

export default function Home() {
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
            <div>Dashboard</div>
            <div>Records</div>
          </div>
          <div className={styles.headtwo}>
            <div className={styles.headtwo1}>+ Record</div>
            <div className={styles.headtwo2}></div>
          </div>
        </header>
        <body>
          <div className={styles.bodyone}>
            <div className={styles.bodyone1}></div>
            <div className={styles.bodyone2}></div>
            <div className={styles.bodyone3}></div>
          </div>
          <div className={styles.bodytwo}>
            <div className={styles.bodytwo1}></div>
            <div className={styles.bodytwo2}></div>
          </div>
          <div className={styles.bodythree}>
            <div className={styles.bodythree1}></div>
          </div>
        </body>
      </div>
    </div>
  );
}