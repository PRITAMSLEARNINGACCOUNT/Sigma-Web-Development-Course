import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const btn_ref = useRef();
  let UseCase_2 = useRef(0);
  useEffect(() => {
    // Persisting The Value Without Even Making It A State Or Re-Rendering The Component Again And Again
    // Don't Use This On A Component As It Doesn't Re-Render A Component Completely It Just Changes A Value Behind The Scene In A Javascript Code Not In The Component As We Already Have States For That Specific Work.
    alert("Usecase 2 Of useRefThe Value Is " + UseCase_2.current);
  });

  function handleclick() {
    btn_ref.current.click();
    UseCase_2.current += 1;
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          ref={btn_ref}
          style={{ display: "none" }}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <button onClick={handleclick}>
          useRef UseCase 1 Count Value Is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
