import { NavLink } from "react-router-dom";
function Navbar_2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          React Router
        </NavLink>
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
              <NavLink
                className={(e) => {
                  return e.isActive ? "custom-nav" : "nav-link";
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(e) => {
                  return e.isActive ? "custom-nav" : "nav-link";
                }}
                to="/About"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(e) => {
                  return e.isActive ? "custom-nav" : "nav-link";
                }}
                to="/UserInfo/:User"
              >
                UserInfo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar_2;
