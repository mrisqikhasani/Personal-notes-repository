import React from "react";
import NoteItem from "./NotesCard/NoteItem";

function NotesList({ notes, onDelete, onArchieveNotes, onActiveNotes }) {
  return (
    <div className="notes-list">
      {notes.length !== 0 ? (
        notes.map((note) => (
          <NoteItem
            id={note.id}
            key={note.id}
            onDelete={onDelete}
            onArchieveNotes={onArchieveNotes}
            onActiveNotes={onActiveNotes}
            {...note}
          />
        ))
      ) : (
        <p>No Available Notes </p>
      )}
    </div>
  );
}

export default NotesList;
