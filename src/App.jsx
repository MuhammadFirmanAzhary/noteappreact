import React, { useState } from 'react';
import './style.css';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { getInitialData } from './data';  

function App() {
  const [notes, setNotes] = useState(getInitialData());  // Gunakan data dari utils sebagai initial state

  return (
    <div className="container">
      <h1>Aplikasi Catatan Pribadi</h1>
      <NoteForm setNotes={setNotes} notes={notes} />
      <NoteList notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
