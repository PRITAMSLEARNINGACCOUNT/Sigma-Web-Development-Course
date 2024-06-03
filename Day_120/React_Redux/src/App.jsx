// import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./Redux_Files/Reducers_With_Action_Creators";
import Navbar from "./Components/Navbar";
import { useDispatch } from "react-redux";
function App() {
  // const Value = useSelector((state) => state.Reducers.value);
  const Dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <div className="main">
        <h1>Demonstration</h1>
        <div className="card">
          <button
            onClick={() => {
              Dispatch(increment());
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              Dispatch(decrement());
            }}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              Dispatch(incrementByAmount(20));
            }}
          >
            Increment By 20
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
