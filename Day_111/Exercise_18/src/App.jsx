import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [Result, setResult] = useState([]);
  async function Fetch() {
    let result = await fetch("https://jsonplaceholder.typicode.com/posts");
    result = await result.json();
    setResult(result);
  }
  useEffect(() => {
    Fetch();
  }, []);

  return (
    <>
      <div className="grid">
        {Result.map((element) => {
          return (
            <div
              className="card"
              key={element.id}
              style={{ width: "18rem", minHeight: "40vh" }}
            >
              {/* <img className="card-img-top" src="..." alt="Card image" /> */}
              <div className="id">{element.id}</div>
              <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">{element.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
