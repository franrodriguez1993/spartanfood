import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/Accesories/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          SPARTAN FOOD
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="location">
                Location
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="aboutus">
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
