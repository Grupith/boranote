import React from 'react'

export default function EditNote({ setIsEditing, title, content }) {
  return (
    <div className='editNote'>
      <h2>Edit Note</h2>
      <input placeholder='Title'/>
      <textarea />
          <div>
              <span onClick={() => setIsEditing(false)}>Cancel</span>
              <button onClick={() => setIsEditing(false)}>Confirm</button>
          </div>
    </div>
  )
}
