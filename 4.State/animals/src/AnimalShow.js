function AnimalShow({ type, color }) {
  return <div className={color + " display-2"}>{type}</div>;
}

export default AnimalShow;
