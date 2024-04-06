import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";

export const SingleNote = ({ notes, information, setInformation, setNotes }) => {
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:9999/deleteNote/${id}`);
            console.log(response);
            // Filter out the deleted note from the state
            const updatedNotes = notes.filter((note) => note._id !== id);
            setNotes(updatedNotes);
        } catch (err) {
            console.log(err);
        }
    };
    const handleEditNote = async () => {
        try {
            // Update formData with the latest changes
            const response = await axios.post(`http://localhost:9999/editnotes/${id}`,{
                noteTitle: "",
                createdAt: "",
                note: "",
        });

            const newData = response.data;
            const newDataId = newData._id;
            const updatedData = notes.map((note) => {
                if (note._id === newDataId) {
                    return newData;
                } else {
                    return note;
                }
            });

            console.log(updatedData);
            setNotes(updatedData);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div
            style={{
                width: "50vw",
                backgroundColor: "white",
                height: "100vh",
                marginTop: "50px",
                borderRadius: "20px",
                padding: "20px 50px ",
            }}
        >
            {notes.reverse().map((note) => (
                <div
                    key={note._id} // Assuming _id is the unique identifier of each note
                    style={{
                        border: "#D1D5DB 2px solid",
                        width: "100%",
                        padding: "10px 50px",
                        borderRadius: "20px",
                        margin: "10px 0px "
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <div
                            onClick={() => setInformation(information === note.noteTitle ? null : note.noteTitle)}
                            style={{
                                cursor: "pointer",
                                color: information === note.noteTitle ? "#0166FF" : "inherit"
                            }}
                        >
                        {information === note.noteTitle ? "Back" : `${note.noteTitle}`}
                        </div>
                        <div style={{ display: information ? "flex" : "flex", cursor: "pointer" }} onClick={() => handleDelete(note._id)}>
                            <MdDeleteOutline />
                        </div>
                    </div>
                    {information === note.noteTitle && (
                        <div
                            style={{
                                width: "100%",
                                padding: "10px 50px",
                                borderRadius: "20px",
                            }}
                        >
                        
                                {note.note}
                            
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
