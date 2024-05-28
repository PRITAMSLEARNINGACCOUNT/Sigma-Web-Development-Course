import { useEffect } from "react";

function Navbar(props) {
  //Every Time Render Case
  useEffect(() => {
    alert("Running On Every Navbar Render");
  });
  
  //First Time Render Case
  useEffect(() => {
    alert("Running On Only For First Time When Navbar Render");
  }, []);
  
  //On Value(Props Or It Can Be Something Else)Change Render Case
  useEffect(() => {
    alert("Running On Every Time Props Changes");
  }, [props.Count_Value]);
  
  //Cleanup Render Case
  useEffect(() => {
    return () => {
      alert("Running Because Navbar Is Dismounted");
    };
  }, []);

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
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch mx-3">
          <span className="badge bg-primary rounded-pill p-2 fs-3">
            <strong>{props.Count_Value}</strong>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
