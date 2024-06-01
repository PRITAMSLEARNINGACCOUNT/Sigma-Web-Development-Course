import { memo } from "react";
function Navbar({ Props_Value }) {
  console.log("Navbar Is Rendering");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {/* {Props_Value} */}
          useCallback Hook
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="form-inline my-2 my-lg-0">
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={() => {
            Props_Value();
          }}
        >
          Click Me For useCallback
        </button>
      </div>
    </nav>
  );
}

export default memo(Navbar);
