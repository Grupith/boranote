import './App.css';
import Navbar from './components/Navbar';
import Note from './components/Note';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='noteContainer'>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
        
    </div>
  );
}

export default App;
