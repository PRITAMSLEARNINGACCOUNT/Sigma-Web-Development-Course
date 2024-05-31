import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Counter from "./Components/Counter";
import Context from "./Context_API";
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

export default App;
