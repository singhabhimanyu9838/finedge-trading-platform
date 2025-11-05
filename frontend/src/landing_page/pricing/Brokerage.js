import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">

        {/* Left Section */}
        <div className="col-lg-6 col-sm-12 p-4">
          <a href="#" style={{ textDecoration: "none", color: "#0066ff" }}>
            <h3 className="fs-5 fw-semibold mb-3">Brokerage Calculator</h3>
          </a>

          <ul className="text-muted" style={{ textAlign: "left", lineHeight: "2.2" }}>
            <li>Call & Trade orders may include additional handling charges.</li>
            <li>Contract notes and trade summaries will be emailed digitally.</li>
            <li>Printed statements can be requested; courier charges apply.</li>
            <li>For NRI (Non-PIS) accounts: 0.5% or ₹100 per executed equity order.</li>
            <li>For NRI (PIS) accounts: ₹20 per executed equity delivery order.</li>
            <li>
              If your account is in debit balance, a flat ₹40 per executed trade may apply.
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-sm-12 p-4">
          <a href="#" style={{ textDecoration: "none", color: "#0066ff" }}>
            <h3 className="fs-5 fw-semibold mb-3">List of All Charges</h3>
          </a>

          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            View complete brokerage, government taxes, exchange fees, clearing charges, 
            GST, STT, and stamp duty breakdown for every product category.
          </p>

          <button className="btn btn-primary px-4" style={{ marginTop: "10px" }}>
            View Charge Breakdown
          </button>
        </div>

      </div>
    </div>
  );
}

export default Brokerage;

