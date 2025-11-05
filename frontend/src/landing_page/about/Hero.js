import React from "react";

function Hero() {
  return (
    <div className="container">

      {/* Title */}
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-3 text-center fw-semibold">
          We are reshaping the trading experience in India. <br /> 
          Built with technology. Driven by transparency.
        </h1>
      </div>

      {/* Story Section */}
      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-lg-6 col-sm-12 p-5">
          <p>
            FinEdge was founded with a simple mission — to help traders and investors 
            in India access markets with fairness, clarity, and powerful technology.
          </p>
          <p>
            From day one, we focused on reducing unnecessary costs, simplifying tools, 
            and building a platform that works smoothly in real trading conditions.
          </p>
          <p>
            Today, FinEdge serves a rapidly growing community of traders and investors, 
            executing thousands of trades daily across multiple market segments — 
            backed by speed, reliability, and trust.
          </p>
        </div>

        <div className="col-lg-6 col-sm-12 p-5">
          <p>
            Alongside our platform, we invest heavily in education and awareness to 
            empower individuals to trade smarter — not riskier.
          </p>
          <p>
            <a href="#" style={{ textDecoration: "none", color: "#0066ff" }}>
              FinEdge Labs
            </a>{" "}
            — our research & product development initiative — works with emerging 
            fintech startups to bring advanced trading tools to Indian investors.
          </p>
          <p>
            And we’re constantly evolving. Explore our updates, learn our philosophy, 
            and discover how FinEdge is working to build a transparent, technology-first 
            financial ecosystem.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Hero;
