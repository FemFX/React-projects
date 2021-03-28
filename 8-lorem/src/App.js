import React, { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < count; i++) {
      setText([text, ...data]);
    }
  };
  return (
    <>
      <section className="section-center">
        <h3>Tired of boring lorem ipsum?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amonut">Paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit" className="btn  ">
            Generate
          </button>
        </form>
        <article className="lorem-text">
          <p>{text}</p>
        </article>
      </section>
    </>
  );
};
export default App;
