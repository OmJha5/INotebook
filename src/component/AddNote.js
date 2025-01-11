import React from 'react'
import "../style.css"

export default function AddNote() {
  return (
    <div className="AddNote">
        <h1>Add Your Note</h1>
        <form action="">
            <div className="mb-3">
                <label for="title" className="form-label">Title</label>
                <input type="email" className="form-control" id="title" name='title' placeholder="Enter Title for your Note"/>
            </div>
            <div className="mb-3">
                <label for="tag" className="form-label">Tag</label>
                <input type="email" className="form-control" id="tag" name = "tag" placeholder="Enter Tag for your Note"/>
            </div>
            <div className="mb-3">
                <label for="description" className="form-label">Enter Description for your Note</label>
                <textarea className="form-control" id="description" name='description' rows="5"></textarea>
            </div>
        </form>

    </div>
  )
}
