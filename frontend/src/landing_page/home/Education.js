import React from "react";

function Education() {
  return (
    <div className="container my-5">
      <div className="row p-4 align-items-center">

        {/* Image Section */}
        <div className="col-lg-6 col-sm-12 text-center mb-4">
          <img
            src="/media/images/education.svg"
            alt="Education"
            style={{ width: "90%", maxWidth: "450px" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6 col-sm-12">
          <h1 className="fs-2 fw-bold">Learn Trading the Right Way</h1>

          <p className="mb-3">
            FinEdge Academy provides complete, beginner-to-advanced learning 
            covering stock markets, trading strategies, technical analysis,
            and long-term investing — all **free**.
          </p>

          <a href="#" className="fw-semibold" style={{ textDecoration: "none", color: "#0066ff" }}>
            FinEdge Academy <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p className="mb-3 mt-4">
            Join the FinEdge Community — a growing network of traders and investors
            where you can ask questions, discuss strategies, and learn from real experiences.
          </p>

          <a href="#" className="fw-semibold" style={{ textDecoration: "none", color: "#0066ff" }}>
            FinEdge Community <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;
