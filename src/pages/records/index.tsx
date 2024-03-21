// import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import { AddRecords } from "@/components/addRecords";
import { TodayRecords } from "@/components/todayrecords";
// import { useState } from "react";
export default function Home() {
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
        <body className={styles.record_body}>
          <AddRecords/>
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
                  <button >aersfedc</button>
                </div>
                <button >awefd</button>
              </div>

              <div style={{ width: "894px", marginTop: "24px" }}>
                <div>Today</div>
                <TodayRecords/>
              </div>

              <div style={{ width: "894px", marginTop: "24px" }}>
                <div>Yesterday</div>
                {Array.from({ length: 6 }, (_, index) => (
                  <div className={styles.selectOne} key={index}>
                    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                      <div>
                        <input
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
                          <circle cx="20" cy="20" r="20" fill="#FF4545" />
                          <path
                            d="M26.875 13.1249V27.4999C26.875 27.6656 26.8092 27.8246 26.6919 27.9418C26.5747 28.059 26.4158 28.1249 26.25 28.1249C26.0842 28.1249 25.9253 28.059 25.8081 27.9418C25.6908 27.8246 25.625 27.6656 25.625 27.4999V23.7499H21.875C21.7092 23.7499 21.5503 23.684 21.4331 23.5668C21.3158 23.4496 21.25 23.2906 21.25 23.1249C21.279 21.6278 21.4681 20.138 21.8141 18.6811C22.5781 15.5179 24.0266 13.3975 26.0039 12.5507C26.0989 12.51 26.2026 12.4935 26.3056 12.5027C26.4086 12.5119 26.5077 12.5464 26.594 12.6034C26.6803 12.6603 26.7512 12.7377 26.8002 12.8287C26.8493 12.9197 26.875 13.0215 26.875 13.1249ZM19.3664 13.0225C19.3542 12.9405 19.3257 12.8617 19.2827 12.7907C19.2397 12.7198 19.183 12.6581 19.1158 12.6093C19.0487 12.5605 18.9726 12.5255 18.8918 12.5065C18.8111 12.4874 18.7273 12.4846 18.6455 12.4982C18.5636 12.5119 18.4853 12.5417 18.4151 12.5859C18.3449 12.6301 18.2842 12.6879 18.2366 12.7558C18.1889 12.8238 18.1553 12.9005 18.1376 12.9816C18.1199 13.0626 18.1186 13.1464 18.1336 13.228L18.7414 16.8749H16.875V13.1249C16.875 12.9591 16.8092 12.8002 16.6919 12.6829C16.5747 12.5657 16.4158 12.4999 16.25 12.4999C16.0842 12.4999 15.9253 12.5657 15.8081 12.6829C15.6908 12.8002 15.625 12.9591 15.625 13.1249V16.8749H13.7586L14.3664 13.228C14.3814 13.1464 14.3801 13.0626 14.3624 12.9816C14.3447 12.9005 14.3111 12.8238 14.2634 12.7558C14.2158 12.6879 14.1551 12.6301 14.0849 12.5859C14.0147 12.5417 13.9364 12.5119 13.8545 12.4982C13.7727 12.4846 13.6889 12.4874 13.6082 12.5065C13.5274 12.5255 13.4513 12.5605 13.3842 12.6093C13.317 12.6581 13.2603 12.7198 13.2173 12.7907C13.1743 12.8617 13.1458 12.9405 13.1336 13.0225L12.5086 16.7725C12.503 16.8064 12.5001 16.8406 12.5 16.8749C12.5012 17.7607 12.8156 18.6175 13.3874 19.294C13.9592 19.9705 14.7518 20.4231 15.625 20.5718V27.4999C15.625 27.6656 15.6908 27.8246 15.8081 27.9418C15.9253 28.059 16.0842 28.1249 16.25 28.1249C16.4158 28.1249 16.5747 28.059 16.6919 27.9418C16.8092 27.8246 16.875 27.6656 16.875 27.4999V20.5718C17.7482 20.4231 18.5408 19.9705 19.1126 19.294C19.6844 18.6175 19.9988 17.7607 20 16.8749C19.9999 16.8406 19.997 16.8064 19.9914 16.7725L19.3664 13.0225Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div>
                        <div>Food & Drinks</div>
                        <div style={{ color: "#6B7280" }}>3 hours ago</div>
                      </div>
                    </div>
                    <div style={{ color: "#EAB308" }}>- 1,000$</div>
                  </div>
                ))}
              </div>
              <div></div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}
