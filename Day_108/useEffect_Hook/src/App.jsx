import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar Count_Value={count} />
      <div className="d-flex justify-content-center align-items-center custom-div">
        <div>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-circle mr-3"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-circle ml-3"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
