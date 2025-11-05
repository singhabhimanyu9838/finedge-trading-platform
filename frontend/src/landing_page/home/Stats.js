import React from "react";

function Stats() {
  return (
    <div className="container my-5 py-5">
      <div className="row">

        {/* Text Section */}
        <div className="col-lg-6 col-sm-12 p-4">
          <h1 className="fs-2 fw-bold mb-4">Trusted by Serious Traders</h1>

          <h2 className="fs-5 fw-semibold">Customer-first experience</h2>
          <p className="text-muted mb-4">
            Over 1.3+ crore investors rely on FinEdge for secure, stable, and transparent market access.
          </p>

          <h2 className="fs-5 fw-semibold">No spam. No gimmicks.</h2>
          <p className="text-muted mb-4">
            No gamification, unwanted notifications, or distractions.  
            Just clean, fast, and reliable trading tools — designed to help you stay focused.
          </p>

          <h2 className="fs-5 fw-semibold">The FinEdge Ecosystem</h2>
          <p className="text-muted mb-4">
            Beyond a trading app — FinEdge partners with innovative fintech companies 
            to offer powerful tools, research, insights, and automation capabilities.
          </p>

          <h2 className="fs-5 fw-semibold">Trade smarter with discipline</h2>
          <p className="text-muted">
            With features like **Risk Guard** and **Smart Risk Controls**, FinEdge helps you trade responsibly and improve long-term outcomes.
          </p>
        </div>

        {/* Image + Links Section */}
        <div className="col-lg-6 col-sm-12 p-4 text-center">
          <img
            src="/media/images/ecosystem.png"
            alt="FinEdge Ecosystem"
            style={{ width: "90%", maxWidth: "500px" }}
          />

          <div className="text-center mt-4">
            <a href="#" className="mx-4 fw-semibold" style={{ textDecoration: "none", color: "#0066ff" }}>
              Explore FinEdge Tools <i className="fa-solid fa-arrow-right"></i>
            </a>

            <a href="#" className="fw-semibold" style={{ textDecoration: "none", color: "#0066ff" }}>
              Try Demo Platform <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;
