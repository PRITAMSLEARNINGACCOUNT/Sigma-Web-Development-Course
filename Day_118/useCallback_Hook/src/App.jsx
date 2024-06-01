import { useState, useCallback } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const PropFunc = useCallback(() => {
    console.log("I am prop Function Memoized By useCallback Hook.");
  }, []);

  return (
    <>
      <Navbar Props_Value={PropFunc} />
      <div className="Counter">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count Is - {count}
        </button>
      </div>
    </>
  );
}

export default App;
