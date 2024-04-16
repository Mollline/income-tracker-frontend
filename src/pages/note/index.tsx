import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { AddNote } from "@/components/addNote";
import { SingleNote } from "@/components/SingleNote";

interface Note {
    _id: string;
    noteTitle: string;
    note: string;
    createdAt: string; // You might want to adjust the type based on the actual format of createdAt
}

export default function Home() {
    const router = useRouter();
    const [information, setInformation] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://income-tracker-backend-e8yv.onrender.com/getNotes');
                if (response.status === 200) {
                    const note: Note[] = response.data;
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

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

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
                    <div onClick={() => router.push("income_tracker")}style={{color:'black'}}>Dashboard</div>
                    <div onClick={() => router.push("records")}style={{color:'black'}}>Records</div>
                    <div style={{color:'black'}}>Advice</div>
                </div>
            </header>
            <body
                style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#F3F4F6",
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px"
                }}
            >
                <div style={{
                    width: "14vw",
                    backgroundColor: "white",
                    height: "100vh",
                    marginTop: "50px",
                    borderRadius: "20px",
                    padding: "10px 20px "
                }}>
                    <div style={{ fontSize: "24px", fontWeight: "bold", padding: "24px 0px" ,color:'black'}}>
                        Advice</div>
                    <AddNote notes={notes} setNotes={setNotes}/>
                    <div>
                        <input className={styles.input} placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearch}
                            style={{ width: "100%" }}></input>
                    </div>
                    <div>
                        <div style={{ fontWeight: 'bold', marginTop: '20px',color:'black' }}>Notes</div>
                    </div>
                    <div style={{ padding: '20px 10px' }}>
                        {notes.slice().reverse().map((title, index) => (<div style={{ gap: "10px" ,color:'black'}} key={index}>- {title.noteTitle}</div>))}
                    </div>
                </div>
                <div
                    style={{
                        width: "40vw",
                        backgroundColor: "white",
                        height: "100vh",
                        marginTop: "50px",
                        borderRadius: "20px",
                        padding: "20px 50px ",
                    }}
                >
                    <div style={{fontSize:'20px', fontWeight:"bold",color:'black',margin:'15px'}}>Users Latest Advices </div>
                    <div style={{fontSize:'13px',color:'black',margin:'20px'}}>CLICK THE NAME </div>
                    <SingleNote notes={notes} information={information} setInformation={setInformation} setNotes={setNotes} searchQuery={searchQuery} />
                </div>
            </body>
        </div>
    );
}
