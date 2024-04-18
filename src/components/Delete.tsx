import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MdDeleteOutline } from "react-icons/md";
import axios from 'axios';
import { TransactionWithId } from './addRecord';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface DeleteRecordProps {
    transactions: TransactionWithId[];
    setTransactions: React.Dispatch<React.SetStateAction<TransactionWithId[]>>;
    transaction: TransactionWithId;
}

export const Delete: React.FC<DeleteRecordProps> = ({ transaction, transactions, setTransactions }) => {
    const [open, setOpen] = React.useState(false);
    const [showModal, setShowModal] = React.useState(true); // Control whether to show the modal or not

    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setShowModal(false); // Toggle showModal to false
        setOpen(false); // Close the modal
    };

    const handleDelete = async () => {
        const id = transaction._id;
        try {
            await axios.delete(`https://income-tracker-backend-e8yv.onrender.com/deleteTransaction/${id}`);
            const reDelete = transactions.filter((e) => e._id !== id);
            setTransactions(reDelete);
        } catch (err) {
            console.log(err);
        }
        handleClose(); // Close the modal after deletion
    };

    // Toggle the showModal state
    const toggleShowModal = () => {
        setShowModal(!showModal);
    };

    // Show modal only if showModal is true
    return (
        <div>
            <Button onClick={showModal ? handleOpen : handleDelete}>
                <MdDeleteOutline />
            </Button>
            {showModal && (
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                            Are you sure to delete this transaction?
                        </Typography>
                        <div style={{ fontSize: '15px', color: "grey", fontWeight: "bold" }} onClick={toggleShowModal}>
                            Do not show it again
                        </div>
                        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                            <Button onClick={handleDelete}>move to trash</Button>
                            <Button onClick={handleClose}>cancel</Button>
                        </Typography>
                    </Box>
                </Modal>
            )}
        </div>
    );
}
