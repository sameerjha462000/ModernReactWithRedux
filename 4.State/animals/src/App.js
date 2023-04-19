import AnimalShow from "./AnimalShow";

export default function App() {
  const handleMouseOver = () => {
    console.log("I was clicked...");
  };
  return (
    <div>
      <h1>Show animal list here!</h1>;
      <button className="btn btn-info btn-lg" onMouseOver={handleMouseOver}>
        Click me
      </button>
      <AnimalShow />
    </div>
  );
}
