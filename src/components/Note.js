import React from 'react'

export default function Note({title , content, id, notes, setNotes}) {


  const handleDeleteNote = () => {
    const updatedNotes = notes.filter(note => note.id !== id)
    setNotes(updatedNotes)
  }

  return (
    <>
      <div className='note'>
          <h2>{title}</h2>
          <p>{content}</p>
          <div className='noteButtonWrapper'>
              <button>Edit</button>
              <button onClick={() => handleDeleteNote(id)}>Delete</button>
          </div>
          
      </div>
    </>
  )
}
