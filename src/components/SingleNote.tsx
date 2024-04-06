import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";

interface Note {
    _id: string;
    noteTitle: string;
    note: string;
    createdAt: string; // You might want to adjust the type based on the actual format of createdAt
}

interface Props {
    notes: Note[];
    information: string | null;
    setInformation: React.Dispatch<React.SetStateAction<string | null>>;
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
    searchQuery: string;
}

export const SingleNote: React.FC<Props> = ({ notes, information, setInformation, setNotes, searchQuery }) => {
    const handleDelete = async (id: string) => {
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

    return (
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
            {notes
                .filter(note => note.noteTitle.toLowerCase().includes(searchQuery.toLowerCase())) // Filter notes based on search query
                .slice()
                .reverse()
                .map((note) => (
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
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ color: 'D1D5DB', fontSize: '13px' }}>
                                {note.createdAt}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};
