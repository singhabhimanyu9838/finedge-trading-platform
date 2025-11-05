import React from "react";

function Pricing() {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center">

        <div className="col-lg-4 col-sm-12 mb-4">
          <h1 className="mb-3 fs-2 fw-bold">Transparent & Fair Pricing</h1>
          <p className="mb-3" style={{ color: "#555" }}>
            FinEdge provides ultra-low brokerage with no hidden fees. 
            Simple, clear, and built for every trader — beginner or pro.
          </p>

          <a href="#" style={{ textDecoration: "none", color: "#0066ff", fontWeight: "600" }}>
            View full pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

  
        <div className="col-lg-2 d-none d-lg-block"></div>

        
        <div className="col-lg-6 col-sm-12">
          <div className="row text-center">

            <div className="col-6 p-4 border rounded-3">
              <h1 className="mb-2 fw-bold">
                <i className="fa-solid fa-indian-rupee-sign"></i> 0
              </h1>
              <p style={{ color: "#444" }}>
                Free equity delivery & <br /> zero commission mutual funds
              </p>
            </div>

            <div className="col-6 p-4 border rounded-3">
              <h1 className="mb-2 fw-bold">
                <i className="fa-solid fa-indian-rupee-sign"></i> 20
              </h1>
              <p style={{ color: "#444" }}>
                Flat ₹20 per executed order <br /> on Intraday & F&O trades
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
