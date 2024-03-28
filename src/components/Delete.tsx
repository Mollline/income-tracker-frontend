import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MdDeleteOutline } from "react-icons/md";
import axios from 'axios';

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

export const Delete = ({ transaction, transactions, setTransactions }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleDelete = async () => {
        const id = transaction._id;
        console.log(id);
        try {
            const response = await axios.delete(
                `http://localhost:9999/deleteTransaction/${id}`
            );
            console.log(response);
            console.log("w4a5ergfd", transactions);
            console.log("ervf", transaction);

            const reDelete = transactions.filter((e) => e._id !== id);
            setTransactions(reDelete);
            console.log(reDelete);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <Button onClick={handleOpen}>
                <MdDeleteOutline/>
            </Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        Are you shure to delete this transaction?
                    </Typography>
                    <div style={{fontSize:'15px', color:"grey",fontWeight:"bold"}}>Do not show it again </div>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                    <Button onClick={() => handleDelete()}>move to trash</Button>
                    <Button onClick={handleClose}>cancell</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
