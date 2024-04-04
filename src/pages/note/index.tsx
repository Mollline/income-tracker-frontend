import { useRouter } from 'next/router';
import React, { } from 'react';
import styles from "@/styles/Home.module.css";
export default function Home() {
    const router = useRouter()
    return (
        <div>
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
                    <div onClick={() => router.push('records')}>Records</div>
                </div>
            </header>
            <body style={{ width: '100vw', height: '100vh', backgroundColor: "#F3F4F6",display: "flex", justifyContent: "center",}}>
                <div style={{ display: "flex", justifyContent: "center", width: "50vw", backgroundColor: "white", height: "100vh",marginTop:"50px",borderRadius:"10px"}}>
                    add .....
                </div>
            </body>
        </div>
    );
};

