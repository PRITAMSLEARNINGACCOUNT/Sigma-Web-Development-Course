import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
function App() {
  const [Value, setValue] = useState(0);
  return (
    <div className="App">
      <Navbar Count_Value={Value} />
      <div className="d-flex justify-content-center align-items-center custom-div">
        <div>
          <button
            type="button"
            id="Increase"
            className="btn btn-primary btn-lg btn-circle mr-3"
            onClick={() => {
              setValue(Value + 1);
            }}
          >
            +
          </button>
          <button
            type="button"
            id="Decrease"
            className="btn btn-primary btn-lg btn-circle ml-3"
            onClick={() => {
              setValue(Value - 1);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
