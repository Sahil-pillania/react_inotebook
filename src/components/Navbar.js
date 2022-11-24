import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    //console.log(location.pathname);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <b>iNotebook</b>
        </Link>
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
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                aria-current="page"
                to="/About"
              >
                About
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <NavLink to="/login">
              <button className="btn btn-outline-success mx-3" type="submit">
                Login
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button className="btn btn-outline-warning" type="submit">
                Signup
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
