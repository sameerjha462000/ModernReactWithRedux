import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

const Provider = (props) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    console.log(response);

    setBooks((books) => response.data);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    // before updating the books state, we need to delete it from the database
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    // console.log(response);

    // const updatedBooks = [
    //   ...books,
    //   {
    //     id: Math.round(Math.random() * 9999),
    //     title,
    //   },
    // ];

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const objectToShare = {
    books,
    createBook,
    editBookById,
    deleteBookById,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={objectToShare}>
      {props.children}
    </BooksContext.Provider>
  );
};

export { Provider };
export default BooksContext;

// Every context has 2 props -- Consumer and Provider
