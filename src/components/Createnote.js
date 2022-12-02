import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function Createnote({notes, setNotes, setShowCreateNote}) {

    const [title, setTitle] = useState()
    const [content, setContent] = useState()

    const handleCreateNote = (e) => {
        e.preventDefault();
        const newNote = {
            id: uuidv4(),
            title: title,
            content: content,
            date_created: new Date()
        }

        const updatedArray = [...notes, newNote]
        setNotes(updatedArray)
        setContent('')
        setTitle('')
        setShowCreateNote(false)
    }
  return (
    <form onSubmit={handleCreateNote} className='createNote'>
        <input onChange={e => setTitle(e.target.value)} placeholder='Title' />
        <textarea required onChange={e => setContent(e.target.value)} placeholder='Note' />
        <button type='Submit'>Done</button>
    </form>
  )
}
