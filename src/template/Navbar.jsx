import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            My Store
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
                <NavLink  className={({isActive})=>(isActive ? "active nav-link " : "nav-link")}  to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className={({isActive})=>(isActive ? "active nav-link " : "nav-link")} to="products">
                  Product's
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=>(isActive ? "active nav-link " : "nav-link")} to="cart">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className={({isActive})=>(isActive ? "active nav-link " : "nav-link")} to="login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
