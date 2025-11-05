import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="container my-5 py-5">
      <div className="row text-center justify-content-center">

        {/* Hero Image */}
        <img
          src="/media/images/homeHero.png"
          alt="FinEdge Hero"
          className="mb-4"
          style={{ maxWidth: "600px", width: "90%" }}
        />

        {/* Heading */}
        <h1 className="fw-bold mt-4" style={{ fontSize: "2.5rem" }}>
          Trade Smarter. Grow Faster.
        </h1>

        {/* Subtext */}
        <p className="mt-3 mb-4" style={{ fontSize: "1.1rem", color: "#555" }}>
          A modern and intuitive platform to trade stocks, derivatives, mutual funds, and more —
          built for both beginners and experienced traders.
        </p>

        {/* Signup CTA Button */}
        <Link
          to="/signup"
          className="btn btn-primary fs-5"
          style={{ width: "220px", borderRadius: "6px", padding: "12px 0" }}
        >
          Create Free Account
        </Link>

      </div>
    </div>
  );
}

export default Hero;
