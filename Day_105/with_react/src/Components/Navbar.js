import React from "react";

const Navbar = ({ Count_Value }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          React Counter
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

        <div className="form-check form-switch mx-3">
          <span className="badge bg-primary rounded-pill p-2 fs-3">
            <strong id="Count_Value">{Count_Value}</strong>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
