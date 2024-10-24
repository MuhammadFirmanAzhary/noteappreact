import NoteItem from './NoteItem';

function NoteList({ notes, setNotes }) {
  return (
    <div>
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem key={note.id} note={note} setNotes={setNotes} />
        ))
      ) : (
        <p>Tidak ada catatan</p>
      )}
    </div>
  );
}

export default NoteList;
