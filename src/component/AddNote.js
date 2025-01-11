import React , {useContext , useState} from 'react'
import NoteContext from '../Context/Note/NoteContext'
import "../style.css"

export default function AddNote() {
    let {addNote} = useContext(NoteContext)

    let [note , setNote] = useState({
        "title" : "",
        "id" : 0,
        "description" : "",
        "tag" : ""
    },)


    let onChange = (e) => {
        setNote({ ...note , [e.target.name] : e.target.value })
    }

    let onClick = (e) => {
        e.preventDefault()
        addNote(note)
    }


  return (
    <div className="AddNote">
        <h1>Add Your Note</h1>
        <form action="">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="email" className="form-control" id="title" name='title' placeholder="Enter Title for your Note" onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="email" className="form-control" id="tag" name = "tag" placeholder="Enter Tag for your Note" onChange={onChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Enter Description for your Note</label>
                <textarea className="form-control" id="description" name='description' rows="5" onChange={onChange}></textarea>
            </div>

            <button type="button" class="btn btn-primary" onClick={onClick}>Primary</button>
            
        </form>

    </div>
  )
}
