import { useState } from 'react';
import './App.css';
import Createnote from './components/Createnote';
import Navbar from './components/Navbar';
import Note from './components/Note';

function App() {

  const [notes, setNotes] = useState([]);
  const [showCreateNote, setShowCreateNote] = useState(false);


  return (
    <div className="App">
      <Navbar setShowCreateNote={setShowCreateNote}/>
      <div className='noteContainer'>
        <Note />
        {showCreateNote && <Createnote />}
      </div>
        
    </div>
  );
}

export default App;
