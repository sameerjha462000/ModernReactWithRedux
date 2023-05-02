import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  // as soon as user submits the form, we receive the title of the book that he wants to create
  // this function takes the title and then updates the book array
  const CreateBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];

    // now we need to update the books state
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    // now update the books state
    setBooks(updatedBooks);
  };

  // onChange will take the id and the new title of the book and then change the title of the
  // book with the received title
  const handleChange = (id, title) => {
    for (let i = 0; i < books.length; i++) {
      if (books[i].id === id) books[i].title = title;
    }

    const updatedBooks = [...books];

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList
        books={books}
        onDelete={deleteBookById}
        onChange={handleChange}
      />
      <BookCreate onCreate={CreateBook} />
    </div>
  );
}

export default App;
