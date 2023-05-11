import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./components/api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    // console.log("The user searched for", data);
    const result = await searchImages(term);

    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
