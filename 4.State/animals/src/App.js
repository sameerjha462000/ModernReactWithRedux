import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  const index = Math.floor(Math.random() * animals.length);

  return animals[index];
}

export default function App() {
  const [animals, setAnimals] = useState([]);

  // as soon as i click on the button i want a new animal to be added to the animals
  function handleClick() {
    const newAnimal = getRandomAnimal();
    setAnimals([...animals, newAnimal]);
  }

  const renderedAnimals = animals.map((animal, index) => {
    const colors = [
      "text-info",
      "text-primary",
      "text-danger",
      "text-secondary",
      "text-success",
    ];
    const randIndex = Math.floor(Math.random() * colors.length);

    return <AnimalShow type={animal} color={colors[randIndex]} />;
  });

  return (
    <div className="app">
      <button className="btn btn-info btn-lg" onClick={handleClick}>
        Add Animal
      </button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}
