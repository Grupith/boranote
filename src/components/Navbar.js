import React from 'react'
import { GiHamburgerMenu  } from "react-icons/gi";

export default function Navbar({ setShowCreateNote }) {


  return (
    <nav className='navbar'>
        <h1 className='title'>Boranote</h1>
        <div className='navWrapper'>
            <button onClick={() => {setShowCreateNote(prevCheck => !prevCheck)}}>Create note</button>
            <GiHamburgerMenu size={36} className='hamburgerMenu'/>
        </div>
        
    </nav>
  )
}
