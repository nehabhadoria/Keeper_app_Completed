import React, { useState } from "react";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false); // To track edit mode
  const [editTitle, setEditTitle] = useState(props.title); // Editable title
  const [editContent, setEditContent] = useState(props.content); // Editable content

  // Toggle editing mode
  function handleEdit() {
    setIsEditing(true);
  }

  // Save the changes and call the onUpdate function
  function handleSave() {
    props.onUpdate(props.id, editTitle, editContent); // Send updated values to parent
    setIsEditing(false); // Exit edit mode
  }

  // Delete the note
  function handleDelete() {
    props.onDelete(props.id);
  }
  // console.log(props.id);
  return (
    <div className="note">
      {isEditing ? (
        <>
          {/* Editable title */}
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          {/* Editable content */}
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
        </>
      ) : (
        <>
          {/* Static title and content */}
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </>
      )}

      {/* Show either Save or Edit button based on mode */}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}

      {/* Delete button remains the same */}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Note;
