import React from "react";
import NotesList from "./NotesList";
import FormInput from "./FormInput";

function BodySection({
  activeNotes,
  archieveNote,
  addNotes,
  onDelete,
  onArchieveNotes,
  onActiveNotes,
}) {
  return (
    <div className="note-app__body">
      <div className="note-input">
        <h2>Create Notes</h2>
        <FormInput addNotes={addNotes} />
      </div>
      <h2>Active Notes</h2>
      <NotesList
        key={"Active Notes"}
        notes={activeNotes}
        onDelete={onDelete}
        onArchieveNotes={onArchieveNotes}
        onActiveNotes={onActiveNotes}
      />
      <h2>Archieve Notes</h2>
      <NotesList
        key={"archieve Notes"}
        notes={archieveNote}
        onDelete={onDelete}
        onArchieveNotes={onArchieveNotes}
        onActiveNotes={onActiveNotes}
      />
    </div>
  );
}

export default BodySection;
