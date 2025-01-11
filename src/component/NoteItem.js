import React from 'react'

export default function NoteItem(props) {
    let {note} = props

  return (
    <div>   
        <div className="card">
            <div className="card-body">
                <h5 className="card-title"><b>Title :</b>{note.title}</h5>
                <h6 className='card-text'><b>Tag :</b>{note.tag}</h6>

                <p className="card-text">{note.description}</p>
                
            </div>
        </div>
    </div>
  )
}
