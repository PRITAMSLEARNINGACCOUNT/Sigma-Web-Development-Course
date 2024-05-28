import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [Value, setValue] = useState(true);
  const [Toggle, setToggle] = useState(false);
  const [List, DemoList] = useState([
    { name: "Pritam", title: "Saha" },
    { name: "Shuvo", title: "Hahakar" },
    { name: "Debu", title: "Roy" },
    { name: "Swati", title: "Madduney" },
    { name: "Hello", title: "World" },
  ]);
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
          onClick={() => {
            setToggle(!Toggle);
            setValue(!Value);
          }}
        >
          Toggle The Button
        </button>
        {Toggle && (
          <button onClick={() => setCount((count) => count + 1)}>
            count 1 is {count}
          </button>
        )}
        {Value ? (
          <button onClick={() => setCount((count) => count + 1)}>
            count 2 is {count}
          </button>
        ) : (
          "Button Is Disabled Toggle It To Enable"
        )}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {List.map((ele) => {
        return (
          <div key={ele.name} className="container">
            {ele.name}
            {ele.title}
          </div>
        );
      })}
    </>
  );
}

export default App;
