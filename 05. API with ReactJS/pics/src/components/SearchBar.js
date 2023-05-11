import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setTerm(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // sending the search term to the App.js after the user presses enter key
    props.onSubmit(term);

    setTerm("");
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Enter Search Term</label>
        <input type="text" value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
