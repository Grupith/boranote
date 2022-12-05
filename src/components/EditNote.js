import React from 'react'

export default function EditNote() {
  return (
    <div className='editNote'>
      <h2>Edit Note</h2>
      <input placeholder='Title'/>
      <textarea />
          <div>
              <span>Cancel</span>
              <button>Confirm</button>
          </div>
    </div>
  )
}
