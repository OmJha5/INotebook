import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const [state , setState] = useState({
        "name" : "harry",
        "class" : "5b",
    })

    const update = () => {
        setTimeout(() => {
            setState({
                "name" : "Om",
                "class" : "12a",
            })
        } , 1000)
    }

    return (
        <NoteContext.Provider value={{state , update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState