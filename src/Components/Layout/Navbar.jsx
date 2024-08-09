import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid justify-content-center">
        <Link className="navbar-brand mx-4" to="/">
          MyApp
        </Link>
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
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <Link className="nav-link active" aria-current="page" to="/">
                1. Sayfa
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/about">
                2. Sayfa
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/contact">
                3. Sayfa
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
