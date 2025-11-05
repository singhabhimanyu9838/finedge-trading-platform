import React from "react";

function Awards() {
  return (
    <div className="container my-5 py-4">
      <div className="row align-items-center">

        {/* Image Section */}
        <div className="col-lg-6 col-sm-12 p-4 text-center">
          <img
            src="/media/images/largestBroker.svg"
            alt="FinEdge Growth"
            style={{ width: "90%", maxWidth: "420px" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6 col-sm-12 p-4">
          <h1 className="fw-bold mb-4">
            One of the Fastest Growing Trading Platforms in India
          </h1>
          <p className="mb-4">
            FinEdge empowers thousands of traders and investors every day with 
            lightning-fast order execution, powerful tools, and transparent pricing.
            Trade and invest seamlessly across:
          </p>

          <div className="row mb-3">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>• Futures & Options</li>
                <li>• Commodity Markets</li>
                <li>• Currency Trading</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li>• Stocks & IPOs</li>
                <li>• Mutual Funds</li>
                <li>• Bonds & Government Securities</li>
              </ul>
            </div>
          </div>

          <img
            src="/media/images/pressLogos.png"
            alt="Featured In"
            style={{ width: "75%", opacity: 0.85 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
