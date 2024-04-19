// // components/Profile.js
// import React, { Dispatch, SetStateAction, useState } from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };
// interface imageProps {
//   imageUrl:string;
//   setImageUrl:Dispatch<SetStateAction<string>>

// }
// const Profile: React.FC<imageProps> = ({ imageUrl, setImageUrl }) => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleUpload = async (file: File) => {
//     const formData = new FormData();
//     formData.append('file', file);
  
//     try {
//       const response = await fetch('/api/uploadProfilePicture', {
//         method: 'POST',
//         body: formData,
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         setImageUrl(data.imageUrl)
//       } else {
//         console.error('Failed to upload image:', response.statusText);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
  

//   return (
//     <div>
//       <Button onClick={handleOpen}>
//         <div style={{ color: "white", marginLeft: "10px", fontSize: '10px' }}>Profile</div>
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Profile picture
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             <div>
//               <div>esrfdc</div>
//               <input type="file" accept="image/*" onChange={handleUpload} />
//               <div>esrfdc</div>

//               <img style={{border:"2px black solid"}} src={`${imageUrl}`} alt="Profile Picture" />
//             </div>
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

// export default Profile;
