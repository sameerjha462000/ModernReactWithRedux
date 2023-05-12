import BookShow from "./BookShow";
import { useContext } from "react";
import BookContext from "../context/books";

function BookList() {
  const data = useContext(BookContext);

  const renderedBooks = data.books.map((book) => {
    return <BookShow book={book} key={book.id} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
