import { useContext } from "react";
import { Context } from "../App";
function Navbar() {
    const {count} = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Counter
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/About">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch mx-3">
          <span className="badge bg-primary rounded-pill p-2 fs-3">
            <strong>{count}</strong>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
