import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  // Function to add a new note
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  // Function to delete a note
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => index !== id);
    });
  }

  // Function to update a note (edit functionality)
  function updateNote(id, updatedTitle, updatedContent) {
    setNotes((prevNotes) =>
      prevNotes.map((note, index) =>
        index === id
          ? { ...note, title: updatedTitle, content: updatedContent }
          : note
      )
    );
  }

  return (
    <div>
      <Header />

      {/* Notes creation and display area */}
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
          onUpdate={updateNote} // Pass the updateNote function as onUpdate
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
