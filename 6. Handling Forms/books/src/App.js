import BookCreate from "./components/BookCreate";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const CreateBook = (title) => {
    console.log("Need to add book title", title);
  };

  return (
    <div>
      <BookCreate onCreate={CreateBook} />
    </div>
  );
}

export default App;
