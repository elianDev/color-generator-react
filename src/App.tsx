import React from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

declare global {
  interface Value {
    rgb: number[];
    weight: number;
    hex: string;
  }
}

function App() {
  const [color, setColor] = React.useState("");
  const [error, setError] = React.useState(false);
  const [list, setList] = React.useState<Value[]>(
    new Values("#f15025").all(10),
  );

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={({ target }) => setColor(target.value)}
            placeholder="#000000"
            className={`${error ? "error" : ""} `}
          />
          <button className="btn">Submit</button>
        </form>
      </section>
      ;
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
