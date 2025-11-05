import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-primary text-white py-5" id="supportHero" style={{ background: "#0066ff" }}>

      {/* Top Header */}
      <div className="d-flex justify-content-between align-items-center px-5">
        <h4 className="fw-semibold">FinEdge Support</h4>
        <a href="#" style={{ color: "white", textDecoration: "underline" }}>Track Ticket</a>
      </div>

      {/* Main Search Section */}
      <div className="row mx-5 mt-5">

        {/* Search / Quick Links */}
        <div className="col-lg-6 p-3 text-white">
          <h1 className="fs-3 fw-bold mb-3">
            Search for an answer or browse topics to create a ticket
          </h1>

          <input
            className="form-control form-control-lg my-3"
            placeholder="Eg. How do I activate F&O?"
            style={{ maxWidth: "450px", borderRadius: "6px" }}
          />

          <div className="mt-3 d-flex flex-wrap gap-3">
            <a href="#" className="text-white text-decoration-underline">Track Account Opening</a>
            <a href="#" className="text-white text-decoration-underline">Track Segment Activation</a>
            <a href="#" className="text-white text-decoration-underline">Intraday Trading Guide</a>
            <a href="#" className="text-white text-decoration-underline">FinEdge Web User Manual</a>
          </div>
        </div>

        {/* Featured Updates */}
        <div className="col-lg-6 p-3 text-white">
          <h5 className="fs-4 fw-semibold mb-3">Featured</h5>
          <ol style={{ lineHeight: "1.9" }}>
            <li><a href="#" className="text-white text-decoration-underline">Corporate Actions & Delisting - 2025</a></li>
            <li><a href="#" className="text-white text-decoration-underline">Updated Intraday Leverage Guidelines</a></li>
          </ol>
        </div>

      </div>
      
    </section>
  );
}

export default Hero;
