import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { AddNote } from "@/components/addNote";
import { SingleNote } from "@/components/SingleNote";

export default function Home() {
    const router = useRouter();
    const [information, setInformation] = useState(null);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:9999/getNotes');
                if (response.status === 200) {
                    const note = response.data;
                    setNotes(note);
                } else {
                    console.error('Failed to fetch notes:', response.statusText);
                }
            } catch (err) {
                console.error('Error fetching notes:', err);
            }
        };
        fetchData();
    }, []);

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
                    <div onClick={() => router.push("income_tracker")}>Dashboard</div>
                    <div onClick={() => router.push("records")}>Records</div>
                </div>
                <AddNote notes={notes} setNotes={setNotes}/>
            </header>
            <body
                style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#F3F4F6",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
             <SingleNote notes={notes} information={information} setInformation={setInformation} setNotes={setNotes}/>
             
            </body>
        </div>
    );
}
