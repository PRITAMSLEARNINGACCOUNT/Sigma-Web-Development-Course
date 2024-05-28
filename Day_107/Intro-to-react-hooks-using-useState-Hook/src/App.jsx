import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>The Count Value Is {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Count By 1
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement Count By 1
      </button>
      <button
        onClick={() => {
          setCount(count ** 2);
        }}
      >
        Exponent Count By 2
      </button>
    </>
  );
}

export default App;
