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
        {showCreateNote && <Createnote notes={notes} setNotes={setNotes} setShowCreateNote={setShowCreateNote} />}
        {notes.map((note) => <Note key={note.id} id={note.id} title={note.title} content={note.content}/>)}
      </div>
        
    </div>
  );
}

export default App;
