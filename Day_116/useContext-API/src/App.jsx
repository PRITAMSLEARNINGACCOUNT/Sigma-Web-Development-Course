import { useState, createContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Counter from "./Components/Counter";
// import Context from "./Context_API"; --->Another & Recommended Method
const Context = createContext();
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Context.Provider value={{ count, setCount }}>
        <Navbar />
        <Counter />
      </Context.Provider>
    </>
  );
}

export { App, Context };
