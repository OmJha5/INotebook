import React , {useContext , useEffect} from 'react'
import NoteContext from '../Context/Note/NoteContext'

export default function NoteItem(props) {
    let {note} = props
    let {deleteNote} = useContext(NoteContext)

  return (
    <div>   
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title"><b>Title :</b>{note.title}</h5>
                <h5 className='card-text'><b>Tag :</b>{note.tag}</h5>

                <p className="card-text">{note.description}</p>

                <button type="button btn-sm" class="btn btn-danger" onClick={() => {deleteNote(note.id)}}>Delete</button>
                <button type="button" class="btn btn-success mx-3">Edit</button>
            </div>
        </div>
    </div>
  )
}
