import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function Createnote({notes, setNotes}) {

    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [date, setDate] = useState()

    const handleCreateNote = (e) => {
        e.preventDefault();
        const newNote = {
            id: uuidv4(),
            title: title,
            content: content,
            date_created: new Date().getDate
        }

        const updatedArray = [...notes, newNote]
        setNotes(updatedArray)

    }
  return (
    <form onSubmit={handleCreateNote} className='createNote'>
        <input onChange={e => setTitle(e.target.value)} placeholder='Title' />
        <textarea onChange={e => setContent(e.target.value)} />
        <button type='submit'>Done</button>
    </form>
  )
}
