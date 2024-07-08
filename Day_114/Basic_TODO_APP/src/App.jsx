import { useState } from "react";
import Navbar from "./Components/Navbar";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Todos from "./Components/Todos";
import { Todo_Context } from "./Context/Todo_Context";
function App() {
  const [progress, setProgress] = useState(0);
  const [Note, SetNote] = useState(false);
  const [Notes, SetNotes] = useState([]);
  const [Todo, setTodo] = useState("");
  const [Desc, setDesc] = useState("");
  return (
    <>
      <BrowserRouter>
        <Todo_Context.Provider
          value={{
            Note,
            SetNote,
            Notes,
            SetNotes,
            Todo,
            setTodo,
            Desc,
            setDesc,
          }}
        >
          <div className="min-h-screen relative bg-blue-100">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home setProgress={setProgress} />} />
              <Route
                path="/Todos"
                element={<Todos setProgress={setProgress} />}
              />
            </Routes>
          </div>
          <LoadingBar
            color="#f11946"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
        </Todo_Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
