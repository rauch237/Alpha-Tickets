import React from "react";
import "./navbar.css";

const Navbar = ({ setShowForm }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/images/ALT2.png" alt="Logo" />
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
          <ul className="navbar-nav mx-auto">
            <li className="nav-item px-3">
              <a className="nav-link " href="/" style={{ color: "black" }}>
                <b>Home</b>
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/about" style={{ color: "black" }}>
                <b>About</b>
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className="nav-link"
                href="/services"
                style={{ color: "black" }}
              >
                <b>Events</b>
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className="nav-link"
                href="/contact"
                style={{ color: "black" }}
              >
                <b>Contact</b>
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/faq" style={{ color: "black" }}>
                <b>FAQ</b>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-3">
              <a
                className="btn btn-outline login-btn"
                href="#"
                onClick={() => setShowForm(true)}
              >
                <b>Login</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
