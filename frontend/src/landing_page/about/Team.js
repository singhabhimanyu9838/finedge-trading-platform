import React from "react";

function Team() {
  return (
    <div className="container">

      {/* Title */}
      <div className="row pt-5 border-top">
        <h1 className="text-center fw-bold">People Behind FinEdge</h1>
      </div>

      {/* Founder Section */}
      <div
        className="row p-5 text-muted align-items-center"
        style={{ lineHeight: "1.6", fontSize: "1.1em" }}
      >

        {/* Founder Image */}
        <div className="col-lg-6 col-sm-12 p-5 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="Founder"
            style={{
              borderRadius: "100%",
              width: "55%",
              objectFit: "cover",
            }}
          />
          <h3 className="mt-4 fw-semibold">Abhimanyu Singh</h3>
          <h6 className="text-muted">Founder & CEO, FinEdge</h6>
        </div>

        {/* Founder Description */}
        <div className="col-lg-6 col-sm-12 p-5">
          <p>
            Abhimanyu founded FinEdge with a vision to build a transparent, 
            modern, and technology-driven trading experience for everyone. 
            His focus has always been on simplifying market access and helping 
            traders make better, informed decisions.
          </p>

          <p>
            With a passion for finance and product design, he continues to 
            lead FinEdge in creating powerful trading tools while maintaining 
            a user-first approach.
          </p>

          <p className="mt-4">
            Connect:
            <a href="#" style={{ textDecoration: "none", color: "#0066ff" }}> LinkedIn</a> / 
            <a href="#" style={{ textDecoration: "none", color: "#0066ff" }}> Twitter</a> / 
            <a href="#" style={{ textDecoration: "none", color: "#0066ff" }}> Portfolio</a>
          </p>
        </div>

      </div>

    </div>
  );
}

export default Team;
