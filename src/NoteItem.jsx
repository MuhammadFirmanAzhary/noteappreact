import React from 'react';
import { showFormattedDate } from './data';  

function NoteItem({ note, setNotes }) {
  const handleDelete = () => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== note.id));
  };

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <p><strong>Tanggal:</strong> {showFormattedDate(note.createdAt)}</p>  {/* Tampilkan tanggal yang diformat */}
      <button onClick={handleDelete}>Hapus</button>
    </div>
  );
}

export default NoteItem;
