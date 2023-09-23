import React from "react";
import Header from "./Header";
import BodySection from "./BodySection";
import { getInitialData } from "../utils/index";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
    this.onArchieveNotesHandler = this.onArchieveNotesHandler.bind(this);
    this.onActiveNotesHandler = this.onActiveNotesHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  // add handler
  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toDateString(),
            archieve: false,
          },
        ],
      };
    });
  }

  onDeleteNotesHandler({ id }) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  // handle to change archieve
  onArchieveNotesHandler({ id }) {
    const archieveNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: true };
      }
      return note;
    });
    this.setState({ notes: archieveNotes });
  }

  onActiveNotesHandler({ id }) {
    const activeNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: false };
      }
      return note;
    });

    this.setState({ notes: activeNotes });
  }

  onSearchHandler(e) {
    e.preventDefault();
    const noteSearch = e.target.value.toLowerCase();
    this.setState({ search: noteSearch });
  }

  render() {
    const filteredNotes = this.state.search
      ? this.state.notes.filter((note) =>
          note.title.toLowerCase().includes(this.state.search.toLowerCase())
        )
      : this.state.notes;

    const archiveNotes = filteredNotes.filter((note) => note.archived);
    const activeNotes = filteredNotes.filter((note) => !note.archived);

    return (
      <>
        <Header onSearchHandler={this.onSearchHandler} />
        <BodySection
          activeNotes={activeNotes}
          archieveNote={archiveNotes}
          addNotes={this.onAddNotesHandler}
          onDelete={this.onDeleteNotesHandler}
          onArchieveNotes={this.onArchieveNotesHandler}
          onActiveNotes={this.onActiveNotesHandler}
        />
      </>
    );
  }
}

export default NotesApp;
