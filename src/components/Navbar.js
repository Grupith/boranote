import React from 'react'
import { GiHamburgerMenu  } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1 className='title'>Boranote</h1>
        <div className='navWrapper'>
            <button>Create note</button>
            <GiHamburgerMenu size={36} className='hamburgerMenu'/>
        </div>
        
    </nav>
  )
}
