import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    
    let initialData = [
        {
            "title" : "Me Om",
            "id" : 1,
            "description" : "Hey i am don",
            "tag" : "@om"
        },
        {
            "title" : "Me Lu",
            "id" : 2,
            "description" : "Hey i am don",
            "tag" : "@class"
        },
        {
            "title" : "Me Om",
            "id" : 3,
            "description" : "Hey i am don",
            "tag" : "@Mass"
        },
        {
            "title" : "Me Om",
            "id" : 4,
            "description" : "Hey i am don",
            "tag" : "@tass"
        },
    ]

    let [notes , setNotes] = useState(initialData)

    let addNote = (note) => {
        setNotes(notes.concat(note))
    }

    return (
        <NoteContext.Provider value={{notes , addNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState