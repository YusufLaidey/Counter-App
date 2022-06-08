import { Fragment } from "react";
import React, { useState } from "react";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      <div>
        <h1>Counter App</h1>
        <div>
          <h2>{count}</h2>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)} disabled={count === 0}>
            Decrement
          </button>
          <button onClick={() => setCount(0)} disabled={count === 0}>
            Reset
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
