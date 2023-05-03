import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onChange }) {
  // showEdit is a state which decides if the edit form would be shown or not
  // Initially it would be set to false
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  // handleSave will be used to toggle the form as soon as the user clicks the save button and send the id of the book to be changed to onChange
  const handleSave = (id, title) => {
    setShowEdit(false);
    onChange(id, title);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) content = <BookEdit book={book} onSave={handleSave} />;

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
