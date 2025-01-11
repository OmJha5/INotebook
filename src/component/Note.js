import React , {useContext , useEffect} from 'react'
import NoteContext from '../Context/Note/NoteContext'
import NoteItem from "./NoteItem.js"

export default function Note() {
    let {notes , setNote} = useContext(NoteContext)

  return (
    <div style={{margin : "2rem 0px" , padding : "2rem"}}>
        
        <h1>Your Notes</h1>

        <div className="row">
            {notes.map((note) => {
                return <div className="col-md-3" key={note.id}>
                    <NoteItem note={note} />
                </div>
            })}
        </div>

    </div>
  )
}
