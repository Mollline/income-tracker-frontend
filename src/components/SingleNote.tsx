import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import { EditNote } from "@/components/editNote";

interface Note {
    _id: string;
    noteTitle: string;
    note: string;
    createdAt: string; // Adjust the type based on the actual format of createdAt
    noteId?: string; // Optional if it's not always present
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
            const response = await axios.delete(`https://income-tracker-backend-e8yv.onrender.com/deleteNote/${id}`);
            console.log(response);
            // Filter out the deleted note from the state
            const updatedNotes = notes.filter((note) => note._id !== id);
            setNotes(updatedNotes);
        } catch (err) {
            console.log(err);
        }
    };
    let id: string | null = null;
    if (typeof window !== 'undefined') {
        id = localStorage.getItem('_id');
    }

    return (
        <div>
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
                        margin: "10px 0px",
                        backgroundColor: id === note.noteId ? "RGB(137, 193, 247)" : "transparent", // Conditional background color
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            color: 'black'
                        }}
                    >
                        <div
                            onClick={() => setInformation(information === note.noteTitle ? null : note.noteTitle)}
                            style={{
                                cursor: "pointer",
                                color: information === note.noteTitle ? "#0166FF" : "inherit",
                            }}
                        >
                            {information === note.noteTitle ? "Back" : `${note.noteTitle}`}
                        </div>
                        <div style={{ display: information ? "flex" : "flex", cursor: "pointer" }}>
                            {
                                id === note.noteId ?
                                    (
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <div onClick={() => handleDelete(note._id)} style={{ color: 'grey', marginTop: '7px' }}><MdDeleteOutline /></div>
                                            <div><EditNote notes={notes} setNotes={setNotes} note={note} /></div>
                                        </div>
                                    ) : null
                            }
                        </div>
                    </div>
                    {information === note.noteTitle && (
                        <div
                            style={{
                                width: "100%",
                                padding: "10px 50px",
                                borderRadius: "20px",
                                color: 'black'
                            }}
                        >
                            {note.note}
                        </div>
                    )}
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ color: 'grey', fontSize: '13px' }}>
                            {note.createdAt}
                        </div>
                    </div>
                </div>
                
                ))}
        </div>
    );
};
