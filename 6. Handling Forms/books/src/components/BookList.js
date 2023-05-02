import BookShow from "./BookShow";

function BookList({ books, onDelete, onChange }) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        id={book.id}
        book={book}
        onDelete={onDelete}
        onChange={onChange}
      />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
