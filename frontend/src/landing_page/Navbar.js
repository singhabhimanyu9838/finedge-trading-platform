import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom shadow-sm" style={{ backgroundColor: "#ffffff" }}>
      <div className="container p-2">
        
        
        <Link className="navbar-brand d-flex align-items-center" to="/">
  <img
    src="/media/images/logo.png"
    style={{ height: "80px", objectFit: "contain" }}
    alt="FinEdge Logo"
  />
</Link>


        {/* Mobile Menu Toggler */}
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

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="http://localhost:3001">
                Dashboard
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/about">
                Our Vision
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/product">
                Trading Tools
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/pricing">
                Plans & Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/support">
                Help Center
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/signup" className="btn btn-primary px-4 ms-3 fw-semibold">
                Sign In / Sign Up
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
