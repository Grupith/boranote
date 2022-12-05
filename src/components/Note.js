import React, { useState } from 'react'
import EditNote from './EditNote'

export default function Note({title , content, id, notes, setNotes}) {

  const [isEditing, setIsEditing] = useState(false)

  const handleDeleteNote = () => {
    const updatedNotes = notes.filter(note => note.id !== id)
    setNotes(updatedNotes)
  }

  return (
    <>
      {!isEditing ? <div className='note'>
          <h1>{title}</h1>
          <p>{content}</p>
          <div className='noteButtonWrapper'>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={() => handleDeleteNote(id)}>Delete</button>
          </div>
          
      </div> : <EditNote />}
    </>
  )
}
