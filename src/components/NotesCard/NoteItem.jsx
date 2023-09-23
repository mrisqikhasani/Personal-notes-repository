import React from "react";
import { showFormattedDate } from "../../utils";

function NoteItem({
  id,
  title,
  createdAt,
  body,
  onDelete,
  archived,
  onArchieveNotes,
  onActiveNotes,
}) {
  const handleDeleteClick = () => {
    onDelete({ id });
  };

  const handleArchieveClick = () => {
    onArchieveNotes({ id });
  };

  const handleActiveClick = () => {
    onActiveNotes({ id });
  };

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button
          onClick={handleDeleteClick}
          className="note-item__delete-button"
        >
          Delete
        </button>
        {archived ? (
          <button
            onClick={handleActiveClick}
            className="note-item__archive-button"
          >
            Move
          </button>
        ) : (
          <button
            onClick={handleArchieveClick}
            className="note-item__archive-button"
          >
            Archieve
          </button>
        )}
      </div>
    </div>
  );
}

export default NoteItem;
