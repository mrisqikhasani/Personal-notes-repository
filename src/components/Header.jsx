import React from "react";

function Header({ onSearchHandler }) {
  return (
    <div className="note-app__header">
      <h1>Notes App</h1>
      <div className="note-search">
        <input type="text" placeholder="Search Notes.." onChange={(e) => onSearchHandler(e)}/>
      </div>
    </div>
  );
}

export default Header;
