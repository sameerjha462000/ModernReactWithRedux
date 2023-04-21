import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";
import { useState } from "react";
import "./AnimalShow.css";
// function AnimalShow({ type, color }) {
// return <div className={color}>{type}</div>;
// }

const animalMap = {
  bird: bird,
  cat: cat,
  cow: cow,
  dog: dog,
  gator: gator,
  heart: heart,
  horse: horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  function handleClick() {
    setClicks(clicks + 1);
  }

  return (
    <div className="animal-show" onClick={handleClick}>
      <img src={animalMap[type]} alt={type + " image"} className="animal" />
      <img
        src={heart}
        alt="heart-image"
        className="heart"
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
