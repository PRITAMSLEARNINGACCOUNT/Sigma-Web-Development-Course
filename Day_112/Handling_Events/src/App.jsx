import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function HandleHover() {
    document.title = "Handled Mouse Over Event";
  }
  const [object, setobject] = useState({ email: "", password: "" });
  function HandleChange(e) {
    /*
    Recommended Usecase --->Try To Use This Instead Of What Has Shown Below This Usecase (Usecase - 1 )
    setobject({ ...object, [e.target.name]: e.target.value });
    setobject({ [e.target.name]: e.target.value });  -->This Will Completely Replace The Main Initial Object,Hence It Will Definately Throw An Error
    */
    setobject({ email: e.target.value, password: object.password }); //----->Not Recommended (Usecase 2)
  }
  function HandleChange_2(event) {
    setobject({ email: object.email, password: event.target.value }); //----->Not Recommended (Usecase 2)
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            onMouseOver={HandleHover}
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <input
        type="email"
        /* name="email"
        onChange={HandleChange} --->Usecase 1*/
        onChange={HandleChange} // --->Usecase 2
        value={object.email}
      />
      <input
        type="password"
        /* name="password"
        onChange={HandleChange} --->Usecase 1*/
        onChange={HandleChange_2} // --->Usecase 2
        value={object.password}
      />
    </>
  );
}

export default App;
