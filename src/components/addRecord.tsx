import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styles from "@/styles/Home.module.css";
import axios from "axios";


export const AddRecord = () => {
    const [formData, setFormData] = useState({
        userId: '123456789',
        category: '',
        transactionTitle: '',
        amount: "",
        note: '',
        transactionType: '',
        createdAt: '',
    });

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCreateTransaction = async () => {
        try {
            const response = await axios.post('http://localhost:9999/createTransaction', formData);
            console.log(response.data);
            handleClose();
        } catch (error) {
            console.log(error);
            // handleClose();
        }
    };

    return (
        <div>
            <Button className={styles.add} onClick={handleOpen}>
                + Add Record
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: '200px' }}>
                    <div className={styles.addRecord}>
                        <header className={styles.addRecordHeader}>
                            <div style={{ fontWeight: 'bold' }}>
                                Add record
                            </div>
                            <svg onClick={handleClose} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 17.954Z" fill="#0F172A" />
                            </svg>
                        </header>
                        <body className={styles.addRecordBody}>
                            <div style={{ display: 'flex', gap: '20px', margin: "20px" }}>
                                <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', width: '396px', height: '444px' }}>
                                    <label style={{ color: '#1F2937' }}>Transaction Type:</label>
                                    <select style={{ width: "384px", height: '40px', border: '1px solid #D1D5DB', backgroundColor: '#F9FAFB', borderRadius: '5px' }} name="transactionType" value={formData.transactionType} onChange={handleInputChange}>
                                        <option value="income">income</option>
                                        <option value="expense">expense</option>
                                    </select>
                                    <label style={{ color: '#1F2937' }}>Amount:</label>
                                    <input style={{ width: "384px", height: '48px', border: '1px solid #D1D5DB', backgroundColor: '#F9FAFB', borderRadius: '5px' }} type="number" name="amount" value={formData.amount} onChange={handleInputChange} />
                                    <label style={{ color: '#1F2937' }}>Category:</label>
                                    <select style={{ width: "384px", height: '48px', border: '1px solid #D1D5DB', backgroundColor: '#F9FAFB', borderRadius: '5px' }} name="category" value={formData.category} onChange={handleInputChange}>
                                        <option value="food">food</option>
                                        <option value="shopping">shopping</option>
                                        <option value="bills">bills</option>
                                        <option value="clothing">clothing</option>
                                    </select>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            <label style={{ color: '#1F2937' }}>Date:</label>
                                            <input style={{ width: '336px', height: '48px', border: '1px solid #D1D5DB', backgroundColor: '#F9FAFB', borderRadius: '5px' }} type="date" name="createdAt" value={formData.createdAt} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <button className={styles.add} onClick={handleCreateTransaction}>Add Record</button>
                                </div>
                                <div style={{ display: 'flex', gap: '5px', flexDirection: 'column', width: '396px', height: '444px' }}>
                                    <label style={{ color: '#1F2937' }}>Transaction Title:</label>
                                    <input style={{ width: "344px", height: '48px', border: '1px solid #D1D5DB', backgroundColor: '#F9FAFB', borderRadius: '5px' }} type="text" name="transactionTitle" value={formData.transactionTitle} onChange={handleInputChange} />

                                    <label style={{ color: '#1F2937' }}>Note:</label>
                                    <input style={{ width: "344px", height: '280px', border: '1px solid #D1D5DB', backgroundColor: '#F9FAFB', borderRadius: '5px' }} type="text" name="note" value={formData.note} onChange={handleInputChange} />
                                </div>
                            </div>
                        </body>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
