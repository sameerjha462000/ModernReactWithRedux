import { useState } from "react";

function BookEdit({ book, onChange, onSave }) {
  const [enteredTitle, setEnteredTitle] = useState(book.title);

  // as soon as user clicks save button i want to change the title of the book and then
  // close the form
  const handleSubmit = (event) => {
    event.preventDefault();
    onChange(book.id, enteredTitle);
    onSave();
  };

  const handleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={enteredTitle} onChange={handleChange} />
      <button className="button is-primary" type="submit">
        Save
      </button>
    </form>
  );
}

export default BookEdit;
