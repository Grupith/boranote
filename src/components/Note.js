import React from 'react'

export default function Note({title , content}) {
  return (
    <div className='note'>
        <h1>{title}</h1>
        <p>{content}</p>
        <div className='noteButtonWrapper'>
            <button>Edit</button>
            <button>Delete</button>
        </div>
        
    </div>
  )
}
