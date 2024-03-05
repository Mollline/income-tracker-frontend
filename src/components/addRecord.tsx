import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styles from "@/styles/Home.module.css";
import axios from "axios";
export const AddRecord = () => {
    const [formData, setFormData] = useState({
        userId: '',  
        category: 'food',  
        transactionTitle: '',
        amount: 0,
        note: '',
        transactionType: 'expense',
    });

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleCreateTransaction = async () => {
        try {
            const response = await axios.post('http://localhost:9999/createTransaction', formData);
            console.log('Transaction created:', response.data);
            handleClose()
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <Button className={styles.add} onClick={handleOpen}>
                +Add
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
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="#0F172A" />
                            </svg>
                        </header>
                        <body className={styles.addRecordBody}>
                            <div>
                                <label>User ID:</label>
                                <input type="text" name="userId" value={formData.userId} onChange={handleInputChange} />

                                <label>Category:</label>
                                <select name="category" value={formData.category} onChange={handleInputChange}>
                                    <option value="food">Food</option>
                                    <option value="shopping">Shopping</option>
                                    <option value="bills">Bills</option>
                                    <option value="clothing">Clothing</option>
                                </select>

                                <label>Transaction Title:</label>
                                <input type="text" name="transactionTitle" value={formData.transactionTitle} onChange={handleInputChange} />

                                <label>Amount:</label>
                                <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} />

                                <label>Note:</label>
                                <input type="text" name="note" value={formData.note} onChange={handleInputChange} />

                                <label>Transaction Type:</label>
                                <select name="transactionType" value={formData.transactionType} onChange={handleInputChange}>
                                    <option value="income">Income</option>
                                    <option value="expense">Expense</option>
                                </select>

                            </div>
                        </body>
                        <button onClick={handleCreateTransaction}>add record</button>
                    </div>
                </div>

            </Modal>
        </div>
    );
};
