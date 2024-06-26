import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
export interface Transaction {
    userId: string;
    category: string;
    transactionTitle: string;
    amount: number;
    note: string;
    transactionType: string;
    createdAt: string;
}
export interface TransactionWithId extends Transaction {
    _id: string
}
interface AddRecordProps {
    transactions: TransactionWithId[];
    setTransactions: React.Dispatch<React.SetStateAction<TransactionWithId[]>>;
}
let id: string | null = null;
if (typeof window !== 'undefined') {
    id = localStorage.getItem('_id');
}
export const AddRecord: React.FC<AddRecordProps> = ({ transactions, setTransactions }) => {
    const [formData, setFormData] = useState<Transaction>({
        userId: id as string,
        category: '',
        transactionTitle: '',
        amount: 0,
        note: '',
        transactionType: '',
        createdAt: '',
    });
    const [error, setError] = useState<string | null>(null);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleCreateTransaction = async () => {
        try {
            if (!formData.category || !formData.amount || !formData.transactionType || !formData.createdAt) {
                setError("Please fill in all required fields.");
                return;
            }
            const response = await axios.post('https://income-tracker-backend-e8yv.onrender.com/createTransaction', formData);
            const newData = response.data;
            const oldData = transactions;
            const updatedData = [...oldData, newData];
            setTransactions(updatedData);
            console.log(updatedData);
            handleClose();
            resetFormData();
        } catch (error) {
            console.log(error);
        }
    };
    const resetFormData = () => {
        setFormData({
            userId: id as string,
            category: '',
            transactionTitle: '',
            amount: 0,
            note: '',
            transactionType: '',
            createdAt: '',
        });
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button className={styles.add} onClick={handleOpen} style={{ zIndex: "0" }}>
                + Add Record
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: '200px'}}>
                    <div className={styles.addRecord}>
                        <header className={styles.addRecordHeader}>
                            <div style={{ fontWeight: 'bold',color:"black" }}>
                                Add record
                            </div>
                            <svg onClick={handleClose} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="#0F172A" />
                            </svg>
                        </header>
                        <body style={{display:'flex',borderRadius:'12px'}}>
                            <div style={{backgroundColor:"RGB(195,195,195)"}}>
                            <div style={{ display: 'flex', gap: '20px', margin: "10px" }}>
                                <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', width: '396px', height: '444px'}}>
                                    <label style={{ color: '#1F2937' }}>Transaction Type:</label>
                                    <ToggleButtonGroup
                                        color="primary"
                                        value={formData.transactionType}
                                        exclusive
                                        onChange={(e: React.MouseEvent<HTMLElement>, value: string) => setFormData({
                                            ...formData,
                                            transactionType: value,
                                        })}
                                        aria-label="Transaction Type"
                                    >
                                        <ToggleButton value="income">Income</ToggleButton>
                                        <ToggleButton value="expense">Expense</ToggleButton>
                                    </ToggleButtonGroup>
                                    <label style={{ color: '#1F2937' }}>Amount:</label>
                                    <input style={{ width: "384px", height: '48px', border: '1px solid #D1D5DB', backgroundColor: '#F9FAFB', borderRadius: '5px',paddingLeft:'10px',color:'black'}} type="number" name="amount" value={formData.amount} onChange={handleInputChange} />
                                    <label style={{ color: '#1F2937' }}>Category:</label>
                                    <select style={{ width: "384px", height: '48px', border: '1px solid #D1D5DB', backgroundColor: '#F9FAFB', borderRadius: '5px',padding:'10px',color:'black'}} name="category" value={formData.category} onChange={handleInputChange}>
                                        <option value=""></option>
                                        <option value="food">food</option>
                                        <option value="wage">wage</option>
                                        <option value="shopping">shopping</option>
                                        <option value="snack">snack</option>
                                        <option value="clothing">clothing</option>
                                    </select>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            <label style={{ color: '#1F2937' }}>Date:</label>
                                            <input style={{ width: '336px', height: '48px', border: '1px solid #D1D5DB', backgroundColor: '#F9FAFB', borderRadius: '5px',paddingLeft:'10px',color:'black',}} type="date" name="createdAt" value={formData.createdAt} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '5px', flexDirection: 'column', width: '396px', height: '444px' }}>
                                    <label style={{ color: '#1F2937' }}>Transaction Title: //Not required</label>
                                    <input style={{ width: "344px", height: '48px', border: '1px solid #D1D5DB', backgroundColor: '#F9FAFB', borderRadius: '5px',paddingLeft:'10px',color:'black' }} maxLength={20} type="text" name="transactionTitle" value={formData.transactionTitle} onChange={handleInputChange} />
                                    <label style={{ color: '#1F2937' }}>Note: //Not required</label>
                                    <textarea style={{ width: "344px", height: '280px', border: '1px solid #D1D5DB', backgroundColor: '#F9FAFB', borderRadius: '5px', paddingLeft: '10px',color:'black' ,paddingTop:'20px'}} maxLength={70} name="note" value={formData.note} onChange={handleInputChange}></textarea>
                                </div>
                            </div>
                            <button className={styles.add} style={{width:'80%',height:'30px',marginLeft:'70px'}} onClick={handleCreateTransaction}>Add Record</button>
                                    <div style={{color:'red',textAlign:'center',margin:'20px'}}>{error}</div>
                            </div>
                        </body>
                    </div>
                </div>
            </Modal>
        </div>
    );
};