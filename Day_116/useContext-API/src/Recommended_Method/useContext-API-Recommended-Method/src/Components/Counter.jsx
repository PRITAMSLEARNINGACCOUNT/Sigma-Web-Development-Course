import { useContext } from "react";
import Context from "../Context_API";
function Counter() {
  const { setCount, count } = useContext(Context);
  return (
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
  );
}

export default Counter;
